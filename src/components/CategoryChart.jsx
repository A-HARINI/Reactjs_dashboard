import React from 'react'
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts'

const COLORS = ["#4000ff", "#F4C430", "#F36A6A"]

const catData = [
  { name: 'Behavioral', value: 30 },
  { name: 'Management', value: 40 },
  { name: 'Technical', value: 30 },
]

function CategoryChart() {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col h-full" style={{ padding: '32px 24px 24px 24px' }}>
      <h3 className="text-[16px] uppercase tracking-widest" style={{ marginBottom: '32px', fontWeight: 900, color: '#1e293b' }}>
        CATEGORY %
      </h3>
      <div className="flex-1 min-h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={catData} innerRadius={60} outerRadius={80} dataKey="value">
              {catData.map((entry, index) => <Cell key={index} fill={COLORS[index]} />)}
            </Pie>
            <Legend 
              layout="vertical" 
              align="right" 
              verticalAlign="middle" 
              iconType="circle"
              formatter={(value, entry) => `${value} (${entry.payload.value}%)`}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default CategoryChart


