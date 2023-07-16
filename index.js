const userDatabase = require('./database/user-database')
const printSubscriptionHistory = require('./lib/print-subscription-history')

const tolga = userDatabase.findBy('name', 'Tolga')
const kaan = userDatabase.findByName('Kaan')

tolga.subscribe(kaan)
userDatabase.update(kaan)
userDatabase.update(tolga)

const tolga2 = userDatabase.findBy('name', 'Tolga')
const kaan2 = userDatabase.findByName('Kaan')

printSubscriptionHistory(kaan2)
console.log('-------')
printSubscriptionHistory(tolga2)