import avgWLeng from "./services/avgWordLeng";
import charLeng from "./services/charLeng";
import mostCom from "./services/mostCom";
import wordCount from "./services/wordCount";

export default (text: string) :object =>{
    return({
        char: charLeng(text),
        wordCount: wordCount(text),
        avgWordL: avgWLeng(text),
        mostComW: mostCom(text)
    })
};