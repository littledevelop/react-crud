import './App.css';
import {BrowserRouter,Routes,Link,Route} from 'react-router-dom';
import ListUser from './Components/ListUser';
import CreateUser from './Components/CreateUser';
import EditUser from './Components/EditUser';
function App() {
  return (
    <div className="App">
     <h5>React Crud Operation Using PHP API and MYSQL</h5>
        <BrowserRouter>
        <nav>

        <ul>
          <li>
            <Link to="/">List Users</Link>
          </li>
          <li>
          <Link to="user/create">Create Users</Link>

          </li>
        </ul>
        </nav>
        <Routes>
          <Route path='/' Component={ListUser}/>
          <Route path='user/create' Component={CreateUser}/>
          <Route path='user/:id/edit' Component={EditUser}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
