// ###    IMPLICITA    ###
console.assert('121' == 121, 'Passou') //Usando o Loose Equality Operator (==), ele faz esse tipo de conversão implicita, convertendo String to Number
console.assert(121 + '' === '121', 'Conversão Implicita para String'); // Outro é quando somamos um tipo Number com Tipo String

// Mais um exemplo de conversão implicita é quando passamos uma Váriavel para uma condicional e o JS converte para boolean
const HelloWorld = 'Hello World';
if(HelloWorld) console.log(HelloWorld)

// ###    EXPLICITA    ###
//Conversão do tipo Explicita normalmente chamamos uma função para a conversão dos valores
console.assert(String(121) === '121', 'Conversão Explicita para String');
console.assert(Number('121') === 121, 'Conversão Explicita para Number');