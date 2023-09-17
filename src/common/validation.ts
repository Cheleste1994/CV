import React from 'react';

type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

type HandleChangeFn = (
  value: string,
  set: SetState<string>,
  setValid: SetState<boolean>,
  setCustomValidationMessage: SetState<string>,
) => void;

const RULES_EMAIL_VALIDATION = `
Validation Rules 📏
- Email address must be properly formatted (e.g., user@example.com).
- Email address must not contain leading or trailing whitespace.
- Email address must contain a domain name (e.g., example.com).
- Email address must contain an '@' symbol separating local part and domain name.
`;

export const handleEmailChange: HandleChangeFn = (
  value,
  setEmail,
  setEmailValid,
  setCustomValidationMessage,
) => {
  const isValid = /^[^\s]+@[^\s]+\.[^\s]+$/.test(value);

  if (!isValid) {
    setCustomValidationMessage(RULES_EMAIL_VALIDATION);
  } else {
    setCustomValidationMessage('');
  }

  setEmail(value);
  setEmailValid(isValid);
};

export const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const target = e.target as HTMLFormElement;
  const formData = new FormData(target);
  const formDataObject = {
    email: formData.get('email') as string,
    name: formData.get('name') as string,
    message: formData.get('message') as string,
  };
  return formDataObject;
};
