import React from 'react';
import { UseFormRegister } from 'react-hook-form/dist/types/form';

type TInputFieldProps = {
    label: string,
    register: UseFormRegister<any>,
    required?: boolean,
    placeholder: string,
    onChange?: () => void,
    value?: any
}

export const InputField: React.FC<TInputFieldProps> = ({ label, register, required, placeholder, onChange, value }) => (
    <>
        <label>{label}</label>
        <input {...register(label, { required })} placeholder={placeholder} onChange={onChange} value={value} />
    </>
);