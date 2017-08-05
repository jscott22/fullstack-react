import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends React.Component {

    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <li><a href="/auth/google">Login with Google</a></li>;
            default:
                return [
                    <li key="payments"><Payments/></li>,
                    <li
                        key="credits"
                        style={{ margin: '0 10px'}}
                    >
                        Credits: {this.props.auth.credits}
                    </li>,
                    <li key="logout"><a href="/api/logout">Logout</a></li>
                ];
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper container">
                    <Link
                        className="left brand-logo"
                        to={ this.props.auth ? '/surveys' : '/'}
                    >
                        Logo
                    </Link>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

Header.propTypes = {
  auth: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.bool
  ])
};

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);