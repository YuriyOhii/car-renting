import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  brand: '',
  price: '',
  mileage: '',
};

const schema = Yup.object({
  brand: Yup.string(),
  price: Yup.string(),
  mileage: Yup.number(),
});

const onSubmit = (values, { resetForm }) => {
  console.log(values);
  resetForm();
};

export const Filters = () => {
  return (
    <>
      <Formik
        validationSchema={schema}
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <Form>
          <label htmlFor="">
            Car brand
            <Field name="brand" type="text" />
          </label>
          <label htmlFor="">
            Price / 1 hour
            <Field name="price" type="text" />
          </label>
          <label htmlFor="">
            Car mileage / km
            <Field name="mileage" type="text" />
          </label>
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </>
  );
};
