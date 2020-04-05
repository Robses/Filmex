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