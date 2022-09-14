import { useTranslation } from 'react-i18next';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { Button, Input } from "../../formComponents";
import { initialValues, loginValidation } from "./validations";
import { post } from '../../../services/helpers/api';
import { login } from '../../../redux/auth/reducers';
import { useState } from 'react';

const MyForm = () => {
  const [isSubmitting, setisSubmitting] = useState(false)
  const { t } = useTranslation()
  let navigate = useNavigate();
  const dispatch = useDispatch()


  const getValues = (e, item, setFieldValue) => {
    if (e.target) {
      setFieldValue(`${item}`, e.target.value)
    }
  }
  const onLogin = async (data) => {
    try {
      setisSubmitting(true)
      const res = await post('/login', data)
        if (res.data.token) {
          dispatch(login(res.data))
          navigate('/')
        } else {
          alert('Имя пользователя или пароль введены не верно')
        }
    } catch (error) {
      alert('Имя пользователя или пароль введены не верно')
    }
    finally {
      setisSubmitting(false)
    }
  }
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={loginValidation}
        onSubmit={(values, { resetForm }) => {
          onLogin(values)
          resetForm()
        }}
      >
        {({ values, setFieldValue }) => {
          return <>
            <Form>
              {
                Object.keys(initialValues).map((item, index) => (
                  <Field
                    className="m-2"
                    component={Input}
                    key={index}
                    placeholder={t(item)}
                    name={item}
                    onChange={(e) => getValues(e, item, setFieldValue)}
                    value={values[item] || ''}
                  />
                ))
              }
              <Button
                disabled={isSubmitting}
                type="submit"
                className="btn-primary"
                text={isSubmitting ? 'loading...' : 'submit'}
              />
            </Form>
          </>
        }}
      </Formik>
    </>
  );
};
export default MyForm;