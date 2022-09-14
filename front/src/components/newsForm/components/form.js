import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { Button, Input } from "../../formComponents";
import { initialValues, newsValidation } from "./validations";
import { useState } from 'react';
import { post } from '../../../services/helpers/api';
import { isLetter } from '../../../services/utils';

const MyForm = ({ items, edit }) => {
  const [isSubmitting, setisSubmitting] = useState(false)
  const { t } = useTranslation()
  let navigate = useNavigate();
  const getValues = (e, item, setFieldValue) => {
    if (e.target) {
      let lastChar = e.target.value.slice(-1);
      if (item == 'news_id') {
        if (isLetter(lastChar)) {
          e.target.value = ''
          setFieldValue(`${item}`, e.target.value)
        }
      } else {
        setFieldValue(`${item}`, e.target.value)

      }
    }
  }
  const onSubmit = (data) => {
    const url = edit ? '/news/edit' : '/news/add'
    setisSubmitting(true)
    post(url, { id: data.id, title: data.news_title, desc: data.news_desc, picture: 'https:dffd' }).then(res => {
      setisSubmitting(false)
      if (res.status = 200) {
        navigate('/')
      } else {
        alert("You have an error")
      }
    })
      .catch(e => {
        setisSubmitting(false)
        alert("You have an error")
      })
  }
  return (
    <>
      <Formik
        initialValues={edit ? items : initialValues}
        validationSchema={newsValidation}
        onSubmit={(values, { resetForm }) => {
          onSubmit(values)
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
                    defaultValue={edit ? items[item] : ''}

                  />
                ))
              }
              <Button
                className="btn-primary"
                disabled={isSubmitting}
                type="submit"
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