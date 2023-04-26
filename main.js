document.addEventListener("DOMContentLoaded", function () {
    fetch("./static/ranked_shops.json")
      .then((response) => response.json())
      .then((data) => {
        const tableBody = document.getElementById("table-body");
  
        data.forEach((shop, index) => {
          const row = document.createElement("tr");
  
          const rankCell = document.createElement("td");
          rankCell.textContent = index + 1;
          row.appendChild(rankCell);
  
          const nameCell = document.createElement("td");
          nameCell.textContent = shop.Shop_Name;
          row.appendChild(nameCell);
  
          const addressCell = document.createElement("td");
          addressCell.textContent = shop.Address;
          row.appendChild(addressCell);
  
          const scoreCell = document.createElement("td");
          scoreCell.textContent = parseFloat(shop.composite_score).toFixed(2);
          row.appendChild(scoreCell);
  
          tableBody.appendChild(row);
        });
      })
      .catch((error) => console.error("Error fetching JSON data:", error));
  });
  