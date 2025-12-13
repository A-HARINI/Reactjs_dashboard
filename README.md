# HR Analysis Dashboard

A comprehensive HR Analysis Dashboard built with React.js, featuring various charts and metrics for analyzing HR data.

## Features

- **LMS Section**: Displays total count with progress breakdown
- **Active Courses**: Shows active course statistics
- **Mandatory Courses**: Displays mandatory course statistics
- **Grade Table**: Shows grade distribution
- **E-Learn Types Chart**: Horizontal bar chart showing different course types
- **Category % Chart**: Donut chart showing category distribution
- **No. of Attempts Chart**: Vertical bar chart showing employee attempts
- **New Joinings Chart**: Stacked bar chart with time range selector
- **Course Completion % Chart**: Stacked bar chart showing completion percentages

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Technologies Used

- React 18.2.0
- Recharts 2.10.3 (for charting)
- Vite (for build tooling)

## Project Structure

```
src/
  ├── components/
  │   ├── Dashboard.jsx
  │   ├── LMSSection.jsx
  │   ├── ActiveCourses.jsx
  │   ├── MandatoryCourses.jsx
  │   ├── GradeTable.jsx
  │   ├── ELearnTypesChart.jsx
  │   ├── CategoryChart.jsx
  │   ├── AttemptsChart.jsx
  │   ├── NewJoiningsChart.jsx
  │   └── CourseCompletionChart.jsx
  ├── App.jsx
  ├── main.jsx
  └── index.css
```


