import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getCategories } from "~/api";
import CategoryItem from "~/components/blog/CategoryItem";
import { BasicLayout } from "~/layaouts/BasicLayout";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const categories = useLoaderData();
  console.log(categories);
  return (
    <BasicLayout>
      <div className="grid grid-cols-4 gap-4 mt-10">
        {categories.map((category, index) => (
          <CategoryItem key={index} category={category}></CategoryItem>
        ))}
      </div>
    </BasicLayout>
  );
}
export function loader() {
  return getCategories();
}
