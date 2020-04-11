//API access keys
//k=362836-Film-28NUG9D4
//k=360743-apiclass-HZ7RM425
//API Documentation:
//https://readthedocs.org/projects/tastedive-api-documentation/downloads/pdf/latest/
var method = 'GET';
let cors_anywhere_api = 'https://cors-anywhere.herokuapp.com/'
let tastediveURL = 'https://tastedive.com/api/similar?k=360743-apiclass-HZ7RM425&q=matrix'

let url = cors_anywhere_api + tastediveURL

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
	if(this.readyState == 4 && this.status == 200)
	{
		const parsed = JSON.parse(xhr.responseText)
		console.log(parsed)
    }
};
xhr.open(method, url);
xhr.send();

Vue.component('tastedive', {
	data() {
		return {
			similar: {
				info: [
					{
						name: "Matrix",
						type: "music"
					}
				],
				results: [
					{
						name: "Kaiser Chiefs",
						type: "music"
					},
					{
						name: "Catch Me If You Can",
						type: "movie"
					},
					{
						name: "Fight Club",
						type: "movie"
					}
				]
			}			
		}
	},
	template: `
	<div>
		<ul>
			<li v-for="info in similar.info">{{ info.name }}  [{{ info.type }}]</li>
		</ul>
		<ol>
			<li v-for="result in similar.results">{{ result.name }}  [{{ result.type }}]</li>
		</ol>
	</div>
	`
})