import React, { useState } from 'react';
import 'antd/dist/reset.css';
import { Input, Typography } from 'antd';

// Regex for Uzbek phone numbers: +998 (XX) XXX-XX-XX
const phoneRegex = /^\+998 \(\d{2}\) \d{3}-\d{2}-\d{2}$/;

// This is a utility function, not a React component
const formatPhoneNumber = (value: string): string => {
    if (!value) return ''; // If the value is empty, return an empty string
    let digits = value.replace(/\D/g, ''); // Remove all non-digit characters

    // Ensure the number starts with '998' or prepend it if not
    // This logic might need refinement if you want to allow users to start typing without '998'
    // but for strict formatting, it's fine.
    if (!digits.startsWith('998')) {
        digits = '998' + digits;
    }

    // Get digits after '998' prefix
    const numberPart = digits.substring(3);
    // Limit to 9 digits for (XX) XXX-XX-XX
    const limitedNumber = numberPart.slice(0, 9);

    let formatted = '+998 ';
    if (limitedNumber.length > 0) {
        formatted += '(' + limitedNumber.substring(0, 2);
    }
    if (limitedNumber.length >= 3) {
        formatted += ') ' + limitedNumber.substring(2, 5);
    }
    if (limitedNumber.length >= 6) {
        formatted += '-' + limitedNumber.substring(5, 7);
    }
    if (limitedNumber.length >= 8) {
        formatted += '-' + limitedNumber.substring(7, 9);
    }
    return formatted;
};

interface CustomPhoneInputProps {
    className?: string;
    placeholder?: string;
}

const CustomPhoneInput: React.FC<CustomPhoneInputProps> = ({ className, placeholder }) => {
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formattedValue = formatPhoneNumber(e.target.value);
        setPhone(formattedValue);

        if (!formattedValue) {
            setError("Telefon raqami bo'sh bo'lishi mumkin emas!");
        } else if (!phoneRegex.test(formattedValue)) {
            setError("Raqamni to'liq kiriting: +998 (XX) XXX-XX-XX");
        } else {
            setError('');
        }
    };

    return (
        <div className='flex flex-col'>
            <Input
                value={phone}
                onChange={handleChange}
                placeholder={placeholder}
                status={error ? 'error' : ''}
                className={className}
            />
            {
                error && <Typography.Text type="danger">{error}</Typography.Text>
            }
        </div>
    );
};

export default CustomPhoneInput;