import { Link } from "@remix-run/react";
export function Menu() {
  const addPost = () => {
    console.log("crear post");
  };
  const addCategoria = () => {
    console.log("crear categoria");
  };
  return (
    <>
      <div className="bg-stone-800 flex items-center justify-between py-50 px-10">
        <Link to="/">
          <h1 className="text-white text-2xl"> DevBlog </h1>
        </Link>
        <div>
          <button onClick={addPost}>Crear post</button>
          <button onClick={addCategoria}>Crear categoria</button>
        </div>
      </div>
    </>
  );
}
