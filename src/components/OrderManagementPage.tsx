'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@mdi/react';
import clsx from 'clsx';
import { colors, spacing } from '@/lib/design-tokens';
import { 
  mdiArrowLeft,
  mdiArrowRight,
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
  mdiCancel,
  mdiCurrencyUsd,
  mdiFoodForkDrink,
  mdiLogin,
  mdiLogout,
  mdiCash,
  mdiShield,
  mdiFileAccount
} from '@mdi/js';
import { loadOrders, loadOrderDetails, updateOrderStatus } from '@/utils/orderStorage';
// Import the CanarySidebar component
import CanarySidebar, { SidebarVariant, type SidebarSection, type SidebarNavigationItem } from './CanarySidebar';

// Import component library components
import CanaryButton from './temp-components/CanaryButton';
import CanaryInputSearch from './temp-components/CanaryInputSearch';
import CanarySelect, { type CanarySelectOption } from './temp-components/CanarySelect';
import CanaryInputDateRange from './temp-components/CanaryInputDateRange';
import { ButtonType, ButtonSize, ButtonColor } from './temp-components/button-types';
import { InputSize } from './temp-components/types';
import { OrdersTable } from './OrdersTable';
import { OrderDetailsSideSheet } from './OrderDetailsSideSheet';
import { OrderDenialModal } from './OrderDenialModal';

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

// Types for order details
interface OrderItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  specialRequests?: string;
}

interface OrderDetails {
  id: string;
  orderNumber: string;
  guestName: string;
  guestEmail: string;
  roomNumber: string;
  orderDate: string;
  orderTime: string;
  timeElapsed: string;
  items: OrderItem[];
  subtotal: number;
  totalItems: number;
  transactionId: string;
  status: string;
}

// Mock data for orders based on Figma design
const MOCK_ORDERS: Order[] = [
  {
    id: '1',
    orderNumber: 'KING101',
    guestName: 'Emily Smith',
    roomNumber: 'KING101',
    items: ['Yellowtail Sashimi Jalapeno', 'Bigeye and Bluefin Toro Tartare', 'Fresh Oysters (3pc)'],
    total: 215.00,
    status: 'pending',
    orderTime: 'Jan 02, 2025',
    notes: 'No onions please'
  },
  {
    id: '2', 
    orderNumber: 'QUEEN202',
    guestName: 'Michael Smith',
    roomNumber: 'QUEEN202',
    items: ['Club Sandwich', 'French Fries', 'Coca Cola'],
    total: 28.75,
    status: 'pending',
    orderTime: 'Jul 15, 2025'
  },
  {
    id: '3',
    orderNumber: 'SUITE303',
    guestName: 'Emma Brown',
    roomNumber: 'SUITE303',
    items: ['Margherita Pizza', 'Side Salad'],
    total: 32.00,
    status: 'pending',
    orderTime: 'Jan 12, 2025'
  },
  {
    id: '4',
    orderNumber: 'DELUXE404',
    guestName: 'James Davis',
    roomNumber: 'DELUXE404',
    items: ['Sushi', 'Pasta'],
    total: 42.00,
    status: 'pending',
    orderTime: 'Jul 25, 2025'
  },
  {
    id: '5',
    orderNumber: 'EXEC505',
    guestName: 'Olivia Wilson',
    roomNumber: 'EXEC505',
    items: ['Pasta', 'Salad'],
    total: 33.00,
    status: 'pending',
    orderTime: 'Aug 20, 2025'
  },
  {
    id: '6',
    orderNumber: 'PENT606',
    guestName: 'Liam Taylor',
    roomNumber: 'PENT606',
    items: ['Sushi', 'Dumplings'],
    total: 39.00,
    status: 'pending',
    orderTime: 'Sep 16, 2025'
  },
  {
    id: '7',
    orderNumber: 'VISTA707',
    guestName: 'Sophia Anderson',
    roomNumber: 'VISTA707',
    items: ['Burrito', 'French Fries'],
    total: 25.00,
    status: 'pending',
    orderTime: 'Oct 01, 2025'
  },
  {
    id: '8',
    orderNumber: 'OCEAN808',
    guestName: 'Noah Thomas',
    roomNumber: 'OCEAN808',
    items: ['Sushi', 'Pizza'],
    total: 48.00,
    status: 'pending',
    orderTime: 'Dec 20, 2025'
  }
];

