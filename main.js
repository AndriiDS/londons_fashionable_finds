fetch("static/ranked_shops.json")
  .then((response) => response.json())
  .then((data) => {
    let tableBody = document.querySelector("tbody");
    data.forEach((shop, index) => {
      let row = document.createElement("tr");
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${shop.name}</td>
        <td>${shop.address}</td>
        <td>${shop.composite_score.toFixed(2)}</td>
      `;
      tableBody.appendChild(row);
    });
  });
