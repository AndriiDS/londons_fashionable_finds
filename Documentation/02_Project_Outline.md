# London's Fashionable Finds
## Guide to vintage value shops in London

### Environment
- Language: Python
- IDE: Visual Studio Code
- OS: macOS
- Deployment: Flask web application
- Code Repository: GitHub

### Project Folders
1. Data_Collection
    - Google Places API
    - London Datastore
2. Data_Preprocessing
3. Feature_Engineering
4. Model_Training
5. Model_Evaluation
6. Model_Deployment
7. Documentation

### Input Variables (pseudocode ideas)
- Shop_location: Geographic coordinates or postal code
- Shop_rating: Customer reviews or rating from external sources
- Shop_affluence: Average income, housing prices, or neighbourhood wealth index
- Shop_size: Total floor area, number of items for sale, or item turnover rate
- Transport_accessibility: Proximity to public transportation, walkability score
- Shop_type: Charity shop, independent vintage boutique, or chain store

| Variable                       | Data Source                                                                                               |
|--------------------------------|-----------------------------------------------------------------------------------------------------------|
| Location                       | Google Maps API, OpenStreetMap                                                                            |
| Quality and variety of items   | Online reviews (Google, Yelp, Trustpilot), social media presence (Instagram, Twitter, Facebook)           |
| Regular stock updates          | Online reviews, social media updates                                                                      |
| Organization and presentation  | Online reviews, photos from Google Maps, social media images                                              |
| Price                          | Online reviews, price tags on social media images, charity shop websites                                  |
| Special events and promotions  | Social media updates, charity shop websites, email newsletters                                            |
| Friendly and knowledgeable staff| Online reviews, interactions with the shop on social media platforms                                     |
| Mission and impact             | Charity shop websites, annual reports, newsletters, social media updates, Charity Commission for England and Wales |


| Rank | Variable                       |
|------|--------------------------------|
| 1    | Location                       |
| 2    | Quality and variety of items   |
| 3    | Price                          |
| 4    | Organization and presentation  |
| 5    | Friendly and knowledgeable staff|
| 6    | Regular stock updates          |
| 7    | Special events and promotions  |
| 8    | Mission and impact             |


| Variable                       | Data Source                                                                                               |
|--------------------------------|-----------------------------------------------------------------------------------------------------------|
| Location                       | Google Maps API, OpenStreetMap                                                                            |
| Quality and variety of items   | Online reviews (Google, Yelp, Trustpilot), social media presence (Instagram, Twitter, Facebook)           |
| Regular stock updates          | Online reviews, social media updates                                                                      |
| Organization and presentation  | Online reviews, photos from Google Maps, social media images                                              |
| Price                          | Online reviews, price tags on social media images, charity shop websites                                  |
| Special events and promotions  | Social media updates, charity shop websites, email newsletters                                            |
| Friendly and knowledgeable staff| Online reviews, interactions with the shop on social media platforms                                     |
| Mission and impact             | Charity shop websites, annual reports, newsletters, social media updates, Charity Commission for England and Wales |



### Project Workflow
1. Collect data on vintage shops in London, focusing on the input variables mentioned above.
2. Preprocess the data, handling missing values and outliers.
3. Engineer features that may provide additional insights, such as distance to the nearest public transportation station.
4. Train a random forest model using the input variables, ranking them using variable importance (VIP) to determine their impact.
5. Evaluate the model's performance using appropriate metrics, such as accuracy or F1 score.
6. Deploy the model using Flask, creating a web application to showcase the results.
7. Document the project, including the methodology, results, and any challenges faced.

Upon completion, the project's code will be published on GitHub, providing a link for potential employers to review. Additionally, the finished work will be shared on LinkedIn, demonstrating the project's outcome to a broader audience.


python app.py

