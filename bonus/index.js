/*
    Sabe aquele IF que muitas vezes causa uma confusão
    quando utilizamos operados || (OR) e && (AND)
    Segue alguns macetes
*/

// || (OR)
console.assert(('VueJS' || 123) === 'VueJS','|| Retorna o primeiro elemento') // ** Somente quando os dois são verdadeiros **
const OR = 'VueJS' || 123;
console.log('Retornando o primeiro valor', OR);

// && (AND)
console.assert(('VueJS' && 123) === 123, '&& Retorna o segundo elemento') // ** Somente quando os dois são verdadeiros **
const AND = 'VueJS' && 123;
console.log('Retornando o último valor', AND)


// A verdade que o IF não retorna o Boolean, ele retorna o valor e assim o IF faz a conversão Implicita
// Talvez isso explique porque muitas vezes não acaba enntrando em nossa condicional ou não acontece de maneira esperada