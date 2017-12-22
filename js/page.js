    function hoverImg(id) {
        elem = document.getElementById(id);
        sand = document.getElementById("sand");
        sand.style.transition = "background-image  .3s  ease-in";
        sand.style.backgroundImage = "url('images/" + id + "site.jpg')";
    }

    function hoverOutImg() {
        sand = document.getElementById("sand");
        sand.style.backgroundImage = "url('images/sand.jpg')"; 
        sand.style.transition = "background-image  .2s  ease-in";
    }