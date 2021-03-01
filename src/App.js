import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Home} from "./pages/Home";
import {Episodes} from "./pages/Episodes";
import {Blog} from "./pages/Blog";
import {Contacts} from "./pages/Contacts";

function App() {
  return (
      <div>
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route path='/episodes'>
              <Episodes/>
            </Route>
            <Route path='/blog'>
              <Blog/>
            </Route>
            <Route path='/contacts'>
              <Contacts/>
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
  );
}

export default App;
