import './App.css';
import { Outlet } from 'react-router-dom'
import Header from './components/Header';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <>
      <Header />
      <Navigation />
        <main className="mx-3">
          <Outlet />
        </main>
    </>
  );
};

export default App;
