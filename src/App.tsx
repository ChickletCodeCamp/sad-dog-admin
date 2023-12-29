import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './router'; // Adjust the path as needed
import './App.css';

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
