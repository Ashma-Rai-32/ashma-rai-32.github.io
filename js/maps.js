//initialize maps
var map=L.map('map').setView([0,0],7);
map.panTo(new L.LatLng(28.394857,84.124008));
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const displayLocation=function(posLatitude,posLongitude){
    
    
    map.setView(new L.LatLng(posLatitude,posLongitude),15);
    var marker=L.marker([posLatitude,posLongitude]).addTo(map);
}

const findCurrentLocation=function(){
    const status=document.querySelector('.status');

    const successCallback=(position)=>{
        console.log(position);
        let posLatitude=position.coords.latitude;
        let posLongitude=position.coords.longitude;
        console.log(posLatitude,posLongitude);
        displayLocation(posLatitude,posLongitude);
        const geoApiUrl=''
    }
    const errorCallback=function() {
        status.textContent="Error to retrieve current location";
    }
    navigator.geolocation.getCurrentPosition(successCallback,errorCallback);

    

}



// function calls
document.querySelector('.currentLocation').addEventListener("click",function(){
    findCurrentLocation();
    
    
});
document.querySelector('.homeLocation').addEventListener('click',function(){
    posLatitude=27.657970;
    posLongitude=85.332119;
    displayLocation(posLatitude,posLongitude);
}
);
document.querySelector('.collegeLocation').addEventListener('click',function(){
    posLatitude=27.694792;
    posLongitude=85.318955;
    displayLocation(posLatitude,posLongitude);
});