import FiveChart from '../components/FiveChart';

const Home = (props) => {
  return (
    <div>
      <FiveChart {...props.res} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const api = 'https://m2.melon.com/chart/hourly/fiveChartGraph.json?v=4.0';
  const res = await fetch(api).then(res => res.json());
  return { props: { res: res } };
}

export default Home;