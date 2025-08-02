import React, { forwardRef, type InputHTMLAttributes } from 'react';

// Yangilangan telefon raqami regex'i
export const phoneRegex = /^\+998 \(\d{2}\) \d{3}-\d{2}-\d{2}$/;

const formatPhoneNumber = (value: string): string => {
    if (!value) return '';
    const digits = value.replace(/\D/g, '');
    const uzbekistanCode = '998';

    if (digits.length < 3) {
        return `+${digits}`;
    }

    if (digits.length === 3 && digits.startsWith('998')) {
        return `+${digits}`;
    }

    const numberPart = digits.startsWith(uzbekistanCode) ? digits.substring(3) : digits;

    let formatted = `+998 `;
    if (numberPart.length > 0) formatted += `(${numberPart.substring(0, 2)}`;
    if (numberPart.length >= 3) formatted += `) ${numberPart.substring(2, 5)}`;
    if (numberPart.length >= 6) formatted += `-${numberPart.substring(5, 7)}`;
    if (numberPart.length >= 8) formatted += `-${numberPart.substring(7, 9)}`;

    return formatted;
};

interface CustomPhoneInputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
}

const CustomPhoneInput = forwardRef<HTMLInputElement, CustomPhoneInputProps>(
    ({ className, placeholder, value, onChange, ...rest }, ref) => {
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const formattedValue = formatPhoneNumber(e.target.value);
            onChange(formattedValue);
        };

        return (
            <input
                {...rest}
                ref={ref}
                type="tel" // tel type mobil qurilmalarda raqamli klaviaturani ochadi
                onChange={handleChange}
                value={value}
                placeholder={placeholder}
                className={className}
            />
        );
    }
);

export default CustomPhoneInput;