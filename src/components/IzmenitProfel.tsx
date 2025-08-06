import React, { useEffect, useState } from "react"

const IzmenetProfel = () => {
    const [formData, setFormData] = useState<null | {
        email: string,
        phone: string,
        fullName: string,
        region: string
    }>(null)

    useEffect(() => {
        const data = localStorage.getItem("accounts")
        if (data) {
            const parsed = JSON.parse(data)
            setFormData(parsed)
        }
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        if (!formData) return
        setFormData(prev => ({ ...prev!, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!formData) return
        localStorage.setItem("accounts", JSON.stringify(formData))
        alert(`Ma'lumotlar saqlandi! ${formData.fullName}`)
    }

    if (!formData) return <div className="flex items-center justify-center text-2xl">Ma'lumotlar yuklanmoqda...</div>

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2.5 w-xs">
        </form>
    )
}

export default IzmenetProfel