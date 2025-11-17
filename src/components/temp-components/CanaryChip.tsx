'use client';

import React from 'react';
import { colors } from './design-tokens';

interface CanaryChipProps {
  children: React.ReactNode;
  selected?: boolean;
  onClick?: () => void;
  className?: string;
}

export const CanaryChip: React.FC<CanaryChipProps> = ({
  children,
  selected = false,
  onClick,
  className = ''
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        border border-solid rounded h-8 px-4 py-0 
        flex items-center justify-center gap-2 
        font-roboto text-[12px] font-medium leading-[18px] text-center
        transition-all duration-200 cursor-pointer
        ${selected 
          ? `bg-[${colors.colorBlueDark1}] text-white border-[${colors.colorBlueDark1}]`
          : `bg-white text-[${colors.colorBlueDark1}] border-[${colors.colorBlueDark1}] hover:bg-[${colors.colorBlueDark5}]`
        }
        ${className}
      `}
      style={{
        backgroundColor: selected ? colors.colorBlueDark1 : colors.colorWhite,
        color: selected ? colors.colorWhite : colors.colorBlueDark1,
        borderColor: colors.colorBlueDark1,
      }}
    >
      {children}
    </button>
  );
};

export default CanaryChip;