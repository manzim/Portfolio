import './App.css';
import { MyNavbar } from "../src/components/my-navbar/mynavbar.jsx";
import { MyCarousal } from './components/my-carousal/mycarousal.jsx';
import { MyTitle } from './components/title-msg/mytitlemsg';

function App() {
  return (
    <>
    <MyNavbar />
    <MyCarousal />
    <MyTitle />
    </>
  );
}

export default App;
