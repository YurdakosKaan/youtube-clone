const userDatabase = require('./database/user-database')
const videoDatabase = require('./database/video-database')
const printSubscriptionHistory = require('./lib/print-subscription-history')

async function main() {
    const tolga = await userDatabase.findByName('Tolga')
    const kaan = await userDatabase.findByName('Kaan')

    tolga.subscribe(kaan)
    
    userDatabase.update(kaan)
    userDatabase.update(tolga)

    printSubscriptionHistory(kaan)
    console.log('-------')
    printSubscriptionHistory(tolga)
}

main()