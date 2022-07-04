import FiveChart from '../components/FiveChart';
import FiveChartTable from '../components/FiveChartTable';

const Home = ({ res }) => {
  if (!('response' in res)) {
    return (
      <div>
        <p>Loading Chart</p>
      </div>
    );
  } else {
    return (
      <div className='row justify-content-center'>
        <div className='col-8'>
          <FiveChart {...res} />
        </div>
        <div className='col-10'>
          <FiveChartTable {...res} />
        </div>
      </div >
    );
  }
}

export const getServerSideProps = async () => {
  const api = 'https://m2.melon.com/chart/hourly/fiveChartGraph.json?v=4.0';
  const result = await fetch(api);
  const res = await result.json();
  return { props: { res } };
}

export default Home;