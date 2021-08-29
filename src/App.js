import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import { AuthProvider } from './Authorization';
import PrivateRoute from './PrivateRoute';
import Signup from './pages/Signup';
import Login from './pages/Login';
function App() {
  return (
    <div className="App">
    <AuthProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <PrivateRoute exact path="/dashboard">
            <Dashboard />
          </PrivateRoute>
        </Switch>
        <Footer className="footer" />
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
