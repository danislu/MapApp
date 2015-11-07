import { connect } from 'react-redux'
import MapAppRoot from './../components/mapAppRoot';
import Store from './../store';
import * as actions from './../actions';

function mapStateToProps(state) {
    return { 
        points: state.points,
        ui: state.ui
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSetSidebarOpen: (open) => dispatch(actions.setSidebarOpen(open)),
        removePoint: (index) => dispatch(actions.removePoint(index))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MapAppRoot)