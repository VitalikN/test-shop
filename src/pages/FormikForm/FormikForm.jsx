import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { useLocation } from 'react-router-dom';

import {
  Form,
  FormField,
  Input,
  ErrorMessage,
  Button,
} from './FormikForm.styled';
import { addProduct } from 'redux/operations';
import { BackLink } from 'components/BackLink/BackLink';

const FormikSchema = Yup.object().shape({
  brand: Yup.string().required(),
  title: Yup.string().required(),
  imageUrl: Yup.string().url().required(),
  year: Yup.number().required().positive(),
  rating: Yup.number().required().positive(),
  price: Yup.number().required().positive(),
});

export const FormikForm = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const dispatch = useDispatch();

  const handleSubmit = newProduct => {
    dispatch(addProduct(newProduct));
  };

  return (
    <div>
      <BackLink to={backLinkHref}>come back </BackLink>

      <Formik
        initialValues={{
          id: nanoid(),
          brand: '',
          title: '',
          imageUrl: '',
          year: 0,
          rating: 0,
          price: 0,
        }}
        onSubmit={(values, { resetForm }) => {
          handleSubmit({
            ...values,
          });
          resetForm();
        }}
        validationSchema={FormikSchema}
      >
        <Form>
          <FormField>
            Brand
            <Input type="text" name="brand" />
            <ErrorMessage component="span" name="brand" />
          </FormField>
          <FormField>
            Title
            <Input type="text" name="title" />
            <ErrorMessage component="span" name="title" />
          </FormField>
          <FormField>
            Year of publication
            <Input name="imageUrl" placeholder="https://www.google.com" />
            <ErrorMessage component="span" name="imageUrl" />
          </FormField>
          <FormField>
            Year of publication
            <Input type="number" name="year" />
            <ErrorMessage component="span" name="year" />
          </FormField>
          <FormField>
            Rating
            <Input type="number" name="rating" />
            <ErrorMessage component="span" name="rating" />
          </FormField>
          <FormField>
            Price
            <Input type="number" name="price" />
            <ErrorMessage component="span" name="price" />
          </FormField>
          <Button type="submit">Save product</Button>
        </Form>
      </Formik>
    </div>
  );
};