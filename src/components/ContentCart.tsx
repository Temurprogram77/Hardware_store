type ContentCardProps = {
    icon: React.ReactNode;
    label: string;
    onClick?: () => void;
};

const ContentCard = ({ icon, label, onClick }: ContentCardProps) => {
    return (
        <div
            onClick={onClick}
            className="w-[170px] h-27 border border-gray-300 rounded-md hover:bg-blue-600 text-gray-500 hover:text-white transition-colors flex items-center justify-center gap-y-2.5 cursor-pointer flex-col"
        >
            <span className="text-5xl">{icon}</span>
            <span>{label}</span>
        </div>
    );
};

export default ContentCard;
