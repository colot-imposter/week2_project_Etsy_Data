// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1() {
    let total = 0
    data.forEach(function(item) {
        total += item.price;
    let averagePrice = (total / data.length);

    console.log("The Average Price is " + averagePrice)
    return averagePrice;
  })
}

// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2() {
    let specifPrice = []
    data.forEach(function(item) {
        if (item.price >= 14 && item.price <= 18)
            specifPrice.push(item.title)
    })
    specifPrice.forEach(function(item) {
        console.log(item);
    })
}


// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3() {
    data.forEach(function(currency) {
        if (currency.currency_code === 'GBP') {
            console.log(currency.title+ " costs "+ currency.price+ " GB Pounds");
            // console.log(item.title + " costs " + item.price + " pounds");
            }
      })
    }


    // 4: Display a list of all items who are made of wood.
    function question4() {
        // Answer:
        data.forEach(function(wooders){
          if (wooders.materials.includes('wood')) {
          console.log(wooders.title +' is made of wood')
        }
      } );

  }


    // 5: Which items are made of eight or more materials?
    // Display the name, number of items and the items it is made of.
    function question5() {
      data.forEach(function (eighters){
        let numbEighters = eighters.materials.length;
        if (numbEighters >= 8){

            console.log(eighters.title +" is made up of "+ eighters.materials.length +" different materials, including: ");

            eighters.materials.forEach(function(watAteTho)
            {console.log("-" + watAteTho)

        })



        }
      })
  }



    // 6: How many items were made by their sellers?
    function question6() {
        // Answer:
        let total = 0
        data.forEach(function(selfmadesuperstats){
          if (selfmadesuperstats.who_made === "i_did") {
            total += 1
          }
      })
console.log(total + " items were made by their sauce-ass owners. Themselves. Starters. Do-ers. Movers Broah. Each beer mug at a time. Broah.");
}
