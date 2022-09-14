import * as Yup from 'yup';


const newsValidation  = Yup.object().shape({
  news_title: Yup.string().min(10, 'Too Short!').required('Required'),
  news_desc: Yup.string().min(10, 'Too Short!').required('Required'),
  news_id: Yup.string().required('Required')
    })

    const initialValues = {
      news_title: '',
      news_desc: '',
      news_id: ''
  }

  export {
    newsValidation,
    initialValues
  }
