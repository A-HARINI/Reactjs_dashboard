import React from 'react'
import './CoursesContainer.css'

function CoursesContainer() {
  return (
    <div className="courses-container-card">
      {/* Top Section: Active Courses */}
      <div className="course-box active-box">
        {/* Heading on its own line */}
        <span className="course-title">ACTIVE COURSES</span>
        {/* Data row below the heading */}
        <div className="course-data-row">
          <div className="value-box yes-box">
            <div className="value-group">
              <span className="value-number">28</span>
              <span className="value-badge yes-badge">YES</span>
            </div>
          </div>
          <div className="value-box no-box">
            <div className="value-group">
              <span className="value-number">2</span>
              <span className="value-badge no-badge">NO</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Mandatory Courses */}
      <div className="course-box mandatory-box">
        {/* Heading on its own line */}
        <span className="course-title">MANDATORY COURSES</span>
        {/* Data row below the heading */}
        <div className="course-data-row">
          <div className="value-box yes-box">
            <div className="value-group">
              <span className="value-number">22</span>
              <span className="value-badge yes-badge">YES</span>
            </div>
          </div>
          <div className="value-box no-box">
            <div className="value-group">
              <span className="value-number">8</span>
              <span className="value-badge no-badge">NO</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoursesContainer

