import { getGuestInfo } from './persistence';

// Types for order management
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

interface CartEntry {
  item: {
    id: string;
    name: string;
    image: string;
    specialRequests?: string;
  };
  quantity: number;
  specialRequests: string;
}

const ORDERS_STORAGE_KEY = 'canary_orders';
const ORDER_DETAILS_STORAGE_KEY = 'canary_order_details';

// Generate unique transaction ID
export const generateTransactionId = (): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = 'RQ';
  for (let i = 0; i < 9; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

// Generate time elapsed string
const generateTimeElapsed = (): string => {
  return '1 min'; // New orders start with 1 minute elapsed
};

// Get current date and time
const getCurrentDateTime = () => {
  const now = new Date();
  const date = now.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  const time = now.toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: '2-digit',
    hour12: true 
  });
  return { date, time };
};

// Save a new order
export const saveNewOrder = (cartEntries: CartEntry[]): { orderId: string; orderDetails: OrderDetails } => {
  const orderId = Date.now().toString();
  const { date, time } = getCurrentDateTime();
  const transactionId = generateTransactionId();
  
  // Calculate total and process items
  let subtotal = 0;
  const processedItems: OrderItem[] = cartEntries.map(entry => {
    // Generate consistent mock price based on item name
    const mockPrice = Math.floor((entry.item.name.length * 7) % 30) + 15;
    const totalPrice = mockPrice * entry.quantity;
    subtotal += totalPrice;
    
    return {
      id: entry.item.id,
      name: entry.item.name,
      image: entry.item.image || '/api/placeholder/64/64',
      price: mockPrice,
      quantity: entry.quantity,
      specialRequests: entry.specialRequests || undefined
    };
  });

  const totalItems = cartEntries.reduce((sum, entry) => sum + entry.quantity, 0);
  
  // Get current guest information
  const guestInfo = getGuestInfo();
  const guestName = guestInfo.name;
  const roomNumber = guestInfo.room;
  const guestEmail = guestName.toLowerCase().replace(' ', '') + '@gmail.com'; // Generate email from name

  // Create order for table
  const order: Order = {
    id: orderId,
    orderNumber: roomNumber, // Use room number as order number
    guestName,
    roomNumber,
    items: cartEntries.map(entry => entry.item.name),
    total: subtotal,
    status: 'pending',
    orderTime: date
  };

  // Create detailed order for side sheet
  const orderDetails: OrderDetails = {
    id: orderId,
    orderNumber: roomNumber,
    guestName,
    guestEmail,
    roomNumber,
    orderDate: date,
    orderTime: time,
    timeElapsed: generateTimeElapsed(),
    items: processedItems,
    subtotal,
    totalItems,
    transactionId,
    status: 'pending'
  };

  // Load existing orders
  const existingOrders = loadOrders();
  const existingOrderDetails = loadOrderDetails();

  // Add new order
  const updatedOrders = [...existingOrders, order];
  const updatedOrderDetails = { ...existingOrderDetails, [orderId]: orderDetails };

  // Save to localStorage
  localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(updatedOrders));
  localStorage.setItem(ORDER_DETAILS_STORAGE_KEY, JSON.stringify(updatedOrderDetails));

  return { orderId, orderDetails };
};

// Load all orders for the table
export const loadOrders = (): Order[] => {
  if (typeof window === 'undefined') return [];
  
  try {
    const stored = localStorage.getItem(ORDERS_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error loading orders:', error);
    return [];
  }
};

// Load all order details for the side sheet
export const loadOrderDetails = (): Record<string, OrderDetails> => {
  if (typeof window === 'undefined') return {};
  
  try {
    const stored = localStorage.getItem(ORDER_DETAILS_STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch (error) {
    console.error('Error loading order details:', error);
    return {};
  }
};

// Update order status (works for both localStorage and mock orders)
export const updateOrderStatus = (orderId: string, newStatus: 'pending' | 'accepted' | 'cancelled', allOrders: any[] = [], allOrderDetails: Record<string, any> = {}): { updatedOrders: any[], updatedOrderDetails: Record<string, any> } => {
  console.log('updateOrderStatus called with:', { orderId, newStatus, allOrdersCount: allOrders.length });
  
  if (typeof window === 'undefined') return { updatedOrders: allOrders, updatedOrderDetails: allOrderDetails };
  
  try {
    // Update order in orders table (both stored and passed orders)
    const storedOrders = loadOrders();
    const updatedStoredOrders = storedOrders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    );
    localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(updatedStoredOrders));
    
    // Update all orders (including mock orders)
    const updatedOrders = allOrders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    );
    
    // Update order in order details (both stored and passed)
    const storedOrderDetails = loadOrderDetails();
    if (storedOrderDetails[orderId]) {
      storedOrderDetails[orderId] = { ...storedOrderDetails[orderId], status: newStatus };
      localStorage.setItem(ORDER_DETAILS_STORAGE_KEY, JSON.stringify(storedOrderDetails));
    }
    
    // Update all order details (including mock)
    const updatedOrderDetails = { ...allOrderDetails };
    if (updatedOrderDetails[orderId]) {
      updatedOrderDetails[orderId] = { ...updatedOrderDetails[orderId], status: newStatus };
    }
    
    return { updatedOrders, updatedOrderDetails };
  } catch (error) {
    console.error('Error updating order status:', error);
    return { updatedOrders: allOrders, updatedOrderDetails: allOrderDetails };
  }
};

// Clear all orders (useful for testing)
export const clearAllOrders = (): void => {
  if (typeof window === 'undefined') return;
  
  localStorage.removeItem(ORDERS_STORAGE_KEY);
  localStorage.removeItem(ORDER_DETAILS_STORAGE_KEY);
};