import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { Config } from './ChartConfig';

const labels = ['0', '5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'];

const FiveChart = (props) => {
    const data = {
        labels: labels,
        datasets: [
            {
                label: `${props.response.GRAPHDATALIST[0].GRAPHCHARTINFO.SONGNAME}`,
                data: props.response.GRAPHDATALIST[0].GRAPHDATA.slice(1).map((it) => it.VAL),
                borderColor: '#00CD3C',
                backgroundColor: '#00CD3C',
            },
            {
                label: `${props.response.GRAPHDATALIST[1].GRAPHCHARTINFO.SONGNAME}`,
                data: props.response.GRAPHDATALIST[1].GRAPHDATA.slice(1).map((it) => it.VAL),
                borderColor: '#F18B2E',
                backgroundColor: '#F18B2E',
            },
            {
                label: `${props.response.GRAPHDATALIST[2].GRAPHCHARTINFO.SONGNAME}`,
                data: props.response.GRAPHDATALIST[2].GRAPHDATA.slice(1).map((it) => it.VAL),
                borderColor: '#86B8F4',
                backgroundColor: '#86B8F4',
            },
        ],
    };
    return (
        <div>
            <div className="chart-container w-full h-full p-2">
                <Line data={data} options={Config} />
            </div>
        </div>
    );
}

export default FiveChart;
