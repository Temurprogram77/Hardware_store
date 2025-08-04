import type React from "react"
import { FiUserPlus } from "react-icons/fi"

type Props = {
    className: string
}

const UserIcon: React.FC<Props> = ({ className }) => {
    return <FiUserPlus className={className} />
}

export default UserIcon