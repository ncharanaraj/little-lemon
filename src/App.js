import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <header>
        <Header />
        <nav>
          <Nav />
        </nav>
      </header>
      <main>
        <Main />
      </main>
      <footer>
        <Footer
          address="Sirsi, Karnataka"
          phno="+91 - 78######75"
          email="contact@littlelemon.com"
        />
      </footer>
    </>
  );
}

export default App;
