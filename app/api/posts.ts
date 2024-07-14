import fs from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import fm from "front-matter";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export async function createPost(post: unknown, category: string) {
  try {
    const postPath = join(__dirname, "..", `db/posts/${category}`);
    const md = `---
title: ${post.title}
description: ${post.description}
slug: ${post.slug}
miniature: ${category}.png
---
      
${post.content}
`;

    const pathSavefile = join(postPath, `${post.slug}.md`);
    await fs.writeFile(pathSavefile, md);
  } catch (error) {
    console.log(error);
  }
}

export async function getPosts(category: string) {
  const postPath = join(__dirname, "..", `db/posts/${category}`);

  const files = await fs.readdir(postPath);

  return Promise.all(
    files.map(async (file) => {
      const content = await fs.readFile(join(postPath, file), "utf-8");

      const { attributes } = fm(content);
      return attributes;
    })
  );
}
