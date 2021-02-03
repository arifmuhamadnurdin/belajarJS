var kata = "i love javascript";
// rubah huruf vokal menjadi #
// # l#v# j#v#scr#pt
var tampung = ''
for (let i = 0; i < kata.length; i++) {
    if(kata[i]=='a' || kata[i]=='e' || kata[i]=='i' || kata[i]=='o' || kata[i]=='u'){
        tampung += "#"
    }else{
        tampung += kata[i]

    }
    
}
console.log(tampung)