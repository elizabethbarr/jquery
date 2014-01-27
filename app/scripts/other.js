var dog = {
	legs:4,
	ears:2,
	bark: function (){
		console.log ('Woof!'); 
	  },
  
  countEars: function(){
    console.log('I have', this.ears, 'ears.');
  }
}




var pasta = {
	grain: "wheat",
	size: 0.5,
	shape: "fusili",
	getShape: function(){
		console.log('We have', this.shape, 'with broccoli tonight.');
	}
}



var pizza = {
	slices: 12,
	size: "large",
	variety: "thin crust",
	toppings: [
		"sauce",
		"cheese",
		"pepperoni",
		"green olives",
		"mushrooms",	
	],
	eatSlices: function (toBeEaten) {
		this.slices = this.slices - toBeEaten;
		console.log("Just ate", toBeEaten, "slices. Now there are", this.slices, "left.");
	}
}
// pizza.eatSlices(5)


var barre = {
	sessionsCount: 1,
	sizeUnit: "minutes", 
	studio: "Augusta Road",
	exercises: [
		"warmup",
		"weights",
		"stretch",
		"thighs",
		"stetch2",
		"seat",
		"barre abs",
		"mat abs",
		"stretch3"		
	],
	attendSession: function (toBeAttended) {
		// here I'm mutating session count by adding toBeAttended count to the total
		this.sessionsCount = this.sessionsCount + toBeAttended;
		// now that we've changed session count, we'll consolelog the new total
		console.log("Since 2012, I've attended", this.sessionsCount, "Pure Barre classes at the", this.studio, "location.");
	}
}



var cocktail = {
	amount: 4,
	amountUnit: "ounces", 
	quantity: 1,
	ingredients: [
		"bourbon",
		"orange bitters",
		"Angostura bitters",
		"cherry",
		"orange peel",
		"raw sugar",	
	],
	mixIngredients: function (toBeAdded) {
		//.push adds the argument to the end of the array from which it's called
		this.ingredients.push(toBeAdded);
		//.join adds comma and space into the array of items.
		console.log("To make the perfect old fashioned, mix", this.ingredients.join(", "), "in a cocktail shaker with lots of ice.");
	}
}







