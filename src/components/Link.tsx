import React from 'react'
import { Link } from "react-router-dom"
const Links = () => {
  return (
    <ul className="flex text-[15px] gap-4 flex-wrap">
        <li>
          <Link to={'/'}>Стройоптторг</Link>
        </li>
        /
        <li className="text-gray-500">
          <Link to={'/deals'}>Акции</Link>
        </li>
      </ul>
  )
}

export default Links