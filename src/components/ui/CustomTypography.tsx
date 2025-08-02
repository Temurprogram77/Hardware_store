import { Typography } from "antd"
import type { TitleProps } from "antd/es/typography/Title"
import type React from "react"

const CustomTypography: React.FC<TitleProps> = (props) => {
    const { level = 1, ...restPors } = props
    return (
        <Typography.Title level={level} {...restPors} />
    )
}

export default CustomTypography