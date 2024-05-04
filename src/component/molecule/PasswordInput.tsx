import React from 'react';
import { Input } from '@nextui-org/react';
import { EyeFilledIcon } from '@/component/atom/icon/EyeFilledIcon';
import { EyeSlashFilledIcon } from '@/component/atom/icon/EyeSlashFilledIcon';

interface PasswordInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function MailInput({ onChange }: PasswordInputProps) {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Input
      label='Password'
      variant='bordered'
      placeholder='Enter your password'
      onChange={onChange}
      endContent={
        <button
          className='focus:outline-none'
          type='button'
          onClick={toggleVisibility}
          color='primary'
        >
          {isVisible ? (
            <EyeFilledIcon className='text-2xl text-default-400 pointer-events-none' />
          ) : (
            <EyeSlashFilledIcon className='text-2xl text-default-400 pointer-events-none' />
          )}
        </button>
      }
      type={isVisible ? 'text' : 'password'}
      className='max-w-xs'
    />
  );
}
