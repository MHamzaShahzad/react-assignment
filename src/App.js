import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import PeopleList from './components/Screens/PeopleList';
import PersonDetail from './components/Screens/PersonDetail';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<PeopleList />} />
          <Route path="/person/:id" element={<PersonDetail />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;