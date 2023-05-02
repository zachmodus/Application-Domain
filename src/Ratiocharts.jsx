import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import './styles.css';
import AdminUser from './AdminUser';
import ReactDOM from 'react-dom/client';

import Calendar from './calender';

const ratiosData = [
  { name: 'Quick Ratio', ratio: 0.83 },
  { name: 'Debt Ratio', ratio: 0.6 },
  { name: 'Cash Ratio', ratio: 0.4 }
];

const COLORS = {
  red: '#FF4136',
  orange: '#FF851B',
  green: '#2ECC40'
};


const App = () => {
  return (
    <div style={{
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      alignItems: 'center',
      justifyContent: 'space-between',
      color: 'hwb(0 100% 0%)',
      backgroundImage: 'linear-gradient(79deg, #7439db, #C66FBC 48%, #F7944D)',
      position: 'relative',
      paddingBottom: '20px'
    }}>
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <div style={{
          marginRight: '20px',
          cursor: 'pointer',
          fontSize: '24px'
        }}>
          <button onClick={Accountsss}>Accounts</button>
          
          </div>
        <div style={{
          cursor: 'pointer',
          fontSize: '24px'
        }}>SignOut</div>
      </div>
      <RatioCharts />
      <div style={{
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '100%',
        fontStyle: 'cursive',
        fontSize: '74px'
      }}>
        Cream Accounting
      </div>
    </div>
  );
};


const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
      {(percent * 100).toFixed(0)}%
    </text>
  );
};


const Accountsss = (e) => {

  const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
  <AdminUser/>
</React.StrictMode>
);
}

const RatioCharts = () => {
  return (
    <div className="ratio-chart" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {ratiosData.map((ratio) => (
        <PieChart key={ratio.name} width={300} height={300}>
          <Pie
            data={[{ name: 'ratio', value: ratio.ratio }]}
            cx={150}
            cy={150}
            innerRadius={50}
            outerRadius={100}
            fill={
              ratio.ratio >= 0.75 ? COLORS.green :
              ratio.ratio >= 0.5 ? COLORS.orange :
              COLORS.red
            }
            startAngle={90}
            endAngle={-270}
          >
            <Cell fillOpacity={ratio.ratio >= 0.75 ? 1 : ratio.ratio >= 0.5 ? 0.5 : 0.25} />
          </Pie>
          <text x={150} y={170} textAnchor="middle" dominantBaseline="central" fontSize={20}>
            {ratio.name}
          </text>
          <text x={150} y={150} fill={ratio.ratio >= 0.75 ? COLORS.green :
              ratio.ratio >= 0.5 ? COLORS.orange :
              COLORS.red} textAnchor="middle" dominantBaseline="central" fontSize={24}>
            {ratio.ratio.toFixed(2)}
          </text>
        </PieChart>
      ))}
    </div>
  );
};

export default App;
