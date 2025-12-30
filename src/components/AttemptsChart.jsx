import React from 'react'

const attemptData = [
  { label: '01', value: 8 },
  { label: '02', value: 12 },
  { label: '03', value: 20 },
  { label: '04', value: 24 },
  { label: '05', value: 14 },
  { label: '06', value: 9 },
];

const NoOfAttemptsChart = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col h-full min-h-[600px] font-sans" style={{ padding: '32px 32px 32px 32px' }}>
      
      {/* 1. Large Space (mb-40) with gap from container top */}
      <h3 className="text-[14px] font-bold text-slate-900 uppercase tracking-widest mb-40" style={{ marginTop: '0' }}>
        NO. OF ATTEMPTS BY EMPLOYEES
      </h3>

      <div className="flex-1 flex items-center justify-center">
        <div className="flex gap-6 w-full">
        {/* 2. Y-Axis - Fixed height to match chart with space from container */}
        <div className="h-[300px] flex flex-col-reverse justify-between text-[12px] font-normal text-black pb-2" style={{ paddingLeft: '16px' }}>
          <span>0</span>
          <span>5</span>
          <span>10</span>
          <span>15</span>
          <span>20</span>
          <span>25</span>
        </div>

        <div className="flex-1">
          {/* 3. CHART GRID - Forced height of 300px so bars MUST show */}
          <div className="h-[300px] flex items-end justify-around border-l-2 border-b-2 border-gray-200 relative mt-8">
            
            {/* Grid Lines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
               {[...Array(6)].map((_, i) => (
                 <div key={i} className="w-full border-t border-gray-100 h-0" />
               ))}
            </div>

            {/* 4. The Blue Bars - Forced Visibility */}
            {attemptData.map((item, index) => (
              <div key={index} className="flex items-end justify-center w-full h-full z-10">
                <div 
                  className="w-8 bg-[#4000ff] rounded-t-sm" 
                  style={{ height: `${(item.value / 25) * 100}%` }}
                />
              </div>
            ))}
          </div>

          {/* 5. X-Axis */}
          <div className="flex justify-around pt-4">
            {attemptData.map((item, index) => (
              <span key={index} className="text-[12px] font-normal text-black w-full text-center">
                {item.label}
              </span>
            ))}
          </div>
        </div>
        </div>
      </div>

      {/* 6. Legend */}
      <div className="mt-auto pt-10 flex flex-col items-center">
        {/* Horizontal line above legend */}
        <div className="w-full border-t border-gray-100 mb-4"></div>
        <div className="flex justify-center items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#4000ff]" />
          <span className="text-[12px] font-normal text-slate-700 uppercase">
            No. of Attempts
          </span>
        </div>
      </div>
    </div>
  );
};

export default NoOfAttemptsChart;
