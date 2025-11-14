'use client';

import React, { useState } from 'react';
import Icon from '@mdi/react';
import clsx from 'clsx';
import { colors, spacing } from '@/lib/design-tokens';
import { 
  mdiArrowLeft,
  mdiHome,
  mdiCog,
  mdiAccountMultiple,
  mdiClipboardList,
  mdiMessageText,
  mdiChevronDown,
  mdiMagnify,
  mdiFilterOutline,
  mdiCheckCircle,
  mdiClockOutline,
  mdiCancel
} from '@mdi/js';
// Import the CanarySidebar component
import CanarySidebar, { SidebarVariant, type SidebarSection, type SidebarNavigationItem } from './CanarySidebar';

// Import component library components
import CanaryTabs, { type CanaryTab } from './temp-components/CanaryTabs';
import CanaryButton from './temp-components/CanaryButton';
import CanaryInputSearch from './temp-components/CanaryInputSearch';
import CanarySelect, { type CanarySelectOption } from './temp-components/CanarySelect';
import { OrdersTable } from './OrdersTable';

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

// Mock data for orders
const MOCK_ORDERS: Order[] = [
  {
    id: '1',
    orderNumber: '#1001',
    guestName: 'John Smith',
    roomNumber: '1205',
    items: ['Caesar Salad', 'Grilled Salmon', 'Red Wine'],
    total: 45.50,
    status: 'pending',
    orderTime: '2:30 PM',
    notes: 'No onions please'
  },
  {
    id: '2', 
    orderNumber: '#1002',
    guestName: 'Sarah Johnson',
    roomNumber: '0834',
    items: ['Club Sandwich', 'French Fries', 'Coca Cola'],
    total: 28.75,
    status: 'preparing',
    orderTime: '2:15 PM',
    deliveryTime: '3:00 PM'
  },
  {
    id: '3',
    orderNumber: '#1003',
    guestName: 'Michael Chen',
    roomNumber: '1456',
    items: ['Margherita Pizza', 'Side Salad'],
    total: 32.00,
    status: 'ready',
    orderTime: '1:45 PM',
    deliveryTime: '2:45 PM'
  }
];

// Main component
interface OrderManagementPageProps {
  onManageMenus?: () => void;
}

