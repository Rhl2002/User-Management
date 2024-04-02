steps to run the project locally in your computer :

Download the project or clone the project
Enter into the Frontend folder and run "npm install" from vs code or cmd without ->""
Enter into the Backend folder and run "npm install" from vs code or cmd without ->""
create a .env file in both the folders 
Inside Backend folder in the .env file add variable MONGO_URL  containing mongodb connection string 
Inside Frontend folder in the .env file add variable REACT_APP_BACKEND_URL  containing the url for backend server 
from the Frontend folder run "npm start" and from backend folder run "node server.js"
Project uses port=3000 for frontend and port=8080 for backend ,so makesure the port are open and no other program is using these port
