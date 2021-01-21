import React from 'react';
import GlobalStyle from './GlobalStyle';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import Contact from './pages/Contact';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
