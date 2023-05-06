$(document).ready(function () {
    var map = L.map("map").setView([51.5074, -0.1278], 10);
  
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
  
    $.getJSON("./static/ranked_shops.json", function (data) {
      data.forEach(function (shop) {
        var marker = L.marker([shop.Latitude, shop.Longitude]).addTo(map);
        marker.bindPopup(
          "<b>" +
            shop.Shop_Name +
            "</b><br>Rating: " +
            shop.Rating +
            "<br>Address: " +
            shop.Address
        );
      });
    });
  });
  