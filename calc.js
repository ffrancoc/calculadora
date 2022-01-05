const readLineSync = require('readline-sync')
const { Sum, Subtraction, Multiplication, Division } = require('./operations')


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

    option = readLineSync.question("\nInput your option: ")

    switch (option) {
        case '1':
            console.log('\nSum selected\n')

            var number_1 = readLineSync.questionFloat('Input number one: ')
            var number_2 = readLineSync.questionFloat('Input number two: ')
            console.log(`\nThe operation result is: ${Sum(number_1, number_2)}`)

            readLineSync.question('\nPut any key to continue...')
            console.clear()
            break
        case '2':
            console.log('\nSubtraction selected\n')

            var number_1 = readLineSync.questionFloat('Input number one: ')
            var number_2 = readLineSync.questionFloat('Input number two: ')
            console.log(`\nThe operation result is: ${Subtraction(number_1, number_2)}`)

            readLineSync.question('\nPut any key to continue...')
            console.clear()
            break;

        case '3':
            console.log('\nMultiplication selected\n')

            var number_1 = readLineSync.questionFloat('Input number one: ')
            var number_2 = readLineSync.questionFloat('Input number two: ')
            console.log(`\nThe operation result is: ${Multiplication(number_1, number_2)}`)

            readLineSync.question('\nPut any key to continue...')
            console.clear()
            break

        case '4':
            console.log('\nDivision selected\n')

            var number_1 = readLineSync.questionFloat('Input number one: ')
            var number_2 = readLineSync.questionFloat('Input number two: ')
            console.log(`\nThe operation result is: ${Division(number_1, number_2)}`)

            readLineSync.question('\nPut any key to continue...')
            console.clear()
            break
        case '0':
            console.log('See you, leiter')
            console.clear()
            process.exit()
        default:
            console.log('\nInvalid Option')
            readLineSync.question('Put any key to continue...')
            console.clear()

    }

}
