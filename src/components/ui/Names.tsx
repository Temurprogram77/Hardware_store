import { Link } from "react-router-dom"
interface Props{
        link:string,
        name:string
    }
const Names:React.FC<Props>= ({link,name}) => {
    
  return (
    <ul className="flex text-[15px] gap-4 flex-wrap">
        <li>
          <Link to={'/'}>Стройоптторг</Link>
        </li>
        /
        <li className="text-gray-500">
          <Link to={link}>{name}</Link>
        </li>
      </ul>
  )
}

export default Names