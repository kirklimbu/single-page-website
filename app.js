'use strict'

const hamburger= document.querySelector('.header .nav-bar .nav-list .hamburger')
const mobile_menu= document.querySelector('.header .nav-bar .nav-list ul')
const header= document.querySelector('.header .container')

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');

})

// $(document).ready(function(){
//     $(".owl-carousel").owlCarousel();
//   });

//   google maps



function initMap() {
    console.log('calling google maps')
// 26.662209494579614, 87.69396259131017
    // The location of Uluru
    const unified_damak_location = { lat: 26.66221, lng: 87.69396 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 17,
      center: unified_damak_location,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: unified_damak_location,
      map: map,
    });

    const cityCircle = new google.maps.Circle({
      strokeColor: "red",
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: "coral",
      fillOpacity: 0.35,
      map,
      center:{ lat: 26.66221, lng: 87.69396 },
      radius: 1 * 100,
    });
    // legend
    const iconBase = "https://maps.google.com/mapfiles/kml/shapes/";

    const branches =[
      // {
      //   name: "Dudhe",
      //   latlng: '26.64878218296987, 87.8259752288355',
      // },
      //  {
      //   name: "Shiva satakshi",
      //   latlng: '26.64878218296987, 87.8259752288355',
      // },
      //  {
      //   name: "Panch gachi",
      //   latlng: '26.64878218296987, 87.8259752288355',
      // },
      //  {
      //   name: "Haldi bari",
      //   latlng: '26.64878218296987, 87.8259752288355',
      // },
      {
        name:'Damak',
        latlng:'',
        icon:iconBase
      },
      {
        name:'Haldibari',
        latlng:'',
        icon:iconBase
      },
      
       {
        name:'Dhude',
        latlng:'',
        icon:iconBase
      },
       {
        name:'Sanischare',
        latlng:'',
        icon:iconBase
      },
       {
        name:'Bolochowk',
        latlng:'',
        icon:iconBase
      },
      
      
      {
        name:'Campa',
        latlng:''
      },
      {
        name:'Belari',
        latlng:''
      },
      {
        name:'Biratchowk',
        latlng:''
      },
      
      
    ]
      

    const features = [
      {
        position: new google.maps.LatLng(26.64878218296987, 87.8259752288355),
        type: "info",
        
      },
       {
        position: new google.maps.LatLng(26.647698626323077, 87.83324769098466),
        type: "info",
        
      },
       {
        position: new google.maps.LatLng(26.53399668205423, 87.79715769708092),
        type: "info",
        
      },
       {
        position: new google.maps.LatLng(26.553996586195744, 87.96087462591693),
        type: "info",
        
      },
    ]

  
  features.forEach((feature) => {
    new google.maps.Marker({
      position: feature.position,
      // icon: icons[feature.type].icon,
      map: map,
    });
  });

  
  const legend = document.getElementById("legend");

  console.log(branches)
  for (const value of branches) {
    // const type = icons[key];
    const name = value.name;
    const icon = value.icon;
    const div = document.createElement("div");
    div.innerHTML =  `<ul><li><img src="' + ${icon} + '"> 
    <strong> ${name}</strong></li></ul>`;
    legend.appendChild(div);
  }

  map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);
  // scroll to top section

  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  var rootElement = document.documentElement;

  function scrollToTop() {
    // Scroll to top logic
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
}
  window.initMap = initMap;
  