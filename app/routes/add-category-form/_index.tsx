import { Form } from "@remix-run/react";
import { ButtonPrimary } from "~/components/shared/ButtonPrimary";
import Input from "~/components/shared/Input";

export default function AddCategoryForm() {
  return (
    <Form method="POST" action="" className="flex flex-col">
      <Input name="title" placeholder="Titulo" className="my-2"></Input>
      <Input name="slug" placeholder="Slug"></Input>
      <ButtonPrimary type="submit" className="mt-3">
        Crear categoria
      </ButtonPrimary>
    </Form>
  );
}
