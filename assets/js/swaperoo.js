function hide() {
    var desc = document.getElementById("desc")
    var search = document.getElementById("search")
    if (desc.style.visibility === "hidden") {
        desc.style.visibility = "visible";
        search.style.display = "none";
    }
    else {
        desc.style.visibility = "hidden";
        search.style.display = "block";
    }
}
function swap(){
    var desc = document.getElementById("desc");
    var search = document.getElementById("search");
    desc.style.display = "none";
    search.style.display = "block";
}

function tabify(){
    var url = document.getElementById("term").value;
    if (url !== "") {
        url = "https//ultimate-guitar.com/search.php?search_type=title&value="+url;
        document.getElementById("ug").href = url;
    }
    else{
        document.getElementById("ug").href = "#";
    }
}