import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Contex/AuthProvider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from './Pages/HomePage/Header/Header';
import Footer from './Pages/HomePage/Footer/Footer';
import Home from './Pages/HomePage/Home/Home';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import PrivateRaute from './Pages/PrivateRaute/PrivateRaute'
import SingIn from './Pages/Register/SingIn/SingIn';
import SingUp from './Pages/Register/SingUp/SingUp';
import NotFound from './Pages/NotFound/NotFound';
import Packeges from './Pages/HomePage/Packeges/Packeges';
import AddNewPackege from './Pages/AddNewPackege/AddNewPackege';
function App() {
  return (
    <div className="App" >
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            {/* <PrivateRaute path="/packages">
              <Packeges></Packeges>
            </PrivateRaute> */}
            <PrivateRaute path="/addpackage">
              <AddNewPackege></AddNewPackege>
            </PrivateRaute>
            <PrivateRaute path="/placeorder:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRaute>
            <Route path="/singin">
              <SingIn></SingIn>
            </Route>
            <Route path="/singup">
              <SingUp></SingUp>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div >
  );
}

export default App;
