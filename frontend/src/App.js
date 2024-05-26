import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import AccountPage from './pages/AccountPage';
import AlertPage from './pages/AlertPage';
import BudgetPage from './pages/BudgetPage';
import TransactionPage from './pages/TransactionPage';
import TipsPage from './pages/TipsPage';
import NotFoundPage from './pages/NotFoundPage';
import AppProvider from './context/AppContext';

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="/accounts" component={AccountPage} />
          <Route path="/alerts" component={AlertPage} />
          <Route path="/budget" component={BudgetPage} />
          <Route path="/transactions" component={TransactionPage} />
          <Route path="/tips" component={TipsPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </AppProvider>
  );
};

export default App;
