        
import { connect } from 'react-redux'

import CalendarView from './../components/Calendar';
import Store from './../store';
import * as actions from './../actions';
import { SubscribeActions, DispatchAndPublish } from './../pubnub/backend';
import { routeActions } from 'redux-simple-router';

import Moment from 'moment';
import momentLocalizer from 'react-widgets/lib/localizers/moment';
import numberLocalizer from 'react-widgets/lib/localizers/simple-number';

numberLocalizer();
momentLocalizer(Moment);

const token = SubscribeActions((channel, action) => {
    Store.dispatch(action);
});

function mapStateToProps(state) {
    return {
        defaultDate: new Date()
    }
}

const mapDispatchToProps = DispatchAndPublish((dispatch) => {
    return {
        dateChanged: (date) => dispatch(actions.selectedDateChanged(date)),
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CalendarView)