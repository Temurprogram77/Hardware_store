import { useEffect, useState, type FC } from "react"
import { Select } from "../link/antLink"
import axios from "axios"

interface RegionsProps {
    id: number
    name: string
}

interface RegionSeletProps {
    value: string
    onChange: (value: string) => void
}

const RegionSelect: FC<RegionSeletProps> = ({ value, onChange }) => {
    const [regions, setRegions] = useState<RegionsProps[]>([])

    useEffect(() => {
        const fetchRegions = async () => {
            try {
                const res = await axios.get("http://144.91.98.115:8084/region/getAll")
                setRegions(res.data)
            } catch (error) {
                console.error("Regionlarni olishda xato:", error)
            }
        }
        fetchRegions()
    }, [])

    return (
        <Select
            defaultValue={"Ваш регион"}
            placeholder=""
            className="w-full !h-[50px] !text-gray-800 placeholder:!text-gray-600 !text-[17px] md:!text-[16px] !font-mono"
            value={value}
            onChange={onChange}
        >
            {regions.map((region) => (
                <Select.Option key={region.id} value={region.id}>
                    {region.name}
                </Select.Option>
            ))}
        </Select>
    )
}

export default RegionSelect
