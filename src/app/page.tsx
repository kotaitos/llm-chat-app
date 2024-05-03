'use client';

import React, { useState } from 'react';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from '@nextui-org/dropdown';
import { Button } from '@nextui-org/react';
import NavigationBar from '@/component/NavigationBar';
import { ArrowDownIcon } from '@/component/icon/ArrowDown';

export default function Home() {
  const [selectedKeys, setSelectedKeys] = React.useState(
    new Set(['default chat - GPT 3.5']),
  );

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(', ').replaceAll('_', ' '),
    [selectedKeys],
  );

  const customApplications = [
    { value: 'custom chat1', label: 'custom chat1' },
    { value: 'custom chat2', label: 'custom chat2' },
    { value: 'custom chat3', label: 'custom chat3' },
  ];
  return (
    <div className='flex min-h-screen'>
      <header className='dark bg-primary w-1/6'>
        <NavigationBar />
      </header>
      <main className='dark bg-secondary flex-1 p-4'>
        <Dropdown>
          <DropdownTrigger>
            <Button
              className='capitalize'
              color='secondary'
              endContent={<ArrowDownIcon />}
            >
              {selectedValue}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label='Single selection example'
            variant='flat'
            disallowEmptySelection
            selectionMode='single'
            selectedKeys={selectedKeys}
            onSelectionChange={setSelectedKeys}
          >
            <DropdownSection title='default'>
              <DropdownItem key='default chat - GPT 3.5'>
                default chat - GPT 3.5
              </DropdownItem>
            </DropdownSection>
            <DropdownSection title='custom applications'>
              {customApplications.map((option) => (
                <DropdownItem key={option.value}>{option.label}</DropdownItem>
              ))}
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
      </main>
    </div>
  );
}
