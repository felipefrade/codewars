//Solution 1:
countBits = n => n.toString(2).split('0').join('').length;

//Solution 2:
var countBits = function(n) {
  //A função replace com regex (/0/g, '') remove todos os zeros da string e não só o primeiro
  return n.toString(2).replace(/0/g,'').length;
};

//Solution 3:
//Neste exemplo eu recebo o valor de n, transformo em binário, separo os caracteres, filtro só o que for 1 e conto o total;
//toString(2) converte a string para o valor binário.
const countBits = n => n.toString(2).split('').filter(ele => ele == 1).length;
