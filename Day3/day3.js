
restaurantList = [{
           "name": "shiv sagar",
          "city": "Mumbai",
          "address": "virle parle"
      },

      {
          "name": "gopal krishna",
          "city": "Pune",
          "address": "vasant vihar"
      },

      {
          "name": "pizza hut",
          "city": "Mumbai",
          "address": "andheri east"
      },

      {
          "name": "blue star",
          "city": "chennai",
          "address": "laxmi nagar"
      },

      {
          "name": "maharaja",
          "city": "Pune",
          "address": "ganesh industrial estate"
      }
  ];  





import jsonobject
class restaurantManager {  
constructor(name, city, address) {
      this.name = name;
      this.city = city;
      this.address = address;
  }

  printAllRestaurantNames() {
          console.log(this.name);
  } 
 filterRestaurantByCity(city) { 
         if(city==this.city){  
console.log(this.city);
   console.log("restaurant name:"+this.name);
   console.log("restaurant address:"+this.address);} 
}   
}  

function execute(){ 
console.log("----list of all restaurants------");
for(var i=0;i<restaurantList.length;i++){
const smit=new restaurantManager(restaurantList[i].name,restaurantList[i].city,restaurantList[i].address); 
smit.printAllRestaurantNames();
}  
console.log("----filter reastaurant by city with their address and name------"); 
for(var i=0;i<restaurantList.length;i++){
const smit=new restaurantManager(restaurantList[i].name,restaurantList[i].city,restaurantList[i].address); 
smit.filterRestaurantByCity("chennai");
}
} 
execute(); 