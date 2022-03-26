import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Filler, Tooltip } from 'chart.js'
import { useStyles } from './styles';
Chart.register(ArcElement);
Chart.register(Filler);
Chart.register(Tooltip)

interface Props {
  expenses: any[];
}

const ExpenseChart: React.FC<Props> = ({ expenses }) => {
  const classes = useStyles();

  return (
    <div className={classes.chartComponent}>
      <Pie
        datasetIdKey='id'
        style={{ height: 400, width: 400 }}
        options={{
          plugins: {
            tooltip: {
              enabled: true,
            },
          },
        }}
        data={{
          labels: expenses.map(e => e.name),
          datasets: [
            {
              label: 'expenses',
              data: expenses.map(e => e.price ),
              backgroundColor: expenses.map(e => e.color),
            }
          ]
        }}
      />
    </div>
  );
};

export default ExpenseChart;
