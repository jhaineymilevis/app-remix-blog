import { Form, redirect, useParams } from "@remix-run/react";
import { createPost } from "~/api/posts";
import { ButtonPrimary } from "~/components/shared/ButtonPrimary";
import Input from "~/components/shared/Input";
import TextArea from "~/components/shared/TextArea";

export default function AddPost() {
  const { category } = useParams();
  return (
    <Form method="POST" action="/add-post-form" className="flex flex-col">
      <Input name="title" placeholder="Titulo" className="my-2"></Input>
      <Input
        name="description"
        placeholder="Description"
        className="my-2"
      ></Input>
      <Input name="slug" placeholder="Slug" className="my-2"></Input>
      <Input name="category" value={category} className="my-2"></Input>
      <TextArea
        name="content"
        placeholder="Contenido"
        className="my-2"
        rows="6"
      />
      <ButtonPrimary type="submit" className="mt-3">
        Crear post
      </ButtonPrimary>
    </Form>
  );
}

export async function action(props) {
  const { request } = props;
  const formData = await request.formData();

  const category = formData.get("category");
  const data = {
    title: formData.get("title"),
    slug: formData.get("slug"),
    description: formData.get("description"),
    content: formData.get("content"),
  };

  createPost(data, category);
  return redirect("/");
}
