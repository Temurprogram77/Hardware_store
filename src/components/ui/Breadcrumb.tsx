import { Breadcrumb } from "antd";
import type React from "react";
import type { BreadcrumbProps } from "antd";

interface CustomBreadcrumProps {
    items: BreadcrumbProps['items'];
}

const CustomBreadcrum: React.FC<CustomBreadcrumProps> = ({ items }) => {
    return (
        <Breadcrumb items={items} />
    );
};

export default CustomBreadcrum;