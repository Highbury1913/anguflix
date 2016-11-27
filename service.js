app.factory('flixService', function () {
	// body...
	var movies = [
		{title: "Godfather", 
		year: 1972,
		image: "http://webneel.com/daily/sites/default/files/images/daily/02-2013/5-lord-of-war-creative-movie-poster-design.jpg",
		description: "Single-origin coffee waistcoat poutine butcher vinyl next level. IPhone you probably haven't heard of them mumblecore artisan austin. Readymade tumeric meggings quinoa scenester. Thundercats keffiyeh lomo sriracha. Actually tofu knausgaard bushwick pour-over. Green juice flannel put a bird on it gluten-free pour-over, mustache before they sold out man braid fingerstache sartorial godard art party iPhone deep v hot chicken. Vape man bun meh, waistcoat twee 90's semiotics art party meggings",
		price: 3,
		},

		{title: "Boondock Saints", 
		year: 1999,
		image: "http://www.kappit.com/img/pics/201602_1416_aiaei_sm.jpg",
		description:"Hell of plaid 8-bit deep v pork belly, succulents lo-fi mixtape green juice kinfolk mlkshk cray taxidermy etsy. Messenger bag activated charcoal fap bitters master cleanse, health goth cray farm-to-table forage. Hella church-key ramps quinoa. Cardigan offal snackwave, hell of trust fund kale chips subway tile. Woke small batch edison bulb tbh venmo man bun. You probably haven't heard of them cred next level quinoa franzen, gluten-free edison bulb wolf DIY affogato selvage activated charcoal vinyl. Copper mug brooklyn readymade mustache pour-over, forage lumbersexual VHS keffiyeh.",
		price: 9,
		},

		{title: "Gladiator", 
		year: 2000,
		image: "http://cdn.mos.cms.futurecdn.net/15399e7a7b11a8c2ef28511107c90c6f.jpg",
		description:"Lyft brunch chambray PBR&B trust fund. Yuccie fanny pack meditation blog. 3 wolf moon flannel next level, migas activated charcoal raw denim green juice mixtape coloring book kickstarter kinfolk portland. Mlkshk trust fund cronut beard sartorial, drinking vinegar cray 3 wolf moon asymmetrical. Vegan migas tousled, hell of scenester vexillologist gochujang. Mixtape tumblr celiac church-key cornhole cred. Street art polaroid health goth, franzen craft beer put a bird on it jianbing sustainable portland cliche.",
		price:5,
		},


		/*{title: "The Shawshank Redemption", 
		year: 1994,
		image: "https://pics.onsizzle.com/otal-footba-having-topigkbetween-clinton-and-trump-remindsmeorarsene-wenger-m-6230300.png",
		description:"Kinfolk pour-over normcore hammock selvage. Narwhal yr vinyl sartorial. Pitchfork listicle marfa four loko, cronut kombucha selfies sartorial kitsch fixie everyday carry woke. 8-bit viral mlkshk, green juice synth freegan vinyl tbh lyft jean shorts health goth gochujang raw denim woke swag. Truffaut seitan vaporware cliche. 3 wolf moon tattooed chicharrones copper mug. Lumbersexual selvage retro salvia quinoa."},
		*/];
		var myCollection= [];

		return{
			allMovies : movies,
			president_elect : myCollection
		};
});










