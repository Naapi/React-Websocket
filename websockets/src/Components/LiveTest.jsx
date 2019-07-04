import React, {Component} from 'react';
import { Table } from 'reactstrap';

class LiveTest extends Component {

state = {
    visitors:[
        {
            firstname:"Matti",
            lastname:"Meikäläinen",
            username:"xxMatixx"
        }
    ]
}

renderTable = () => {
    const {visitors} = this.state;
    return visitors.map((v, index) => {
        return (
            <tr>
                <td>{index}</td>
                <td>{v.firstname}</td>
                <td>{v.lastname}</td>
                <td>{v.username}</td>
            </tr>
        );
    });
};

render() {
        return (
            <React.Fragment>
               <h1>Such Websockets</h1>

                <Table dark>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}
                    </tbody>
                </Table>
            </React.Fragment>
        );
    }
}

export default LiveTest;