# TA Assignment: Research Paper Based Web Interface Implementation

## 📋 Assignment Details
**Course**: Web Development
**Assignment Type**: Research Paper Implementation  
**Submission Date**: 15 February 2026  

---

## 📚 Selected Research Paper

**Title**: *Online Medicine Delivery System / E-Pharmacy Management System*  
**Source**: IRJMETS (International Research Journal of Modernization in Engineering Technology and Science)  
**Paper Link**: [https://www.irjmets.com/upload_newfiles/irjmets70400228487/paper_file/irjmets70400228487.pdf](https://www.irjmets.com/upload_newfiles/irjmets70400228487/paper_file/irjmets70400228487.pdf)  
**Domain**: Healthcare Technology / E-Commerce  

### Research Paper Overview
The selected research paper presents an online medicine delivery system designed to facilitate easy access to pharmaceutical products through a web-based interface. The system includes features such as:
- User-friendly product browsing and search functionality
- Shopping cart management
- Secure payment processing
- Administrative controls for inventory management
- User authentication and authorization

This implementation closely follows the HTML output screens and interface designs presented in the research paper.

---

## 💻 Project Implementation: QuickMeds

**Project Name**: QuickMeds - Your Trusted Online Pharmacy  
**Description**: A fully functional online pharmacy website with product browsing, shopping cart, payment processing, and admin panel features.

### 📄 Implemented Web Pages

Based on the research paper's output screens, the following HTML pages have been developed:

1. **index.html** - Home page with featured products, hero section, and search functionality
2. **products.html** - Complete product catalog displaying all available medicines
3. **cart.html** - Shopping cart with quantity controls and item management
4. **login.html** - User authentication forms (Login/Register)

### ✨ Key Features Implemented

1. **Product Catalog System**
   - Display of multiple pharmaceutical products
   - Product details including name, price, and description
   
2. **Search Functionality**
   - Real-time product search feature
   - Filter products by name or category
   
3. **Shopping Cart**
   - Add/Remove products
   - Quantity adjustment controls
   - Real-time price calculation
   - LocalStorage persistence
   - One-click checkout and order confirmation
   
4. **User Authentication**
   - Login and registration forms
   - Form validation

## Usage Instructions

### Running the Website
1. Open `index.html` in your web browser
2. Browse products on the home page or click "Shop Now" / "Products" to see all items
3. Use the search bar to find specific medicines
4. Click "Add to Cart" to add products
5. View cart, adjust quantities, and proceed to checkout
6. Order will be confirmed and cart will be cleared

### Testing Features

#### Search Function
1. Go to home page
2. Enter "vitamin" or "pain" in search bar
3. Press Enter or click Search button
4. Products page will open with filtered results

#### Shopping Cart
1. Add multiple products from any page
2. Go to Cart page
3. Use +/- buttons to adjust quantities
4. Click Remove to delete items
5. View updated totals and proceed to checkout
6. Receive order confirmation and return to home page

## Technical Details

### Technologies Used
- HTML5
- CSS3 (with Flexbox and Grid)
- Vanilla JavaScript
- LocalStorage for data persistence

### Browser Compatibility
- Chrome, Firefox, Safari, Edge (modern browsers)
- Responsive design works on desktop, tablet, and mobile

### Data Storage
- Cart items: localStorage (persists until cleared)

## Notes
- All product images use emoji placeholders with gradient backgrounds
- No backend server required - fully client-side
- Cart data persists in browser localStorage until cleared or checkout is completed

## Future Enhancements
- Backend integration for real data persistence
- User authentication with database
- Product image uploads
- Order history tracking
- Payment gateway integration with multiple payment options
- Admin panel for product management
