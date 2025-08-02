import React, { useRef, useState, forwardRef, useImperativeHandle } from 'react';
import { Typography } from 'antd';

export const phoneRegex = /^\+998 \(\d{2}\) \d{3}-\d{2}-\d{2}$/;

const formatPhoneNumber = (value: string): string => {
    if (!value) return '';
    let digits = value.replace(/\D/g, '');

    if (!digits.startsWith('998')) {
        digits = '998' + digits;
    }

    const numberPart = digits.substring(3).slice(0, 9);

    let formatted = '+998 ';
    if (numberPart.length > 0) formatted += '(' + numberPart.substring(0, 2);
    if (numberPart.length >= 3) formatted += ') ' + numberPart.substring(2, 5);
    if (numberPart.length >= 6) formatted += '-' + numberPart.substring(5, 7);
    if (numberPart.length >= 8) formatted += '-' + numberPart.substring(7, 9);

    return formatted;
};

interface CustomPhoneInputProps {
    className?: string;
    placeholder?: string;
}

export interface CustomPhoneInputRef {
    getValue: () => string;
    clearValue: () => void;
}

const CustomPhoneInput = forwardRef<CustomPhoneInputRef, CustomPhoneInputProps>(
    ({ className, placeholder }, ref) => {
        const inputRef = useRef<HTMLInputElement>(null);
        const [error, setError] = useState('');

        useImperativeHandle(ref, () => ({
            getValue: () => inputRef.current?.value || '',
            clearValue: () => {
                if (inputRef.current) {
                    inputRef.current.value = '';
                }
                setError('');
            }
        }));

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const formattedValue = formatPhoneNumber(e.target.value);

            const cursorPosition = e.target.selectionStart;

            if (inputRef.current) {
                inputRef.current.value = formattedValue;

                if (cursorPosition !== null) {
                    const newCursorPosition = Math.min(formattedValue.length, cursorPosition + (formattedValue.length - e.target.value.length));
                    inputRef.current.setSelectionRange(newCursorPosition, newCursorPosition);
                }
            }

            if (!formattedValue) {
                setError("Telefon raqami bo'sh bo'lishi mumkin emas!");
            } else if (!phoneRegex.test(formattedValue)) {
                setError("Raqamni to'liq kiriting");
            } else {
                setError('');
            }
        };

        return (
            <div className="flex flex-col">
                <input
                    ref={inputRef}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className={className}
                />
                {error && <Typography.Text type="danger">{error}</Typography.Text>}
            </div>
        );
    }
);

export default CustomPhoneInput;