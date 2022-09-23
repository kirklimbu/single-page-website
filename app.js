import branches from './assets/data/branchesList.json'assert { type: 'json' };

'use strict'

const hamburger= document.querySelector('.header .nav-bar .nav-list .hamburger')
const mobile_menu= document.querySelector('.header .nav-bar .nav-list ul')
const header= document.querySelector('.header .container')

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');

})


// main office map

  function initMap(){

    let map = L.map('map', {
      center: [26.66221, 87.69396],
      zoom: 12
  });

  let osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',


   {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
  }).addTo(map);
  // add multiple markers--> start from here
  let marker = L.marker([26.66221, 87.69396]).addTo(map);
  marker.bindPopup(`<span class='text-danger' >ISP</span><br/><strong >Unified Communication Pvt. Ltd.<br/> Head Office</strong>`).openPopup();

  addBranchesMarkers(map);

  let Basemaps = {
      "OSM": osm
  }
  let circle = L.circle([26.66221, 87.69396], {
    color: '' ,
    fillColor: 'coral',
    fillOpacity: 0.5,
    radius: 200
}).addTo(map);

  let Overlaymaps = {
      "Marker": marker,
      'Circle':circle
  }
  L.control.layers(Basemaps, Overlaymaps).addTo(map);
   }

   function addBranchesMarkers(map){
     branches.forEach(branch=>{
      const lat = Number(branch.coordinates[0]);
      const lng = Number(branch.coordinates[1]);
      if (lat === null || lng === null) return;
      let marker = new L.marker([lat,lng]).addTo(map);
      marker.bindPopup(`<span class='text-danger' >ISP</span><br/><strong>${branch.name}</strong>`).openPopup();
     })
   }

   function setLegends(map) {
		const legend = new (L.Control.extend({
		  options: { position: "bottomright" },
		}))();
		// legend seciton
		legend.onAdd = function () {
		  var div = L.DomUtil.create("div", "Branches"),
			wards = [1, 2, 3, 4, 5],
			labels = [`वडा १`, `वडा २`, `वडा ३`, `वडा ४`, "वडा ५"];
		  div.innerHTML += "<strong>जानकारी</strong>" + "<br>";
		  for (var i = 0; i < wards.length; i++) {
			div.innerHTML +=
			  '<i style="background:' +
			  getColor(wards[i]) +
			  '"> ` `</i> ' +
			  `<strong>${labels[i]}</strong>` +
			  "<br>";
		  }
		  return div;
		};
		legend.addTo(map);
  }
   window.onload=initMap();


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

  // send mail
  // info@unicom.net.np
   function sendEmail() {
    console.log('calling send email')
   try {
     Email.send({
      Host: "smtp.gmail.com",
      Username: "testbikramlimbu@gmail.com",
      Password: "T35t@1234",
      To: 'kirklimbu@gmail.com',
      From: document.getElementById('fullName'),
      Subject: "Customer Inquery",
      Body: 
      `Name:${document.getElementById(fullName).value}
      <br/>
      email:${document.getElementById(email).value}
       <br/>
       phone:${document.getElementById(phone).value}
       <br/>
      Description:${document.getElementById(message).value}
      `,
      Attachments: [
        {
          name: "File_Name_with_Extension",
          path: "Full Path of the file"
        }]
    })
    .then(function (message) {
      alert("mail sent successfully")
    })
    .catch(function (error){
      console.log('error',error)
      alert("error",error)

    })

    // console.log('mailResponse',mailResponse)
    // mailResponse && alert("Mail has been sent successfully")
   } catch (error) {
     console.log('error',error)
   }

     
  }





