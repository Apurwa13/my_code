/*Question-1.Create a JavaScript restaurantManager class */

class RestaurantManager{
    restaurantList = [{
         id : 1,  
        name : "KFC",
        address : "Anand Vihar" ,
        city :  "Delhi"
    },

    {
        id : 2,
        name : "Domino",
        address : "Savita Vihar" ,
        city : "Delhi"
    },
    {
        id : 3,
        name : "Burger KingC",
        address : "Civil Lines" ,
        city : "Pune"
    },
    {
        id : 4,
        name : "Subway",
        address : "Cantonment" ,
        city : "Mumbai"

    }]
    restaurantName(){
        return this.restaurantList.map((restaurant) => restaurant.name)
    }
    RestaurantByCity(cityname){
        return this.restaurantList.filter((restaurant) => restaurant.city == cityname)
    }
}
const output = new RestaurantManager()
console.log (output.restaurantName());
console.log (output.RestaurantByCity("Mumbai"));

//Question-2.Please find order details for Punjabi Tadka restaurant in Delhi as 

const orderData = {
    'Below 500': 20,
    '500-1000': 29,
    '1000-1500': 30,
    '1500-2000': 44,
    'Above 2000': 76
  }

  // a. Calculate the total number of orders placed for the restaurant.

  const output1 = Object.values(orderData).reduce((acc,curr) => acc+curr,0)
  console.log(output1)

  // b. Calculate the number of order proportion options.

  const headers = Object.keys(orderData)
  console.log(headers)

  // c. Calculate the percentage of each proportion in below format

  const response = headers.map((item, index, total) => {  
    return {
      'id': index + 1,
      'restaurant': 'KFC',
      'order': item,
      
      'order percentage': ((orderData[item] / total) * 100).toFixed(2)
    }
  })