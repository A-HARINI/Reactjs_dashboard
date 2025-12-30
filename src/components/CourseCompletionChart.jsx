import React from 'react';

const courseData = [
  { name: 'SCORM Course', vals: [80, 45, 30] },
  { name: 'Video Course', vals: [90, 60, 35] },
  { name: 'Single File Course', vals: [60, 45, 30] },
  { name: 'Video Course', vals: [50, 20, 10] },
];

const CourseCompletionChart = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col h-full font-sans" style={{ padding: '32px 24px 24px 24px' }}>
      
      {/* 1. Header with significant gap to course titles */}
      <h3 className="text-[16px] uppercase tracking-widest" style={{ marginBottom: '32px', fontWeight: 900, color: '#1e293b' }}>
        COURSE COMPLETION %
      </h3>

      <div className="flex-1 flex flex-col gap-6 mb-4 relative">
        {/* Vertical lines starting from bar level - 4 lines at 30%, 45%, 60%, 75% + Video Course end line at 90% */}
        <div className="absolute left-[100px] right-[24px] pointer-events-none" style={{ zIndex: 0, top: '0', bottom: '24px' }}>
          {[30, 45, 60, 75].map((percent) => (
            <div 
              key={percent} 
              className="absolute top-0 bottom-0 w-px bg-gray-200" 
              style={{ left: `${percent}%`, transform: 'translateX(-50%)', width: '1px' }}
            ></div>
          ))}
          {/* Video Course end line at 90% */}
          <div 
            className="absolute top-0 bottom-0 w-px bg-gray-200" 
            style={{ left: '90%', transform: 'translateX(-50%)', width: '1px' }}
          ></div>
        </div>
        
        {/* Course bars - each course is a direct child to apply gap-6 */}
        {courseData.map((course, index) => (
            <div key={index} className="grid grid-cols-[100px_1fr] items-start gap-4 relative" style={{ zIndex: 1 }}>
              
              {/* Title - Remains fixed on the left */}
              <div className="text-[12px] font-normal text-slate-500 pt-0.5">
                {course.name}
              </div>

              {/* 2. Stepped Lengths & Refined Thickness */}
              <div className="flex flex-col">
                
                {/* Bar 1 (Top): Blue - Reduced thickness */}
                <div 
                  className="h-3 flex rounded-none overflow-hidden" 
                  style={{ width: `${course.vals[0]}%` }}
                >
                  {/* Dark Blue Progress */}
                  <div className="h-full bg-[#4000ff] w-[75%]" />
                  {/* Secondary Shadow Shade (Light Blue) */}
                  <div className="h-full bg-[#d2e3fc] flex-1" />
                </div>

                {/* Bar 2 (Middle): Thin Yellow */}
                <div 
                  className="h-[3px] flex rounded-none overflow-hidden" 
                  style={{ width: `${course.vals[1]}%` }}
                >
                  <div className="h-full bg-[#fbbc04] w-[65%]" />
                  <div className="h-full bg-[#feefc3] flex-1" />
                </div>

                {/* Bar 3 (Bottom): Thin Red */}
                <div 
                  className="h-[3px] flex rounded-none overflow-hidden" 
                  style={{ width: `${course.vals[2]}%` }}
                >
                  <div className="h-full bg-[#f28b82] w-[55%]"></div>
                  <div className="h-full bg-[#fad2cf] flex-1" />
                </div>

              </div>
            </div>
        ))}
        
        {/* X-axis labels at the bottom - positioned to the right of each vertical line */}
        <div className="relative w-full mt-2" style={{ paddingLeft: '100px', paddingRight: '24px', height: '24px', zIndex: 1 }}>
          {[30, 45, 60, 75, 90].map((percent) => {
            // Label mapping: 30% at 30% line, 45% at 45% line, 60% at 60% line, 75% at 75% line, 90% at 90% line
            return (
              <div 
                key={percent} 
                className="absolute text-[11px] text-gray-600 font-normal whitespace-nowrap" 
                style={{ 
                  left: `${percent}%`, 
                  paddingLeft: '4px',
                  bottom: '0px',
                  textAlign: 'left'
                }}
              >
                {percent}%
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Legend - Behavioral, Management, Technical (Centered like New Joinings chart) */}
      <div className="flex flex-col items-center mt-4">
        {/* Horizontal line above legend */}
        <div className="w-full border-t border-gray-100 mb-4"></div>
        {/* Centered legend */}
        <div className="flex items-center justify-center gap-6 text-[12px] font-normal text-slate-700">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#4000ff]"></div>
            <span>Behavioral</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#fbbc04]"></div>
            <span>Management</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#f28b82]"></div>
            <span>Technical</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCompletionChart;
