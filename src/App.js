import Footer from './components/footer';
import Header from './components/header';
import Routes from './Routes';

function App() {
  return (
    <div className='h-full flex flex-col'>
      <Header/>
      <div className='pt-16'>
        <Routes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
