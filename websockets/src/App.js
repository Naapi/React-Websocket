import React, {Component} from 'react';
import {Container, Row} from 'reactstrap';
import Header from './Components/Header';
import LiveTest from './Components/LiveTest';

class App extends Component {
  render() {
    return (
    // <div className="App">
    //   <p>React Websocket test</p>
    // </div>
    <React.Fragment>
      <Header />
    
      <Container>
        <Row>
          <LiveTest />
        </Row>
      </Container>
    </React.Fragment>
    );
  }
}
export default App;
