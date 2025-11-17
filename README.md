# 🍽️ Canary Food & Beverage Prototype

A comprehensive food and beverage ordering management system for hotels, featuring staff order management, menu configuration, mobile guest ordering, and advanced workflow automation.

## 🎯 Project Overview

This prototype demonstrates a complete F&B ordering ecosystem with:
- **Staff Order Management**: Process incoming orders with visual priority indicators
- **Menu Management**: Configure menus, items, and availability settings  
- **Mobile Guest Experience**: End-to-end guest ordering flow
- **Advanced Workflow**: Email notifications, denial processing, and dynamic time tracking

## 🚀 Recent Major Features

### 📋 Enhanced Menu & Item Management
- **Create New Item Flow**: Complete modal-based item creation with auto-navigation to edit page
- **Item Deletion System**: Confirmation modal with complete removal from localStorage, Item Library, and mobile menus
- **Internal/External Names**: Dual naming system for staff vs guest-facing item names
- **Image Management**: High-quality image upload with persistence across sessions
- **Advanced Item Editing**: Real-time preview with mobile mockup for guest experience

### 🎨 Page Transition System
- **Smooth Navigation**: Professional page transitions with blur/fade effects (400ms timing)
- **Progressive Animations**: Elements fade in with staggered delays (80ms intervals)
- **Consistent Experience**: Same animation system across Menu Management, Edit Menu, and Edit Item pages
- **Performance Optimized**: Hardware-accelerated transitions with proper cleanup

### 🔧 Technical Infrastructure
- **Advanced Persistence**: Robust localStorage system with item/image separation and cleanup
- **Error Handling**: Comprehensive null-safety for data loading and display
- **State Synchronization**: Real-time updates between localStorage and component state
- **Type Safety**: Full TypeScript coverage with proper interface definitions

### 🏗️ Component Architecture Improvements
- **Modal System**: Reusable AnimatedModal component with consistent styling
- **Form Management**: Auto-syncing fields with validation and error states
- **Data Layer**: Centralized food items with proper CRUD operations
- **UI Components**: Following established design system patterns

## 📁 Project Structure

```
src/
├── components/
│   ├── AppRouter.tsx              # Central routing and state management
│   ├── MenuManagementPage.tsx     # Menu & item library management
│   ├── EditItemPage.tsx          # Item editing with mobile preview
│   ├── EditMenuPage.tsx          # Menu configuration interface
│   ├── CreateItemModal.tsx       # New item creation modal
│   ├── DeleteItemModal.tsx       # Item deletion confirmation
│   ├── AnimatedModal.tsx         # Reusable modal with animations
│   ├── OrderManagementPage.tsx   # Staff order processing
│   ├── MobileMenuOrdering.tsx    # Guest mobile ordering
│   ├── OrderDetailsSideSheet.tsx # Order details with actions
│   ├── EmailPreview.tsx          # Order email templates
│   └── PageTransition.tsx        # Animation components
├── data/
│   └── foodItems.ts              # Centralized item data
├── utils/
│   ├── persistence.ts            # localStorage management
│   ├── menuAvailability.ts       # Time-based menu controls
│   └── orderStorage.ts           # Order data persistence
└── lib/
    └── design-tokens.ts          # Design system tokens
```

## 🛠️ Key Features

### 1. **Advanced Menu Management**
- **Item Library**: Centralized item management with availability toggles
- **Menu Configuration**: Drag-and-drop menu building with section organization
- **Dual Naming System**: Separate internal/external names for operational clarity
- **Image Management**: High-quality image upload with mobile optimization
- **Real-time Persistence**: All changes automatically saved to localStorage

### 2. **Professional Order Processing**
- **Dynamic Priority System**: Color-coded time thresholds based on prep time settings
- **Comprehensive Denial Flow**: Reason selection with custom comments
- **Email Integration**: Professional order confirmation templates
- **State Management**: Real-time updates across all order tables
- **Notification Badges**: Pending order indicators in navigation

### 3. **Mobile Guest Experience**
- **Responsive Design**: Optimized for mobile ordering experience
- **Real-time Cart Management**: Persistent cart state with special requests
- **Menu Availability**: Time-based menu display with automatic updates
- **Order Confirmation**: Professional receipt and status tracking

### 4. **Visual & Animation System**
- **Page Transitions**: Smooth blur/fade transitions between views
- **Progressive Loading**: Staggered element animations for polished UX
- **Modal Animations**: Sophisticated open/close animations with backdrop blur
- **Responsive Feedback**: Visual indicators for all user actions

