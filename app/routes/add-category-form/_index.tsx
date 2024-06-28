import { Form } from "@remix-run/react";
import { ButtonPrimary } from "~/components/shared/ButtonPrimary";

export default function AddCategoryForm() {
  return (
    <Form method="POST" action="" className="flex flex-col">
      <input name="title" placeholder="Titulo" className="my-2"></input>
      <input name="slug" placeholder="Slug"></input>
      <ButtonPrimary type="submit" className="mt-3">
        Crear categoria
      </ButtonPrimary>
    </Form>
  );
}
