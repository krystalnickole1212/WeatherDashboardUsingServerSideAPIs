

var appId = "db627139d1df26bd369c66a7b0eca74b";
var cityName;
var searchButton = document.querySelector(".searchBtn");
var cityInput = document.querySelector(".city");

var getCoordinates = function () {
   fetch ("http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&appId=" + appId).then(function(response){
      
      return response.json();
}).then(function(data){
    var latitude = data[0].lat;
    var longitude = data[0].lon;
    return [latitude, longitude]; 
})
.then(function (value){
    fetch(
        "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=" + appId )

        
});
};




 
var citySearch = function (){

    cityName = cityInput.value;
    getCoordinates(cityName);

};

//set items to ls 
//localStorage.setItem(cityInput, JSON.stringify(SearchButton));


searchButton.addEventListener("click", citySearch );
