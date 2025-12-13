import React from 'react'
import './CoursesSection.css'

function CoursesSection() {
  return (
    <div className="courses-section">
      <div className="courses-row">
        <div className="course-item">
          <h3 className="section-title">MANDATORY COURSES</h3>
          <div className="courses-stats">
            <div className="stat-item yes">
              <div className="stat-box combined-box">
                <span className="stat-number">22</span>
                <span className="stat-label">Yes</span>
              </div>
            </div>
            <div className="stat-item no">
              <div className="stat-box combined-box">
                <span className="stat-number">8</span>
                <span className="stat-label">No</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="course-item">
          <h3 className="section-title">ACTIVE COURSES</h3>
          <div className="courses-stats">
            <div className="stat-item yes">
              <div className="stat-box combined-box">
                <span className="stat-number">28</span>
                <span className="stat-label">Yes</span>
              </div>
            </div>
            <div className="stat-item no">
              <div className="stat-box combined-box">
                <span className="stat-number">2</span>
                <span className="stat-label">No</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoursesSection

