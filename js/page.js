    function hoverImg(id) {
        elem = document.getElementById(id);
        sand = document.getElementById("sand");
        sand.style.backgroundImage = "url('images/" + id + "site.jpg')";
    }

    function hoverOutImg() {
        sand = document.getElementById("sand");
        sand.style.backgroundImage = "url('images/sand.jpg')"; 
    }