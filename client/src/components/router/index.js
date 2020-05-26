import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import DashBoardLayout from '../Layout/DashBoardLayout';
import Login from '../Pages/Login';
import Books from '../Pages/Books';
import MyBooks from '../Pages/MyBooks';
import User from "../Pages/User";
import NotFound from '../Pages/NotFound';


const AppRouter = ()=>{
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <DashBoardLayout exact path="/home" component={Home} />
          <DashBoardLayout exact path="/books" component={Books} />
          <DashBoardLayout exact path="/my-books" component={MyBooks} />
          <DashBoardLayout exact path="/user" component={User} />
          <DashBoardLayout component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
}
export default AppRouter;