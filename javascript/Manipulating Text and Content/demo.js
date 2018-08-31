var p = document.getElementsByTagName("p")[0];
var ul = document.querySelector("ul");
p.textContent = "Corgi mixes are really really super adorable"; // this wil get rid of the strong tag
ul.textContent // " Orchids Succulents Tulips "
ul.innerHTML // " <li>Orchids</li> <li>Succulents</li? <li>Tulips</li> "
ul.innerHTML = "Plants are awesome!"; // the lis will be supplanted by this string 