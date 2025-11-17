'use client';

import React, { useState } from 'react';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';
import { AnimatedModal } from './AnimatedModal';
import CanaryChip from './temp-components/CanaryChip';
import CanaryButton from './temp-components/CanaryButton';
import { ButtonType, ButtonSize, ButtonColor } from './temp-components/button-types';
import { colors } from './temp-components/design-tokens';

interface OrderDenialModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDenyOrder: (reason: string, comment?: string) => void;
}

const denialReasons = [
  'Items unavailable',
  'Duplicate request', 
  'Guest requested to cancel',
  'Invalid/test request',
  'Other'
];

export const OrderDenialModal: React.FC<OrderDenialModalProps> = ({
  isOpen,
  onClose,
  onDenyOrder
}) => {
  const [selectedReason, setSelectedReason] = useState<string | null>(null);
  const [otherComment, setOtherComment] = useState('');

  const handleDenyRequest = () => {
    if (selectedReason) {
      const comment = selectedReason === 'Other' ? otherComment : undefined;
      onDenyOrder(selectedReason, comment);
      // Reset form
      setSelectedReason(null);
      setOtherComment('');
      onClose();
    }
  };

  const handleCancel = () => {
    // Reset form
    setSelectedReason(null);
    setOtherComment('');
    onClose();
  };

  return (
    <AnimatedModal 
      isOpen={isOpen} 
      onClose={handleCancel}
      maxWidth="max-w-lg"
    >
      {/* Modal Header */}
      <div className="bg-white flex items-center justify-between pb-4 pt-6 px-6 rounded-t-lg">
        <h2 className="font-roboto text-[18px] font-medium leading-[28px]" style={{ color: colors.colorBlack1 }}>
          Deny request
        </h2>
        <button
          onClick={handleCancel}
          className="flex items-center justify-center p-2.5 rounded transition-colors hover:bg-gray-100"
        >
          <Icon path={mdiClose} size="16px" color={colors.colorBlack3} />
        </button>
      </div>

      {/* Modal Content */}
      <div className="bg-white flex flex-col gap-4 items-start px-6 pb-4">
        <p className="font-roboto text-[14px] font-normal leading-[22px]" style={{ color: colors.colorBlack1 }}>
          Please select a reason
        </p>

        {/* Reason Chips */}
        <div className="flex flex-wrap gap-3 w-full">
          {denialReasons.map((reason) => (
            <CanaryChip
              key={reason}
              selected={selectedReason === reason}
              onClick={() => setSelectedReason(reason)}
            >
              {reason}
            </CanaryChip>
          ))}
        </div>

        {/* Additional Comment Field - animated when "Other" is selected */}
        <div 
          className={`w-full overflow-hidden transition-all duration-300 ease-in-out ${
            selectedReason === 'Other' ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="w-full">
            {/* Separator line */}
            <div 
              className="w-full h-px mb-6 transition-opacity duration-300 ease-in-out"
              style={{ 
                backgroundColor: colors.colorBlack6,
                opacity: selectedReason === 'Other' ? 1 : 0
              }} 
            />
            
            <div className={`flex flex-col gap-1 w-full transition-all duration-300 ease-in-out delay-75 ${
              selectedReason === 'Other' ? 'transform translate-y-0 opacity-100' : 'transform translate-y-2 opacity-0'
            }`}>
              <label className="font-roboto text-[12px] font-normal leading-[1.5]" style={{ color: colors.colorBlack1 }}>
                Additional comment
              </label>
              <input
                type="text"
                value={otherComment}
                onChange={(e) => setOtherComment(e.target.value)}
                placeholder="Additional comment (optional)"
                className="bg-white border border-solid h-10 px-2 py-0 rounded w-full font-roboto text-[14px] font-normal leading-[1.5] transition-colors focus:outline-none focus:border-blue-500"
                style={{ 
                  borderColor: colors.colorBlack3,
                  color: colors.colorBlack1
                }}
              />
              <p className="font-roboto text-[12px] font-normal leading-[18px] mt-1" style={{ color: colors.colorBlack3 }}>
                This will be displayed to the guest.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Footer */}
      <div className="bg-white flex items-center justify-between px-6 pb-6 pt-4 rounded-b-lg">
        {/* Left side - empty for spacing */}
        <div className="opacity-0">
          <CanaryButton 
            type={ButtonType.SECONDARY}
            size={ButtonSize.NORMAL}
            color={ButtonColor.NORMAL}
          >
            Button
          </CanaryButton>
        </div>

        {/* Right side - action buttons */}
        <div className="flex gap-2">
          <CanaryButton
            onClick={handleCancel}
            type={ButtonType.SECONDARY}
            size={ButtonSize.NORMAL}
            color={ButtonColor.NORMAL}
          >
            Cancel
          </CanaryButton>
          <CanaryButton
            onClick={handleDenyRequest}
            disabled={!selectedReason}
            type={ButtonType.PRIMARY}
            size={ButtonSize.NORMAL}
            color={ButtonColor.DANGER}
          >
            Deny request
          </CanaryButton>
        </div>
      </div>
    </AnimatedModal>
  );
};