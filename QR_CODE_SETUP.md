# QR Code Setup Instructions

## 📱 Adding Real QR Code Functionality

The StockView component currently shows a placeholder QR code. To display actual QR codes, you need to install a QR code library.

---

## 🔧 Option 1: Using qrcode.react (Recommended)

### **1. Install the library:**
```bash
npm install qrcode.react
```

### **2. Update StockView.jsx:**

Replace the QR code placeholder section with:

```jsx
import { QRCodeSVG } from 'qrcode.react'

// In the component, replace the qr-code-placeholder div with:
<div className="qr-code-container">
  {selectedItem && (
    <QRCodeSVG
      value={generateQRData(selectedItem)}
      size={250}
      level="H"
      includeMargin={true}
    />
  )}
</div>
```

### **3. Full import statement:**
```jsx
import React, { useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import './StockView.css'
```

---

## 🔧 Option 2: Using react-qr-code

### **1. Install the library:**
```bash
npm install react-qr-code
```

### **2. Update StockView.jsx:**

```jsx
import QRCode from 'react-qr-code'

// In the component:
<div className="qr-code-container">
  {selectedItem && (
    <QRCode
      value={generateQRData(selectedItem)}
      size={250}
      style={{ height: "auto", maxWidth: "100%", width: "100%" }}
    />
  )}
</div>
```

---

## 📋 Quick Setup Steps

1. **Install QR code library:**
   ```bash
   npm install qrcode.react
   ```

2. **Update imports in StockView.jsx:**
   ```jsx
   import { QRCodeSVG } from 'qrcode.react'
   ```

3. **Replace QR code placeholder** (around line 85-100) with:
   ```jsx
   <div className="qr-code-container">
     {selectedItem && (
       <QRCodeSVG
         value={generateQRData(selectedItem)}
         size={250}
         level="H"
         includeMargin={true}
       />
     )}
   </div>
   ```

4. **Remove the placeholder CSS** (qr-pattern, qr-square classes) if not needed

---

## 🎯 QR Code Data Format

The `generateQRData` function creates a JSON string with item information:

```jsx
{
  "id": "STK001",
  "name": "Laptop Dell XPS 15",
  "category": "Electronics",
  "location": "Warehouse A"
}
```

You can customize this to include more or less information as needed.

---

## ✅ After Installation

Once you install the library and update the code:
- QR codes will be scannable
- Each item will have a unique QR code
- QR code updates when you select a different item

---

## 📦 Library Comparison

| Library | Pros | Cons |
|---------|------|------|
| **qrcode.react** | SVG-based, scalable, small size | - |
| **react-qr-code** | Simple API, canvas-based | Larger bundle size |

**Recommendation:** Use `qrcode.react` for better performance and scalability.


