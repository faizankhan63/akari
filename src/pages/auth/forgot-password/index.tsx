import { useNavigate } from 'react-router-dom';
import logo from '../../../../assets/icons/app-icon/sidebar-icons/akari-logo.svg';
import TextField from '../../../components/text-field';

import style from '../auth.module.scss';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate('/login');
  };
  return (
    <div className={style.mainWrapper}>
      <div className={style.content}>
        <div className={style.logoDiv}>
          <img src={logo} alt="app logo" />
        </div>
        <div className={style.formDiv}>
          <TextField
            label="Email"
            showSearchIcon={undefined}
            container={undefined}
            inputWrapperClass={undefined}
            placeholder="Please enter your email address"
            inputField={undefined}
            type={undefined}
            isRequired={undefined}
            errorMessage={undefined}
            onChange={undefined}
            name={undefined}
            register={undefined}
            value={undefined}
          />
          <button>Send</button>
        </div>
        <div className={style.backToLogin}>
          <span onClick={handleHomeClick}>Back to login</span>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
