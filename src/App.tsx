import Header from './components/header'
import Footer from './components/footer'
import AppRoutes from './routes'
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
}
export default App
