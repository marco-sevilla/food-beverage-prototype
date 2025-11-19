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
│   ├── AppRouter.tsx                    # Central routing and state management
│   ├── MenuManagementPage.tsx           # Menu & item library management
│   ├── EditItemPage.tsx                # Item editing with mobile preview
│   ├── EditMenuPage.tsx                # Menu configuration interface
│   ├── CreateItemModal.tsx             # New item creation modal
│   ├── DeleteItemModal.tsx             # Item deletion confirmation
│   ├── AnimatedModal.tsx               # Reusable modal with animations
│   ├── OrderManagementPage.tsx         # Staff order processing
│   ├── MobileMenuOrdering.tsx          # Guest mobile ordering
│   ├── OrderDetailsSideSheet.tsx       # Order details with actions
│   ├── EmailPreview.tsx                # Order email templates
│   ├── CompendiumPage.tsx              # Guest content management system
│   ├── EditCompendiumItemPage.tsx      # Compendium item editing with preview
│   ├── GuestHubPage.tsx                # Guest experience homepage
│   ├── GuestItemDetailsPage.tsx        # Individual guest item details
│   ├── GuestHubMobilePreview.tsx       # Mobile preview for guest hub
│   ├── GuestItemDetailsMobilePreview.tsx # Mobile preview for item details
│   └── PageTransition.tsx              # Animation components
├── data/
│   └── foodItems.ts                    # Centralized item data
├── utils/
│   ├── persistence.ts                  # localStorage management (includes compendium)
│   ├── claudeMenuParser.ts             # AI-powered menu parsing with Claude API
│   ├── menuAvailability.ts             # Time-based menu controls
│   └── orderStorage.ts                 # Order data persistence
└── lib/
    └── design-tokens.ts                # Design system tokens
