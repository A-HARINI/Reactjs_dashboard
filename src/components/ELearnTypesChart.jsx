import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'

const eLearnData = [
  { name: 'Direct Linked Course', value: 3 },
  { name: 'Single File Course', value: 8 },
  { name: 'Other', value: 14 },
  { name: 'Video Course', value: 6 },
  { name: 'SCORM Course', value: 12 },
]

function ELearnTypesChart() {
  // Formatter to add leading zeros to X-axis ticks
  const formatTick = (value) => {
    return value.toString().padStart(2, '0')
  }

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col h-full" style={{ padding: '32px 24px 24px 24px' }}>
      <h3 className="text-[16px] uppercase tracking-widest" style={{ marginBottom: '32px', fontWeight: 900, color: '#1e293b' }}>
        E-LEARN TYPES
      </h3>
      <div className="flex-1 min-h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={eLearnData} layout="vertical" margin={{ left: 30, right: 30, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={false} vertical={true} stroke="#E5E7EB" />
            <XAxis 
              type="number" 
              domain={[0, 15]} 
              ticks={[0, 3, 6, 9, 12, 15]} 
              axisLine={false} 
              tickLine={false} 
              tick={{fontSize: 10, fill: '#9ca3af'}}
              tickFormatter={formatTick}
            />
            <YAxis dataKey="name" type="category" width={140} axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#6B7280'}} />
            <Bar dataKey="value" fill="#4000ff" barSize={20} radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default ELearnTypesChart


