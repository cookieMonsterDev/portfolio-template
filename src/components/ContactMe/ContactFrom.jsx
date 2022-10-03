import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';

const ContactFrom = (props) => {
  const form = useRef(null);
  const InputTextRef = useRef(null);

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const res = await emailjs.sendForm(
        'service_5ml49gq',
        'template_oyvjyt6',
        form.current,
        '9ny3aq0Bbc21nyhOl'
      );

      if (!res) {
        throw new Error('Sth went wrong');
      }

      InputTextRef.current.value = '';

      return console.log(res.status);
    } catch (err) {
      console.log(err.text);
    }
  };

  return (
    <Form ref={form} onSubmit={sendEmail} isShow={props.isShow}>
      <Label>Name</Label>
      <InputItem type="text" name="user_name" />
      <Label>Email</Label>
      <InputItem type="email" name="user_email" />
      <Label>Message</Label>
      <InputText ref={InputTextRef} name="message" />
      <SubmitButton type="submit" value="Send" />
    </Form>
  );
};

export default ContactFrom;

const Form = styled.form`
  flex: 5;
  box-sizing: border-box;
  width: 100%;
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 2rem 5rem;

  @media only screen and (max-width: 48em) {
    padding: 2rem 2rem;
  }

  ${(props) => props.isShow && 'display: flex;'}
`;

const Label = styled.label`
  margin-top: 1rem;
  margin-bottom: 0.3rem;
  width: 100%;
  font-weight: 700;
  font-family: 'Roboto Mono', monospace;
  color: #0ee3b5;
`;

const SubmitButton = styled.input`
  width: 8rem;
  height: 3rem;
  margin: 2rem 0;
  border-radius: 0;
  border: 0.15rem solid #0ee3b5;
  font-size: 1rem;
  font-weight: 700;
  color: #0ee3b5;
  background-color: transparent;

  &:active {
    background-color: rgba(14, 227, 181, 0.2);
  }
`;

const InputItem = styled.input`
  box-sizing: border-box;
  padding: 0.3rem;
  width: 100%;
  height: 2.5rem;
  font-size: large;
  font-family: 'Heebo', sans-serif;
  outline: none;
  border: 2px solid #0ee3b5;
  background-color: rgba(14, 227, 181, 0.1);
  color: wheat;
`;

const InputText = styled.textarea`
  box-sizing: border-box;
  padding: 0.3rem;
  width: 100%;
  height: 15rem;
  font-size: large;
  font-weight: 200;
  font-family: 'Heebo', sans-serif;
  outline: none;
  border: 2px solid #0ee3b5;
  background-color: rgba(14, 227, 181, 0.1);
  color: wheat;
  text-align: start;
  resize: vertical;
`;
