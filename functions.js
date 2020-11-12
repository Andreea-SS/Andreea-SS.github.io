function hide(id){
    console.info("hide:" + id);
//document.getElementById("skills").style.display = "none";
var el = document.getElementById(id);
console.info("hide" + id, el);
if(el) {
    el.style.display = "none";
    el.style.border = "1px dotted red" 
} else { 
    console.error("elementul nu exista");
}

}

function showSkills() {
    hide("skills")
    hide("projects")
    hide("languages")
    document.getElementById("home").style.display = '';
}

function showProjects(){
    hide("home")
    hide("projects")
    hide("languages")
    document.getElementById("skills").style.display = ''
}

function showLanguages(){
    document.getElementById("home").style.display = "none"
    document.getElementById("skills").style.display = "none" 
    document.getElementById("languages").style.display = "none"
    document.getElementById|("projects").style.display = ''
}

function showHome(){
    document.getElementById("skills").style.display = "none"
    document.getElementById("projects").style.display = "none"
    document.getElementById("languages").style.display = "none"
    document.getElementById("home").style.display = ''
}