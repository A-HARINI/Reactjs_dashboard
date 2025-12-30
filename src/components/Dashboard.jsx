import React from 'react'
import Sidebar from './Sidebar'
import LMSSection from './LMSSection'
import CoursesContainer from './CoursesContainer'
import GradeTable from './GradeTable'
import ELearnTypesChart from './ELearnTypesChart'
import CategoryChart from './CategoryChart'
import NewJoiningsChart from './NewJoiningsChart'
import CourseCompletionChart from './CourseCompletionChart'
import AttemptsChart from './AttemptsChart'
import './Dashboard.css'

function Dashboard() {
  return (
    <div className="dashboard-wrapper">
      <div className="dashboard">
        <Sidebar />
        <div className="dashboard-content">
          <h1 className="dashboard-title">HR Analysis Dashboard</h1>
          
          {/* Main Container: Two columns - Left (75%) and Right (25%) */}
          <div className="flex flex-row items-start gap-6">
            {/* Left Column (75% width) */}
            <div className="flex-[3] flex flex-col gap-6">
              {/* Row 1: LMS Box and Course Cards */}
              <div className="grid grid-cols-5 gap-6 items-stretch">
                <div className="col-span-3">
                  <LMSSection />
                </div>
                <div className="col-span-2">
                  <CoursesContainer />
                </div>
              </div>
              
              {/* Row 2: E-Learn Types and Category % side-by-side */}
              <div className="grid grid-cols-2 gap-6 items-stretch mb-6">
                <ELearnTypesChart />
                <CategoryChart />
              </div>
              
              {/* Row 3: New Joinings and Completion % side-by-side */}
              <div className="grid grid-cols-2 gap-6 items-start">
                <div className="dashboard-card chart-card joinings-chart">
                  <NewJoiningsChart />
                </div>
                <CourseCompletionChart />
              </div>
            </div>
            
            {/* Right Column (25% width) - Sidebar */}
            <div className="flex-[1] flex flex-col gap-6 items-stretch h-full">
              <GradeTable />
              <div className="flex-1">
                <AttemptsChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

