# TastyTrails Food Delivery App

The **TastyTrails Food Delivery App** frontend is built with modern web technologies to deliver a smooth, user-friendly experience. Users can browse and view detailed menus, manage their favorites, add items to their cart, and place orders. Admin users have additional functionalities to manage menu items and orders.

## Features

### User Management
- **User Registration**: New users can register an account. An email verification link is sent upon registration.
- **User Login**: Existing users can log in with their credentials.

### Menu Browsing and Categories
- **Home Page**: Users can browse available menu items.
- **Menu**: Full list of menu items available for browsing.
- **Menu Categories**: Users can filter menu items by categories such as Appetizers, Main Courses, Desserts, and Beverages.
- **Menu Details**: Detailed information, including ingredients and pricing, is available for each menu item.

### Favourites Management
- **Add to Favourites**: Users can save menu items for easy access later.
- **Remove from Favourites**: Users can remove items from their favorites list.

### Cart Management and Ordering
- **Add to Cart**: Add items to the cart directly from the menu.
- **View Cart**: Review items added to the cart.
- **Edit Cart**: Modify item quantities or remove items.
- **Delete from Cart**: Delete specific items from the cart.

### Order and Checkout
- **Place Order**: Users can proceed to purchase items in their cart.
- **Checkout**: Finalize the order by entering delivery details and selecting a payment method.

### Profile Management
- **Profile Page**: Users can view and update profile information.

### Menu Management (Admin)
- **All Menu**: Admins can view the entire menu.
- **Add Menu Item**: Admins can add new items to the menu.
- **Delete Menu Item**: Admins can delete specific menu items.

### Order Management (Admin)
- **View All Orders**: Admins can view a list of all orders placed.
- **Update Order Status**: Admins can update the order status (Processing, Cancelled, Delivered, etc.).

## Environment Variables

The app requires the following environment variables:

| Variable          | Description                    |
|-------------------|--------------------------------|
| `VITE_APP_API_URL` | API base URL for backend services |

## Getting Started

### Prerequisites
- Node.js (version 14 or above)
- Vite

### Installation
1. Clone the repository :
```sh
  git clone  https://github.com/Rafiul29/tasty-trails-client.git
```
```sh
 cd tastytrails-frontend
```
```sh
  npm install
```
 Set up environment variables:

 Create a .env file in the root directory.
 Add the API URL:
```bash
VITE_APP_API_URL=http://your-api-url.com
```

Running the Application
```sh
npm run dev
```