import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Home/Homepage/Homepage";
import Login from "./components/Login/Login";
import Footer from "./components/shared/Footer/Footer";
import Header from "./components/shared/Header/Header";
import NotFound from "./components/NotFound/NotFound";
import AuthProvider from "./Context/AuthProvider";
import Services from "./components/Services/Services";
import ServiceDetail from "./components/ServiceDetail/ServiceDetail";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Homepage></Homepage>
            </Route>
            <Route exact path="/home">
              <Homepage></Homepage>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <Route exact path="/seviceDetail/:serviceId">
              <ServiceDetail></ServiceDetail>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
