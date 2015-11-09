import { connect } from 'react-redux'
import MapView from './../components/mapView';
import Store from './../store';
import * as actions from './../actions';
import { PublishAction, SubscribeActions } from './../pubnub/backend';

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

function mapDispatchToProps(innerDispatch) {
    const dispatch = (action) => {
        innerDispatch(action);
        PublishAction(action);
    }

    return {
        setZoom: (zoom) => dispatch(actions.setZoom(zoom)),
        setCenter: (x,y) => dispatch(actions.setCenter(x,y)),
        addPoint: (x,y) => dispatch(actions.addPoint(x,y)),
        removePoint: (index) => dispatch(actions.removePoint(index))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MapView)