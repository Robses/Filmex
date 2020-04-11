//API access keys
//apikey=d3b3f9ef
//API Documentation:
//https://www.omdbapi.com/

let omdbapiURL = 'http://www.omdbapi.com/?t=Fight Club&apikey=d3b3f9ef'

Vue.component('omdb', {
	data() {
		return {
			result: [],
			errors: []
		}
	}, 
	template: `
	<div>
		<h1>Title: {{ result.Title }}</h1>
		<h2>Year {{ result.Year }}</h2>
		<br>Rated: {{ result.Rated }}
		<br>Released: {{ result.Released }}
		<br>Runtime: {{ result.Runtime }}
		<br>Genre: {{ result.Genre }}
		<br>Director: {{ result.Director }}
		<br>Writer: {{ result.Writer }}
		<br>Actors: {{ result.Actors }}
		<br>Plot: {{ result.Plot }}
		<br>Language: {{ result.Language }}
		<br>Country: {{ result.Country }}
		<br>Awards: {{ result.Awards }}
		<br>Poster: <img :src="result.Poster" />
		<ul>
			Services' Rating: <li v-for="rating in result.Ratings">{{ rating.Source }} => {{ rating.Value }}</li>
		</ul>
		<br>Metascore: {{ result.Metascore }}
		<br>IMBD Rating: {{ result.imdbRating }}
		<br>IMDB ID: {{ result.imdbID }}
		<br>Type: {{ result.Type }}
		<br>DBD: {{ result.DVD }}
		<br>BoxOffice: {{ result.BoxOffice }}
		<br>Production: {{ result.Production }}
		<br>Website: {{ result.Website }}
		<br>Response: {{ result.Response }}
	</div>
	`,
	created() {
		axios.get(omdbapiURL).then(response => {
			this.result = response.data
		}).catch(e => {
			this.errors.push(e)
		})
	}
})