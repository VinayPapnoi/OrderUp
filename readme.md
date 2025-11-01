# 🍴 OrderUp

A **cross-platform college canteen management system** that enables students to view menu items, place orders, and track order status — while admins can manage the menu, orders, and analyze trends.  
Built with **Flutter**, **Node.js**, using **MongoDB** for data, **Razorpay** for payments, and featuring **ML-powered recommendations** (in future releases).

---

## 📚 Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Team Roles](#team-roles)
- [Setup Instructions](#setup-instructions)
- [Project Structure](#project-structure)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)

---

## 🚀 Project Overview
The app streamlines college canteen operations, making food ordering faster and easier for students while giving admins tools to manage menus, track orders, and view analytics.  
Its goal is to **digitize the canteen experience**, reducing queues and improving management efficiency.

---

## ✨ Features

### 🎓 For Students
- Secure signup/login (Firebase Auth + JWT)
- Browse daily menu with images and prices
- Search items by name or category
- Place orders with quantity and notes
- Real-time order tracking
- View order history and reorder items
- Payments via Razorpay/UPI *(mock in MVP)*
- Push notifications for order updates

### 🧑‍💼 For Admins
- Secure admin login (JWT-based)
- Add, edit, or remove menu items
- Set daily availability
- Manage orders (accept/reject/update)
- Dashboard with summary and analytics
- Export sales history

### 🧠 Machine Learning (Coming Soon)
- Personalized food recommendations
- Trending item detection
- Demand forecasting and insights

---

## 🧰 Technology Stack

| Layer | Technology | Role |
|-------|-------------|------|
| **Mobile Frontend** | Flutter | Student-facing app |
| **State Management** | Riverpod | Flutter state management |
| **Local Storage** | Hive | Offline cache and local persistence |
| **Backend API** | Node.js/Express or Django | Core business logic |
| **Database** | MongoDB | User, menu, and order data |
| **Authentication** | Email/Password + JWT | Secure credentials and roles |
| **Payments** | Razorpay | Payment integration |


## 👥 Team Roles

- **Flutter Developers:** Mobile app, Riverpod + Hive integration  
- **Backend Developer:** API, business logic, JWT auth, payment integration  
- **Machine Learning Engineers:** Recommendation engine, analytics *(post-MVP)*  

---

## ⚙️ Setup Instructions

### 1️⃣ Prerequisites
Ensure you have the following installed:
- Node.js & npm  
- Flutter SDK  
- MongoDB instance  
- Razorpay developer account  

---

### 2️⃣ Clone the Repository
```bash
git clone https://github.com/your-org/OrderUp.git
cd OrderUp
 ```
---
 #### Backend Setup
 ```bash
 cd server
 npm install
```
- Replace the .env.sample with .env
- Setup the envirnment variables 
```bash
npm run dev        # Development mode
npm run build      # Production build
npm start          # Run in production
```
### Flutter Setup
```bash
flutter pub get 
flutter run
```
---
![Flutter](https://img.shields.io/badge/Flutter-3.x-blue?logo=flutter)
![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)
![Django](https://img.shields.io/badge/Django-4.x-darkgreen?logo=django)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen?logo=mongodb)
![Firebase](https://img.shields.io/badge/Firebase-Auth%20%26%20FCM-ffca28?logo=firebase)
![Razorpay](https://img.shields.io/badge/Razorpay-Payments-072A53?logo=razorpay)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Build Passing](https://img.shields.io/badge/Build-Passing-brightgreen)
![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-blue)
---
## ⭐ Support
If you find this project helpful, consider giving it a star 🌟  
Contributions are welcome — see [CONTRIBUTING.md](./CONTRIBUTING.md).
