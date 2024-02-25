import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { setFilters } from '../../redux/filters/filtersSlice';

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

export const Filters = () => {
  const dispatch = useDispatch();
  const onSubmit = (values, { resetForm }) => {
    dispatch(setFilters(values));
    resetForm();
  };
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
