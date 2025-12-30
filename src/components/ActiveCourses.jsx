import React from 'react'
import './ActiveCourses.css'

function ActiveCourses() {
  return (
    <div className="active-courses">
      <span className="section-title">ACTIVE COURSES</span>
      <div className="courses-stats">
        {/* Yes Group */}
        <div className="stat-group">
          <span className="stat-number">28</span>
          <span className="stat-badge yes-badge">Yes</span>
        </div>
        {/* No Group */}
        <div className="stat-group">
          <span className="stat-number">2</span>
          <span className="stat-badge no-badge">No</span>
        </div>
      </div>
    </div>
  )
}

export default ActiveCourses


