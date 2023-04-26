fetch("ranked_shops.json")
  .then((response) => response.json())
  .then((shops) => {
    const tableBody = document.querySelector("tbody");

    shops.forEach((shop, index) => {
      const row = document.createElement("tr");

      const rankCell = document.createElement("td");
      rankCell.textContent = index + 1;
      row.appendChild(rankCell);

      const shopNameCell = document.createElement("td");
      shopNameCell.textContent = shop.Shop_Name;
      row.appendChild(shopNameCell);

      const addressCell = document.createElement("td");
      addressCell.textContent = shop.Address;
      row.appendChild(addressCell);

      const scoreCell = document.createElement("td");
      scoreCell.textContent = parseFloat(shop.composite_score).toFixed(2);
      row.appendChild(scoreCell);

      tableBody.appendChild(row);
    });
  });
