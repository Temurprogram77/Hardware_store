import {
    forwardRef,
    type InputHTMLAttributes,
    type ChangeEvent,
} from 'react';

export const phoneRegex = /^\+998 \(\d{2}\) \d{3}-\d{2}-\d{2}$/;

const formatPhoneNumber = (value: string): string => {
    const digits = value.replace(/\D/g, '');

    if (!digits.startsWith('998')) {
        return '+998 ';
    }

    const numberPart = digits.slice(3);
    let result = '+998 ';

    if (numberPart.length >= 1) result += `(${numberPart.slice(0, 2)}`;
    if (numberPart.length >= 3) result += `) ${numberPart.slice(2, 5)}`;
    if (numberPart.length >= 6) result += `-${numberPart.slice(5, 7)}`;
    if (numberPart.length >= 8) result += `-${numberPart.slice(7, 9)}`;

    return result;
};

interface CustomPhoneInputProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    className?: string;
    placeholder?: string;
    value?: string;
    onChange: (value: string) => void;
}

const CustomPhoneInput = forwardRef<HTMLInputElement, CustomPhoneInputProps>(
    ({ className, placeholder = '+998 (__) ___-__-__', value = '', onChange, ...rest }, ref) => {
        const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
            const formatted = formatPhoneNumber(e.target.value);
            onChange(formatted);
        };

        return (
            <input
                {...rest}
                ref={ref}
                type="tel"
                className={className}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                inputMode="tel"
                maxLength={19}
            />
        );
    }
);

CustomPhoneInput.displayName = 'CustomPhoneInput';
export default CustomPhoneInput;
