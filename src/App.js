import './styles/App.css';
import react from "react"
import Header from './components/header'
import Sidebar from './components/sidebar';
import Rightbar from './components/rightbar';
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import Login from './Login';
import { StateContext, useStateValue } from './context/StateProvider';
import Mail from './components/mail';
import SentEmail from './components/SentEmail';
import Mail_body_header from './components/mail_body_header';
import Message from './components/Message';
import MessageHeader from './components/MessageHeader';
function App() {
  const [{user},dispatch] =useStateValue(StateContext);
  const history = useHistory();
  return (
    <BrowserRouter>
     
      <div className="App">
      {!user ? <Login/> :
        <Switch>
         
          <Route exact path="/">
            <Header />
            <div className="content__Wrapper">
              <Sidebar />
              <Mail/>
              <Rightbar />
            </div>

          </Route>
         
          <Route exact path="/sentemail">
            <Header />
            <div className="content__Wrapper">
              <Sidebar />
              <div className="mailbody">
              <Mail_body_header/>
              <SentEmail/>
              </div>
              <Rightbar />
            </div>
            </Route>
            <Route exact path="/message/:id">
            <Header />
            <div className="content__Wrapper">
              <Sidebar />
              <div className="mailbody">
              <MessageHeader/>
              <Message/>
              </div>
              <Rightbar />
            </div>

          </Route>
        </Switch>
      }
      </div>


    </BrowserRouter>
  )
}

export default App;
