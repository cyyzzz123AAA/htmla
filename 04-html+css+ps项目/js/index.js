var lis=wenhua.getElementsByTagName("li");
var con1=con.getElementsByClassName("con1")
for(var a=0;a<lis.length;a++){
    // console.log(lis[a])
    lis[a].index=a;
    lis[a].onmouseover=function(){
        for(var b=0;b<lis.length;b++){
            lis[b].className="";
        }
        this.className="qiye";
        for(var c=0;c<con1.length;c++){
            con1[c].style.display="none"
        }
        con1[this.index].style.display="block"
    }
}





















// var lis=wenhua.getElementsByTagName("li");
// console.log(lis)
// var con1=con.getElementsByClassName("con1")
// console.log(con1)

// for(var a=0;a<lis.length;a++){
//     lis[a].index=a;
//     lis[a].onmouseover=function(){
//         for(var b=0;b<lis.length;b++){
//             lis[b].className="";
//         }
//         this.className="qiye"
//         for(var c=0;c<con1.length;c++){
//             con1[c].style.display="none"
//         }
//         con1[this.index].style.display="block"
//     }  
// }