'use client';

import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Spacer,
} from '@nextui-org/react';
import MailInput from '@/component/molecule/MailInput';
import PasswordInput from '@/component/molecule/PasswordInput';
import SigninButton from '@/component/molecule/SigninButton';

export default function SigninFrom() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);
  const handleSubmit = () => {
    console.log(`Email: ${email}, Password: ${password}`);
    alert('ログイン試行が行われました。');
  };

  return (
    <Card style={{ width: '400px', height: '300px' }}>
      <CardHeader>Sign In</CardHeader>
      <CardBody className='flex flex-col justify-center items-center'>
        <MailInput onChange={handleEmailChange} />
        <Spacer y={4} />
        <PasswordInput onChange={handlePasswordChange} />
      </CardBody>
      <CardFooter>
        <SigninButton onClick={handleSubmit} />
      </CardFooter>
    </Card>
  );
}
