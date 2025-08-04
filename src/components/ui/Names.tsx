import { Link } from "react-router-dom";

interface Props {
  link: string;
  name: string;
  link2?: string;
  name2?: string;
}

const Names: React.FC<Props> = ({ link, name, link2, name2 }) => {
  return (
    <ul className="flex text-[15px] gap-4 flex-wrap">
      <li>
        <Link to="/">Стройоптторг</Link>
      </li>
      <span>/</span>
      <li className="text-gray-500">
        <Link to={link}>{name}</Link>
      </li>
      {link2 && name2 && (
        <>
          <span>/</span>
          <li className="text-gray-500">
            <Link to={link2}>{name2}</Link>
          </li>
        </>
      )}
    </ul>
  );
};

export default Names;
