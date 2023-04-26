fetch("./static/ranked_shops.json")
  .then((response) => response.json())
  .then((data) => {
    const tableBody = document.querySelector("table tbody");

    data.forEach((shop, index) => {
      const row = tableBody.insertRow();

      row.insertCell().innerText = index + 1;
      row.insertCell().innerText = shop.Shop_Name;
      row.insertCell().innerText = shop.Address;
      row.insertCell().innerText = parseFloat(shop.composite_score).toFixed(2);
    });
  });
