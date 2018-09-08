import Header from 'components/Header';
import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider } from 'styletron-react';
import WordsList from './views/WordsList';

const engine = new Styletron();

class App extends React.Component {
  public render() {
    return (
      <Provider value={engine}>
        <Router>
          <React.Fragment>
            <Header />

            <Container>
              <Row>
                <Switch>
                  <Route exact={true} path="/" component={WordsList} />
                </Switch>
              </Row>
            </Container>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
