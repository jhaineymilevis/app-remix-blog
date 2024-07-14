import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/api/posts";
import NoPosts from "~/components/blog/NoPosts";
import PostItem from "~/components/blog/PostItem";
import { BasicLayout } from "~/layaouts/BasicLayout";

export default function route() {
  const { category, posts } = useLoaderData();

  return (
    <BasicLayout>
      <h2 className="text-center p-10 text-3xl">{category.toUpperCase()}</h2>
      {posts.length === 0 && <NoPosts />}

      <div className="grid grid-cols-2 gap-2 mt-10">
        {posts.map((post, index) => (
          <PostItem key={index} post={post} category={category}></PostItem>
        ))}
      </div>
    </BasicLayout>
  );
}

export async function loader(data) {
  const { params } = data;

  const posts = await getPosts(params.category);

  return { category: params.category, posts: posts };
}
