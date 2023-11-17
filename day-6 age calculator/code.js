let user_input=document.getElementById("date");
user_input.max=new Date().toISOString().split("T")[0];
let result=document.getElementById("result");
function calculateAge(){
   let birthDate=new Date(user_input.value);
   let d1=birthDate.getDate();
    let m1=birthDate.getMonth()+1;
    let y1=birthDate.getFullYear();
let todayDate=new Date();
let d2=todayDate.getDate();
let m2=todayDate.getMonth()+1;
let y2=todayDate.getFullYear();
let d3,m3,y3;
y3=y2-y1;
if(m2>=m1){
m3=m2-m1;
}else{
    y3--;
m3=12 + m2-m1;

}
if(d2>=d1){
    d3=d2-d1;

}else{
    m3--;
   let monthdays=new Date(y1,m1,0).getDate();
   d3=monthdays+d2-d1;
}
if(m3<0){
    m3=11;
    y3--;
}
result.innerHTML=`you are ${y3} years and ${m3} months and ${d3} days`;
console.log(y3,m3,d3);

}
;