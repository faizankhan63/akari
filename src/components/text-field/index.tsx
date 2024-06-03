/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { memo } from 'react';

// import searchIcon from '../../../public/assets/svgs/search-icon.svg';

import style from './input.module.scss';

const TextField = ({
  showSearchIcon,
  container,
  inputWrapperClass,
  label,
  placeholder,
  inputField,
  type,
  isRequired,
  errorMessage,
  onChange,
  name,
  register,
  value,
}) => {
  return (
    <div className={`${style.inputContainer} ${container && container}`}>
      {label && (
        <label>
          {label}
          {isRequired && (
            <div
              style={{
                height: '6px',
                width: '6px',
                background: '#f80101',
                borderRadius: '50%',
              }}
            />
          )}
        </label>
      )}
      <div
        className={`${style.inputWrapper} ${
          inputWrapperClass && inputWrapperClass
        }`}
        style={{
          position: 'relative',
        }}
      >
        {showSearchIcon && (
          // <Image src={searchIcon} className={style.icon1} alt="Search" />
          <div>hi</div>
        )}
        <input
          name={name || ''}
          className={`${style.input} ${inputField}`}
          type={type || 'text'}
          {...(value && { value })}
          placeholder={placeholder}
          style={{
            paddingLeft: showSearchIcon ? '40px' : '',
            marginTop: label && '10px',
            border: errorMessage ? '1px solid #f80101' : '1px solid #fff',
          }}
          // onChange={(event) =>
          //   onChange(type === 'file' ? event : event?.target?.value)
          // }
          {...(register && register(name))}
        />
        {errorMessage && (
          <span className={`${style.errorMessage}`}>{errorMessage}</span>
        )}
      </div>
    </div>
  );
};

export default TextField;
