// import { images } from "../assets/images";
import { data, Link } from "react-router-dom";
import { Range } from "react-range";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
// import { useHeart } from "../context/HeartClickedContext";
// import { useCompare } from "../context/CompareContext";
// import { HeartFilled, HeartOutlined } from "@ant-design/icons";
// import { data } from "../data/data";
import CatalogCard from "./FeaturedProducts";

// const { cartt, compare, arrow } = images;

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

const ProductCatalog = ({ item }: { item: { id: string } }) => {
  const [values, setValues] = useState<number[]>([3000, 52500]);
  // const { likedItems, toggleHeart } = useHeart();
  // const { comparedItems, toggleCompare } = useCompare();
  // State for each checkbox group
  const [brandChecks, setBrandChecks] = useState({
    airRoxy: false,
    Awenta: false,
    Blauberg: false,
    Domovent: false,
    Dospel: false,
  });

  const [diameterChecks, setDiameterChecks] = useState({
    d100: false,
    d118: false,
    d120: false,
    d125: false,
    d147: false,
  });

  const [diskDiameterChecks, setDiskDiameterChecks] = useState({
    dd100: false,
    dd125: false,
  });

  const [materialChecks, setMaterialChecks] = useState({
    plastic: false,
    metal: false,
    steel: false,
  });

  const [airFlowChecks, setAirFlowChecks] = useState({
    af100: false,
    af102: false,
    af105: false,
  });

  // Handlers for each checkbox group
  const handleBrandCheck = (brand: keyof typeof brandChecks) => {
    setBrandChecks((prev) => ({
      ...prev,
      [brand]: !prev[brand],
    }));
  };

  const handleDiameterCheck = (diameter: keyof typeof diameterChecks) => {
    setDiameterChecks((prev) => ({
      ...prev,
      [diameter]: !prev[diameter],
    }));
  };

  const handleDiskDiameterCheck = (
    diameter: keyof typeof diskDiameterChecks
  ) => {
    setDiskDiameterChecks((prev) => ({
      ...prev,
      [diameter]: !prev[diameter],
    }));
  };

  const handleMaterialCheck = (material: keyof typeof materialChecks) => {
    setMaterialChecks((prev) => ({
      ...prev,
      [material]: !prev[material],
    }));
  };

  const handleAirFlowCheck = (flow: keyof typeof airFlowChecks) => {
    setAirFlowChecks((prev) => ({
      ...prev,
      [flow]: !prev[flow],
    }));
  };

  return (
    <div className="max-w-[1460px] mx-auto my-5">
      <div className="text-[13px] !font-medium mb-6 flex items-center 2xl:mx-0 mx-3 gap-3">
        <Link to={"/"}>Стройоптторг</Link> /{" "}
        <Link to={""}>Электроинструмент</Link>
      </div>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:block hidden lg:w-[40%] w-full p-4 pl-0 rounded">
          <div className="font-semibold">
            <h3 className="text-[18px] font-medium">Цена, ₽</h3>
            <div className="flex justify-between">
              <input
                className="border-[#DFE0E2] border px-3 py-3 outline-none rounded-md w-[45%]"
                type="number"
                placeholder={`${values[0]}`}
              />
              <input
                className="border-[#DFE0E2] border px-3 py-3 outline-none rounded-md w-[45%]"
                type="number"
                placeholder={`${values[1]}`}
              />
            </div>
            <div className="w-full max-w-md mx-auto py-10">
              <Range
                step={1}
                min={0}
                max={100000}
                values={values}
                onChange={(values) => setValues(values)}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    className="h-2 bg-gray-300 rounded relative"
                    style={{
                      ...props.style,
                      height: 2,
                      background: `linear-gradient(to right, 
                      #d1d5db ${values[0] / (100000 / 100)}%, 
                      #186FD4 ${values[0] / (100000 / 100)}%, 
                      #186FD4 ${values[1] / (100000 / 100)}%, 
                      #d1d5db ${values[1] / (100000 / 100)}%)`,
                    }}
                  >
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div
                    {...props}
                    className="w-5 h-5 bg-white border-3 border-[#186FD4] rounded-full shadow-md focus:outline-none"
                  />
                )}
              />
              <div className="mt-4 text-center">
                Qiymat: {values[0]} - {values[1]}
              </div>
            </div>

            {/* Brand Checkboxes */}
            <h3 className="text-[20px] !font-semibold">Бренд</h3>
            <div className="flex flex-col gap-4 mt-4">
              <CheckboxItem
                label="airRoxy"
                checked={brandChecks.airRoxy}
                onChange={() => handleBrandCheck("airRoxy")}
              />
              <CheckboxItem
                label="Awenta"
                checked={brandChecks.Awenta}
                onChange={() => handleBrandCheck("Awenta")}
              />
              <CheckboxItem
                label="Blauberg"
                checked={brandChecks.Blauberg}
                onChange={() => handleBrandCheck("Blauberg")}
              />
              <CheckboxItem
                label="Domovent"
                checked={brandChecks.Domovent}
                onChange={() => handleBrandCheck("Domovent")}
              />
              <CheckboxItem
                label="Dospel"
                checked={brandChecks.Dospel}
                onChange={() => handleBrandCheck("Dospel")}
              />
              <h2 className="text-[16px] !font-semibold text-[#117FE3] underline">
                Показать все
              </h2>
            </div>

            {/* Diameter Checkboxes */}
            <h3 className="text-[20px] !mt-8 !font-semibold">Диаметр</h3>
            <div className="flex flex-col gap-4 mt-4">
              <CheckboxItem
                label="100"
                checked={diameterChecks.d100}
                onChange={() => handleDiameterCheck("d100")}
              />
              <CheckboxItem
                label="118"
                checked={diameterChecks.d118}
                onChange={() => handleDiameterCheck("d118")}
              />
              <CheckboxItem
                label="120"
                checked={diameterChecks.d120}
                onChange={() => handleDiameterCheck("d120")}
              />
              <CheckboxItem
                label="125"
                checked={diameterChecks.d125}
                onChange={() => handleDiameterCheck("d125")}
              />
              <CheckboxItem
                label="147"
                checked={diameterChecks.d147}
                onChange={() => handleDiameterCheck("d147")}
              />
              <h2 className="text-[16px] !font-semibold text-[#117FE3] underline">
                Показать все
              </h2>
            </div>

            {/* Disk Diameter Checkboxes */}
            <h3 className="text-[20px] !mt-8 !font-semibold">Диаметр диска</h3>
            <div className="flex flex-col gap-4 mt-4">
              <CheckboxItem
                label="100"
                checked={diskDiameterChecks.dd100}
                onChange={() => handleDiskDiameterCheck("dd100")}
              />
              <CheckboxItem
                label="125"
                checked={diskDiameterChecks.dd125}
                onChange={() => handleDiskDiameterCheck("dd125")}
              />
              <h2 className="text-[16px] !font-semibold text-[#117FE3] underline">
                Показать все
              </h2>
            </div>

            {/* Material Checkboxes */}
            <h3 className="text-[20px] !mt-8 !font-semibold">Материал</h3>
            <div className="flex flex-col gap-4 mt-4">
              <CheckboxItem
                label="Пластик"
                checked={materialChecks.plastic}
                onChange={() => handleMaterialCheck("plastic")}
              />
              <h2 className="text-[16px] !font-semibold text-[#117FE3] underline">
                Показать все
              </h2>
            </div>

            {/* Material (duplicate section) Checkboxes */}
            <h3 className="text-[20px] !mt-8 !font-semibold">Материал</h3>
            <div className="flex flex-col gap-4 mt-4">
              <CheckboxItem
                label="Металл"
                checked={materialChecks.metal}
                onChange={() => handleMaterialCheck("metal")}
              />
              <CheckboxItem
                label="Пластик"
                checked={materialChecks.plastic}
                onChange={() => handleMaterialCheck("plastic")}
              />
              <CheckboxItem
                label="Сталь"
                checked={materialChecks.steel}
                onChange={() => handleMaterialCheck("steel")}
              />
              <h2 className="text-[16px] !font-semibold text-[#117FE3] underline">
                Показать все
              </h2>
            </div>

            {/* Air Flow Checkboxes */}
            <h3 className="text-[20px] !mt-8 !font-semibold">Расход воздуха</h3>
            <div className="flex flex-col gap-4 mt-4">
              <CheckboxItem
                label="100"
                checked={airFlowChecks.af100}
                onChange={() => handleAirFlowCheck("af100")}
              />
              <CheckboxItem
                label="102"
                checked={airFlowChecks.af102}
                onChange={() => handleAirFlowCheck("af102")}
              />
              <CheckboxItem
                label="105"
                checked={airFlowChecks.af105}
                onChange={() => handleAirFlowCheck("af105")}
              />
            </div>
          </div>
        </div>

        <div className="md:hidden mx-3 border border-[#0000001d] py-3 rounded-md max-w-full flex items-center gap-3 justify-center">
          <HiMenu size={30} />
          Показать фильтры
        </div>
        <div className="flex flex-col">
          <CatalogCard />
        </div>
      </div>
    </div>
  );
};

export default ProductCatalog;
