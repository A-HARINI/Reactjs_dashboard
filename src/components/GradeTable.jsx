import React from 'react'
import './GradeTable.css'

function GradeTable() {
  const rows = [
    { 
      row: 'A', 
      items: [
        { label: 'A1', value: '04' },
        { label: 'A2', value: '01' },
        { label: 'A3', value: '06' }
      ]
    },
    { 
      row: 'B', 
      items: [
        { label: 'B1', value: '04' },
        { label: 'B2', value: '01' },
        { label: 'B3', value: '06' }
      ]
    },
    { 
      row: 'C', 
      items: [
        { label: 'C1', value: '04' },
        { label: 'C2', value: '01' },
        { label: 'C3', value: '06' }
      ]
    }
  ]

  return (
    <div className="grade-table">
      <h3 className="section-title">GRADE</h3>
      <div className="grade-rows">
        {rows.map((rowData, rowIndex) => (
          <div key={rowIndex} className="grade-row">
            <div className="grade-header">
              {rowData.items.map((item, itemIndex) => (
                <span key={itemIndex} className="grade-label">{item.label}</span>
              ))}
            </div>
            <div className="grade-values-row">
              {rowData.items.map((item, itemIndex) => (
                <div key={itemIndex} className="grade-value-cell">
                  <span className="grade-value">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GradeTable


