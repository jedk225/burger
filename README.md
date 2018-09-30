# burger
Node Express Handlebars Assignment

Friend Finder is a a burger logger web app using MySQL, Node, Express, Handlebars and a homemade ORM. It follows the MVC design pattern. Users can log burgers into an ongoing list, then mark them as "devoured" once they've eaten the respective burger. The application uses a MySQL database for storage and data persistence.

The purpose of this project is to gain experience on how to use Node and MySQL to query and route data in an app, and use Handlebars to generate HTML.

# Link to Deployed App


# Technologies
```
1. Node.js
2. Express
3. NPM
4. Bootstrap
5. Handlebars
6. MySQL Database
```

# Dependencies
```
1. express
2. express-handlebars
3. body-parser
4. mysql

Please install each of the packages listed above by typing 'npm install [Package Name]' in the command line.
```

# Instructions
To use the web application:

1. 

2. 

3. 

4. 

# Demo (images)
## 1. Welcome Prompt
Prompt when the CLI is run. If the customer responds 'yes' the Products Table will display. If the the customer responds 'no' the script will stop.
![Intro Image](public/assets/img/1.png?raw=true)
---

## 2. Products Table
Table displaying all products within a table when the user responds 'yes.' This table displays 10 items with the values: Item ID, Product [Name], Department, Price, and Stock (quantity).
![Intro Image](images/2-Welcome-Table.png?raw=true)
---

## 3. Purchase prompt
User is prompted to choose item they wish to purchase via the Item ID number. They are also prompted to choose how many items they would like to purchase.
![Intro Image](images/3-ID_Quantity.png?raw=true)
---

## 4. Updated Database
The MySQL database is updated and displayed according to the item that was purchased. The quantity that the customer is purchasing is subtracted from the previous stock quantity. User is also given and confirmation of the item quantity and total price.
![Intro Image](images/4-UpdatedStock.png?raw=true)
---

## NOTE: Validation for stock quantity
If a user requests to purchase more units than is currently in stock, they will be informed that there is insufficient quantity. They will then be prompted to make another selection.
![Intro Image](images/5-InsufficientQuantity.png?raw=true)
---

## Contributers
* Jed Kim