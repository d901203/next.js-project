import FiveChart from '../components/FiveChart';
import FiveChartTable from '../components/FiveChartTable';

const Home = (props) => {
  const hour = new Date().getHours().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' });
  if (Number(hour) >= 0 && Number(hour) <= 5) {
    return (
      <div>
        <p>Loading Chart</p>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <FiveChart {...props.res} />
        </div>
      </div>
    );
  }
}

export const getServerSideProps = async () => {
  const api = 'https://m2.melon.com/chart/hourly/fiveChartGraph.json?v=4.0';
  const res = await fetch(api).then(res => res.json());
  return { props: { res: res } };
}

export default Home;