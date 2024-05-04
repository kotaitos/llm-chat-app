import { Button } from '@nextui-org/react';

interface SigninButtonProps {
  onClick: () => void;
}

export default function NewChatButton({ onClick }: SigninButtonProps) {
  return (
    <Button color='success' onClick={onClick}>
      Sign In
    </Button>
  );
}