export const OrderManagementPage: React.FC<OrderManagementPageProps> = ({ 
  onManageMenus
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [activeTab, setActiveTab] = useState('active-orders');
  const [orders, setOrders] = useState(MOCK_ORDERS);

  // Create sidebar sections for main navigation
  const sidebarSections: SidebarSection[] = [
    {
      id: 'main',
      items: [
        { 
          id: 'dashboard', 
          label: 'Dashboard', 
          icon: <Icon path={mdiHome} size="24px" />
        },
        { 
          id: 'orders', 
          label: 'Orders', 
          icon: <Icon path={mdiClipboardList} size="24px" />
        },
        { 
          id: 'settings', 
          label: 'Settings', 
          icon: <Icon path={mdiCog} size="24px" />
        },
        { 
          id: 'staff', 
          label: 'Staff', 
          icon: <Icon path={mdiAccountMultiple} size="24px" />
        },
        { 
          id: 'messages', 
          label: 'Messages', 
          icon: <Icon path={mdiMessageText} size="24px" />
        }
      ]
    }
  ];

  // Canary logo component
  const canaryLogo = (
    <img 
      src="/canary-logo.png" 
      alt="Canary" 
      style={{ width: '140px', height: '24px', objectFit: 'contain' }}
    />
  );

  // Filter options for order status
  const statusFilterOptions: CanarySelectOption[] = [
    { label: 'All Orders', value: 'all' },
    { label: 'Pending', value: 'pending' },
    { label: 'Preparing', value: 'preparing' },
    { label: 'Ready', value: 'ready' },
    { label: 'Delivered', value: 'delivered' },
    { label: 'Cancelled', value: 'cancelled' }
  ];

  // Filter orders based on search and status
  const filteredOrders = orders.filter(order => {
    const matchesSearch = searchQuery === '' || 
      order.guestName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.orderNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.roomNumber.includes(searchQuery);
    
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });


  // Tab content for active orders and order history
  const tabContent = {
    'active-orders': (
      <div className="space-y-4">
        {/* Search and Filter Section */}
        <div className="flex items-center gap-4">
          <div className="flex-1 max-w-sm">
            <CanaryInputSearch
              placeholder="Search orders..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="w-48">
            <CanarySelect
              options={statusFilterOptions}
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              placeholder="Filter by status"
            />
          </div>
        </div>
        
        {/* Orders Table */}
        <OrdersTable
          orders={filteredOrders.filter(order => 
            ['pending', 'preparing', 'ready'].includes(order.status)
          )}
          onRowClick={(order) => {
            console.log('Clicked order:', order.orderNumber);
          }}
          onViewOrder={(order) => {
            console.log('View order:', order.orderNumber);
          }}
          onEditOrder={(order) => {
            console.log('Edit order:', order.orderNumber);
          }}
          onDeleteOrder={(order) => {
            console.log('Delete order:', order.orderNumber);
          }}
        />
      </div>
    ),
    'order-history': (
      <div className="space-y-4">
        {/* Search and Filter Section */}
        <div className="flex items-center gap-4">
          <div className="flex-1 max-w-sm">
            <CanaryInputSearch
              placeholder="Search order history..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="w-48">
            <CanarySelect
              options={statusFilterOptions}
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              placeholder="Filter by status"
            />
          </div>
        </div>
        
        {/* Order History Table */}
        <OrdersTable
          orders={filteredOrders.filter(order => 
            ['delivered', 'cancelled'].includes(order.status)
          )}
          onRowClick={(order) => {
            console.log('Clicked order:', order.orderNumber);
          }}
          onViewOrder={(order) => {
            console.log('View order:', order.orderNumber);
          }}
          onEditOrder={(order) => {
            console.log('Edit order:', order.orderNumber);
          }}
          onDeleteOrder={(order) => {
            console.log('Delete order:', order.orderNumber);
          }}
        />
      </div>
    )
  };

  // Tabs configuration
  const tabs: CanaryTab[] = [
    {
      id: 'active-orders',
      label: 'Active Orders',
      content: tabContent['active-orders']
    },
    {
      id: 'order-history',
      label: 'Order History', 
      content: tabContent['order-history']
    }
  ];

  return (
    <div className="flex h-screen rounded-xl shadow-canary overflow-hidden">
      {/* Main Navigation Sidebar (Blue variant) */}
      <CanarySidebar 
        variant={SidebarVariant.MAIN}
        sections={sidebarSections}
        logo={canaryLogo}
        selectedItemId="orders"
        onItemClick={(itemId) => {
          console.log('Clicked navigation item:', itemId);
        }}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full min-w-0">
        {/* Property-level Top Bar */}
        <div className="bg-white border-b border-neutral-200 flex items-center justify-between py-2 px-6 sm:px-4">
          <div className="flex items-center gap-2">
            <span className="font-roboto text-body-sm font-medium text-canary-black-1 truncate">
              Statler New York
            </span>
            <Icon path={mdiChevronDown} size={0.8} />
          </div>

          {/* User Profile */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-canary-black-5 shrink-0" />
            <div className="flex flex-col sm:hidden">
              <span className="font-roboto text-caption font-medium text-canary-black-1">
                Theresa Webb
              </span>
              <span className="font-roboto text-caption-sm font-normal text-canary-black-4 uppercase">
                Operations manager
              </span>
            </div>
            <Icon path={mdiChevronDown} size={0.8} />
          </div>
        </div>

        {/* Product Header */}
        <div className="bg-white border-b border-neutral-200 py-4 px-6 sm:px-4 flex items-center justify-between">
          <h1 className="font-roboto text-subtitle font-medium text-canary-black-1">
            Order Management Dashboard
          </h1>
          <CanaryButton onClick={onManageMenus}>
            Manage menus
          </CanaryButton>
        </div>

        {/* Content */}
        <div className="flex-1 bg-white py-8 px-10 sm:px-4 md:px-6 flex flex-col gap-6 overflow-auto">
          {/* Tabs */}
          <CanaryTabs
            tabs={tabs}
            defaultTab="active-orders"
            onChange={(tabId) => setActiveTab(tabId)}
          />
        </div>
      </div>
    </div>
  );
};