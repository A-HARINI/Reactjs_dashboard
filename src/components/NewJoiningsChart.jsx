import React, { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import './NewJoiningsChart.css'

function NewJoiningsChart() {
  const [timeRange, setTimeRange] = useState('Last 4 Months')

  const data = [
    { month: 'August', Behavioral: 2, Management: 1, Technical: 1 },
    { month: 'September', Behavioral: 3, Management: 2, Technical: 2 },
    { month: 'October', Behavioral: 2, Management: 3, Technical: 1 },
    { month: 'November', Behavioral: 1, Management: 2, Technical: 2 },
  ]

  return (
    <div className="joinings-chart">
      <div className="chart-header">
        <h3 className="chart-title">NO. OF NEW JOININGS</h3>
        <select 
          className="time-selector" 
          value={timeRange} 
          onChange={(e) => setTimeRange(e.target.value)}
        >
          <option value="Last week">Last week</option>
          <option value="Last month">Last month</option>
          <option value="Last 4 Months">Last 4 months</option>
          <option value="Last year">Last year</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" domain={[0, 5]} ticks={[1, 2, 3, 4, 5]} />
          <YAxis dataKey="month" type="category" width={100} />
          <Tooltip />
          <Legend />
          <Bar dataKey="Behavioral" stackId="a" fill="#4A90E2" />
          <Bar dataKey="Management" stackId="a" fill="#FFD700" />
          <Bar dataKey="Technical" stackId="a" fill="#FF4444" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default NewJoiningsChart


