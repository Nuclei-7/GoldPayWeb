# Aurum - Gold Pay Platform Documentation

## Introduction
The Gold Exchange Platform is a web application designed to facilitate online transactions involving gold. Users can buy, sell, and convert gold to different currencies through this platform. The system is built using Node.js, React, MongoDB, and Express.

## Features
1.	User Authentication: Users can create accounts, log in, and log out securely.
2.	Buying Gold: Users can purchase gold through the platform using various payment methods.
3.	Selling Gold: Users can sell their gold holdings through the platform and receive payment.
4.	Currency Conversion: Users can convert their gold holdings into different currencies at real-time exchange rates.
5.	Transaction History: Users can view their transaction history and track their gold-related activities.
6.	Admin Panel: Admins have access to a dashboard where they can manage users, transactions, and other system settings.

## Technologies Used
1.	Node.js: Backend server environment.
2.	Express: Web framework for Node.js.
3.	React: Frontend JavaScript library for building user interfaces.
4.	MongoDB: NoSQL database for storing user data and transaction information.
5.	JWT (JSON Web Tokens): Used for secure authentication and authorization.
6.	HTML/CSS: Frontend styling and layout.
7.	Bootstrap: Frontend framework for responsive design.
8.	Axios: HTTP client for making requests to the backend API.

#Installation
## To run the Gold Exchange Platform locally, follow these steps: 
1.	Clone the repository: git clone [https://github.com/Nuclei-7/GoldPayWeb.git](https://github.com/Nuclei-7/GoldPayWeb.git)
2.	Navigate to the project directory: cd gold-exchange-platform
3.	Install dependencies for both the client and server:
•	cd client 
•	npm install
•	cd ..
•	cd server
•	npm install

4.	Set up environment variables:
	Create a .env file in the server directory.
	Define the following environment variables:
•	PORT=3001
•	MONGODB_URI=your_mongodb_connection_string
•	JWT_SECRET=your_jwt_secret_key
5.	Start the server:
•	cd server
•	npm start
6.	Start the client:
cd client
npm start
7.	Access the application at http://localhost:3000in your web browser.

## API Endpoints
•	The following endpoints are available for interacting with the Gold Exchange Platform:
1.	POST /api/auth/register: Register a new user.
2.	POST /api/auth/login: Log in an existing user.
3.	GET /api/auth/logout: Log out the current user.
4.	POST /form/send: Send gold to any user.
5.	GET /api/admin/users: Get all users (admin only).
6.	POST /api/admin/user/delete/:id: Delete a user (admin only).
## Contributing
Contributions to the Gold Exchange Platform are welcome! If you would like to contribute, please fork the repository and submit a pull request with your changes.
License
This project is licensed under the MIT License. See the LICENSE file for details.
## Contact
For questions or inquiries about the Gold Exchange Platform, please contact kalwargovind727@gmail.com.



