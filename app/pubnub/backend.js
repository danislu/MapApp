import { CreateGuid } from './../utils';

const guid = CreateGuid();
console.log("GUID: " + guid);

const channel = "map";
const subscribers = [];

let pubnub = PUBNUB({
    publish_key   : 'pub-c-118126b2-d33a-4207-91d1-e5565f8ea0a9',
    subscribe_key : 'sub-c-ae2c7998-86d2-11e5-8e17-02ee2ddab7fe'
});

pubnub.subscribe({
    channel : channel,
    message : (msg,env,ch,timer,magic_ch) => {
        const { source, message } = msg;

        if (source === guid)
            return;

        subscribers.forEach(({callback}) => {
            callback(ch, message);
        }, this);
    },
    connect: () => {
        console.log("Since we’re publishing on subscribe connectEvent, we’re sure we’ll receive the following publish.");
    }
});

export function Unsubscribe(token){
    var index = subscribers.findIndex(value => value.id === token);
    var removed = subscribers.splice(index,1);
    return (removed.length === 1 && removed[0].id === token);
}

export function SubscribeActions(callback){
    const id = CreateGuid();
    subscribers.push({ id, callback });
    return id;
};

export function PublishAction(action) {
    pubnub.publish({
        channel: channel,
        message: {
            source: guid,
            message: action
        }
    });
};
