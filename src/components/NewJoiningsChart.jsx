import React, { useState } from 'react'
import ReactECharts from 'echarts-for-react'
import './NewJoiningsChart.css'

function NewJoiningsChart() {
  const [timeRange, setTimeRange] = useState('Last 4 Months')

  const data = [
    { month: 'November', Behavioral: 3.1, Management: 0.8, Technical: 0.2 },
    { month: 'October', Behavioral: 1.8, Management: 1.4, Technical: 0.3 },
    { month: 'September', Behavioral: 3.2, Management: 0.3, Technical: 0 },
    { month: 'August', Behavioral: 3.2, Management: 0, Technical: 0 },
  ]

  const option = {
    tooltip: {
      show: false
    },
    grid: {
      left: '100px',
      right: '30px',
      bottom: '60px',
      top: '10px',
      containLabel: false
    },
    xAxis: {
      type: 'value',
      max: 5,
      min: 0,
      axisLabel: {
        formatter: (value) => String(value).padStart(2, '0'),
        color: '#6B7280',
        fontSize: 12,
        fontFamily: 'Inter',
        margin: 15
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#E5E7EB',
          type: 'dashed',
          width: 1
        }
      }
    },
    yAxis: {
      type: 'category',
      data: data.map(d => d.month),
      axisLabel: {
        color: '#6B7280',
        fontSize: 12,
        fontFamily: 'Inter',
        margin: 12
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      boundaryGap: true
    },
    legend: {
      show: true,
      bottom: 0,
      left: 'center',
      itemGap: 24,
      textStyle: {
        fontSize: 12,
        fontFamily: 'Inter',
        color: '#111827'
      },
      icon: 'circle',
      itemWidth: 8,
      itemHeight: 8
    },
    series: [
      {
        name: 'Behavioral',
        type: 'bar',
        stack: 'total',
        data: data.map(d => d.Behavioral),
        itemStyle: {
          color: '#4000ff',
          borderRadius: [6, 0, 0, 6]
        },
        barWidth: 8
      },
      {
        name: 'Management',
        type: 'bar',
        stack: 'total',
        data: data.map(d => d.Management),
        itemStyle: {
          color: '#F4C430'
        },
        barWidth: 8
      },
      {
        name: 'Technical',
        type: 'bar',
        stack: 'total',
        data: data.map(d => d.Technical),
        itemStyle: {
          color: '#F36A6A',
          borderRadius: [0, 6, 6, 0]
        },
        barWidth: 8
      }
    ]
  }

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
          <option value="Last 4 Months">Last 4 Months</option>
          <option value="Last year">Last year</option>
        </select>
      </div>
      <div className="joinings-chart-wrapper">
        <ReactECharts 
          option={option} 
          style={{ height: '240px', width: '100%' }}
          opts={{ renderer: 'svg' }}
        />
      </div>
    </div>
  )
}

export default NewJoiningsChart


