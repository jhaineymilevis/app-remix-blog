import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getCategories } from "~/api";
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
    <BasicLayout className="text-gray-600 hola adios">
      <div className="font-sans p-4">
        <h1 className="text-3xl text-orange-600">Welcome to Remix</h1>
      </div>
    </BasicLayout>
  );
}
export function loader() {
  return getCategories();
}
