import React from 'react'
import './MandatoryCourses.css'

function MandatoryCourses() {
  return (
    <div className="mandatory-courses">
      <span className="section-title">MANDATORY COURSES</span>
      <div className="courses-stats">
        {/* Yes Group */}
        <div className="stat-group">
          <span className="stat-number">22</span>
          <span className="stat-badge yes-badge">Yes</span>
        </div>
        {/* No Group */}
        <div className="stat-group">
          <span className="stat-number">8</span>
          <span className="stat-badge no-badge">No</span>
        </div>
      </div>
    </div>
  )
}

export default MandatoryCourses


