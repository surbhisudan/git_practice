let n=2;
let flag=0;
for(let i=0;i<n;i++){
   if(n%i==0){
   flag++;
}
}
if(flag==2){
  console.log("yes");
}else{
  console.log("no");