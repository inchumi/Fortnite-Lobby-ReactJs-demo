import './App.css';
import LeftSideBar from './components/LeftSideBar';
import Navbar from './components/Navbar';
import RigthSidebar from './components/RigthSidebar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main>
        <LeftSideBar />
        <RigthSidebar />
      </main>
    </div>
  );
}

export default App;
