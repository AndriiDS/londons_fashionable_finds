import pandas as pd

# Read the data files
vintage_shops = pd.read_csv("01_Data_Collection/vintage_shops_london.csv")
house_prices = pd.read_csv("01_Data_Collection/london_house_prices_2017.csv")
earnings = pd.read_csv("01_Data_Collection/earnings_residence_borough_2021.csv")
imd = pd.read_csv("01_Data_Collection/imd_2019_london_filtered.csv")

# Drop unnecessary columns
vintage_shops = vintage_shops.drop(columns=['borough', 'borough_from_address'])

# Rename the column
vintage_shops = vintage_shops.rename(columns={'borough_from_lat_lng': 'borough'})

# Add a unique ID to the vintage_shops DataFrame
vintage_shops['shop_id'] = vintage_shops.index

# Merge the data based on the 'borough' column
merged_data = (
    vintage_shops
    .merge(house_prices, left_on='borough', right_on='Area', how='left')
    .merge(earnings, left_on='borough', right_on='Area', how='left', suffixes=('', '_earnings'))
)

# Aggregate IMD data by calculating the mean rank for each borough
imd_agg = imd.groupby('Local Authority District name (2019)').mean().reset_index()

# Merge IMD data with merged_data
merged_data = merged_data.merge(
    imd_agg,
    left_on='borough',
    right_on='Local Authority District name (2019)',
    how='left'
)

# Drop unnecessary columns from the merged data
merged_data = merged_data.drop(columns=['Unnamed: 0', 'Area', 'Area_earnings', 'Local Authority District name (2019)'])

print(merged_data.head())


IPython.display import display


# Set display options
pd.set_option('display.max_columns', None)  # Display all columns
pd.set_option('display.width', 200)         # Set the display width to avoid line wrapping
pd.set_option('display.max_rows', 10)       # Set the maximum number of rows to display

display(merged_data)

merged_data.to_csv('02_Data_preprocessing/merged_vintage_shops_data.csv', index=False)
