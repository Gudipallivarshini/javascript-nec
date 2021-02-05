function loadJSON(file,callback){
    var ajax=new XMLHttpRequest();
    ajax.overrideMimeType("application/json");
    ajax.open("GET",file,true);
    ajax.onreadystatechange=function(){
        if(ajax.readyState===4 && ajax.status===200){
              callback(ajax.responseText);
    }
}
ajax.send();

}
function other(r){
    var u1=document.createElement("u1");
    root.appendChild(ul);
    for(let i=0;i<r.length;i++){
        var li=document.createElement("li");
        li.textContent=r[i].name;
        ul.appendChild(li);
        var li=document.createElement("li");
        li.textContent=r[i].mobile;
        ul.appendChild(li1);
        
    }
    
    }

loadJSON("data.json",function(text){
    var d=JSON.parse(text)
    console.log(d);

})