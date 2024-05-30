# Technology and Electronics Brand Website

## Project Overview

This project is a website focused on showcasing various renowned brands in the Technology and Electronics category. The website is built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and features brands such as Apple, Samsung, Sony, Google, Intel, and more. The primary goal of this website is to provide users with a seamless experience in browsing, adding, and managing tech products.

## Technologies Used

- **Frontend:**
  - React.js
  - React Router
  - CSS (or any CSS library)
  - Axios (for API calls)
  - Firebase (for hosting)

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (for database)
  - JWT (for authentication)

- **Authentication:**
  - Firebase Authentication (email/password and Google login)

- **Deployment:**
  - Frontend: Firebase Hosting
  - Backend: Vercel

## Features

1. **Home Page:**
   - Navbar with website name, logo, Home, Add Product, My Cart, and Login links.
   - Banner section with a visually appealing image.
   - Brand section showcasing at least 6 brands with images and names.
   - Featured Products section highlighting top products.
   - Latest News section for the latest updates in the tech world.
   - Footer with contact information and links.

2. **Add Product Page:**
   - Form for adding new products including image, name, brand name, type, price, short description, rating, and add button.
   - Protected route accessible only to logged-in users.

3. **Brand-Specific Page:**
   - Redirects to a brand-specific page on clicking a brand name.
   - Slider with at least 3 advertisement images.
   - Displays at least 4 products with image, name, brand name, type, price, rating, details button, and update button.
   - Message displayed if no products are available for a brand.

4. **Product Details Page:**
   - Detailed information about the product.
   - Add to Cart button.
   - Protected route accessible only to logged-in users.

5. **My Cart Page:**
   - List of products added to the cart.
   - Option to delete products from the cart.
   - Protected route accessible only to logged-in users.

6. **Product Update Page:**
   - Form for updating product information including image, name, brand name, type, price, rating.
   - Protected route accessible only to logged-in users.

7. **Authentication:**
   - Email and password-based authentication.
   - Password validation: minimum 6 characters, includes a capital letter and a special character.
   - Alternative login method using Google.
   - Display user name, profile picture, and logout button in the navbar when logged in.

8. **Error Handling:**
   - 404 page for non-existent routes.

## Bonus Features

1. **Commits & Readme:**
   - Minimum 10 meaningful commits on the client-side repository.
   - Minimum 5 meaningful commits on the server-side repository.
   - Detailed README file for the client-side.

2. **Persistent Authentication:**
   - Users are not redirected to the login page after refreshing a private route.

3. **Responsive Design:**
   - Responsive design for desktop and mobile devices.

4. **Dark/Light Theme Toggle:**
   - Toggle switch for dark and light theme on the homepage.
