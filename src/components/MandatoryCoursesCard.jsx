import React from 'react'
import './MandatoryCoursesCard.css'

function MandatoryCoursesCard() {
  return (
    <div className="mandatory-courses-card">
      <h3 className="section-title">Mandatory Courses</h3>
      <div className="courses-stats">
        <div className="stat-item yes">
          <div className="stat-box">
            <span className="stat-label">Yes</span>
            <span className="stat-number">22</span>
          </div>
        </div>
        <div className="stat-item no">
          <div className="stat-box">
            <span className="stat-label">No</span>
            <span className="stat-number">8</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MandatoryCoursesCard





