## ⚙️ Configuration

### Order Management Settings
- **Prep Time Configuration**: 15-60 minute options affecting color thresholds
- **Time Threshold System**:
  - 🟢 **Green (Healthy)**: 0-50% of prep time
  - 🟡 **Yellow (Attention)**: 50-80% of prep time
  - 🔴 **Red (Critical)**: 80%+ of prep time

### Menu Availability
- **Time-based Controls**: Configure when menus are available
- **Real-time Updates**: Automatic menu hiding based on current time
- **Staff Overrides**: Manage availability independent of schedule

## 🎨 Design System

### Component Library Integration
- **CanaryButton**: Consistent button styling across interfaces
- **CanarySelect**: Professional dropdown components
- **CanaryTag**: Dynamic color system for status indicators
- **CanaryChip**: Selection components for forms
- **CanaryModal**: Standardized modal presentations

### Animation Standards
- **Page Transitions**: 400ms blur → fade timing
- **Element Stagger**: 80ms progressive delays
- **Modal Timing**: 300ms open, 150ms close
- **Hardware Acceleration**: GPU-optimized animations

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/marco-sevilla/food-beverage-prototype.git
cd food-beverage-prototype

# Install dependencies
npm install

# Start development server
npm run dev
```

### Development Workflow
1. **Order Management**: Access via main dashboard for order processing
2. **Menu Configuration**: Navigate to Menu Management for item/menu setup
3. **Mobile Testing**: Use "Go to ordering flow" for guest experience testing
4. **Settings**: Configure prep times and availability in Menu Management > Settings

## 📊 Data Persistence

### localStorage Architecture
- **Items Storage**: `items` key for item data, `images` key for uploaded images
- **Menu Storage**: Menu configurations and availability settings
- **Order Storage**: Order history and processing states
- **Settings Storage**: Prep time and operational preferences

### Data Consistency
- **Automatic Sync**: Real-time synchronization between storage and UI
- **Error Recovery**: Graceful handling of missing or corrupted data
- **Migration Support**: Backwards-compatible data structure evolution

## 🔄 Recent Updates (Current Session)

### Item Management Enhancements
- ✅ **Create New Item Flow**: Modal-based creation with navigation to edit page
- ✅ **Item Deletion System**: Confirmation modal with complete cleanup
- ✅ **Internal/External Names**: Dual naming with auto-sync functionality
- ✅ **Advanced Persistence**: Robust localStorage with error handling
- ✅ **Page Transitions**: Professional animations for navigation
- ✅ **Mobile Image Resize**: Optimized header image sizing (230px height)
- ✅ **High-Quality Images**: Upgraded from 40x40 to 800x600 with optimization

### Technical Improvements
- ✅ **Error Handling**: Null-safe formatMenuDisplay for undefined arrays
- ✅ **State Management**: Enhanced item loading with proper fallbacks
- ✅ **Animation System**: Consistent progressive fade-in across all pages
- ✅ **Data Integrity**: Proper property initialization for loaded items
- ✅ **Performance**: Optimized re-rendering with dependency management

## 🔮 Future Roadmap

### Short-term Enhancements
- [ ] **Advanced Analytics**: Order trends and performance metrics
- [ ] **Staff Notifications**: Real-time alerts for urgent orders
- [ ] **Bulk Operations**: Multi-select for order processing
- [ ] **Search & Filter**: Advanced item and order searching

### Long-term Vision
- [ ] **POS Integration**: Connect with existing hotel systems
- [ ] **Customer App**: Dedicated guest ordering application
- [ ] **Multi-property**: Scale across hotel chains
- [ ] **Advanced Reporting**: Comprehensive business intelligence

## 🛡️ Quality Standards

### Code Quality
- **TypeScript Strict Mode**: Full type safety enforcement
- **Component Patterns**: Consistent architectural patterns
- **Error Boundaries**: Comprehensive error handling
- **Performance**: Optimized rendering and state management

### Testing Strategy
- **Component Testing**: Unit tests for critical functionality
- **Integration Testing**: End-to-end workflow validation
- **Performance Testing**: Animation and transition smoothness
- **Accessibility**: WCAG compliance for all interfaces

---

## 📝 Changelog

For detailed change history, see [CHANGELOG.txt](./CHANGELOG.txt)

## 🤝 Contributing

This is a prototype demonstration project. For questions or feedback, please refer to the development team.

## 📄 License

Copyright © 2024 Canary Technologies. All rights reserved.

---

**Built with modern web technologies for exceptional user experiences in hospitality F&B operations.**