const readLineSync = require('readline-sync')
const { Sum } = require('./operations')


let option
while (option != '0') {
    console.log("---------------------------------------")
    console.log("MENU")
    console.log("---------------------------------------")
    console.log('1)Sum')
    console.log('2)Subtraction')
    console.log('3)Multiplication')
    console.log('4)Division')
    console.log('0)Exit')

    option = readLineSync.question("Input your option: ")

    switch (option) {
        case '1':
            console.log('Sum selected')
            readLineSync.question('Put any key to continue...')
            console.clear()
            break
        case '2':
            console.log('Subtraction selected')
            readLineSync.question('Put any key to continue...')
            console.clear()
            break;

        case '3':
            console.log('Multiplication selected')
            readLineSync.question('Put any key to continue...')
            console.clear()
            break

        case '4':
            console.log('Division selected')
            readLineSync.question('Put any key to continue...')
            console.clear()
            break
        case '0':
            console.log('See you, leiter')
            console.clear()
            process.exit()

    }

}
