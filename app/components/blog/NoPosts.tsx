import { Link } from "@remix-run/react";

export default function NoPosts() {
  return (
    <div className="text-center">
      <p>No Hay Posts...</p>
      <Link to="/" className="text-cyan-600 hover:opacity-60">
        Ver otras categorias
      </Link>
    </div>
  );
}
