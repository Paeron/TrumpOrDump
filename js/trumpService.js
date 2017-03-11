// Here we create an Angular service that we will use for our 
// model. In your controllers (or other services) you can include the
// dependency on any service you need. Angular will insure that the
// service is created first time it is needed and then just reuse it
// the next time.
trumpOrDumpApp.factory('Trump',function ($resource) {
	
	//var tweets = [];
	
	this.tweet = $resource('https://api.whatdoestrumpthink.com/api/v1/quotes/random');
	
	this.getTweets = function(num){
		var t = [];
		for(i = 0; i < num; i++){
			this.tweet.get({},function(data){
				t.push(data.message);
			});
		};
		
		return t;
	};
	
	this.falseTweet = function(){
		
	};
	
	this.getScore = function(){
		
	};
	
	this.updateScore = function(data){
		
	};
	
	this.getHighScore = function(){
		
	};
	
	this.updateHighScore = function(data){
		
	};

  // Angular service needs to return an object that has all the
  // methods created in it. You can consider that this is instead
  // of calling var model = new DinnerModel() we did in the previous labs
  // This is because Angular takes care of creating it when needed.
  return this;

});