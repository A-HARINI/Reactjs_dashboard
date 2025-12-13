import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import './ELearnTypesChart.css'

function ELearnTypesChart() {
  const data = [
    { name: 'Direct Linked Course', value: 8 },
    { name: 'Single File Course', value: 10 },
    { name: 'Other', value: 15 },
    { name: 'Video Course', value: 6 },
    { name: 'SCORM Course', value: 4 },
  ]

  return (
    <div className="elearn-chart">
      <h3 className="chart-title">E-LEARN TYPES</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" domain={[0, 15]} ticks={[0, 3, 6, 9, 12, 15]} />
          <YAxis dataKey="name" type="category" width={120} />
          <Tooltip />
          <Bar dataKey="value" fill="#4A90E2" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ELearnTypesChart


