import { connect } from 'react-redux'

import Map from './../components/Map';
import Store from './../store';
import * as actions from './../actions';
import { SubscribeActions, DispatchAndPublish } from './../pubnub/backend';
import { routeActions } from 'redux-simple-router';

const token = SubscribeActions((channel, action) => {
    Store.dispatch(action);
});

function mapStateToProps(state) {
    return {
        points: state.points,
        center: state.center,
        zoom: state.zoom
    }
}

const mapDispatchToProps = DispatchAndPublish((dispatch) => {
    return {
        setZoom: (zoom) => dispatch(actions.setZoom(zoom)),
        setCenter: (x,y) => dispatch(actions.setCenter(x,y)),
        addPoint: (x,y) => dispatch(actions.addPoint(x,y)),
        removePoint: (index) => dispatch(actions.removePoint(index))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Map)
