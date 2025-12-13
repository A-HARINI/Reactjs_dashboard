import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'
import './CategoryChart.css'

function CategoryChart() {
  const data = [
    { name: 'Behavioral', value: 30, color: '#4A90E2' },
    { name: 'Management', value: 40, color: '#FFD700' },
    { name: 'Technical', value: 30, color: '#FF4444' },
  ]

  const COLORS = ['#4A90E2', '#FFD700', '#FF4444']

  return (
    <div className="category-chart">
      <h3 className="chart-title">CATEGORY %</h3>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `${value}%`} />
          <Legend 
            verticalAlign="bottom" 
            height={36}
            formatter={(value, entry) => `${value} - ${entry.payload.value}%`}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default CategoryChart


