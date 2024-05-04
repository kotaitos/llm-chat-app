'use client';

import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/react';
import MailInput from '@/component/molecule/MailInput';
import PasswordInput from '@/component/molecule/PasswordInput';
import SigninButton from '@/component/molecule/SigninButton';

export default function SigninFrom() {
  return (
    <Card className='w-80'>
      <CardHeader>Sign In</CardHeader>
      <CardBody>
        <MailInput />
        <PasswordInput />
      </CardBody>
      <CardFooter>
        <SigninButton />
      </CardFooter>
    </Card>
  );
}
