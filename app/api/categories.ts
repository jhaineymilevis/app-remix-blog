import { fileURLToPath } from "url";
import fs from "fs/promises";
import { dirname, join } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const categoriesPath = join(__dirname, "..", "db\\categories");

export async function createCategory(data) {
  try {
    const postsPath = join(__dirname, "..", "db\\posts\\" + `${data.slug}`);

    const md = `---
title: ${data.title}
slug: ${data.slug}
---`;

    const pathSavefile = join(categoriesPath, `${data.slug}.md`);
    // Write content to the file, creating it if it doesn't exist
    await fs.writeFile(pathSavefile, md);
    await fs.mkdir(postsPath);
    console.log(`File written successfully to ${pathSavefile}`);
  } catch (err) {
    console.error(`Error writing to file: ${(err as Error).message}`);
  }
}

export async function getCategories() {
  const files = await fs.readdir(categoriesPath);
  const categories = await Promise.all(
    files.map(async (file) => {
      const filePath = join(categoriesPath, file);
      const content = await fs.readFile(filePath, "utf-8");
      const [, title, slug] = content.match(/title: (.*)\nslug: (.*)/);
      return { title, slug };
    })
  );
  return categories;
}
