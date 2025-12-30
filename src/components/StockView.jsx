import React, { useState, useEffect } from 'react'
import './StockView.css'

function StockView() {
  const [selectedItem, setSelectedItem] = useState(null)

  // Sample stock items data
  const stockItems = [
    {
      id: 'STK001',
      name: 'Laptop Dell XPS 15',
      category: 'Electronics',
      quantity: 25,
      location: 'Warehouse A',
      status: 'In Stock',
      price: 1299.99
    },
    {
      id: 'STK002',
      name: 'Office Chair Ergonomic',
      category: 'Furniture',
      quantity: 50,
      location: 'Warehouse B',
      status: 'In Stock',
      price: 299.99
    },
    {
      id: 'STK003',
      name: 'Wireless Mouse Logitech',
      category: 'Electronics',
      quantity: 100,
      location: 'Warehouse A',
      status: 'In Stock',
      price: 29.99
    },
    {
      id: 'STK004',
      name: 'Desk Lamp LED',
      category: 'Furniture',
      quantity: 75,
      location: 'Warehouse B',
      status: 'In Stock',
      price: 49.99
    },
    {
      id: 'STK005',
      name: 'Monitor 27" 4K',
      category: 'Electronics',
      quantity: 30,
      location: 'Warehouse A',
      status: 'Low Stock',
      price: 399.99
    },
    {
      id: 'STK006',
      name: 'Keyboard Mechanical',
      category: 'Electronics',
      quantity: 60,
      location: 'Warehouse A',
      status: 'In Stock',
      price: 89.99
    },
    {
      id: 'STK007',
      name: 'Printer HP LaserJet',
      category: 'Electronics',
      quantity: 15,
      location: 'Warehouse B',
      status: 'Low Stock',
      price: 249.99
    },
    {
      id: 'STK008',
      name: 'Headphones Sony WH-1000',
      category: 'Electronics',
      quantity: 40,
      location: 'Warehouse A',
      status: 'In Stock',
      price: 349.99
    }
  ]

  // Set first item as selected by default
  useEffect(() => {
    if (stockItems.length > 0 && !selectedItem) {
      setSelectedItem(stockItems[0])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Generate unique QR code data for each item
  // Each item has a unique QR code based on its unique ID
  const generateQRData = (item) => {
    // Item ID ensures each QR code is completely unique
    return JSON.stringify({
      id: item.id,  // Unique identifier - makes each QR code unique
      name: item.name,
      category: item.category,
      location: item.location
    })
  }

  return (
    <div className="stock-view">
      <div className="stock-header">
        <h1 className="stock-title">Stock Inventory</h1>
        <div className="stock-summary">
          <span className="summary-item">Total Items: {stockItems.length}</span>
          <span className="summary-item">In Stock: {stockItems.filter(item => item.status === 'In Stock').length}</span>
          <span className="summary-item">Low Stock: {stockItems.filter(item => item.status === 'Low Stock').length}</span>
        </div>
      </div>

      <div className="stock-content">
        {/* Left Side - QR Code Section with Items List */}
        <div className="stock-qr-section">
          {/* QR Code Card */}
          <div className="qr-card">
            <h3 className="qr-title">Item QR Code</h3>
            {selectedItem ? (
              <>
                <div className="qr-code-container">
                  {/* QR Code Display - Each item has unique QR code based on ID */}
                  <div className="qr-code-placeholder">
                    <div className="qr-code-box">
                      {/* This is a placeholder - install qrcode.react for actual QR code */}
                      <div className="qr-pattern">
                        <div className="qr-square top-left"></div>
                        <div className="qr-square top-right"></div>
                        <div className="qr-square bottom-left"></div>
                        <div className="qr-dots"></div>
                      </div>
                      <p className="qr-label">QR Code</p>
                      <p className="qr-item-id">{selectedItem.id}</p>
                    </div>
                  </div>
                </div>
                <div className="qr-item-info">
                  <h4>{selectedItem.name}</h4>
                  <p><strong>ID:</strong> {selectedItem.id}</p>
                  <p><strong>Category:</strong> {selectedItem.category}</p>
                  <p><strong>Location:</strong> {selectedItem.location}</p>
                  <p><strong>Quantity:</strong> {selectedItem.quantity}</p>
                  <p><strong>Status:</strong> <span className={`status-badge ${selectedItem.status.toLowerCase().replace(' ', '-')}`}>{selectedItem.status}</span></p>
                </div>
              </>
            ) : (
              <div className="qr-placeholder-text">Select an item to view QR code</div>
            )}
          </div>

          {/* Items List - Now in QR Code Column */}
          <div className="stock-list-section">
            <div className="list-header">
              <h3>All Items</h3>
            </div>

            <div className="items-list">
              {stockItems.map((item) => (
                <div
                  key={item.id}
                  className={`item-card ${selectedItem?.id === item.id ? 'selected' : ''}`}
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="item-header">
                    <span className="item-id">{item.id}</span>
                    <span className={`status-badge ${item.status.toLowerCase().replace(' ', '-')}`}>
                      {item.status}
                    </span>
                  </div>
                  <h4 className="item-name">{item.name}</h4>
                  <div className="item-details">
                    <div className="detail-row">
                      <span className="detail-label">Category:</span>
                      <span className="detail-value">{item.category}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Quantity:</span>
                      <span className="detail-value">{item.quantity}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Location:</span>
                      <span className="detail-value">{item.location}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Price:</span>
                      <span className="detail-value">${item.price.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StockView

