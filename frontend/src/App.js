import React from 'react';
import NavBar from './components/navBar/navBar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import createFood from "./components/createFood/createFood";
import createCategory from "./components/createCategory/createCategory";
import Categories from "./components/categories/categories";
import Foods from "./components/categories/foods";
const App = () => {
    return (
        <div>
            <Router>
                <NavBar/>
                <section>
                    <Switch>
                        <Route path="/create-food" component={createFood}/>
                        <Route path="/create-category" component={createCategory}/>
                        <Route path="/:id" component={Foods}/>
                        <Route path="/" component={Categories} exact/>
                    </Switch>
                </section>
            </Router>
        </div>
    );
}
export default App;