# centivo take home assignment

## Description

This is a simple API that allows users to create and information about users. The API is built using Express and MongoDB.
It utilizes Docker containerization to run MongoDB and the API.

## Installation

1. Clone the repository to your local machine
2. Navigate to the project directory.
3. Make sure you have docker installed on your machine and running.
4. Run `make setup` to set up the project.
5. Should be running on port 3000.

## Usage

There is a seeding script that runs when the API starts. I created it after I already had created the create user route.
To create a user, make a POST request to the `/users` endpoint with the following JSON body:

```json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "age": 25
}
```

To retrieve a user, make a GET request to the `/users/:id` endpoint with the user's ID as the parameter.
To retrieve all users, make a GET request to the `/users` endpoint.

## Explanation of my approach
I tried to make the project as simple as possible, so all you need to do is run one command to get started.
I used Mongoose as the ORM as it made it easier to work with the database. I also used Docker to run MongoDB and the API.
This allowed whoever looks at this assignment to get up and running quickly without having to install MongoDB or Node.js.
