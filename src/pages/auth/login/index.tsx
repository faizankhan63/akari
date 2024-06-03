/* eslint-disable jsx-a11y/no-static-element-interactions */
import logo from '../../../../assets/icons/app-icon/sidebar-icons/akari-logo.svg';
import TextField from '../../../components/text-field';

import style from '../auth.module.scss';

const Login = () => {
  const handleHomeClick = () => {
    window.location.href = '/';
  };
  const handleForgotClick = () => {
    window.location.href = '/forgot-password';
  };
  return (
    <div className={style.mainWrapper}>
      <div className={style.content}>
        <div className={style.logoDiv}>
          <img src={logo} alt="app logo" />
          <span>Login to Akari Terminal.</span>
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
          <TextField
            label="Password"
            showSearchIcon={undefined}
            container={undefined}
            inputWrapperClass={undefined}
            placeholder="Please enter your email address"
            inputField={undefined}
            type="password"
            isRequired={undefined}
            errorMessage={undefined}
            onChange={undefined}
            name={undefined}
            register={undefined}
            value={undefined}
          />
          <button onClick={handleHomeClick}>Login</button>
        </div>
        <div className={style.forgotPw}>
          <span onClick={handleForgotClick}>Forgot password?</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
