'use client';

import React from 'react';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from '@nextui-org/dropdown';
import { Button } from '@nextui-org/react';
import { ArrowDownIcon } from '@/component/atom/icon/ArrowDownIcon';

export default function SelectApplicationMenu() {
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
  );
}
