import { Table } from "reactstrap";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const FiveChartTable = (props) => {
    return (
        <div>
            <Table hover>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Song</th>
                        <th>0</th>
                        <th>5</th>
                        <th>10</th>
                        <th>15</th>
                        <th>25</th>
                        <th>30</th>
                        <th>35</th>
                        <th>40</th>
                        <th>45</th>
                        <th>50</th>
                        <th>55</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>{props.response.GRAPHDATALIST[0].GRAPHCHARTINFO.SONGNAME}</td>
                        <td>smith</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>{props.response.GRAPHDATALIST[1].GRAPHCHARTINFO.SONGNAME}</td>
                        <td>wong</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>{props.response.GRAPHDATALIST[2].GRAPHCHARTINFO.SONGNAME}</td>
                        <td>jones</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default FiveChartTable;