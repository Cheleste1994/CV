import React, { useState } from 'react';
import './contact.scss';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Button, Input } from '@mui/material';
import { handleEmailChange, handleSubmit } from '../../common/validation';

const Contact = () => {
  const [focusName, setFocusName] = useState('');
  const [valueName, setValueName] = useState('');

  const [focusEmail, setFocusEmail] = useState('');
  const [valueEmail, setValueEmail] = useState('');
  const [styleEmail, setStyleEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);

  const [focusMessage, setFocusMessage] = useState('');
  const [valueMessage, setValueMessage] = useState('');

  const [isValid, setValid] = useState({ submit: false, valid: false });
  const [customValidationMessage, setCustomValidationMessage] = useState('');

  const handleFocus = (style = '') => {
    switch (style) {
      case 'name':
        setFocusName('name__focus');
        break;
      case 'email':
        setFocusEmail('email__focus');
        break;
      case 'message':
        setFocusMessage('message__label_focus');
        break;
      default:
        if (!valueName) {
          setFocusName('');
        }
        if (!valueEmail) {
          setFocusEmail('');
        }
        if (!valueMessage) {
          setFocusMessage('');
        }
    }
  };

  return (
    <div className="contact">
      <div className="title">
        Contact Me.
        <div className="title__icon">
          <MailOutlineIcon />
        </div>
      </div>
      <div className="talk">
        <div className="talk__title">
          <span />
          LET&#39;S TALK
          <span />
        </div>
        <form
          className="talk__form"
          onSubmit={(e) => {
            const dataForm = handleSubmit(e);
            if (dataForm.email && dataForm.name && dataForm.message && emailValid) {
              setValid({ submit: true, valid: true });
            } else {
              setValid({ submit: true, valid: false });
            }
          }}
        >
          <Input
            type="text"
            name="name"
            value={valueName}
            className={`name ${focusName}`}
            onFocus={() => handleFocus('name')}
            onBlur={() => handleFocus()}
            onChange={(e) => setValueName(e?.target.value)}
          />
          <Input
            name="email"
            type="text"
            value={valueEmail}
            className={`email ${focusEmail} ${styleEmail}`}
            onFocus={() => handleFocus('email')}
            onBlur={() => handleFocus()}
            onChange={(e) => {
              handleEmailChange(
                e.target.value,
                setValueEmail,
                setEmailValid,
                setCustomValidationMessage,
              );
              if (emailValid) {
                setStyleEmail('email__valid');
              } else {
                setStyleEmail('email__notValid');
              }
            }}
            title={customValidationMessage}
          />
          <label htmlFor="message" className={`message__label ${focusMessage}`}>
            <textarea
              name="message"
              id="message"
              value={valueMessage}
              onFocus={() => handleFocus('message')}
              onBlur={() => handleFocus()}
              onChange={(e) => setValueMessage(e?.target.value)}
            />
          </label>
          <Button type="submit">SEND MESSAGE</Button>
        </form>
        {isValid.submit ? (
          <div
            className={`response__form ${
              isValid.valid ? 'response__form_valid' : 'response__form_notValid'
            }`}
          >
            {isValid.valid
              ? 'Thank you for your message. It has been sent.'
              : 'One or more fields have an error. Please check and try again.'}
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};

export default Contact;