```

## 🛠️ Key Features

### 1. **AI-Powered Menu Management**
- **Intelligent Menu Parsing**: Upload menu images (PDF, JPG, PNG, WebP) and automatically extract items with names, descriptions, and prices using Claude AI
- **Smart Section Detection**: Advanced algorithm that avoids over-segmentation and groups items contextually into logical sections (Mains, Desserts, Sides, etc.)
- **AI Field Indicators**: Visual star icons show which fields were AI-filled, disappearing when manually edited
- **Bulk Operations**: Multi-select functionality for efficient menu and item management with floating action buttons
- **Item Library**: Centralized item management with availability toggles and advanced filtering
- **Menu Configuration**: Drag-and-drop menu building with intelligent section organization
- **Dual Naming System**: Separate internal/external names for operational clarity
- **Image Management**: High-quality image upload with mobile optimization and automatic compression

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

### 4. **Guest Content Management (Compendium Builder)**
- **Section Management**: Organize guest content into logical categories
- **Item Creation**: Rich item editing with images, descriptions, and contact information
- **Action Buttons**: Configurable buttons for food ordering, calling, emailing, or linking
- **Real-time Preview**: Live mobile preview showing guest experience
- **Image Compression**: Automatic image optimization to prevent storage issues
- **Navigation Flow**: Complete guest journey from hub to item details to food ordering

### 5. **Visual & Animation System**
- **Page Transitions**: Smooth blur/fade transitions between views
- **Progressive Loading**: Staggered element animations for polished UX
- **Modal Animations**: Sophisticated open/close animations with backdrop blur
- **Responsive Feedback**: Visual indicators for all user actions

## ⚙️ Configuration

### AI Menu Parsing Setup
- **Anthropic API Key**: Required for Claude AI menu parsing functionality
- **Supported Formats**: PDF, JPG, PNG, WebP images up to 10MB
- **Extraction Capabilities**: 
  - Item names (cleaned of price symbols)
  - Item descriptions (ingredients, preparation details)
  - Prices (converted to numerical values from various formats)
  - Smart section grouping (2-5 logical sections typically)
- **Post-Processing**: Automatic consolidation of over-segmented sections
- **Fallback Handling**: Graceful error recovery with detailed error messages

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
- **CanaryInput**: Enhanced input components with AI-filled state indicators and error handling
- **CanaryCheckbox**: Multi-select functionality for bulk operations with proper sizing
- **CanaryButton**: Consistent button styling across interfaces
- **CanarySelect**: Professional dropdown components
- **CanaryTag**: Dynamic color system for status indicators
- **CanaryChip**: Selection components for forms
- **CanaryModal**: Standardized modal presentations with animation support
- **AI Star Icon**: Custom gradient star indicator for AI-filled fields (`/AI star.svg`)

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
2. **AI Menu Parsing**: Upload menu images in Menu Management → "Create menu" → AI parsing flow
3. **Menu Configuration**: Navigate to Menu Management for item/menu setup with bulk operations
4. **Item Editing**: Edit AI-parsed items with visual indicators showing AI-filled fields
5. **Guest Content**: Use Compendium Builder to create and manage guest-facing content
6. **Mobile Testing**: Use "Go to ordering flow" for guest experience testing
7. **Settings**: Configure prep times and availability in Menu Management > Settings

### AI Setup Process
1. **API Key Configuration**: First-time users will see API key setup modal for Claude integration
2. **Menu Upload**: Drag and drop or click to upload menu files (PDF, JPG, PNG, WebP)
3. **AI Processing**: Claude analyzes the menu and extracts structured data
4. **Review & Edit**: Items appear in Item Library with AI star indicators on parsed fields
5. **Customization**: Modify AI-filled content as needed (stars disappear on edit)

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

## 🔄 Recent Updates (Latest Session)

### 🤖 AI-Powered Menu Management
- ✅ **Intelligent Menu Parsing**: Claude AI integration for automatic menu extraction from uploaded images (PDF, JPG, PNG, WebP)
- ✅ **Enhanced Data Extraction**: Automatically extracts item names, descriptions, and prices with high accuracy
- ✅ **Smart Section Recognition**: Improved algorithm that avoids creating duplicate sections and groups items contextually
- ✅ **Post-Processing Optimization**: Intelligent consolidation of over-segmented sections into logical groups (Mains, Desserts, Sides, Beverages)
- ✅ **API Key Management**: Secure Anthropic API key storage with modal-based setup for Claude integration

### 🌟 AI-Filled Input States
- ✅ **Visual AI Indicators**: Colorful gradient star icons appear next to AI-filled text fields in item editing
- ✅ **Smart Field Detection**: Automatically detects items created from AI parsing (based on "parsed-" ID prefix)
- ✅ **Interactive Behavior**: Star icons disappear when users modify AI-filled content
- ✅ **Component Integration**: Enhanced CanaryInput and Textarea components with AI-filled state support
- ✅ **Design System Compliance**: Follows Figma design specifications with proper spacing and positioning

### 📊 Bulk Operations & Table Management
- ✅ **Bulk Delete Functionality**: Multi-select checkboxes for menus and items with floating delete button
- ✅ **Table Layout Improvements**: Fixed column alignment issues across Menu Management and Item Library tables
- ✅ **Selection State Management**: Efficient Set-based selection tracking with automatic cleanup when switching tabs
- ✅ **Visual Feedback**: Persistent floating action buttons with dynamic text based on selection count

### 🏗️ Guest Experience & Compendium Builder
- ✅ **Compendium Builder**: Complete guest content management system with sections and items
- ✅ **Photo Upload System**: Image upload with compression (max 800px, JPEG 80% quality) for compendium items
- ✅ **Guest Hub Interface**: Dynamic mobile guest experience with logo and personalized content
- ✅ **Mobile Preview Components**: Real-time preview of guest experience in 370px×740px mobile frames
- ✅ **Item Details Pages**: Comprehensive item display with contact information and action buttons

### 🔧 Critical Bug Fixes & Infrastructure
- ✅ **Import Path Resolution**: Fixed `CanaryInput` and `CanarySegmentedControl` import errors
- ✅ **Navigation State Management**: Implemented proper back navigation from guest ordering to item details
- ✅ **Infinite Re-render Fix**: Resolved "Maximum update depth exceeded" error in menu ordering
- ✅ **Image Persistence**: Fixed localStorage quota issues with automatic image compression
- ✅ **Column Alignment**: Resolved table layout issues with proper fixed-width column structure

### 🎨 Enhanced UI/UX Components
- ✅ **AI Star Icon Integration**: Custom SVG star with gradient colors for AI-filled field indicators
- ✅ **Table Header Alignment**: Synchronized column headers with content for perfect visual alignment
- ✅ **Responsive Design**: Enhanced input padding logic for multiple right-side icons (error, AI star, custom addons)
- ✅ **Statler Logo Integration**: Replaced placeholder text with actual hotel logo (`/statler logo.png`)
- ✅ **Mobile Preview Resize**: Updated all mobile previews from 320px to 370px width with proportional scaling

### Previous Session Features
- ✅ **Create New Item Flow**: Modal-based creation with navigation to edit page
- ✅ **Item Deletion System**: Confirmation modal with complete cleanup
- ✅ **Internal/External Names**: Dual naming with auto-sync functionality
- ✅ **Advanced Persistence**: Robust localStorage with error handling
- ✅ **Page Transitions**: Professional animations for navigation
- ✅ **Mobile Image Resize**: Optimized header image sizing (230px height)
- ✅ **High-Quality Images**: Upgraded from 40x40 to 800x600 with optimization

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