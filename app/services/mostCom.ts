export default (text:string) :string=>{
    let words = text.match(/\w+/g);
    console.log(words);

    let occurances = {};

    for (let word of words) {
        if (occurances[word]) {
        occurances[word]++;
        } else {
        occurances[word] = 1;
        }
    }

    console.log(occurances);

    let max = 0;
    let mostRepeatedWord = '';

    for (let word of words) {
        if (occurances[word] > max) {
        max = occurances[word];
        mostRepeatedWord = word;
        }
    }

    return mostRepeatedWord;
}