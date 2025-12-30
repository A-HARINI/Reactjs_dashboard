import React from 'react'
import './CoursesSection.css'

function CoursesSection() {
  return (
    <div className="courses-section">
      <div className="course-subsection">
        <h3 className="section-title">ACTIVE COURSES</h3>
        <div className="courses-stats">
          <div className="stat-box yes-box">
            <span className="stat-number">28</span>
            <span className="stat-badge yes-badge">Yes</span>
          </div>
          <div className="stat-box no-box">
            <span className="stat-number">2</span>
            <span className="stat-badge no-badge">No</span>
          </div>
        </div>
      </div>
      
      <div className="course-subsection">
        <h3 className="section-title">MANDATORY COURSES</h3>
        <div className="courses-stats">
          <div className="stat-box yes-box">
            <span className="stat-number">22</span>
            <span className="stat-badge yes-badge">Yes</span>
          </div>
          <div className="stat-box no-box">
            <span className="stat-number">8</span>
            <span className="stat-badge no-badge">No</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoursesSection

