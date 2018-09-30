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

# Demo (images)
## 1. Intro
Users will be greeted with two lists. The list on the left will display burgers that are available to be devoured. The list on the right displays burgers that have already been devoured. 

![Intro Image](public/assets/img/1.png?raw=true)
---

## 2. Adding a burger
If there are no burgers available, or the available options do not appear appetizing to the user, they can add their own burger. Below the two burger lists, there is a text form where the user can input the name of the burger they would like to devour. Once the submit button is clicked, the newly-created burger will appear in the 'Available Burgers' list. This is using CREATE out of the CRUD SQL commands.

![Intro Image](public/assets/img/2.png?raw=true)
---

## 3. Devouring a burger
Here we can see that the newly-created burger (Whooper) was indeed added to the 'Available Burgers' list. To the right of every burger name, there is a 'Devour' button. If this button is clicked, the burger will be 'devoured' and will consequently be displayed on the 'Devoured Burgers' list. This is using UPDATE out of the CRUD SQL commands.

![Intro Image](public/assets/img/3.png?raw=true)
---

## 4. Updated Database
The appropriate burgers from the 'Available Burgers' list have been moved to their respective spot on the 'Devoured Burgers' list base on the id number. This data will be persisten because it is being stored and managed with a MySQL database.

![Intro Image](public/assets/img/4.png?raw=true)
---

# Demo (video link)

https://youtu.be/uFV6xjfBuM4

## Contributers
* Jed Kim