/*

	Destructuring Array

*/




let user = ['mohmad','Ali','Ahmed', 'hassin' , ['alaa' , 'gogo' , ['koko' , 'roro']]];

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

const [ one , tow, three, four = 'Default' ] = user;


console.log(`Hello ${one} Hello ${tow} Hello ${three}  Hello ${four}`);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

const [ one1 , , , four4 = 'Default' ] = user; // If You Want To Scape Element From Array


console.log(`Hello ${one1} Hello ${four4}`);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const [one2 , , , , [five , six , [seven , ate]]] = user; // Advanced Example


console.log(`Hello ${one2} Hello ${five} Hello ${six}  Hello ${seven} Hello ${ate}`);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const [one3 , , , , ...names] = user;  // Advanced Example By Rest Parameters


console.log(`Hello ${one3} Hello ${names}`);