let divloader = document.getElementById("JSoutput")

function Thegame(){
    divloader.innerHTML = `<button onclick="Theforest()" class="thebuttons">Button1</button><br>
    <button onclick="Theforest2()" class="thebuttons">Button2</button><br>
    <button onclick="Theforest3()" class="thebuttons">Button3</button>`
}
function Theforest(){
    divloader.innerHTML = `<button onclick="Thegame()" class="thebuttons">Otherbutton1</button><br>
    <button onclick="Theforest2()" class="thebuttons">Otherbutton2</button><br>
    <button onclick="Theforest3()" class="thebuttons">Otherbutton3</button>`
}