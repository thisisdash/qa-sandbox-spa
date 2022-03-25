import { useFormik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import shortid from 'shortid';
import { StorageKeys } from '../../../consts/storageKeys';
import { getData, saveData } from '../../../helpers/registration';
import Button from '../../atoms/Button';
import TextField from '../../atoms/TextField';
import { useEffect } from 'react';

type MyProps = {
  [x: string]: string;
};

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  surname: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  phone: Yup.string().required('Required')
});

const Registration = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const onSubmit = (values: MyProps) => {
    let registration;
    formik.setSubmitting(true);

    // Fake timing
    setTimeout(() => {
      const data: MyProps[] = getData(StorageKeys.registrations) || [];

      if (id) {
        const index = data.findIndex(f => f.id === id);
        data.splice(index, 1, values);
        registration = data;
      } else {
        registration = [
          { id: shortid.generate(), ...values },
          ...data,
        ];
      }

      saveData(StorageKeys.registrations, registration)
      navigate('/');
      formik.setSubmitting(false);
    }, 2000);
  }

  const formik = useFormik<MyProps>({
    initialValues: {
      name: '',
      surname: '',
      email: '',
      phone: '',
    },
    validationSchema,
    validateOnChange: true,
    onSubmit
  });

  useEffect(() => {
    if (id) {
      const registrations: MyProps[] = getData(StorageKeys.registrations);
      const data = registrations.find(r => r.id === id);
      if (data) formik.setValues(data);
    }
  }, []); //eslint-disable-line

  return (
    <div className='flex-row center-xs'>
      <div className='col-xs-12 col-sm-12 col-md-6'>
        <div className='card card--horizontal card--form mt-4x'>
          <div className='card__body'>
            <h1 className='mb-3x'>Registration form</h1>
            <form onSubmit={formik.handleSubmit}>
              <TextField name='name' label='Name' formik={formik} />
              <TextField name='surname' label='Surname' formik={formik} />
              <TextField
                name='email'
                label='Email'
                type='email'
                formik={formik}
              />
              <TextField name='phone' label='Phone' formik={formik} />

              <div className='mt-4x'>
                <Button loading={formik.isSubmitting} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Registration;
