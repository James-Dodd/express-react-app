export default (str: string) :number=>{
    if(!str.includes(' ')){
        return str.length;
     };
     const { length: strLen } = str;
     const { length: numWords } = str.split(' ');
     const average = (strLen - numWords + 1) / numWords;
     return parseFloat(average.toFixed(2));
};