//API access keys
//apikey=d3b3f9ef
//API Documentation:
//https://www.omdbapi.com/

var method = 'GET';
let omdbapiURL = 'http://www.omdbapi.com/?t=Fight Club&apikey=d3b3f9ef'

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
	if(this.readyState == 4 && this.status == 200)
	{
		const parsed = JSON.parse(xhr.responseText)
		console.log(parsed)
    }
};
xhr.open(method, omdbapiURL);
xhr.send();

Vue.component('omdb', {
	data() {
		return {
			title: "Fight Club",
			year: "1999",
			rated: "R",
			released: "15 Oct 1999",
			runtime: "139 min",
			genre: "Drama",
			director: "David Fincher",
			writer: "Chuck Palahniuk (novel), Jim Uhls (screenplay)",
			actors: "Edward Norton, Brad Pitt, Meat Loaf, Zach Grenier",
			plot: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
			language: "English",
			country: "USA, Germany",
			awards: "Nominated for 1 Oscar. Another 10 wins & 37 nominations.",
			poster: "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
			ratings: [
				{
					source: "Internet Movie Database",
					value: "8.8/10"
				}, 
				{
					source: "Rotten Tomatoes",
					value: "78%"
				},
				{
					source: "Metacritic",
					value: "66/100"
				}
			],
			metascore: "66",
			imdbRating: "8.8",
			imdbVotes: "1,755,840",
			imdbID: "tt0137523",
			type: "movie",
			DVD: "06 Jun 2000",
			boxOffice: "N/A",
			production: "20th Century Fox",
			website: "N/A",
			response: "True"
		}
	}, 
	template: `
	<div>
		<h1>Title: {{ title }}</h1>
		<h3>Year {{year}}</h3>
		<br>{{rated}}
		<br>{{released}}
		<br>{{runtime}}
		<br>{{genre}}
		<br>{{director}}
		<br>{{writer}}
		<br>{{actors}}
		<br>{{plot}}
		<br>{{language}}
		<br>{{country}}
		<br>{{awards}}
		<br><img :src="poster" />
		<ul>
			<li v-for="rating in ratings">{{ rating.source }} => {{ rating.value }}</li>
		</ul>
		<br>{{metascore}}
		<br>{{imdbRating}}
		<br>{{imdbID}}
		<br>{{type}}
		<br>{{DVD}}
		<br>{{boxOffice}}
		<br>{{production}}
		<br>{{website}}
		<br>{{response}}
	</div>
	`
})