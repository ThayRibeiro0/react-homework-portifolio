import './App.css';
import { Outlet } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
        <main className="mx-3">
          <Outlet />
        </main>
        <Footer />
    </>
  );
};

export default App;