// Mock detailed order data
const MOCK_ORDER_DETAILS: Record<string, OrderDetails> = {
  '1': {
    id: '1',
    orderNumber: 'KING101',
    guestName: 'Emily Smith',
    guestEmail: 'esmith@gmail.com',
    roomNumber: 'KING101',
    orderDate: 'September 8, 2024',
    orderTime: '4:30 PM',
    timeElapsed: '45 min',
    items: [
      {
        id: '19',
        name: 'Yellowtail Sashimi Jalapeno',
        image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=64&h=64&fit=crop&crop=center',
        price: 124,
        quantity: 1
      },
      {
        id: '20',
        name: 'Bigeye and Bluefin Toro Tartare',
        image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=64&h=64&fit=crop&crop=center',
        price: 59,
        quantity: 1
      },
      {
        id: '21',
        name: 'Fresh Oysters (3pc)',
        image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=64&h=64&fit=crop&crop=center',
        price: 32,
        quantity: 2
      }
    ],
    subtotal: 215,
    totalItems: 4,
    transactionId: 'RQ123512416',
    status: 'pending'
  },
  '2': {
    id: '2',
    orderNumber: 'QUEEN202',
    guestName: 'Michael Smith',
    guestEmail: 'msmith@gmail.com',
    roomNumber: 'QUEEN202',
    orderDate: 'July 15, 2025',
    orderTime: '2:15 PM',
    timeElapsed: '45 min',
    items: [
      {
        id: '16',
        name: 'Club Sandwich',
        image: 'https://images.unsplash.com/photo-1567909351253-934b28db5b6e?w=64&h=64&fit=crop&crop=center',
        price: 18,
        quantity: 1
      },
      {
        id: '17',
        name: 'French Fries',
        image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=64&h=64&fit=crop&crop=center',
        price: 8,
        quantity: 1
      },
      {
        id: '18',
        name: 'Coca Cola',
        image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=64&h=64&fit=crop&crop=center',
        price: 3,
        quantity: 1
      }
    ],
    subtotal: 29,
    totalItems: 3,
    transactionId: 'RQ223512417',
    status: 'pending'
  },
  '3': {
    id: '3',
    orderNumber: 'SUITE303',
    guestName: 'Emma Brown',
    guestEmail: 'ebrown@gmail.com',
    roomNumber: 'SUITE303',
    orderDate: 'January 12, 2025',
    orderTime: '1:45 PM',
    timeElapsed: '24 min',
    items: [
      {
        id: '22',
        name: 'Margherita Pizza',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=64&h=64&fit=crop&crop=center',
        price: 24,
        quantity: 1
      },
      {
        id: '23',
        name: 'Side Salad',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=64&h=64&fit=crop&crop=center',
        price: 8,
        quantity: 1
      }
    ],
    subtotal: 32,
    totalItems: 2,
    transactionId: 'RQ323512418',
    status: 'pending'
  },
  '4': {
    id: '4',
    orderNumber: 'DELUXE404',
    guestName: 'James Davis',
    guestEmail: 'jdavis@gmail.com',
    roomNumber: 'DELUXE404',
    orderDate: 'July 25, 2025',
    orderTime: '6:00 PM',
    timeElapsed: '18 min',
    items: [
      {
        id: '7',
        name: 'Sushi',
        image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=64&h=64&fit=crop&crop=center',
        price: 24,
        quantity: 1
      },
      {
        id: '9',
        name: 'Pasta',
        image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=64&h=64&fit=crop&crop=center',
        price: 18,
        quantity: 1
      }
    ],
    subtotal: 42,
    totalItems: 2,
    transactionId: 'RQ423512419',
    status: 'pending'
  },
  '5': {
    id: '5',
    orderNumber: 'EXEC505',
    guestName: 'Olivia Wilson',
    guestEmail: 'owilson@gmail.com',
    roomNumber: 'EXEC505',
    orderDate: 'August 20, 2025',
    orderTime: '7:30 PM',
    timeElapsed: '13 min',
    items: [
      {
        id: '9',
        name: 'Pasta',
        image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=64&h=64&fit=crop&crop=center',
        price: 18,
        quantity: 1
      },
      {
        id: '6',
        name: 'Salad',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=64&h=64&fit=crop&crop=center',
        price: 15,
        quantity: 1
      }
    ],
    subtotal: 33,
    totalItems: 2,
    transactionId: 'RQ523512420',
    status: 'pending'
  },
  '6': {
    id: '6',
    orderNumber: 'PENT606',
    guestName: 'Liam Taylor',
    guestEmail: 'ltaylor@gmail.com',
    roomNumber: 'PENT606',
    orderDate: 'September 16, 2025',
    orderTime: '5:45 PM',
    timeElapsed: '7 min',
    items: [
      {
        id: '7',
        name: 'Sushi',
        image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=64&h=64&fit=crop&crop=center',
        price: 24,
        quantity: 1
      },
      {
        id: '4',
        name: 'Dumplings',
        image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=64&h=64&fit=crop&crop=center',
        price: 15,
        quantity: 1
      }
    ],
    subtotal: 39,
    totalItems: 2,
    transactionId: 'RQ623512421',
    status: 'pending'
  },
  '7': {
    id: '7',
    orderNumber: 'VISTA707',
    guestName: 'Sophia Anderson',
    guestEmail: 'sanderson@gmail.com',
    roomNumber: 'VISTA707',
    orderDate: 'October 1, 2025',
    orderTime: '12:30 PM',
    timeElapsed: '5 min',
    items: [
      {
        id: '1',
        name: 'Burrito',
        image: 'https://images.unsplash.com/photo-1566740933430-b5e70b06d2d5?w=64&h=64&fit=crop&crop=center',
        price: 17,
        quantity: 1
      },
      {
        id: '17',
        name: 'French Fries',
        image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=64&h=64&fit=crop&crop=center',
        price: 8,
        quantity: 1
      }
    ],
    subtotal: 25,
    totalItems: 2,
    transactionId: 'RQ723512422',
    status: 'pending'
  },
  '8': {
    id: '8',
    orderNumber: 'OCEAN808',
    guestName: 'Noah Thomas',
    guestEmail: 'nthomas@gmail.com',
    roomNumber: 'OCEAN808',
    orderDate: 'December 20, 2025',
    orderTime: '8:15 PM',
    timeElapsed: '1 min',
    items: [
      {
        id: '7',
        name: 'Sushi',
        image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=64&h=64&fit=crop&crop=center',
        price: 24,
        quantity: 1
      },
      {
        id: '10',
        name: 'Pizza',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=64&h=64&fit=crop&crop=center',
        price: 24,
        quantity: 1
      }
    ],
    subtotal: 48,
    totalItems: 2,
    transactionId: 'RQ823512423',
    status: 'pending'
  }
};

