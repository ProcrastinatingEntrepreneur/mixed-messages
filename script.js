/**
 * Creates a blank array to store the generated message.
 */
let generatedMessage = [];
/**
 * Generates a random number between 0 and 1 based on the number input
 */
let randomNumGenerator = (num) => Math.floor(Math.random() * num);
/**
 * An object full of arrays to generate a random message based off 4
 * different words in greetings and adjective and 4 different quotes.
 */
let messages = {
    greetings: ['Hello', 'Howdy', 'Hola', 'Greetings'],
    adjective: ['unhappy', 'sad', 'gloomy', 'miserable'],
    quote: [
        'The way to get started is to quit talking and begin doing',
        'The pessimist sees difficulty in every oppurtunity. The optimist sees the oppurtunity in every difficulty',
        'Don\'t let yesterday take up too much of today.',
        'You learn more from failure than from success. Don\'t let it stop you. Failure builds character.'

    ]
};
/**
 * Destructures the object to allow you to call greetings and adjective
 * and quote without having to call messages infront of it. EG: quote[num]
 */
let {greetings, adjective, quote} = messages;

for(let prop in messages) {
    /**
     * Sets optionNum equal to a random number no higher than the current 
     * props length in preparation for the random message.
     */
    let optionNum = randomNumGenerator(messages[prop].length);
    switch(prop) {
        case 'greetings':
            generatedMessage.push(greetings[optionNum])
            break
        case 'adjective':
            generatedMessage.push(adjective[optionNum])
            break
        case 'quote':
            generatedMessage.push(quote[optionNum])
            break
        default:
            generatedMessage.push('Not enough info.')
    };
}

function generateMessage(pieces) {
    return pieces[0] + ' if you\'re feeling ' + pieces[1] + ' just remember this quote "' + pieces[2] + '".';
}

console.log(generateMessage(generatedMessage));