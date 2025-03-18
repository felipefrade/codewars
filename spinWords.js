function spinWords(string){
  let retorno = "";
  const splittedArray = string.split(' ');
  
  const invertedArray = [];
  for (let cont = 0;cont < splittedArray.length;cont++) {
    invertedArray[cont] = splittedArray[cont].length < 5 ? splittedArray[cont] : splittedArray[cont].split('').reverse().join('');
    retorno = invertedArray.join(' ');        
  } 
  return retorno;
}

console.log(spinWords("Welcome to the jungle"));

