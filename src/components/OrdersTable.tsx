import React from 'react';
import Icon from '@mdi/react';
import { 
  mdiEye,
  mdiPencil,
  mdiDelete
} from '@mdi/js';

// Types for orders
interface Order {
  id: string;
  orderNumber: string;
  guestName: string;
  roomNumber: string;
  items: string[];
  total: number;
  status: 'pending' | 'preparing' | 'ready' | 'delivered' | 'cancelled';
  orderTime: string;
  deliveryTime?: string;
  notes?: string;
}

interface OrdersTableProps {
  orders: Order[];
  onRowClick?: (order: Order) => void;
  onViewOrder?: (order: Order) => void;
  onEditOrder?: (order: Order) => void;
  onDeleteOrder?: (order: Order) => void;
}

export const OrdersTable: React.FC<OrdersTableProps> = ({ 
  orders, 
  onRowClick, 
  onViewOrder, 
  onEditOrder, 
  onDeleteOrder 
}) => {
  // Calculate time elapsed from order time
  const getTimeElapsed = (orderTime: string) => {
    // This is a simple mock - in real app, calculate from actual timestamp
    const mockElapsed = ['5 min', '12 min', '8 min', '15 min', '3 min'];
    return mockElapsed[Math.floor(Math.random() * mockElapsed.length)];
  };

  // Get formatted order date
  const getOrderDate = (orderTime: string) => {
    // Mock date - in real app, use actual order date
    return 'Today';
  };

  // Get entry point
  const getEntryPoint = () => {
    // Mock data - in real app, this would come from order data
    return 'In-room dining';
  };

  if (orders.length === 0) {
    return (
      <div className="bg-white rounded-lg border border-neutral-200 p-8 text-center">
        <p className="text-gray-500 text-sm">No orders found</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg border border-neutral-200 overflow-hidden">
      {/* Table Header */}
      <div className="bg-white border-b border-neutral-200 px-6 py-3">
        <div className="grid grid-cols-12 gap-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
          <div className="col-span-1">Room</div>
          <div className="col-span-2">Guest Name</div>
          <div className="col-span-2">Entry Point</div>
          <div className="col-span-2">Order Date</div>
          <div className="col-span-2">Time Elapsed</div>
          <div className="col-span-3 text-right">Actions</div>
        </div>
      </div>

      {/* Table Body */}
      <div className="divide-y divide-neutral-200">
        {orders.map((order, index) => {
          return (
            <div
              key={order.id}
              className="px-6 py-4 hover:bg-gray-50 transition-colors"
            >
              <div className="grid grid-cols-12 gap-4 items-center">
                {/* Room Number */}
                <div className="col-span-1">
                  <span className="text-sm text-gray-900">
                    {order.roomNumber}
                  </span>
                </div>

                {/* Guest Name */}
                <div className="col-span-2">
                  <span className="text-sm font-medium text-gray-900">
                    {order.guestName}
                  </span>
                </div>

                {/* Entry Point */}
                <div className="col-span-2">
                  <span className="text-sm text-gray-900">
                    {getEntryPoint()}
                  </span>
                </div>

                {/* Order Date */}
                <div className="col-span-2">
                  <span className="text-sm text-gray-900">
                    {getOrderDate(order.orderTime)}
                  </span>
                </div>

                {/* Time Elapsed */}
                <div className="col-span-2">
                  <span className="text-sm text-gray-900">
                    {getTimeElapsed(order.orderTime)}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="col-span-3 flex items-center justify-end gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onViewOrder?.(order);
                    }}
                    className="flex items-center justify-center w-8 h-8 rounded hover:bg-gray-100 transition-colors"
                  >
                    <Icon path={mdiEye} size="16px" color="#6B7280" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onEditOrder?.(order);
                    }}
                    className="flex items-center justify-center w-8 h-8 rounded hover:bg-gray-100 transition-colors"
                  >
                    <Icon path={mdiPencil} size="16px" color="#6B7280" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onDeleteOrder?.(order);
                    }}
                    className="flex items-center justify-center w-8 h-8 rounded hover:bg-gray-100 transition-colors"
                  >
                    <Icon path={mdiDelete} size="16px" color="#DC2626" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};