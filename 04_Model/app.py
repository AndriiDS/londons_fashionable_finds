# app.py
from flask import Flask, render_template, request
import pandas as pd

app = Flask(__name__)

# Load the ranked_shops DataFrame
# Replace the path with the path to your ranked_shops CSV file
ranked_shops = pd.read_csv('/Users/andrii/Documents/londons_fashionable_finds/04_Model/ranked_shops.csv')

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        search_query = request.form.get('search', '')
        if search_query:
            filtered_shops = ranked_shops[ranked_shops['Shop_Name'].str.contains(search_query, case=False)]
        else:
            filtered_shops = ranked_shops
        sort_by = request.form.get('sort_by', 'composite_score')
        ascending = request.form.get('order', 'desc') == 'asc'
        sorted_shops = filtered_shops.sort_values(by=sort_by, ascending=ascending)
    else:
        sorted_shops = ranked_shops
    return render_template('index.html', shops=sorted_shops.to_dict('records'))

if __name__ == '__main__':
    app.run(debug=True)
