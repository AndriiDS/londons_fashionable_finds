document.addEventListener('DOMContentLoaded', function () {
    fetch('data/ranked_shops.json')
        .then(response => response.json())
        .then(data => {
            populateTable(data);
        })
        .catch(error => {
            console.error('Error fetching JSON data:', error);
        });
});

function populateTable(data) {
    const tableBody = document.getElementById('table-body');

    data.forEach((shop, index) => {
        const row = document.createElement('tr');

        const rankCell = document.createElement('td');
        rankCell.textContent = index + 1;
        row.appendChild(rankCell);

        const shopNameCell = document.createElement('td');
        shopNameCell.textContent = shop.Shop_Name;
        row.appendChild(shopNameCell);

        const addressCell = document.createElement('td');
        addressCell.textContent = shop.Address;
        row.appendChild(addressCell);

        const compositeScoreCell = document.createElement('td');
        compositeScoreCell.textContent = parseFloat(shop.composite_score).toFixed(2);
        row.appendChild(compositeScoreCell);

        tableBody.appendChild(row);
    });
}
