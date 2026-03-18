import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data


// #endregion
const SimpleBarChart = ({card}) => {
  const charData=card.ratings.map(c=>({
    star:c.name,
    count:c.count

  }))
  return (
    <BarChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={charData}
      layout='vertical'
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type='number'  domain={[0,1200]} tickCount={5}/>
      <YAxis dataKey="star" type='category'  />
      <Tooltip />
     
      <Bar dataKey="count" fill="#FF8811" activeBar={{ fill: 'gold', stroke: 'purple' }} radius={[10, 10, 0, 0]} />
  
    </BarChart>
  );
};

export default SimpleBarChart;