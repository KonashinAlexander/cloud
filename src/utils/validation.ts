import * as yup from 'yup';
import { phoneRegExp } from './constants';



export const schemaStart = yup.object().shape({
    Phone: yup.string().matches(phoneRegExp, 'Укажите номер телефона в фромате +7 999 999-99-99').required(),
    Email: yup.string().email('Укажите email в фромате nickname@mailservice.ru').required('Пожалуйста, укажите email'),
    password: yup.string().min(4, "Пароль не может быть менее 4-х и более 15-ти символов").max(15, "Пароль не может быть менее 4-х и более 15-ти символов").required('Пожалуйста, введите пароль'),
    // passwordConfirm: yup.string().oneOf([yup.ref('password'), null])
    passwordConfirm: yup.string().min(4, "Пароль не может быть менее 4-х и более 15-ти символов").max(15, "Пароль не может быть менее 4-х и более 15-ти символов").required('Пожалуйста, введите пароль'),

})

export const schemaStepOne = yup.object().shape({
    Nickname: yup.string().max(30).required("Укажите Ваш ник"),
    Name: yup.string().max(50).required("Укажите Ваше имя"),
    Surname: yup.string().required("Укажите Вашу фамилию"),
    Sex: yup.string().required("Укажите Ваш пол"),
})

export const schemaStepTwo = yup.object().shape({
    advantages: yup.array(),
    checkbox: yup.array().min(1),
    radio: yup.number().required()
})

export const schemaStepThree = yup.object().shape({
    About: yup.string().max(200).required('Пожалуйста, расскажите немного о себе'),
})