import { useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import BrandMark from '../components/BrandMark.jsx';
import { useAuth } from '../components/AuthContext.jsx';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError('Completa ambos campos para iniciar sesión.');
      return;
    }

    const hasValidCredentials = login(email, password);

    if (!hasValidCredentials) {
      setError('Credenciales incorrectas. Usa colaborador@intranova.com / 123456.');
      return;
    }

    const destination = location.state?.from?.pathname || '/dashboard';
    navigate(destination, { replace: true });
  };

  const handleSignupSubmit = (event) => {
    event.preventDefault();
    login('colaborador@intranova.com', '123456');
    navigate('/dashboard', { replace: true });
  };

  return (
    <main className="page form-page">
      <section className="flip-login-container">
        <input type="checkbox" id="signup_toggle" className="signup-toggle" />

        <div className="flip-login-form">
          <form className="flip-form-face flip-form-front" onSubmit={handleSubmit}>
            <BrandMark className="brand-mark-form" />
            <div className="flip-form-details">Login</div>

            <input
              className="flip-input"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Username"
              autoComplete="email"
            />

            <input
              className="flip-input"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
              autoComplete="current-password"
            />

            {error && <p className="form-error login-error">{error}</p>}

            <button className="flip-btn" type="submit">
              Login
            </button>

            <span className="flip-switch">
              Don't have an account?{' '}
              <label className="signup-tog" htmlFor="signup_toggle">
                Sign Up
              </label>
            </span>
          </form>

          <form className="flip-form-face flip-form-back" onSubmit={handleSignupSubmit}>
            <BrandMark className="brand-mark-form" />
            <div className="flip-form-details">SignUp</div>

            <input className="flip-input" placeholder="Firstname" type="text" />
            <input className="flip-input" placeholder="Username" type="text" />
            <input className="flip-input" placeholder="Password" type="password" />
            <input className="flip-input" placeholder="Confirm Password" type="password" />

            <button className="flip-btn" type="submit">
              Signup
            </button>

            <span className="flip-switch">
              Already have an account?{' '}
              <label className="signup-tog" htmlFor="signup_toggle">
                Sign In
              </label>
            </span>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Login;
