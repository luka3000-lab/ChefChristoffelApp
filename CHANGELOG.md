# CHANGELOG - Chef Christoffel App (Part 3 final POE)

## 2025-11-16 - Final POE submission
### Implemented changes since Part 2
- Moved "Add Menu Item" functionality off the Home screen into a dedicated **Add Dish** screen, per lecturer instructions.
- Home screen refactored to show the complete menu and the average price per course (Starters, Mains, Desserts).
- Added a **Guest Filter** screen to allow guests to filter the menu by course.
- Implemented in-memory storage of menu items using a centralized **MenuContext** (array stored in state).
- Added removal functionality for menu items (chef can remove items from Add Dish screen).
- Refactored code into multiple files: `context/MenuContext.tsx`, `screens/*`, `components/DishCard.tsx`, and utility functions.
- Replaced navigation-param pattern with Context API for cleaner data flow.
- Fixed TypeScript typing for navigation and context usage.
- Improved UI: consistent spacing, rounded cards, accent color, and readable statistics box.
- Added unit / manual tests: validated adding, deleting, filtering, and statistics calculations.
- Created final screen recording with voice-over demonstrating all features.
