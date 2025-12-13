import React from 'react'
import './LMSSection.css'

function LMSSection() {
  return (
    <div className="lms-section">
      <h3 className="lms-title">LMS</h3>
      <div className="lms-number">30</div>
      <div className="lms-progress-container">
        <div className="lms-progress-bar">
          <div className="progress-segment not-started" style={{ width: '70%' }}></div>
          <div className="progress-segment declined" style={{ width: '3%' }}></div>
          <div className="progress-segment in-progress" style={{ width: '15%' }}></div>
          <div className="progress-segment completed" style={{ width: '15%' }}></div>
        </div>
        <div className="lms-legend">
          <div className="legend-item">
            <span className="legend-dot not-started-dot"></span>
            <span className="legend-label">70% Not Started</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot declined-dot"></span>
            <span className="legend-label">03% Declined</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot in-progress-dot"></span>
            <span className="legend-label">15% In Progress</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot completed-dot"></span>
            <span className="legend-label">15% Completed</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LMSSection

