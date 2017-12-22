    function hoverImg(id) { 
        sand = document.getElementById("sandImg");
        sand.style.opacity = "0";
        elem = document.getElementById(id + "Img");
        elem.style.opacity = "1";

    }

    function hoverOutImg(id) {
        elem = document.getElementById(id + "Img");
        elem.style.opacity = "0";
        sand = document.getElementById("sandImg");
        sand.style.opacity = "1";
    }