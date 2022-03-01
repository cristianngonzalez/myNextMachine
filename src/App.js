import './App.css';

//Import Components
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import SidebarComponent from './components/SidebarComponent/SidebarComponent';
import ChooseCpuComponent from './components/ChooseCpuComponent/ChooseCpuComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';


function App() {
  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
      <ChooseCpuComponent></ChooseCpuComponent>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
