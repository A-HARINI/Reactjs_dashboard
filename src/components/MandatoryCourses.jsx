import React from 'react'
import './MandatoryCourses.css'

function MandatoryCourses() {
  return (
    <div className="mandatory-courses">
      <h3 className="section-title">Mandatory Courses</h3>
      <div className="courses-stats">
        <div className="stat-item yes">
          <span className="stat-number">22</span>
          <span className="stat-label">Yes</span>
        </div>
        <div className="stat-item no">
          <span className="stat-number">8</span>
          <span className="stat-label">No</span>
        </div>
      </div>
    </div>
  )
}

export default MandatoryCourses


