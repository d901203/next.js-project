const FiveChartTable = (props) => {
    const N1 = props.response.GRAPHDATALIST[0].GRAPHDATA.slice(1);
    const N2 = props.response.GRAPHDATALIST[1].GRAPHDATA.slice(1);
    const N3 = props.response.GRAPHDATALIST[2].GRAPHDATA.slice(1);
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Rank</th>
                    <th scope="col">Song</th>
                    <th scope="col">0</th>
                    <th scope="col">5</th>
                    <th scope="col">10</th>
                    <th scope="col">15</th>
                    <th scope="col">20</th>
                    <th scope="col">25</th>
                    <th scope="col">30</th>
                    <th scope="col">35</th>
                    <th scope="col">40</th>
                    <th scope="col">45</th>
                    <th scope="col">50</th>
                    <th scope="col">55</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>{props.response.GRAPHDATALIST[0].GRAPHCHARTINFO.SONGNAME}</td>
                    {N1.map((it, i) => <td key={i}>{it.VAL}</td>)}
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>{props.response.GRAPHDATALIST[1].GRAPHCHARTINFO.SONGNAME}</td>
                    {N2.map((it, i) => <td key={i}>{it.VAL}</td>)}
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>{props.response.GRAPHDATALIST[2].GRAPHCHARTINFO.SONGNAME}</td>
                    {N3.map((it, i) => <td key={i}>{it.VAL}</td>)}
                </tr>
            </tbody>
        </table >
    );
};

export default FiveChartTable;