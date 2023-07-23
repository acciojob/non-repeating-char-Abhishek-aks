let namexx = prompt('Enter a string');

let val;
let taskobj={};
let count=1;
for(let i=0;i<namexx.length;i++){
    if(taskobj.hasOwnProperty(namexx[i])){
        taskobj[namexx[i]]++;
    }else{
        taskobj[namexx[i]]=count;
    }
}
console.log(taskobj);
for(let i=0;i<namexx.length;i++){
    if(taskobj[namexx[i]]===1){
        val=namexx[i];        
     break;
    }
}
let bar = confirm(val);
console.log(namexx, bar);
