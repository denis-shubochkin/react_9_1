import {BrowserRouter as Router ,Route, Switch} from 'react-router-dom';
import Menu from './components/Menu/Menu';
import HomePage from './components/HomePage/HomePage';
import DriftPage from './components/DriftPage/DriftPage';
import ForzaPage from './components/ForzaPage/ForzaPage';
import TimeAttackPage from './components/TimeAttackPage/TimeAttackPage';

export default function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Switch>
          <Route path="/drift" component={DriftPage} />
          <Route path="/timeattack" component={TimeAttackPage} />
          <Route path="/forza" component={ForzaPage} />
          <Route path="/" component={HomePage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}