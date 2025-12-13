import React from 'react'
import './GradeTable.css'

function GradeTable() {
  const grades = [
    { label: 'A1', value: '04' },
    { label: 'A2', value: '01' },
    { label: 'A3', value: '06' },
    { label: 'B1', value: '04' },
    { label: 'B2', value: '01' },
    { label: 'B3', value: '06' },
    { label: 'C1', value: '04' },
    { label: 'C2', value: '01' },
    { label: 'C3', value: '06' },
  ]

  return (
    <div className="grade-table">
      <h3 className="section-title">Grade</h3>
      <div className="grade-grid">
        {grades.map((grade, index) => (
          <div key={index} className="grade-item">
            <span className="grade-label">{grade.label}</span>
            <span className="grade-value">{grade.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GradeTable


