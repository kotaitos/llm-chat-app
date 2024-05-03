import { Button } from '@nextui-org/react';
import React from 'react';

const NavigationBar: React.FC = () => {
  return (
    <nav>
      <div>
        <Button color='primary'>新規チャット</Button>
      </div>
      <div>{/* Add any other navigation items or components here */}</div>
    </nav>
  );
};

export default NavigationBar;
