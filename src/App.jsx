import { AuthProvider } from './components/AuthContext.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import Routing from './routes/Routing.jsx';

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Routing />
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
