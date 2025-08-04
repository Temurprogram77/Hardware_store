import type React from "react"
import { MdOutlineChevronRight } from "react-icons/md"

type Props = {
    className?: string
    size?: number
}

const RightIcon: React.FC<Props> = ({ className, size }) => {
    return <MdOutlineChevronRight className={className} size={size} />
}

export default RightIcon