import * as Yup from 'yup'

export const EventValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Please enter minimum 2 characters')
    .required('Required')  
})
