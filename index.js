const colors = require('colors')

const User = require('./user')
const Video = require('./video')

function printSubscription(subscription) {
    console.log(`${colors.bgRed.white(subscription.user.name)} subscribed to ${colors.bgRed.white(subscription.subscribedChannel.name)}`)
}

function printSubscriptionHistory(user) {
    user.subscriptions.forEach(printSubscription)
}

function printVideo(video) {
    console.log(`${colors.magenta(video.name)}`)
}

function printUserVideos(user) {
    console.log(`${colors.bgRed.white(user.name)}'s videos:\n`)
    user.videos.forEach(printVideo)
}

const kegri = new User('Kegri')
const kaan = new User('Kaan')
const deniz = new User('Deniz')

const video1 = new Video('Video 1')
const video2 = new Video('Video 2')

kegri.subscribe(kaan)
deniz.subscribe(kaan)
kaan.subscribe(deniz)

kaan.uploadVideo(video1)
kaan.uploadVideo(video2)
deniz.uploadVideo(video2)

printSubscriptionHistory(kaan)
console.log('\n')
printSubscriptionHistory(deniz)

console.log('\n')
printUserVideos(kaan)
console.log('\n')
printUserVideos(deniz)