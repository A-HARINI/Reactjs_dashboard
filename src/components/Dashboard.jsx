import React from 'react'
import Sidebar from './Sidebar'
import LMSSection from './LMSSection'
import CoursesSection from './CoursesSection'
import GradeTable from './GradeTable'
import ELearnTypesChart from './ELearnTypesChart'
import CategoryChart from './CategoryChart'
import AttemptsChart from './AttemptsChart'
import NewJoiningsChart from './NewJoiningsChart'
import CourseCompletionChart from './CourseCompletionChart'
import './Dashboard.css'

function Dashboard() {
  return (
    <div className="dashboard-wrapper">
      <Sidebar />
      <div className="dashboard">
        <h1 className="dashboard-title">HR Analysis Dashboard</h1>
      
      <div className="dashboard-grid">
        {/* Top Row */}
        <div className="dashboard-card lms-section">
          <LMSSection />
        </div>
        
        <div className="dashboard-card courses-combined">
          <CoursesSection />
        </div>
        
        <div className="dashboard-card grade-section">
          <GradeTable />
        </div>
        
        {/* Middle Row */}
        <div className="dashboard-card chart-card elearn-chart">
          <ELearnTypesChart />
        </div>
        
        <div className="dashboard-card chart-card category-chart">
          <CategoryChart />
        </div>
        
        <div className="dashboard-card chart-card attempts-chart">
          <AttemptsChart />
        </div>
        
        {/* Bottom Row */}
        <div className="dashboard-card chart-card wide joinings-chart">
          <NewJoiningsChart />
        </div>
        
        <div className="dashboard-card chart-card wide completion-chart">
          <CourseCompletionChart />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Dashboard

