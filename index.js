// console.log(document.URL)
// console.log(document.body);
// console.log(document.head);
// console.log(document.getElementById('header-title'));
var heading =document.getElementById('header-title');
console.log(heading);
heading.innerText='GOOD BYE'
heading.style.borderBottom='solid 3px #000'
var item=document.getElementsByClassName('list-group-item');
console.log(item)
item[1].style.fontWeight='bold'
item[2].style.backgroundColor='green'
for(let i=0;i<4;i++){
item[i].style.fontWeight='bold'
}

