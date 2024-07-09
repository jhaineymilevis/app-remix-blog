import { useLoaderData } from "@remix-run/react";
import { BasicLayout } from "~/layaouts/BasicLayout";

export default function route() {
  const { category } = useLoaderData();
  console.log("category", category);

  return (
    <BasicLayout>
      <h2>hola estamos en {category}</h2>
    </BasicLayout>
  );
}

export async function loader(data) {
  const { params } = data;

  return { category: params.category };
}
