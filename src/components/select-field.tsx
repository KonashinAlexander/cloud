import React from 'react';
import { UseFormRegister } from 'react-hook-form/dist/types/form';

type TSelectFieldProps = {
    label: string,
    register: UseFormRegister<any>,
    required: boolean
}

export const SelectField: React.FC<TSelectFieldProps> = ({ label, register, required }) => (
    <>
        <label>{label}</label>
        <select {...register(label, { required })}>
            <option value="">--Укажите Ваш пол--</option>
            <option value="man">man</option>
            <option value="woman">woman</option>
        </select>
    </>
);