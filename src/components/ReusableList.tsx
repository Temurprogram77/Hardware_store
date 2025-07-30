type Props = {
  items: string[];
};

const ReusableList = ({ items }: Props) => {
  return (
    <ul className="relative left-8 flex gap-4 md:gap-1 flex-col w-[300px] md:w-full">
      {items.map((item, index) => (
        <li
          key={index}
          className="list-disc !hover:text-[#1e1e1e] marker:text-red-500 md:text-[14px] md:w-[1150px] leading-7 font-sans text-[17px] w-[320px]">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ReusableList;