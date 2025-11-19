import React from 'react';
import Icon from '@mdi/react';
import { mdiDotsHorizontal, mdiCheck, mdiClose } from '@mdi/js';
import CanaryButton from './temp-components/CanaryButton';
import { ButtonType, ButtonSize, ButtonColor } from './temp-components/button-types';
import { colors } from './temp-components/design-tokens';
import CanaryTag, { TagColor, TagVariant, TagSize } from './temp-components/CanaryTag';
import CanaryDropdown from './temp-components/CanaryDropdown';
// Types for orders
interface Order {
  id: string;
  orderNumber: string;
  guestName: string;
  roomNumber: string;
  items: string[];
  total: number;
  status: 'pending' | 'accepted' | 'cancelled';
  orderTime: string;
  deliveryTime?: string;
  notes?: string;
}

interface OrdersTableProps {
  orders: Order[];
  orderStatus: 'pending' | 'accepted' | 'cancelled' | 'past';
  selectedOrderId?: string;
  prepTimeMinutes?: number;
  onRowClick?: (order: Order) => void;
  onViewDetails?: (order: Order) => void;
  onApprove?: (order: Order) => void;
  onDeny?: (order: Order) => void;
}

export const OrdersTable: React.FC<OrdersTableProps> = ({ 
  orders, 
  orderStatus,
  selectedOrderId,
  prepTimeMinutes = 30,
  onRowClick, 
  onViewDetails, 
  onApprove, 
  onDeny
}) => {
  // Get time elapsed from order time - simulating based on order id
  const getTimeElapsed = (orderId: string) => {
    const timeMap: Record<string, number> = {
      '1': 45,
      '2': 45, 
      '3': 24,
      '4': 18,
      '5': 13,
      '6': 7,
      '7': 5,
      '8': 1
    };
    return timeMap[orderId] || 5;
  };

  // Calculate time threshold based on prep time setting
  const getTimeThreshold = (timeElapsed: number): TagColor => {
    const healthyThreshold = prepTimeMinutes * 0.5; // 0-50% = Green (Healthy)
    const warningThreshold = prepTimeMinutes * 0.8; // 50-80% = Yellow (Needs attention)
    // 80%+ = Red (Critical)
    
    if (timeElapsed <= healthyThreshold) {
      return TagColor.SUCCESS; // Green
    } else if (timeElapsed <= warningThreshold) {
      return TagColor.WARNING; // Yellow
    } else {
      return TagColor.ERROR; // Red
    }
  };

  // Get entry point
  const getEntryPoint = () => {
    return 'In-room dining';
  };

  if (orders.length === 0) {
    return (
      <div className="bg-white p-8 text-center">
        <p style={{ color: colors.colorBlack4 }} className="text-sm">No orders found</p>
      </div>
    );
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden" style={{ borderColor: colors.colorBlack6 }}>
      {/* Table */}
      <table className="w-full">
        {/* Table Header */}
        <thead>
          <tr className="border-b" style={{ borderBottomColor: colors.colorBlack6 }}>
            <th className="text-left py-3 px-6 font-roboto text-[12px] font-medium tracking-wider uppercase w-40" 
                style={{ color: colors.colorBlack4 }}>
              {orderStatus === 'past' ? 'STATUS' : 'TIME ELAPSED'}
              <span className="ml-1 text-xs">↕</span>
            </th>
            <th className="text-left py-3 px-6 font-roboto text-[12px] font-medium tracking-wider uppercase w-40" 
                style={{ color: colors.colorBlack4 }}>
              ROOM #
              <span className="ml-1 text-xs">↕</span>
            </th>
            <th className="text-left py-3 px-6 font-roboto text-[12px] font-medium tracking-wider uppercase w-52" 
                style={{ color: colors.colorBlack4 }}>
              GUEST NAME
              <span className="ml-1 text-xs">↕</span>
            </th>
            <th className="text-left py-3 px-6 font-roboto text-[12px] font-medium tracking-wider uppercase w-48" 
                style={{ color: colors.colorBlack4 }}>
              ENTRY POINT
              <span className="ml-1 text-xs">↕</span>
            </th>
            <th className="text-left py-3 px-6 font-roboto text-[12px] font-medium tracking-wider uppercase w-44" 
                style={{ color: colors.colorBlack4 }}>
              ORDER DATE
              <span className="ml-1 text-xs">↕</span>
            </th>
            <th className="py-3 px-6 w-auto"></th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {orders.map((order, index) => {
            const isSelected = selectedOrderId === order.id;
            return (
            <tr 
              key={order.id}
              className="hover:bg-gray-50 transition-colors border-b last:border-b-0"
              style={{ 
                borderBottomColor: colors.colorBlack6,
                backgroundColor: isSelected ? colors.colorBlueCanary5 : 'transparent'
              }}
            >
              {/* Time Elapsed / Delivery Time / Status */}
              <td className="py-4 px-6 w-40">
                {(() => {
                  if (orderStatus === 'past') {
                    // Show status tags for past orders
                    if (order.status === 'accepted') {
                      return (
                        <CanaryTag 
                          label="ACCEPTED"
                          color={TagColor.SUCCESS}
                          variant={TagVariant.OUTLINE}
                          size={TagSize.COMPACT}
                          uppercase={true}
                        />
                      );
                    } else if (order.status === 'cancelled') {
                      return (
                        <CanaryTag 
                          label="DENIED"
                          color={TagColor.ERROR}
                          variant={TagVariant.OUTLINE}
                          size={TagSize.COMPACT}
                          uppercase={true}
                        />
                      );
                    }
                  }
                  
                  // Show time elapsed for active orders
                  const timeElapsedMinutes = getTimeElapsed(order.id);
                  const tagColor = getTimeThreshold(timeElapsedMinutes);
                  return (
                    <CanaryTag 
                      label={`${timeElapsedMinutes} MIN`}
                      color={tagColor}
                      variant={TagVariant.OUTLINE}
                      size={TagSize.COMPACT}
                      uppercase={true}
                    />
                  );
                })()}
              </td>

              {/* Room Number */}
              <td className="py-4 px-6 w-40">
                <span className="font-roboto text-[14px] font-normal" style={{ color: colors.colorBlack1 }}>
                  {order.roomNumber}
                </span>
              </td>

              {/* Guest Name */}
              <td className="py-4 px-6 w-52">
                <span className="font-roboto text-[14px] font-normal" style={{ color: colors.colorBlack1 }}>
                  {order.guestName}
                </span>
              </td>

              {/* Entry Point */}
              <td className="py-4 px-6 w-48">
                <span className="font-roboto text-[14px] font-normal" style={{ color: colors.colorBlack1 }}>
                  {getEntryPoint()}
                </span>
              </td>

              {/* Order Date */}
              <td className="py-4 px-6 w-44">
                <span className="font-roboto text-[14px] font-normal" style={{ color: colors.colorBlack1 }}>
                  {order.orderTime}
                </span>
              </td>

              {/* Action Buttons */}
              <td className="py-4 px-6 w-auto">
                <div className="flex items-center justify-end gap-2">
                  <CanaryButton
                    onClick={(e) => {
                      e.stopPropagation();
                      onViewDetails?.(order);
                    }}
                    type={ButtonType.SHADED}
                    size={ButtonSize.COMPACT}
                    color={ButtonColor.NORMAL}
                  >
                    View details
                  </CanaryButton>
                  
                  
                  {/* Three-dot dropdown for new orders (approve/deny) only */}
                  {orderStatus === 'pending' && (
                    <CanaryDropdown
                      trigger={
                        <CanaryButton
                          type={ButtonType.ICON_SECONDARY}
                          size={ButtonSize.COMPACT}
                          color={ButtonColor.NORMAL}
                          icon={<Icon path={mdiDotsHorizontal} size="16px" />}
                        />
                      }
                      items={[
                        {
                          id: 'approve',
                          label: 'Approve',
                          icon: <Icon path={mdiCheck} size="16px" color={colors.success} />,
                          onClick: () => onApprove?.(order),
                          variant: 'success'
                        },
                        {
                          id: 'deny',
                          label: 'Deny',
                          icon: <Icon path={mdiClose} size="16px" color={colors.danger} />,
                          onClick: () => onDeny?.(order),
                          variant: 'danger'
                        }
                      ]}
                      align="right"
                    />
                  )}
                </div>
              </td>
            </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};