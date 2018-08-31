var movies = [
	{
		name: "In Bruges",
		watched: true,
		rate: 5
	},
	{
		name: "Frozens",
		watched: false,
		rate: 4.5
	},
	{
		name: "Mad Max Pury Road",
		watched: true,
		rate: 5
	},
	{
		name: "Les Miserables",
		watched: false,
		rate: 3.5
	}
];

movies.forEach(function(movie) {
	if (movie.watched) console.log("You have watched \"" + movie.name + "\" - " + movie.rate + " stars");
	else console.log("You have not watched \"" + movie.name + "\" - " + movie.rate + " stars");
	// var result result = "You have ";
	// if (movie.watched) result += "watched ";
	// else result += "not seen ";
	// result += "\"" + movie.name + "\" - " + movie.rate + " stars";
	// console.log(result);
});