import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import './CourseCompletionChart.css'

function CourseCompletionChart() {
  const data = [
    { course: 'SCORM Course', Behavioral: 20, Management: 15, Technical: 10 },
    { course: 'Video Course', Behavioral: 15, Management: 20, Technical: 25 },
    { course: 'Single File Course', Behavioral: 25, Management: 10, Technical: 15 },
    { course: 'Video Course', Behavioral: 10, Management: 25, Technical: 20 },
  ]

  return (
    <div className="completion-chart">
      <h3 className="chart-title">COURSE COMPLETION %</h3>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            type="number" 
            domain={[0, 75]} 
            ticks={[15, 30, 45, 60, 75]}
            tickFormatter={(value) => `${value}%`}
          />
          <YAxis dataKey="course" type="category" width={150} />
          <Tooltip formatter={(value) => `${value}%`} />
          <Legend />
          <Bar dataKey="Behavioral" stackId="a" fill="#4A90E2" />
          <Bar dataKey="Management" stackId="a" fill="#FFD700" />
          <Bar dataKey="Technical" stackId="a" fill="#FF4444" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default CourseCompletionChart

