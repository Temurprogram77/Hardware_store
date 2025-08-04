import React from 'react'
import CatalogCard from '../components/CatalogCard';

type CheckboxItemProps = {
  label: string;
  checked: boolean;
  onChange: () => void;
};

const CheckboxItem: React.FC<CheckboxItemProps> = ({
  label,
  checked,
  onChange,
}) => (
  <label className="cursor-pointer inline-flex items-center gap-2 select-none">
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="sr-only"
    />
    <div
      className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all duration-200 ${
        checked ? "bg-blue-600 border-blue-600" : "bg-white border-gray-400"
      }`}
    >
      {checked && (
        <svg
          className="w-3 h-3 text-white"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 5.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </div>
    <span className="text-[13px] !font-medium">{label}</span>
  </label>
);

const FeaturedProducts = () => {
  return (
    <div>
      <CatalogCard/>
    </div>
  )
}

export default FeaturedProducts