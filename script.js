// let namexx = prompt('Enter a string');

// let val;
// let taskobj={};
// let count=1;
// for(let i=0;i<namexx.length;i++){
//     if(taskobj.hasOwnProperty(namexx[i])){
//         taskobj[namexx[i]]++;
//     }else{
//         taskobj[namexx[i]]=count;
//     }
// }
// console.log(taskobj);
// for(let i=0;i<namexx.length;i++){
//     if(taskobj[namexx[i]]===1){
//         val=namexx[i];        
//      break;
//     }
// }
// let bar = confirm(val);
// console.log(namexx, bar);


function nonRepeatingCharacter(s){
	let object = {};
   for(let char of s)
	{		object[char] = (object[char] || 0)+1;
	}

	for(let char of s)
		{	if(object[char]==1)
			{	return char;
			}
		}
}
const userInput = prompt("Enter a String");
const result = nonRepeatingCharacter(userInput);
alert(result);