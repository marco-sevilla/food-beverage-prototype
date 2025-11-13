// Centralized food items data source
// This is the single source of truth for all food items across the application

export interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  menus: string[];
  available: boolean;
}

// Convert to SectionItem format for menus
export interface SectionItem {
  id: string;
  name: string;
  image: string;
  specialRequests?: string;
}

// Centralized food items data
export const FOOD_ITEMS: FoodItem[] = [
  {
    id: '1',
    name: 'Burrito',
    description: 'Delicious burrito with fresh ingredients',
    price: 17.00,
    image: 'https://images.unsplash.com/photo-1566740933430-b5e70b06d2d5?w=40&h=40&fit=crop&crop=center',
    menus: ['Lunch', 'Dinner'],
    available: true
  },
  {
    id: '2',
    name: 'Brownie',
    description: 'Rich chocolate brownie with fudge',
    price: 5.00,
    image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=40&h=40&fit=crop&crop=center',
    menus: ['Desserts'],
    available: true
  },
  {
    id: '3',
    name: 'Croissant',
    description: 'Flaky, buttery croissant fresh from the oven',
    price: 8.00,
    image: 'https://images.unsplash.com/photo-1555507036-ab794f4eeecb?w=40&h=40&fit=crop&crop=center',
    menus: ['Breakfast', 'Lunch'],
    available: true
  },
  {
    id: '4',
    name: 'Dumplings',
    description: 'Steamed dumplings with savory filling',
    price: 15.00,
    image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=40&h=40&fit=crop&crop=center',
    menus: ['Lunch', 'Dinner', 'Happy hour', 'Late night'],
    available: true
  },
  {
    id: '5',
    name: 'Frittata',
    description: 'Italian-style egg dish with fresh herbs',
    price: 10.00,
    image: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=40&h=40&fit=crop&crop=center',
    menus: ['Breakfast', 'Lunch', 'Brunch', 'Late night'],
    available: true
  },
  {
    id: '6',
    name: 'Salad',
    description: 'Fresh mixed greens with seasonal vegetables',
    price: 15.00,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=40&h=40&fit=crop&crop=center',
    menus: ['Lunch', 'Dinner'],
    available: true
  },
  {
    id: '7',
    name: 'Sushi',
    description: 'Fresh sushi rolls with premium ingredients',
    price: 24.00,
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=40&h=40&fit=crop&crop=center',
    menus: ['Lunch', 'Dinner', 'Happy hour', 'Late night'],
    available: true
  },
  {
    id: '8',
    name: 'Pancake',
    description: 'Fluffy pancakes with maple syrup',
    price: 15.00,
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=40&h=40&fit=crop&crop=center',
    menus: ['Breakfast', 'Lunch'],
    available: true
  },
  {
    id: '9',
    name: 'Pasta',
    description: 'Homemade pasta with rich sauce',
    price: 18.00,
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=40&h=40&fit=crop&crop=center',
    menus: ['Lunch', 'Dinner', 'Happy hour', 'Late night'],
    available: true
  },
  {
    id: '10',
    name: 'Pizza',
    description: 'Wood-fired pizza with premium toppings',
    price: 24.00,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=40&h=40&fit=crop&crop=center',
    menus: ['Lunch', 'Dinner', 'Happy hour', 'Late night'],
    available: true
  },
  {
    id: '11',
    name: 'Taco',
    description: 'Authentic tacos with fresh ingredients',
    price: 12.00,
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=40&h=40&fit=crop&crop=center',
    menus: ['Lunch', 'Dinner', 'Happy hour', 'Late night'],
    available: true
  },
  {
    id: '12',
    name: 'Omelette',
    description: 'Classic omelette with choice of fillings',
    price: 13.00,
    image: '',
    menus: ['Breakfast'],
    available: true
  },
  {
    id: '13',
    name: 'Toast',
    description: 'Artisanal toast with seasonal toppings',
    price: 9.00,
    image: '',
    menus: ['Breakfast'],
    available: true
  },
  {
    id: '14',
    name: 'Waffle',
    description: 'Belgian waffle with fresh berries',
    price: 14.00,
    image: 'https://images.unsplash.com/photo-1562376552-0d160a2f1e18?w=40&h=40&fit=crop&crop=center',
    menus: ['Breakfast', 'Lunch'],
    available: true
  },
  {
    id: '15',
    name: 'Quiche',
    description: 'French-style quiche with seasonal vegetables',
    price: 10.00,
    image: 'https://images.unsplash.com/photo-1601314002957-d0613c0f4c27?w=40&h=40&fit=crop&crop=center',
    menus: ['Breakfast'],
    available: true
  }
];

// Helper functions
export const convertToSectionItem = (foodItem: FoodItem): SectionItem => ({
  id: foodItem.id,
  name: foodItem.name,
  image: foodItem.image
});

export const getFoodItemById = (id: string): FoodItem | undefined => 
  FOOD_ITEMS.find(item => item.id === id);

export const getFoodItemsByMenu = (menuName: string): FoodItem[] =>
  FOOD_ITEMS.filter(item => item.menus.includes(menuName));

export const getAvailableFoodItems = (): FoodItem[] =>
  FOOD_ITEMS.filter(item => item.available);

// Format menu display with "+X more" when there are many menus
export const formatMenuDisplay = (menus: string[]): string => {
  if (menus.length <= 2) {
    return menus.join(', ');
  } else if (menus.length === 3) {
    return menus.join(', ');
  } else {
    const visible = menus.slice(0, 2);
    const remaining = menus.length - 2;
    return `${visible.join(', ')}, + ${remaining} more`;
  }
};