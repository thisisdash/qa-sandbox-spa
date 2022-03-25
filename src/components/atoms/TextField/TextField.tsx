import { FC } from 'react';
import { FormikProps } from 'formik';

type MyProps = {
  [x: string]: string;
}

type Props = {
  name: string;
  label: string;
  formik: FormikProps<MyProps>;
  type?: string;
}

const TextField: FC<Props> = ({ name, label, formik, type = 'text' }) => {
  const { values, touched, errors } = formik;

  return (
    <div className={`input ${touched[name] && errors[name] && 'input--error'}`}>
      <label>
        {label} <abbr title='Required'>*</abbr>
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className='input__control'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={values[name]}
      />
      {touched[name] && errors[name] && (
        <p className='input__validation'>{errors[name]}</p>
      )}
    </div>
  );
};

export default TextField;
