import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import './AttemptsChart.css'

function AttemptsChart() {
  const data = [
    { attempts: '01', value: 5 },
    { attempts: '02', value: 12 },
    { attempts: '03', value: 18 },
    { attempts: '04', value: 21 },
    { attempts: '05', value: 3 },
  ]

  return (
    <div className="attempts-chart">
      <h3 className="chart-title">NO. OF ATTEMPTS BY EMPLOYEES</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="attempts" />
          <YAxis domain={[0, 25]} ticks={[0, 5, 10, 15, 20, 25]} />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#4A90E2" name="No of attempts" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AttemptsChart


