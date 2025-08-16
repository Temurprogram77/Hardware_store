export interface ContentItem {
    label: string;
    icon: React.ReactNode;
};

export interface MenuItem {
    label: string;
    icon: React.ReactNode;
    content: ContentItem[];
};
