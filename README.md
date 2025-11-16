#  Chef Christoffel Menu App

---

##  Project Overview
Chef Christoffel is a private chef renowned for his personalised culinary experiences.  
He required a cross-platform mobile application to manage a dynamic daily menu that changes according to clients’ preferences.  
This React Native + Expo application acts as a **digital menu system**, allowing Chef Christoffel to add, view, filter, delete and analyse dishes easily.

---

##  Features Implemented
| Feature | Description |
|----------|--------------|
| **Add Dish Screen** | Enter *Dish Name*, *Description*, select *Course* (Starter/Main/Dessert), and *Price*. |
| **Home Screen** | Displays total dishes and average price per course; buttons for *Add Dish*, *View Menu*, and *Summary*. |
| **Guest Filter Screen** | Provide a screen that shows menu items filtered by course (Starters/Mains/Desserts). |
| **View Menu Screen** | Lists all dishes with filter options by course and delete functionality. |
| **Summary Screen** | Shows totals and average prices per course for quick overview. |
| **Dynamic Data** | Uses temporary state (no hard-coded or persistent data). |
| **Cross-Platform** | Runs on Android, iOS and Web via Expo. |

---

##  Technologies Used
- React Native (Expo SDK 51)  
- TypeScript  
- React Navigation v6  
- @react-native-picker/picker  
- React Native Screens and Safe Area Context  
- Visual Studio Code / Cloud Labs Virtual Studio  

---

## Change Log
All changes since Part 2 are documented in `CHANGELOG.md`. Highlights:
- Add/Remove moved to dedicated Add Dish screen.
- Menu stored in array via MenuContext.
- Home screen shows average price per course.
- Guest Filter screen added.


##  How to Run the App

1. **Clone this repository**
   ```bash
   git clone https://github.com/luka3000-lab/ChefChristoffelApp.git
   cd ChefChristoffelApp
## Install dependencies
npm install

## Start the app
npx expo start

## Run on any of the following:

Web Preview: press w in Expo DevTools

Expo Go App: scan QR code on phone

Android Emulator (optional if available)

## Demonstration Video
A full screen-recorded demo with voice-over is available on YouTube:
👉https://youtu.be/xV0LE_rLwCM

## GitHub Repository
👉 https://github.com/luka3000-lab/ChefChristoffelApp
