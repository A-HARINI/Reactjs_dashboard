import React from 'react'
import './ActiveCourses.css'

function ActiveCourses() {
  return (
    <div className="active-courses">
      <h3 className="section-title">Active Courses</h3>
      <div className="courses-stats">
        <div className="stat-item yes">
          <span className="stat-number">28</span>
          <span className="stat-label">Yes</span>
        </div>
        <div className="stat-item no">
          <span className="stat-number">2</span>
          <span className="stat-label">No</span>
        </div>
      </div>
    </div>
  )
}

export default ActiveCourses


