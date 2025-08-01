import React, { useState } from 'react';
import 'antd/dist/reset.css';
import { Input, Typography } from 'antd';

const phoneRegex = /^\+998 \(\d{2}\) \d{3}-\d{2}-\d{2}$/;

const formatPhoneNumber = (value: string): string => {
    if (!value) return '';
    let digits = value.replace(/\D/g, '');

    if (!digits.startsWith('998')) {
        digits = '998' + digits;
    }

    const numberPart = digits.substring(3);
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