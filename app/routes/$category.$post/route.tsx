import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/api/posts";
import { BasicLayout } from "~/layaouts/BasicLayout";

export default function route() {
  const { attributes, html } = useLoaderData();

  return (
    <BasicLayout>
      <h2 className="text-center p-10 text-3xl">{attributes.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </BasicLayout>
  );
}
export async function loader(data) {
  const { params } = data;

  const post = await getPost(params.category, params.post);

  return post;
}
