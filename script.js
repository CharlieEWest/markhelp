var channelName = 'hw7youtube';
$(document).ready(function(){
	$.get(
		"https://www.googleapis.com/youtube/v3/channels",{
			part:"contentDetails",
			forUsername: channelName,
			key: 'AIzaSyDnWkipxceKbNQrgHNv6-KFcq_XgNHQu1Q'},
			function(data){
				$.each(data.items, function(i, item){
					console.log(item);
				})			
			}
		);
});