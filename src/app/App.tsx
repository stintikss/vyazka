import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './providers/AppRouter';
import Header from '../widgets/Header/Header';
import { Footer } from '../widgets/Footer/Footer';

export const App = () => (
    <BrowserRouter>
        <Header />
        <AppRouter />
        <Footer />
    </BrowserRouter>
);

export default App;