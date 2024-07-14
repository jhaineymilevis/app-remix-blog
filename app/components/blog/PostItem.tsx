import { Link } from "@remix-run/react";
import Avatar from "../shared/Avatar";

export default function PostItem(props) {
  const { post, category } = props;

  return (
    <Link to={`${category}/${post.slug}`}>
      <div className="relative py-2 px-2 flex items-center rounded-md bg-gray hover:bg-gray-600 hover:text-white">
        <div className="w-[20%] flex justify-center">
          <Avatar src={`/assets/${category}.png`}></Avatar>
        </div>
        <div className="w-[80%]">
          <h2 className="font-bold">{post.title}</h2>
          <p className="text-sm  text-gray-500">{post.description}</p>
        </div>
      </div>
    </Link>
  );
}
