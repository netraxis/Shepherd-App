import { CustomButton } from '../../../layout';
import { Icon, Box } from '@chakra-ui/react';
import React from 'react';

interface ActionDropdownProps {
  onOptionClick?: (option: 'create-note' | 'upload-document') => void;
}

function ActionDropdown({ onOptionClick }: ActionDropdownProps) {
  return (
    <>
      <CustomButton
        marginTop={10}
        buttonText="Create New Note"
        onClick={() => {
          onOptionClick && onOptionClick('create-note');
        }}
        icon={
          <Icon viewBox="0 0 24 24" boxSize={4}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              stroke="currentColor"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </Icon>
        }
      />
    </>
  );
}

export default ActionDropdown;
