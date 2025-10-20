const button = document.querySelector("button");
const search = document.querySelector("#search");
const param = document.querySelector("#param");
let results = "";

button.addEventListener("click", buttonClicked)

let names = ["Michael Jordan:Basketball","Serena Williams:Tennis","Usain Bolt:Track & Field","Messi:Football","Ronaldo:Football",
    "Tom Brady:American Football","Muhammad Ali:Boxing", "Tiger Woods:Golf"];

function buttonClicked(){
    param.textContent = checksSearch();
}
function getsUserInput(){
    let text = search.value;
    return text;
}
function checksSearch(){
    let toCheck = getsUserInput();
    for (text of names) {
        search.value = "";
        let checker = text.split(":");

        if (toCheck === checker[0]){
            if ((toCheck === "Messi") || (toCheck==="Ronaldo")){
                let results = `${checker[0]} is one of two GOATS of ${checker[1]}`;
                return results;
            }else {
            let results = `${checker[0]} is the GOAT of ${checker[1]}`;
            return results;
            }
        } else if (toCheck === checker[1]) {
            if (toCheck === "Football"){
                let results = `${toCheck} is dominated by Messi & Ronaldo`;
                return results;
            } else {
                let results = `${checker[1]} is dominated by ${checker[0]}`;
                return results;
            }
        }
    }
}
