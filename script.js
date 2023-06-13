//your code here

let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

let compare = (a,b) => {
	return a-b;
}

touristSpots.sort(compare);
console.log(touristSpots);