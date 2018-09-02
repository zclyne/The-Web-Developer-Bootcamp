var link = document.querySelector("a");
link.getAttribute("href"); //"www.google.com"
link.sestAttribute("href", "www.dogs.com");
//<a href="www.dogs.com">I am a link</a>

//To change the image src
var img = document.querySelector("img");
img.setAttribute("src", "corgi.png");
//<img src="corgi.png">