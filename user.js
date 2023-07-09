const Subscription = require('./subscription')

class User {
    constructor(name) {
        this.name = name
        this.videos = []
        this.subscribedChannels = []
        this.subscribers = []
        this.subscriptions = []
    }

    uploadVideo(video) {
        this.videos.push(video)
    }

    subscribe(subscribedChannel) {
        const subscription = new Subscription(subscribedChannel, this)
        this.subscribedChannels.push(subscribedChannel)
        subscribedChannel.subscribers.push(this)
        this.subscriptions.push(subscription)
        subscribedChannel.subscriptions.push(subscription)

        return subscription
    }
}

module.exports = User