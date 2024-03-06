import React from 'react';

interface ProgressBarProps {
    color?: string;
    widthGray?: number;
    widthDarkGreen?: number;
    widthLightGreen?: number;
}
const ProgressBarGray: string = '#D9D9D9';
const ProgressBarDarkGreen: string = '#69DF0D';
const ProgressBarLightGreen: string = '#C2FF92';


const ProgressBar: React.FC<ProgressBarProps> = ({ widthGray = 100, widthDarkGreen, widthLightGreen}) => {
  return (
    <div>
      <div
      className="absolute rounded-3xl"
      style={{
        margin: 'auto',        
        width: widthGray ? `${widthGray}%` : '100%',
        height: '60px',
        backgroundColor: ProgressBarGray,
      }}
      >
      </div>
      <div
        className="absolute rounded-3xl"
        style={{
          margin: 'auto',        
          width: widthLightGreen ? `${widthLightGreen}%` : '100%',
          height: '60px',
          backgroundColor: ProgressBarLightGreen,
          }}
      ></div>
      <div
        className="absolute rounded-3xl"
        style={{
          margin: 'auto',        
          width: widthDarkGreen ? `${widthDarkGreen}%` : '100%',
          height: '60px',
          backgroundColor: ProgressBarDarkGreen,
          }}
      ></div>

      
    </div>
  );
};

export default ProgressBar;