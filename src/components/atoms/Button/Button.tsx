import { FC } from 'react';

type Props = {
  loading?: boolean;
  type?: 'submit' | 'button' | 'reset';
};

const Button: FC<Props> = ({ loading = false, type = 'submit' }) => (
  <button
    type={type}
    className={`btn -primary ${loading ? 'btn--loader -loading' : ''}`}
    disabled={loading}
  >
    {loading ? (
      <div className='btn__loader-container'>
        <div className='btn__loading'>Loading</div>
      </div>
    ) : (
      'Submit'
    )}
  </button>
);

export default Button;
