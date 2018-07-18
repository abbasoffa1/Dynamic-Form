var bosdiv=document.querySelector(".bosDiv");
var count=0;
function Yarat(){
    count++;
    var yeniDiv=document.createElement("DIV");
    yeniDiv.setAttribute("class","divis");
    bosdiv.appendChild(yeniDiv);
    var input=document.createElement("INPUT");
    yeniDiv.appendChild(input);
    input.setAttribute("type","text");
    input.setAttribute("required","true");
    input.setAttribute("name",count)
    input.setAttribute("placeholder", "Passenger name");
    input.setAttribute("class","forma");
    var silenDiv=document.createElement("BUTTON");
    var silenDivYazi=document.createTextNode("-");
    silenDiv.appendChild(silenDivYazi);
    silenDiv.setAttribute("name",count)
    silenDiv.setAttribute("class","silforma");
    silenDiv.addEventListener("click",function(){
        var sil = document.querySelector(".bosDiv");
        
        silinecekDiv=document.getElementsByName(this.getAttribute("name"))[0]
        console.log(silinecekDiv)
        bosdiv.removeChild(silinecekDiv.parentElement)
    });
    yeniDiv.appendChild(silenDiv);
}
function Tesdiqle(){
    var gotur=document.querySelector("input").value;
    alert(gotur);
}