'use client';

import { Input } from '@nextui-org/react';

interface MailInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function MailInput({ onChange }: MailInputProps) {
  return (
    <Input
      type='email'
      label='Email'
      placeholder='Enter your email'
      variant='underlined'
      onChange={onChange}
      className='max-w-xs'
    />
  );
}
