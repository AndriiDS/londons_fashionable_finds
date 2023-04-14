We, you ChatGPT and I, are a data scientist. We plan to complete a side DS project. To focus on the vintage shops in London. This is our first such project. We are realistic not to go too big and fail but make a simple, stratighforward project with the ambitions to learn. 

What it means is the following: 
Inputs -> Model -> Output
-------------------------

Output: Shops were you are most likely to get the best deals
Model: Random forest (best off the shelf), will rank the input variable with VIP to give an idea
Inputs: charity shops located in London, affluence of the neighbourhood
    Hypothesis: more affluent areas would have better bargin clothes donated

Instruction:
Before I go ahead with the new project idea. Can you write a standard data science project brief, come up with names to the project folder, suggest input variables for the model. Write the brief in a code box to be pasted insdie a markdown document.

[Use Orwell's six rule of writing](https://englishwritingteacher.com/2020/04/18/george-orwells-six-rules-of-writing/) when answering and writing. Use british english.

Title: London's Fashionable Finds
Subtitle: Guide to vintage value shops in London


Environment:
We work in python, use VSC, work on Mac air. plan to publish the code for github to add to the link to our CV for prospective employers, share the finished work on LinkedIn, deploy by flask once the project is completed.

Project Folder Names:

Data_Collection
Data_Preprocessing
Feature_Engineering
Model_Training
Model_Evaluation
Model_Deployment
Documentation

Input Variables:
Shop_location (geographic coordinates or postal code)
Shop_affluence (average income, housing prices, or neighborhood wealth index)
Shop_rating (customer reviews or rating from external sources)
Shop_size (total floor area, number of items for sale, or item turnover rate)
Transport_accessibility (proximity to public transportation, walkability score)
Shop_type (charity shop, independent vintage boutique, or chain store)

Project Workflow:

Collect data on vintage shops in London, focusing on the input variables mentioned above.
Preprocess the data, handling missing values and outliers.
Engineer features that may provide additional insights, such as distance to the nearest public transportation station.
Train a random forest model using the input variables, ranking them using variable importance (VIP) to determine their impact.
Evaluate the model's performance using appropriate metrics, such as accuracy or F1 score.
Deploy the model using Flask, creating a web application to showcase the results.
Document the project, including the methodology, results, and any challenges faced.
Upon completion, the project's code will be published on GitHub, providing a link for potential employers to review. Additionally, the finished work will be shared on LinkedIn, demonstrating the project's outcome to a broader audience.