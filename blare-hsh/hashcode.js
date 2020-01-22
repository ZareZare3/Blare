
function randInt(max){
//always starts at 0
return Math.floor(Math.random() * (max*2));

}
class BlareHash{
 //the main variable
 var data;
 var identityNms;
 function BlareHash(str){
  
  for(var i = 0;i <= uname.length;i++){
   this.data = new Array([]);
   this.data.push(uname.charCodeAt(i));
  
  }
  
  
 }
  
 }
 
function addEncryptData(){
this.identityNms = randInt(50);
 var tempData = data;
 this.data = new Array([]);
 for(var i = 0;i < tempData.length;i++){
 this.data.push((Math.sqrt(tempData[i]) * identityNms) + "-" + identityNms);
 }
} 
 function blobify(){
 return new Blob(this.data.toString());
 
 }
}
function parseHash(hash){
//we need to convert our string into a char array to read it
var splitHash = new Array();
splitHash.from(hash.toString());
 var individualNums = new Array();
 var currentCharNo = 0;
 var idStart = false;
 var identityHash = "";
 //time to parse the array
 //we can just use hash's length for the for loop because they have the same length
 for(var i = 0;i < hash.toString().length;i++){
 if(splithash[i] != "," || splithash[i] != "-"){
  if(!idStart){
 individualNums[currentCharNo] += splithash[i];
  }else{
  identityHash.push(splithash[i]);
  
  
  }
 }else if(splithash[i] == ","){
 currentCharNo += 1;
  
  
 
 }else if(splithash[i] == "-"){
 idStart == true;
 
 
 }
 //now its time to extract the numbers and feed them into the ASCII code-to-char converter.
 var identityInt = identityHash.parseInt();
  var finalNo;
  for (var i = 0;i < individualNums.length; i++){
  finalNo += ind
  
  }
 }
}
