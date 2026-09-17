import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, message: '' };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      message: error?.message || 'Ocurrió un error inesperado.',
    };
  }

  componentDidCatch(error, info) {
    console.error('Error de renderizado:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="page form-page">
          <section className="form-card">
            <span className="eyebrow">Error de la aplicación</span>
            <h1>No se pudo cargar la interfaz</h1>
            <p>{this.state.message}</p>
            <p>
              Revisa la consola del navegador y reinicia el servidor con
              <strong> npm run dev</strong>.
            </p>
          </section>
        </main>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
