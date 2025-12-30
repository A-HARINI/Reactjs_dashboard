import React from 'react'
import './ActiveCoursesCard.css'

function ActiveCoursesCard() {
  return (
    <div className="active-courses-card">
      <h3 className="section-title">Active Courses</h3>
      <div className="courses-stats">
        <div className="stat-item yes">
          <div className="stat-box">
            <span className="stat-label">Yes</span>
            <span className="stat-number">28</span>
          </div>
        </div>
        <div className="stat-item no">
          <div className="stat-box">
            <span className="stat-label">No</span>
            <span className="stat-number">2</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActiveCoursesCard





















