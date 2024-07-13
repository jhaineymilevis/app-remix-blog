import { Link, useParams } from "@remix-run/react";
import { ButtonPrimary } from "./shared/ButtonPrimary";
import Modal from "./shared/Modal";
import { useState } from "react";
import AddCategoryForm from "~/routes/add-category-form/route";
import AddPost from "~/routes/add-post-form/route";

export function Menu() {
  const { category } = useParams();
  const [show, setShow] = useState(false);
  const [content, setContent] = useState(null);

  const onOpenCloseModal = () => setShow((prevState) => !prevState);
  const addPost = () => {
    console.log("crear post");
    onOpenCloseModal();
    setContent(<AddPost />);
  };
  const addCategoria = () => {
    console.log("crear categoria");
    onOpenCloseModal();
    setContent(<AddCategoryForm />);
  };
  return (
    <>
      <div className="bg-stone-800 flex items-center justify-between py-50 px-10">
        <div />
        <Link to="/">
          <h1 className="text-white text-2xl"> DevBlog </h1>
        </Link>

        <div>
          {category ? (
            <ButtonPrimary className="bg-red-500" onClick={addPost}>
              Crear post
            </ButtonPrimary>
          ) : (
            <ButtonPrimary onClick={addCategoria}>
              Crear categoria
            </ButtonPrimary>
          )}
        </div>
      </div>

      <Modal show={show} close={onOpenCloseModal} children={content}></Modal>
    </>
  );
}
