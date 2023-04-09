// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="Home" />
    <div className="container">
      <TextForm heading="Enter here: "/>
    </div>
    </>
  );
}

export default App;
