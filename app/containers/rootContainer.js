import { connect } from 'react-redux'
import App from './../components/App';
import Store from './../store';
import * as actions from './../actions';
import { routeActions } from 'redux-simple-router';

function mapStateToProps(state) {
    return {
        points: state.points,
        ui: state.ui,
        path: state.routing.location.pathname
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSetSidebarOpen: (open) => dispatch(actions.setSidebarOpen(open)),
        removePoint: (index) => dispatch(actions.removePoint(index)),
        navigateTo: (path) => dispatch(routeActions.push(path))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
