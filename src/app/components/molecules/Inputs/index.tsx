import React, { useState } from 'react';
import { EyeIcon, PersonIcon } from '@/app/components/atoms/Icons/index';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder?: string;
  className?: string;
  iconRight?: string;
}

const InputText: React.FC<InputProps> = ({
  type,
  placeholder,
  className = '',
  iconRight,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordType = type === 'password';

  const pattern = isPasswordType
    ? '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[\\W_]).{8,}$'
    : undefined;

  const title = isPasswordType
    ? 'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un símbolo'
    : undefined;

  return (
    <div className="relative w-[300px]">
      <input
        type={isPasswordType && showPassword ? 'text' : type}
        placeholder={placeholder}
        className={`border border-[#E4E4E7] focus:border-[#7C3785] outline-none rounded-md p-2 w-full h-[40px] pr-10 ${className}`}
        pattern={pattern}
        title={title}
        required
        {...props}
      />

      {isPasswordType && (
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-2.5 text-gray-500"
        >
          <EyeIcon icon={showPassword ? 'tabler:eye' : 'tabler:eye-off'} />
        </button>
      )}

      {!isPasswordType && iconRight && (
        <div className="absolute right-3 top-2.5 text-gray-500">
          <PersonIcon icon={iconRight} />
        </div>
      )}
    </div>
  );
};

interface ValidatedInputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  isError?: boolean;
  errorMessage?: string;
  iconRight?: string;
  className?: string;
}

const ValidatedInputText: React.FC<ValidatedInputTextProps> = ({
  type,
  value,
  onChange,
  placeholder,
  isError = false,
  errorMessage = '',
  iconRight,
  className = '',
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordType = type === 'password';

  const pattern = isPasswordType
    ? '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[\\W_]).{8,}$'
    : undefined;

  const title = isPasswordType
    ? 'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un símbolo'
    : undefined;

  return (
    <div className="relative w-[300px]">
      <input
        type={isPasswordType && showPassword ? 'text' : type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`border ${
          isError ? 'border-red-500' : 'border-[#E4E4E7]'
        } focus:border-[#7C3785] outline-none rounded-md p-2 w-full h-[40px] pr-10 ${className}`}
        pattern={pattern}
        title={title}
        {...props}
      />

      {isPasswordType && (
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-2.5 text-gray-500"
        >
          <EyeIcon icon={showPassword ? 'tabler:eye' : 'tabler:eye-off'} />
        </button>
      )}

      {!isPasswordType && iconRight && (
        <div className="absolute right-3 top-2.5 text-gray-500">
          <PersonIcon icon={iconRight} />
        </div>
      )}

      {isError && (
        <p className="text-red-500 text-sm mt-1 ml-1">{errorMessage}</p>
      )}
    </div>
  );
};

export { InputText, ValidatedInputText };
