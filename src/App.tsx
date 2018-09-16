import Header from 'components/Header';
import configStore from 'modules/store';
import * as React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import { Client as Styletron } from 'styletron-engine-atomic';
import { DebugEngine, Provider } from 'styletron-react';
import WordsList from './views/WordsList';

const debug =
  process.env.NODE_ENV === 'production' ? void 0 : new DebugEngine();
const engine = new Styletron();

const store = configStore();

class App extends React.Component {
  public render() {
    return (
      <StoreProvider store={store}>
        <Provider value={engine} debug={debug}>
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
      </StoreProvider>
    );
  }
}

export default App;
