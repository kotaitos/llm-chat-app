'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/react';
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
    <Card className='w-80'>
      <CardHeader>Sign In</CardHeader>
      <CardBody>
        <MailInput onChange={handleEmailChange} />
        <PasswordInput onChange={handlePasswordChange} />
      </CardBody>
      <CardFooter>
        <SigninButton onClick={handleSubmit} />
      </CardFooter>
    </Card>
  );
}
