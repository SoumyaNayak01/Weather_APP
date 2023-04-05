let weather = {
    apikey:"5282cbfa354f1a93e31b6b378429291d",
    fetchWeather : function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apikey
        )
        .then((response)=>response.json())
        .then((data)=>this.displayWeather(data))
    },
    displayWeather:function(data){
      const{name}=data;     
      const{icon,description}=data.weather[0]; 
      const{temp,humidity}=data.main;
      const{speed}=data.wind;
      document.querySelector(".city").innerText= " Weather in " +name;  
      document.querySelector(".icon").src="https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText=description;
      document.querySelector(".temp").innerText= temp + "°C";
      document.querySelector(".humidity").innerText="Humidity:" + humidity + "%";
      document.querySelector(".wind").innerText="Wind speed:" + speed + "km/hr";
      document.querySelector(".weather").classList.remove("loading");
      document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1503327431567-3ab5e6e79140?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80')"   
    },
    search:function(){
       this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

  document.querySelector(".search button") .addEventListener("click",function(){ 
    weather.search();
  });

  document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if(event.key=="Enter"){
      weather.search();
    }
  });

  weather.fetchWeather("Bhubaneswar");