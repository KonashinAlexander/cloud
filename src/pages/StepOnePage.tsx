import React from 'react'
import styles from './pages.module.scss'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaStepOne } from '../utils/validation'
import { SelectField } from '../components/select-field';
import { InputField } from '../components/input-field'
import { apdateAction } from '../store/formSlice'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../store/hooks'


const StepOnePage: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const { Nickname, Name, Surname, Sex } = useAppSelector(state => state.formStore);

    const {
        register,
        handleSubmit,
        formState: {
            errors,
            isValid
        } } = useForm({
            mode: 'onBlur',
            resolver: yupResolver(schemaStepOne),
            defaultValues: {
                Nickname: Nickname,
                Name: Name,
                Surname: Surname,
                Sex: Sex,
            }
        });

    const submitFirstForm = (data: object) => {
        dispatch(apdateAction(data))
        navigate('/2')
    }

    return (
        <div className={styles.container}>

            <form className={styles.form} onSubmit={handleSubmit(submitFirstForm)}>
                <div className={styles.input_box}>
                    <InputField
                        label={'Nickname'}
                        register={register}
                        required
                        placeholder='Nickname'
                        onChange={undefined}
                        value={undefined}
                        id='nn'


                    />
                    <p>{errors.Nickname?.message}</p>
                </div>

                <div className={styles.input_box}>
                    <InputField
                        label={'Name'}
                        register={register}
                        required
                        placeholder='Name'
                        onChange={undefined}
                        value={undefined}

                        id='n'

                    />
                    <p>{errors.Name?.message}</p>
                </div>

                <div className={styles.input_box}>
                    <InputField
                        label={'Surname'}
                        register={register}
                        required
                        placeholder='Surname'
                        onChange={undefined}
                        value={undefined}
                        id='s'

                    />
                    <p>{errors.Surname?.message}</p>
                </div>

                <div className={styles.input_box}>
                    <SelectField
                        label={'Sex'}
                        register={register}
                        required
                    />
                    <p>{errors.Sex?.message}</p>
                </div>

                <div className={styles.button_box}>
                    <button className={styles.button_back} id='button-back' onClick={() => navigate('/')}>Назад</button>
                    <button className={styles.button_forward} type="submit" id='button-next' disabled={!isValid}>Далее</button>
                </div>
            </form>
        </div>
    )
}

export default StepOnePage
