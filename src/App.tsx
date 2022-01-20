
import { BrowserRouter as Router} from 'react-router-dom';
import { MainRoutes } from './components/routes';
import { AuthContextProvider } from './contexts/AuthContexts';



function App() {
  
    return (
      
      <Router>
        <AuthContextProvider>
          <MainRoutes/>
        </AuthContextProvider>
      </Router>
  );
}

export default App;
