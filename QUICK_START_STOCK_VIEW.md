# Quick Start - Stock View

## 🚀 View Stock Screen in 2 Steps

### **Step 1: Update main.jsx**

Change this line:
```jsx
import App from './App'
```

To this:
```jsx
import StockApp from './StockApp'
```

And change:
```jsx
<App />
```

To:
```jsx
<StockApp />
```

### **Step 2: Run the app**

```bash
npm run dev
```

**Done!** Open your browser to see the stock inventory screen.

---

## 📋 What You'll See

- **Left Side:** QR code for selected item + item details
- **Right Side:** Grid of all stock items
- **Top:** Summary statistics

**Click any item** to see its QR code and details!

---

## 🔄 Switch Back to Dashboard

Change `main.jsx` back to:
```jsx
import App from './App'
// ...
<App />
```

---

## 📱 Features

✅ QR Code display (placeholder - install library for real QR)  
✅ Item list with 8 sample items  
✅ Click to select items  
✅ Status badges (In Stock / Low Stock)  
✅ Responsive design  
✅ Item details (ID, name, category, quantity, location, price)

---

**That's it!** Simple and ready to use. 🎯


