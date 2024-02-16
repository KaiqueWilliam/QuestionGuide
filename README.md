## Question Guide
A simple responsive bootstrap-based question guide using node.js, express.js and mysql (sequelize) for back-end.

![image](https://github.com/KaiqueWilliam/QuestionGuide/assets/130838195/b8d08361-c142-494e-a02b-156e0a9a6b8b)

![image](https://github.com/KaiqueWilliam/QuestionGuide/assets/130838195/8b8f5c39-f68b-40db-a8ee-cebc7fe16e62)

![image](https://github.com/KaiqueWilliam/QuestionGuide/assets/130838195/951aab1f-ec54-4da6-8253-1b11e033f16d)

## How to run it
1- Git clone repository.
2- It is required to have MySQL and NodeJS installed. Once cloned, <guiaperguntas/database/database.js/> needs to be adjusted to your own MySQL settings -  as of now it expects a database schema called 'guiaperguntas' and will try to log in using user 'root' and the password '123321'. Change the parameters as needed: 
![image](https://github.com/KaiqueWilliam/QuestionGuide/assets/130838195/47c9bd8a-f94f-4f46-b57a-15312cf73546)

Once the setup is done, type 'npm install' on the terminal so all the dependencies can be installed - { "body-parser": "^1.20.2","ejs": "^3.1.9","express": "^4.18.2","mysql2": "^3.8.0","sequelize": "^6.35.2" }
3- run it using "npm run build".
