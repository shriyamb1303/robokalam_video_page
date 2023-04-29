# MERN Grid Template

This is a single-page web application built using the MERN (MongoDB, Express, React, and Node.js) stack. The application includes a grid layout with provision for a live instructional video, a live video of the student listening to it, and the student's emotional status.

## Installation

1. Clone the repository to your local machine using `git clone https://github.com/yourusername/mern-project.git`
2. Navigate to the project directory using `cd mern-project`
3. Install the dependencies using `npm install`
4. Start the development server using `npm start`

## Usage

Once the server is running, you can access the frontend application by navigating to `http://localhost:3000` in your web browser. The API is accessible at `http://localhost:3001`.

The application includes a basic example of how to interact with the API using Axios. You can find this code in `src/App.js`.

Make sure to initialize a .env file in the server and paste your mongoDB atlas server URL under the variable name MONGO_URL.

## Technologies

This project uses the following technologies:

- MongoDB: a document-based database
- Express: a backend web application framework for Node.js
- React: a frontend JavaScript library for building user interfaces
- Node.js: a JavaScript runtime environment
- Axios: a library for making HTTP requests

## Architecture

The project is organized into two main directories:

- `client`: the frontend React app
- `server`: the backend API

The API is built using Express, and uses MongoDB for data storage. The React app communicates with the API using Axios.

## Contact

If you have any questions or comments about this project, please contact me at shriyamb1303@gmail.com.
