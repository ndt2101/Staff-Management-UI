import './App.css';
import LoginComponent from './components/LoginComponent/LoginComponent';
import HomeComponent from './components/HomeComponent/HomeComponent';
import DepartmentDetailComponent from './components/DepartmentDetailComponent/DepartmentDetailComponent';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import RegisterComponent from './components/RegisterComponent/RegisterComponent';
import EmployeeDetailComponent from './components/EmployeeDetailComponent/EmployeeDetailComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent/UpdateEmployeeComponent';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch className="app-header">
          <Route exact path="/" component={HomeComponent} />
          <Route path="/login" component={LoginComponent} />
          <Route path="/register" component={RegisterComponent} />
          <Route path="/department/:id" component={DepartmentDetailComponent} />
          <Route exact path="/employee/create" component={CreateEmployeeComponent} />
          <Route exact path="/employee/detail/:id" component={EmployeeDetailComponent} />
          <Route exact path="/employee/update/:id" component={UpdateEmployeeComponent} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
