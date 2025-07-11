# 🌐 Travelia - Travel & Accommodation Booking Platform

A responsive travel booking platform built with **React**, **TypeScript**, and **Material UI**. Users can explore destinations, book hotels, and get in touch through a dynamic **Contact** page.

## 🚀 Features

- 🧭 Interactive dashboard with search and filter  
- 🏨 Accommodation listing and booking functionality  
- 📅 Date pickers for flexible travel planning  
- 💬 **Contact page** integrated with [EmailJS](https://www.emailjs.com/)  
- ✨ Smooth animations using [Framer Motion](https://www.framer.com/motion/)  
- 🎨 Clean UI with [Material UI](https://mui.com/)  
- 🔄 Data fetching and caching with [React Query](https://tanstack.com/query/latest) and [Axios](https://axios-http.com/)  
- 📝 Form management and validation with [Formik](https://formik.org/)  
- 🔧 State management using [Redux Toolkit](https://redux-toolkit.js.org/)  
- 📚 Component-driven development with [Storybook](https://storybook.js.org/) and visual testing via [Chromatic](https://www.chromatic.com/)  
- 🔒 Form validation and feedback messages  
- ⚙️ Fully responsive and mobile-friendly  

## 🧑‍💼 User Roles & Pages

### 🔐 Admin

The **Admin** has access to a dashboard with full management capabilities:

- 📊 Statistics and interactive charts  
- 🏙️ Manage **Cities**
- 🏨 Manage **Hotels**
- 🛏️ Manage **Rooms**

### 👤 User

The **User** has access to:

- 🏠 **Home Page**:
  - Featured Deals
  - Recently Visited Hotels
  - Trending Hotels

- 🔍 **Search Page**:
  - Filter by:
    - Location
    - Guest count & date range
    - Price range
    - Amenities
    - Star Rating

- 🏨 **Hotel Details Page**:
  - Hotel gallery
  - Available rooms
  - Hotel location on map
  - Hotel reviews

- 🛒 **Cart & Checkout**:
  - Add or remove rooms from cart
  - Place order
  - View order summary and download as PDF

- 📬 **Contact Page**:
  - Send messages via **EmailJS**
  - Animated feedback using **Framer Motion**

## 🔑 Login Credentials

Use the following credentials to log in as a **User** or **Admin** for testing:

### 👤 User
- **Username:** `user`  
- **Password:** `user`

### 🔐 Admin
- **Username:** `admin`  
- **Password:** `admin`

## ✉️ Contact Page Integration

Added a new **Contact** page with a simple inquiry form. It's connected to **EmailJS** to allow users to send messages without a backend. The form elements and feedback messages are animated using **Framer Motion**.

### 📮 EmailJS Setup

Create an account on [emailjs.com](https://www.emailjs.com/), configure a service and template, and then add the following variables to your `.env` file:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### ✨ Sample Animation with Framer Motion

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  <ContactForm />
</motion.div>
```

## 🛠️ Getting Started

### 📦 Installation

```bash
git clone https://github.com/Dalia-Alawneh/Travel-and-Accommodation-Booking.git
cd travelia
npm install
```

### ▶️ Run the App

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

## 🧪 Testing

This project uses **Vitest** and **React Testing Library**.

```bash
npm run test
```

## 📜 License

MIT © 2025 Dalia Alawneh

## 🎀 Acknowledgements
This project marks the final deliverable of my internship training at [Foothill Technology Solutions](https://www.foothillsolutions.com/).  
I am grateful to Foothill for providing me with the opportunity to participate in this internship cycle and for their continuous support and guidance throughout the development of this project.  

## 🙋‍♀️ Author

Made with ❤️ by **Dalia Alawneh**
[Portfolio](https://dalia-alawneh7-portfolio.onrender.com/) • [GitHub](https://github.com/Dalia-Alawneh) • [LinkedIn](https://linkedin.com/in/dalia-alawneh)
