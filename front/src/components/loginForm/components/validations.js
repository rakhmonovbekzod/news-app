import * as Yup from 'yup';


const loginValidation  = Yup.object().shape({
  login: Yup.string().min(2, 'Too Short!').required('Required'),
  password: Yup.string().min(1, 'Too Short!').required('Required')
    })

    const initialValues = {
      login: '',
      password: ''
  }

  export {
    loginValidation,
    initialValues
  }