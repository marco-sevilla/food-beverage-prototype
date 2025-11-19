'use client';

import React from 'react';

interface CanaryCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  id?: string;
}

const CanaryCheckbox: React.FC<CanaryCheckboxProps> = ({
  checked,
  onChange,
  disabled = false,
  label,
  id
}) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 disabled:opacity-50"
      />
      {label && (
        <label 
          htmlFor={id}
          className="ml-2 text-sm font-medium text-gray-900"
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default CanaryCheckbox;