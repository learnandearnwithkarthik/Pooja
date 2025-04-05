# ☕ Bake & Brew - Cafe Web App

Welcome to **Bake & Brew**, a modern cafe web application where customers can browse the menu, reserve tables, place orders, and enjoy a personalized experience. It also includes a dedicated admin panel for managing menu items.

---

## 🔥 Features

### 👥 Users
- Popup-based Login / Signup
- Browse menu with food images
- Add/remove items from cart
- View order summary with subtotal + delivery
- Place orders with success notification
- Reserve tables easily

### 🛠️ Admin
- Admin-only dashboard layout
- Add new items with image upload (Cloudinary)
- Delete/manage items
- Role-based conditional rendering

---

## 🧰 Tech Stack

| Frontend         | Backend         | Other Tools            |
|------------------|------------------|-------------------------|
| React.js         | Node.js + Express | MongoDB (Mongoose)     |
| React Router     | Multer (file upload) | Cloudinary (image hosting) |
| Tailwind CSS     | JWT Auth         | React Hot Toast        |


---

## 🧪 Setup Instructions

### 1. Clone the Repository
 ```bash
  git clone https://github.com/gagan723/BakeNBrew-cafe-website.git

```
### 2. Install Dependencies on both frontend and backend

 ```bash
  npm install

```
### 3. Create .env file in backend and add

 ```bash
  PORT=8000
  MONGO_URI=your_mongodb_connection_string
  JWT_SECRET=your_jwt_secret
  CLOUDINARY_CLOUD_NAME=your_cloud_name
  CLOUDINARY_API_KEY=your_api_key
  CLOUDINARY_API_SECRET=your_api_secret

```
### 4. Then run backend and frontend server

 ```bash
  cd backend
  npm start
  cd frontend
  npm start