// Main component
interface OrderManagementPageProps {
  onManageMenus?: () => void;
  onViewEmail?: (order: OrderDetails) => void;
  onViewDenialEmail?: (order: OrderDetails, reason: string, comment?: string) => void;
  prepTimeMinutes?: number;
}

export const OrderManagementPage: React.FC<OrderManagementPageProps> = ({ 
  onManageMenus,
  onViewEmail,
  onViewDenialEmail,
  prepTimeMinutes = 30
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [activeTab, setActiveTab] = useState('active-orders');
  const [orders, setOrders] = useState<Order[]>([]);
  const [orderDetails, setOrderDetails] = useState<Record<string, OrderDetails>>({});
  const [selectedOrder, setSelectedOrder] = useState<OrderDetails | null>(null);
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
  const [isSideSheetOpen, setIsSideSheetOpen] = useState(false);
  const [isDenialModalOpen, setIsDenialModalOpen] = useState(false);
  const [orderToDeny, setOrderToDeny] = useState<Order | null>(null);
  const [denialInfoMap, setDenialInfoMap] = useState<Record<string, { reason: string; comment?: string }>>({});

  // Load orders from storage on component mount and when orders change
  const refreshOrders = () => {
    const storedOrders = loadOrders();
    const storedOrderDetails = loadOrderDetails();
    
    // Combine order details first
    const allOrderDetails = { ...MOCK_ORDER_DETAILS, ...storedOrderDetails };
    
    // Filter stored orders to only include those that have corresponding details
    const validStoredOrders = storedOrders.filter(order => allOrderDetails[order.id]);
    
    // Combine with mock orders
    setOrders([...validStoredOrders, ...MOCK_ORDERS]);
    setOrderDetails(allOrderDetails);
  };

  useEffect(() => {
    refreshOrders();
  }, []);

  // Handle order approval (move to in progress)
  const handleApproveOrder = (order: Order) => {
    console.log('handleApproveOrder called with order:', order);
    try {
      const { updatedOrders, updatedOrderDetails } = updateOrderStatus(order.id, 'preparing', orders, orderDetails);
      console.log('updateOrderStatus returned:', { updatedOrders, updatedOrderDetails });
      setOrders(updatedOrders);
      setOrderDetails(updatedOrderDetails);
      console.log('Order approved and moved to in progress:', order.orderNumber);
    } catch (error) {
      console.error('Error in handleApproveOrder:', error);
    }
  };

  // Handle order denial - open modal
  const handleDenyOrder = (order: Order) => {
    setOrderToDeny(order);
    setIsDenialModalOpen(true);
  };

  // Handle denial confirmation from modal
  const handleDenyOrderConfirm = (reason: string, comment?: string) => {
    if (orderToDeny) {
      const { updatedOrders, updatedOrderDetails } = updateOrderStatus(orderToDeny.id, 'cancelled', orders, orderDetails);
      setOrders(updatedOrders);
      setOrderDetails(updatedOrderDetails);
      
      // Store denial info for this order
      setDenialInfoMap(prev => ({
        ...prev,
        [orderToDeny.id]: { reason, comment }
      }));
      
      console.log('Order denied:', orderToDeny.orderNumber, 'Reason:', reason, comment ? `Comment: ${comment}` : '');
      setOrderToDeny(null);
      
      // Close sidesheet if the denied order is currently selected
      if (selectedOrderId === orderToDeny.id) {
        setIsSideSheetOpen(false);
        setSelectedOrderId(null);
        setTimeout(() => setSelectedOrder(null), 400);
      }
    }
  };

  // Handle mark as delivered
  const handleMarkDelivered = (order: Order) => {
    const { updatedOrders, updatedOrderDetails } = updateOrderStatus(order.id, 'delivered', orders, orderDetails);
    setOrders(updatedOrders);
    setOrderDetails(updatedOrderDetails);
    console.log('Order marked as delivered:', order.orderNumber);
  };


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

  // Filter orders by status for different tables
  const filterOrdersByStatus = (status: 'pending' | 'preparing' | 'delivered' | 'cancelled') => {
    return orders.filter(order => {
      const matchesSearch = searchQuery === '' || 
        order.guestName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.orderNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.roomNumber.includes(searchQuery);
      
      const matchesStatusFilter = statusFilter === 'all' || order.status === statusFilter;
      const matchesTableStatus = order.status === status;
      
      return matchesSearch && matchesStatusFilter && matchesTableStatus;
    });
  };

  const newOrders = filterOrdersByStatus('pending');
  const inProgressOrders = filterOrdersByStatus('preparing');
  const deliveredOrders = filterOrdersByStatus('delivered');
  const cancelledOrders = filterOrdersByStatus('cancelled');

  // Calculate the number of pending orders for the sidebar badge
  const pendingOrdersCount = newOrders.length;

  // Create sidebar sections matching Figma design
  const sidebarSections: SidebarSection[] = [
    {
      id: 'guest-management',
      title: 'GUEST MANAGEMENT',
      items: [
        { 
          id: 'upsells', 
          label: 'Upsells', 
          icon: <Icon path={mdiCurrencyUsd} size="20px" color="white" />
        },
        { 
          id: 'f-and-b-ordering', 
          label: 'F&B Ordering', 
          icon: <Icon path={mdiFoodForkDrink} size="20px" color="white" />,
          badge: pendingOrdersCount > 0 ? pendingOrdersCount : undefined
        },
        { 
          id: 'check-in', 
          label: 'Check-in', 
          icon: <Icon path={mdiLogin} size="20px" color="white" />
        },
        { 
          id: 'checkout', 
          label: 'Checkout', 
          icon: <Icon path={mdiLogout} size="20px" color="white" />
        },
        { 
          id: 'messages', 
          label: 'Messages', 
          icon: <Icon path={mdiMessageText} size="20px" color="white" />
        },
        { 
          id: 'digital-tips', 
          label: 'Digital Tips', 
          icon: <Icon path={mdiCash} size="20px" color="white" />
        }
      ]
    },
    {
      id: 'secure-data-payment',
      title: 'SECURE DATA & PAYMENT',
      items: [
        { 
          id: 'authorizations', 
          label: 'Authorizations', 
          icon: <Icon path={mdiShield} size="20px" color="white" />
        },
        { 
          id: 'clients-on-file', 
          label: 'Clients on File', 
          icon: <Icon path={mdiFileAccount} size="20px" color="white" />
        }
      ]
    },
    {
      id: 'settings-section',
      items: [
        { 
          id: 'settings', 
          label: 'Settings', 
          icon: <Icon path={mdiCog} size="20px" color="white" />
        }
      ]
    }
  ];



  return (
    <div className="flex h-screen rounded-xl shadow-canary overflow-hidden">
      {/* Main Navigation Sidebar (Blue variant) */}
      <CanarySidebar 
        variant={SidebarVariant.MAIN}
        sections={sidebarSections}
        logo={canaryLogo}
        selectedItemId="f-and-b-ordering"
        onItemClick={(itemId) => {
          console.log('Clicked navigation item:', itemId);
          if (itemId === 'settings' && onManageMenus) {
            onManageMenus();
          }
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
          <h1 className="font-roboto text-[20px] font-medium" style={{ color: colors.black1 }}>
            Food and Beverage Orders
          </h1>
          <CanaryButton 
            onClick={onManageMenus}
            type={ButtonType.PRIMARY}
            size={ButtonSize.NORMAL}
            color={ButtonColor.NORMAL}
          >
            Manage menus
          </CanaryButton>
        </div>

        {/* Content */}
        <div className="flex-1 bg-white py-8 px-10 sm:px-4 md:px-6 flex flex-col gap-6 overflow-auto">
          {/* Content Container with Max Width and Centering */}
          <div className="w-full max-w-[1200px] mx-auto">
            <div className="space-y-8">
              {/* Search and Filter Section */}
              <div className="flex items-center gap-4">
                <div className="flex-1 max-w-80">
                  <CanaryInputSearch
                    placeholder="Search orders"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="w-48">
                  <CanarySelect
                    options={statusFilterOptions}
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    placeholder="All statuses"
                    size={InputSize.NORMAL}
                  />
                </div>
                <div className="w-80">
                  <CanaryInputDateRange
                    size={InputSize.NORMAL}
                  />
                </div>
              </div>
              
              {/* New Orders Section */}
              <div className="space-y-4">
                <h3 className="font-roboto text-[16px] font-medium" style={{ color: colors.black1 }}>
                  New orders
                </h3>
                <OrdersTable
                  orders={newOrders}
                  orderStatus="pending"
                  selectedOrderId={selectedOrderId ?? undefined}
                  prepTimeMinutes={prepTimeMinutes}
                  onRowClick={(order) => {
                    console.log('Clicked order:', order.orderNumber);
                  }}
                  onViewDetails={(order) => {
                    const selectedOrderDetails = orderDetails[order.id];
                    if (selectedOrderDetails) {
                      setSelectedOrder(selectedOrderDetails);
                      setSelectedOrderId(order.id);
                      setIsSideSheetOpen(true);
                    } else {
                      console.warn('Order details not found for order:', order.id, order.orderNumber);
                    }
                  }}
                  onApprove={handleApproveOrder}
                  onDeny={handleDenyOrder}
                />
              </div>

              {/* In Progress Orders Section */}
              <div className="space-y-4">
                <h3 className="font-roboto text-[16px] font-medium" style={{ color: colors.black1 }}>
                  In progress orders
                </h3>
                <OrdersTable
                  orders={inProgressOrders}
                  orderStatus="preparing"
                  selectedOrderId={selectedOrderId ?? undefined}
                  prepTimeMinutes={prepTimeMinutes}
                  onRowClick={(order) => {
                    console.log('Clicked order:', order.orderNumber);
                  }}
                  onViewDetails={(order) => {
                    const selectedOrderDetails = orderDetails[order.id];
                    if (selectedOrderDetails) {
                      setSelectedOrder(selectedOrderDetails);
                      setSelectedOrderId(order.id);
                      setIsSideSheetOpen(true);
                    } else {
                      console.warn('Order details not found for order:', order.id, order.orderNumber);
                    }
                  }}
                  onDeny={handleDenyOrder}
                  onMarkDelivered={handleMarkDelivered}
                />
              </div>

              {/* Delivered Orders Section */}
              <div className="space-y-4">
                <h3 className="font-roboto text-[16px] font-medium" style={{ color: colors.black1 }}>
                  Delivered orders
                </h3>
                <OrdersTable
                  orders={deliveredOrders}
                  orderStatus="delivered"
                  selectedOrderId={selectedOrderId ?? undefined}
                  prepTimeMinutes={prepTimeMinutes}
                  onRowClick={(order) => {
                    console.log('Clicked order:', order.orderNumber);
                  }}
                  onViewDetails={(order) => {
                    const selectedOrderDetails = orderDetails[order.id];
                    if (selectedOrderDetails) {
                      setSelectedOrder(selectedOrderDetails);
                      setSelectedOrderId(order.id);
                      setIsSideSheetOpen(true);
                    } else {
                      console.warn('Order details not found for order:', order.id, order.orderNumber);
                    }
                  }}
                />
              </div>

              {/* Cancelled Orders Section */}
              <div className="space-y-4">
                <h3 className="font-roboto text-[16px] font-medium" style={{ color: colors.black1 }}>
                  Cancelled orders
                </h3>
                <OrdersTable
                  orders={cancelledOrders}
                  orderStatus="cancelled"
                  selectedOrderId={selectedOrderId ?? undefined}
                  prepTimeMinutes={prepTimeMinutes}
                  onRowClick={(order) => {
                    console.log('Clicked order:', order.orderNumber);
                  }}
                  onViewDetails={(order) => {
                    const selectedOrderDetails = orderDetails[order.id];
                    if (selectedOrderDetails) {
                      setSelectedOrder(selectedOrderDetails);
                      setSelectedOrderId(order.id);
                      setIsSideSheetOpen(true);
                    } else {
                      console.warn('Order details not found for order:', order.id, order.orderNumber);
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Order Details Side Sheet */}
      <OrderDetailsSideSheet
        isOpen={isSideSheetOpen}
        order={selectedOrder ?? undefined}
        prepTimeMinutes={prepTimeMinutes}
        denialInfo={selectedOrder ? denialInfoMap[selectedOrder.id] : undefined}
        onClose={() => {
          setIsSideSheetOpen(false);
          setSelectedOrderId(null);
          // Delay clearing the order to allow slide-out animation
          setTimeout(() => setSelectedOrder(null), 400);
        }}
        onApprove={(order) => {
          // Convert OrderDetails back to Order for the handler
          const orderForHandler: Order = {
            id: order.id,
            orderNumber: order.orderNumber,
            guestName: order.guestName,
            roomNumber: order.roomNumber,
            items: order.items.map(item => item.name),
            total: order.subtotal,
            status: order.status as 'pending' | 'preparing' | 'ready' | 'delivered' | 'cancelled',
            orderTime: order.orderDate
          };
          handleApproveOrder(orderForHandler);
          // Keep side sheet open to show acceptance confirmation
        }}
        onDeny={(order) => {
          // Convert OrderDetails back to Order for the handler
          const orderForHandler: Order = {
            id: order.id,
            orderNumber: order.orderNumber,
            guestName: order.guestName,
            roomNumber: order.roomNumber,
            items: order.items.map(item => item.name),
            total: order.subtotal,
            status: order.status as 'pending' | 'preparing' | 'ready' | 'delivered' | 'cancelled',
            orderTime: order.orderDate
          };
          handleDenyOrder(orderForHandler);
          // Keep side sheet open to show denial confirmation
        }}
        onViewEmail={onViewEmail}
        onViewDenialEmail={onViewDenialEmail}
      />

      {/* Order Denial Modal */}
      <OrderDenialModal
        isOpen={isDenialModalOpen}
        onClose={() => {
          setIsDenialModalOpen(false);
          setOrderToDeny(null);
        }}
        onDenyOrder={handleDenyOrderConfirm}
      />
    </div>
  );
};