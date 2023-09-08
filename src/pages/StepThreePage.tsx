import styles from './pages.module.scss'
import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaStepThree } from '../utils/validation'
import { InputField } from '../components/input-field'
import { apdateAction } from '../store/formSlice'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import Modal from '../components/modal';
import { useSendFormMutation } from '../store/cloud'
import { useAppDispatch, useAppSelector } from '../store/hooks'


const StepThreePage: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const formData = useAppSelector(state => state.formStore)
    const [showModal, setShowModal] = useState(false)
    const [sendForm, { data }] = useSendFormMutation()

    const {
        register,
        handleSubmit,
        formState: {
            errors,
            isValid
        } } = useForm({
            mode: 'onBlur',
            resolver: yupResolver(schemaStepThree),
            defaultValues: {
                About: formData.About,
            }
        });

    const submitThirdForm = async (data: object) => {
        dispatch(apdateAction(data))
        await sendForm(formData)
        setShowModal(true)
    }

    return (
        <div className={styles.container}>

            <form className={styles.form} onSubmit={handleSubmit(submitThirdForm)}>
                <div className={styles.input_box}>
                    <InputField
                        label={'About'}
                        register={register}
                        required
                        placeholder='About'
                        onChange={undefined}
                        value={undefined}
                        id='a'


                    />
                    <p>{errors.About?.message}</p>
                </div>
                <div className={styles.button_box}>
                    <button className={styles.button_back} id='button-back' onClick={() => navigate('/2')}>Назад</button>
                    <button className={styles.button_forward} type="submit" id='button-send' disabled={!isValid}>Отправить</button>
                </div>
            </form>

            {
                showModal && <Modal data={data} setShowModal={setShowModal} />
            }


        </div>
    )
}

export default StepThreePage
