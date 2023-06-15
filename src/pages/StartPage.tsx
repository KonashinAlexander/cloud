import React from 'react'
import styles from './pages.module.scss'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaStart } from '../utils/validation'
import { apdateAction } from '../store/formSlice'
import { InputField } from '../components/input-field';
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../store/hooks'

const StartPage: React.FC = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { Phone, Email } = useAppSelector(state => state.formStore)

    const submitStartForm = (data: object) => {
        dispatch(apdateAction(data))
        navigate('/1')
    }

    const {
        register,
        handleSubmit,
        formState: {
            errors,
            isValid
        } } = useForm({
            mode: 'onBlur',
            resolver: yupResolver(schemaStart),
            defaultValues: {
                Phone: Phone,
                Email: Email,
                password: '',
                passwordConfirm: ''
            }
        });

    return (
        <div className={styles.container}>

            <header className={styles.header_box}>
                <div className={styles.image}><h1>AV</h1></div>
                <div className={styles.title_box}>
                    <h1 className={styles.title}>Ivan Ivanov</h1>
                    <ul className={styles.list}>
                        <li><a href="https://telegram.org/">Telegram</a></li>
                        <li><a href="https://github.com/">GitHub</a></li>
                        <li><a href="https://hh.ru/">Resume</a></li>
                    </ul>
                </div>
            </header>

            <form className={styles.form} onSubmit={handleSubmit(submitStartForm)}>

                <div className={styles.input_box}>
                    <InputField
                        label={'Phone'}
                        register={register}
                        placeholder='+7 999 999 99-99'

                    />
                    <p>{errors.Phone?.message}</p>
                </div>

                <div className={styles.input_box}>
                    <InputField
                        label={'Email'}
                        register={register}
                        placeholder='nickname@mail.domen'

                    />
                    <p>{errors.Email?.message}</p>
                </div>

                <div className={styles.input_box}>
                    <label>Пароль</label>
                    <input
                        type="password"
                        id="password"
                        placeholder='password'
                        autoComplete='new-password'
                        {...register('password', { required: "Поле обязательно к заполнению" })}
                    />
                    <p>{errors.password?.message}</p>
                </div>

                <div className={styles.input_box}>
                    <label>Подтверждение пароля</label>
                    <input
                        type="password"
                        id="password-confirm"
                        placeholder='password'
                        autoComplete='new-password'
                        {...register('passwordConfirm')}
                    />
                    <p>{errors.passwordConfirm && 'Пароль должен совпадать'}</p>
                </div>
                <div className={styles.button_box}>
                    <button type="submit" id='button-start' disabled={!isValid}>Начать</button>
                </div>

            </form>

        </div>
    )
}

export default StartPage



