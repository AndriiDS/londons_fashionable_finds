# London's Vintage and Charity Shops

This project aims to analyse and visualise the trends and distribution of vintage and charity stores in London. By leveraging open data sources and machine learning techniques, this project seeks to provide insights for both customers and retailers.

[View London's Top 20 Rated Shops by Borough](https://andriids.github.io/londons_fashionable_finds/map.html)


## Live Demo

You can test and view the ranking at the following link: [London Charity Vintage Shops](https://andriids.github.io/londons_fashionable_finds/)

I initially developed this project as a dynamic Flask app and successfully hosted on Heroku. However, due to hosting costs, I decided to switch to a static GitHub Pages site. The working code for the dynamic Heroku website can be found in the `previous_dynamic_website` folder in the main project directory.

## Model Validation

To validate the model's ranking of charity and vintage shops in London, I cross-referenced the results with various online articles from reputable sources such as Vogue, Secret London, London x London, Elle, Conde Nast Traveller, Time Out, Harper's Bazaar, and Visit London. I counted the number of times each shop was mentioned across these sources and then compared the ranking with the shops that had the highest mentions.

The table below shows a selection of top shops from the articles, their type (charity or vintage), the count of mentions across the sources, and their respective ranking in our model:

| Shop                                              | Type        | Count of Mentions | Model Ranking |
|---------------------------------------------------|-------------|-------------------|--------------|
| Oxfam Boutique (Marylebone)                      | Charity     | 4                 | 5            |
| Beyond Retro (Brick Lane)                         | Vintage     | 4                 | 6            |
| The East End Thrift Store (Mile End)             | Charity     | 4                 | Not Ranked   |
| FARA (Angel)                                      | Charity     | 3                 | 7            |
| Octavia Foundation (Brompton Road)               | Charity     | 3                 | Not Ranked   |
| Traid (various locations)                         | Charity     | 3                 | 4            |
| Rokit (Brick Lane, Covent Garden)                 | Vintage     | 3                 | 1            |
| Atika (Brick Lane)                                | Vintage     | 3                 | 2            |
| British Red Cross (Chelsea, Victoria)             | Charity     | 2                 | Not Ranked   |
| Cancer Research UK (Marylebone)                   | Charity     | 2                 | Not Ranked   |
| Oxfam Boutique (Westbourne Grove)                | Charity     | 2                 | Not Ranked   |
| Shelter (various locations)                       | Charity     | 2                 | 3            |
| The Salvation Army (Pratt Street)                 | Charity     | 2                 | Not Ranked   |
| William Vintage (Marylebone)                      | Vintage     | 2                 | Not Ranked   |
| Blitz (Brick Lane)                                | Vintage     | 2                 | Not Ranked   |
| Found And Vision (Notting Hill)                   | Vintage     | 2                 | Not Ranked   |
| Pop Boutique (Covent Garden)                      | Vintage     | 2                 | Not Ranked   |

Please note that not all the shops mentioned in the articles are ranked in the list. The table above shows the rankings of the shops that are included in the ranking.


### Data Variables

The table below displays the variables used to evaluate the charity and vintage shops on our static website that went into the model.

| Variable                       | Data Source                                                                                               | Description |
|--------------------------------|-----------------------------------------------------------------------------------------------------------|-------------|
| Shop Name                      | Web scraping, Google Maps API                                                                             | The name of the shop |
| Address                        | Google Maps API, OpenStreetMap                                                                            | The shop's address |
| Latitude                       | Google Maps API                                                                                           | Latitude coordinate of the shop |
| Longitude                      | Google Maps API                                                                                           | Longitude coordinate of the shop |
| Rating                         | Google Maps API                                                                                           | Average user rating of the shop |
| Reviews Count                  | Google Maps API                                                                                           | Number of user reviews |
| Place ID                       | Google Maps API                                                                                           | Google Maps Place ID |
| Price Level                    | Google Maps API                                                                                           | Relative price level of the shop |
| Borough                        | Web scraping, OpenStreetMap                                                                               | London borough the shop is located in |
| Property Value (2017)          | Web scraping, UK House Price Index                                                                        | Average property value in the borough (2017) |
| Earnings (2021)                | Web scraping, Office for National Statistics                                                              | Average earnings in the borough (2021) |
| IMD Rank                       | Web scraping, Ministry of Housing, Communities & Local Government                                         | Index of Multiple Deprivation rank for the borough |
| Income Rank                    | Web scraping, Ministry of Housing, Communities & Local Government                                         | Income rank for the borough |
| Composite Score                | Machine learning model output                                                                             | A composite score based on various features to rank the shops |

## Project Structure

The project is organised into the following directories and files:

- `01_Data_Collection`: Contains scripts and data files for collecting data from various sources, such as charity registers and geographic information
- `02_Data_Preprocessing`: Scripts for cleaning and preprocessing the collected data to make it suitable for analysis and modelling
- `03_EDA`: Scripts and notebooks for exploratory data analysis (EDA) and feature engineering
- `04_Model`: Scripts for training and evaluating machine learning models on the processed data
- `Documentation`: Contains project documentation files, including explanations, additional resources
- `previous_dynamic_website`: Contains the files for the earlier dynamic version of the project, including 
   - `app.py` the main script for running the web application and 
   - `templates` HTML templates for the web application


## Setup

To set up the project, follow these steps:

1. Clone the repository: `git clone https://github.com/AndriiDS/londons_fashionable_finds.git`
2. Set up a virtual environment (optional but recommended) and activate it:
   - `python -m venv env`
   - On Windows: `env\Scripts\activate`
   - On Linux/Mac: `source env/bin/activate`
3. Install the required packages: `pip install -r requirements.txt`
4. Run the data collection, preprocessing, EDA, and feature engineering scripts in order.
5. Train and evaluate the machine learning models using the scripts in the `04_Model` directory.
6. Launch the web application by running `app.py`.

## Contributing

We welcome contributions from the community. To contribute, please follow these steps:

1. Fork the repository on GitHub.
2. Clone your fork and create a new branch for your feature or bugfix.
3. Commit your changes to your branch and push them to your fork.
4. Open a pull request from your fork to the original repository.

Please ensure that your code follows the project's style guidelines and includes tests and documentation as appropriate.


## Visualisations

The project includes various visualisations to help understand the data and trends:

### Clusters
![Clusters](./Documentation/Scatter%20Plot%20Colored%20by%20Clusters.png)

### Distribution of Shops by Boroughs
![Distribution of Shops by Boroughs](./Documentation/Distribution%20of%20Shops%20by%20Boroughs.png)

### Boxplot of Ratings per Borough
![Boxplot of Ratings per Borough](./Documentation/Boxplot%20of%20Ratings%20per%20Borough.png)

### Distribution of Ratings
![Distribution of Ratings](./Documentation/Distribution%20of%20Ratings.png)

### Boxplot of Ratings per Price Level
![Boxplot of Ratings per Price Level](./Documentation/Boxplot%20of%20Ratings%20per%20Price%20Level.png)

### Correlation Matrix of Shop Variables
![Correlation Matrix of Shop Variables](./Documentation/Correlation%20Matrix%20of%20Shop%20Variables.png)

