import React from 'react';
import style from './pagesTo.module.css';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';


const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


const data = [
  { name: 'Page A', uv: 192,},
  { name: 'Page B', uv: 281, },
  { name: 'Page C', uv: 328,},
  { name: 'Page D', uv: 177, },
  { name: 'Page E', uv: 279,},
];


const getPath = (x, y, width, height) => {
  return `M${x},${y + height} L${x + width / 2},${y} L${x + width},${y + height} Z`;
};

function PagesTo() {

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div className={style.container}>
      
      <ResponsiveContainer className={style.res} >
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PagesTo;
