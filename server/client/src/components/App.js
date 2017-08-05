import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from './Header';
import Landing from './Landing';

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

class App extends React.Component {

    componentDidMount () {
        this.props.fetchUser();
    }

    render () {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header/>
                        <div className="container">
                            <Route path="/" exact component={Landing}/>
                            <Route path="/surveys" exact component={Dashboard}/>
                            <Route path="/surveys/new" exact component={SurveyNew}/>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

App.propTypes = {
    fetchUser: PropTypes.func
};

export default connect(null, actions)(App);