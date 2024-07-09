import { Link } from "@remix-run/react";

export default function CategoryItem(props) {
  const { category } = props;

  return (
    <Link to={`/${category.slug}`}>
      <div className="bg-gray-600"></div>
      <h2 className="text-white text-center py-2 font-bold">
        {category.title}
      </h2>
    </Link>
  );
}
