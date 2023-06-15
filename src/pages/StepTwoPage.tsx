import styles from './pages.module.scss'
import React from 'react'
import { useForm, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaStepTwo } from '../utils/validation';
import { apdateAction } from '../store/formSlice'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../store/hooks'


const StepTwoPage: React.FC = () => {
    const { advantages, checkbox, radio } = useAppSelector(state => state.formStore);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        control,
        formState: {
            errors,
            isValid
        } } = useForm({
            mode: 'onBlur',
            resolver: yupResolver(schemaStepTwo),
            defaultValues: {
                advantages: advantages,
                checkbox: checkbox,
                radio: radio,
            }
        });



    const { fields, append, remove } = useFieldArray({
        control,
        name: "advantages",
    });

    const submitSecondForm = (data: object) => {
        dispatch(apdateAction(data))
        navigate('/3')
    }




    return (
        <div className={styles.container}>

            <form className={styles.form} onSubmit={handleSubmit(submitSecondForm)}>
                <div className={styles.input_box}>
                    <label>Advantages</label>
                    <ul>
                        {fields.map((item, index) => (
                            <li key={item.id}>
                                <input
                                    {...register(`advantages.${index}.advantage`)}
                                    placeholder='Advantage'
                                />
                                <button type="button" onClick={() => remove(index)}>Удалить</button>
                            </li>
                        ))}
                    </ul>
                    <button
                        type="button"
                        onClick={() => append({ advantage: "" })}
                    >
                        Добавить
                    </button>
                </div>

                <div className={styles.input_box}>
                    <fieldset className={styles.fieldset}>
                        <legend>Checkbox group</legend>
                        {
                            [1, 2, 3].map((box, i) => (
                                <label key={i}>
                                    <input
                                        type="checkbox"
                                        {...register('checkbox')}
                                        value={box}
                                    />
                                    <span>{box}</span>
                                </label>
                            ))
                        }
                    </fieldset>
                    <p>{errors.checkbox && "Выберите хотя бы один вариант"}</p>
                </div>

                <div className={styles.input_box}>
                    <legend>Radio group</legend>
                    <fieldset className={styles.fieldset}>
                        {
                            [1, 2, 3].map((item, i) => (
                                <label key={i}>
                                    <input
                                        type="radio"
                                        {...register('radio')}
                                        value={item}
                                        id={`field-radio-group-option-${item}`}

                                    />

                                    <span>{item}</span>
                                </label>
                            ))
                        }
                    </fieldset>
                    <p>{errors.radio && "Выберите хотя бы один вариант"}</p>
                </div>
                <div className={styles.button_box}>
                    <button className={styles.button_back} id='button-back' onClick={() => navigate('/1')}>Назад</button>
                    <button className={styles.button_forward} type="submit" id='button-next' disabled={!isValid}>Далее</button>
                </div>
            </form>
        </div>
    )
}

export default StepTwoPage
