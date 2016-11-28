var channelName = 'motownapi';

$(document).ready(function(){
	$.get(
		"https://www.googleapis.com/youtube/v3/channels",{
			part:"contentDetails",
			forUsername: channelName,
			key: 'AIzaSyA5IsV26Naq5SWUIqLiSxJEHTAyWZyfA4k'},
			function(data){
				$.each(data.items, function(i, item){
					console.log(item);
					pid = item.contentDetails.relatedPlaylist.uploads;
					getVids(pid);
				})			
			}
		);
	function getVids(pid){
		$.get(
		"https://www.googleapis.com/youtube/v3/channels",{
			part:"snippet",
			maxResults: 10,
			relatedPlayId: pid,
			key: 'AIzaSyA5IsV26Naq5SWUIqLiSxJEHTAyWZyfA4k'},
			function(data){
				var output;
				$.each(data.items, function(i, item){
					console.log(item);
					videoTitle = item.snippet.title;

					output = '<li>'+vidTitle+'</li>';

					//Append to results 
					$('#results').append(output);

				})			
			}
		);
	}
});
// $('#myVideoButton').onClick(function () {
	// API code
//  })