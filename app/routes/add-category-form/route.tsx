import { Form, redirect } from "@remix-run/react";
import { ButtonPrimary } from "~/components/shared/ButtonPrimary";
import Input from "~/components/shared/Input";
import { createCategory } from "~/api";
export default function AddCategoryForm() {
  return (
    <Form method="POST" action="/add-category-form" className="flex flex-col">
      <Input name="title" placeholder="Titulo" className="my-2"></Input>
      <Input name="slug" placeholder="Slug"></Input>
      <ButtonPrimary type="submit" className="mt-3">
        Crear categoria
      </ButtonPrimary>
    </Form>
  );
}

export async function action(props) {
  const { request } = props;

  const formData = await request.formData();

  const data = {
    title: formData.get("title"),
    slug: formData.get("slug"),
  };

  await createCategory(data);
  return redirect("/");
}
