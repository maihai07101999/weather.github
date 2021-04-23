<template xmlns:v-gmaps-searchbox="http://www.w3.org/1999/xhtml" >
  <div class="app2"  :class="typeof weather.main != 'undefined' && weather.main.temp > 16 ? 'warm' : ''">
    <h2>thời tiết hôm nay</h2>
    <div class="search-box">
          <input 
          ref="Qautocomplete"
          type="text" 
          class="search-bar" 
          placeholder="Search..."
           v-model=query
            @keypress="fetchWeather"
        />     
        <div class="te" style="text">{{ weather.name }}</div>
      </div>     
      <div class="weather-wrap" v-if="typeof weather.main != 'undefined'">
        <div class="location-box">
          <div class="location"></div>
          <div class="date">{{ dateBuilder() }}</div>
        </div>
        <div class="weather-box">
          <div class="temp">{{ Math.round(weather.main.temp) }}°c</div>
          <div class="weather">{{ weather.weather[0].main }}</div>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  data(){
    return {
      api_key: '973c0b6a7b9bc8c01dade4c2a1b14b0f',
      url_base: 'https://api.openweathermap.org/data/2.5/',
      query: '',
      weather: {}
    }
  },
  mounted(){
    let defaultBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(-33.8902, 151.1759),
      new google.maps.LatLng(-33.8474, 151.2631));
    let input = document.getElementById(this.$refs.Qautocomplete.$refs.input.id);
    let options = {
      query: defaultBounds,
      weather: ['address']
    };
    let autocomplete = new google.maps.places.Autocomplete(input, options);
    autocomplete.addListener("place_changed", ()=>{
      this.vacation.placeName= autocomplete.getPlace().formatted_address;
    })
  },
   methods: {
    fetchWeather (e) {
      if (e.key == "Enter") {
        fetch(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`)
          .then(res => {
            return res.json();
          }).then(this.setResults);
      }
    },
     setResults (results) {
      this.weather = results;
    },
     dateBuilder () {
      let d = new Date();
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
      return `${day} ${date} ${month} ${year}`;
    }
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body, html {
    font-family: 'montserrat', sans-serif;
    padding: 10px;
    width: 100%;
    height: 100%;
  }
  #app2 {
    background-image: url('../layout/cold-bg.jpg');
    width: 50%;
    height: 500px;
    background-size: cover;
    background-position: bottom;
    transition: 0.4s;
  }

.search-box {
  padding: 20px 20px;
  width: 70%;
  margin-bottom: 30px;
}
.te{
  width: 300px;
  height: auto;
  background-color: whitesmoke;
  padding:10px;
  margin: 5px;
  border-bottom-right-radius: 10px;
}
.search-box .search-bar {
  display: block;
  width: 40%;
  padding: 15px;
  
  color: #313131;
  font-size: 20px;
  appearance: none;
  border:none;
  outline: none;
  background: none;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0px 16px 0px 16px;
  transition: 0.4s;
}
.search-box .search-bar:focus {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 16px 0px 16px 0px;
}

.location-box .location {
  color: rgb(175, 31, 31);
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}
.location-box .date {
 transform:translateX(-753px) translateY(-49px)!important;
  color: rgb(207, 18, 18);
  font-size: 20px;
  font-weight: 300;
  font-style: italic;
  text-align: center; 
}
.weather-box {
  text-align: center;

  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color:rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  padding: 10px 25px;
  margin: 30px 0px;
  box-shadow: 3px 6px rgba(0, 0, 0, 0);
}
.weather-box .temp {
   transform:translateX(-753px) translateY(-90px)!important;
  display: inline-block;
  color: rgb(202, 32, 32);
  font-size: 102px;
  
}
.weather-box .weather {
   transform:translateX(-753px) translateY(-112px)!important;
  color: rgb(206, 32, 32);
  font-size: 48px;
  font-weight: 700;
  font-style: italic;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
</style>

