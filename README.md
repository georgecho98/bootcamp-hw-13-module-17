# Fate Social Network API

## Description
    Carkplan pan board with JWT token to protect your password. Data is saved at postgresSQL. Login to input new board post, to do list, or modify the status. Thanks for viewing. 
    
    
    Repository: https://github.com/georgecho98/bootcamp-hw-13-module-17

    
## Table of Contents
1. [Installation](#installation)
2. [License](#license)
3. [Credit](#credit)
4. [Usage](#Usage)
5. [Questions](#questions)


## Installation 
    
    Download the repostary. Then follow the following step: npm install, npm run build, npm run seed,  npm run start.

    Place your .env file in the server folder. and input your postgres url and JWT token in there.
    For the development version: npm run dev

## License
    no license

## Credit
    typscript, API, JWT, Mongoose

## Usage

*`/api/users`**

* `GET` all users

* `GET` a single user by its `_id` and populated thought and friend data

* `POST` a new user (note that the examples below are just sample data):

  ```json
  {
    "username": "lernantino",
    "email": "lernantino@gmail.com"
  }
  ```

* `PUT` to update a user by its `_id`

* `DELETE` to remove user by its `_id`

**BONUS**: Remove a user's associated thoughts when deleted.

---

**`/api/users/:userId/friends/:friendId`**

* `POST` to add a new friend to a user's friend list

* `DELETE` to remove a friend from a user's friend list

---

**`/api/thoughts`**

* `GET` to get all thoughts

* `GET` to get a single thought by its `_id`

* `POST` to create a new thought. Don't forget to push the created thought's `_id` to the associated user's `thoughts` array field. (note that the examples below are just sample data):

  ```json
  // example data
  {
    "thoughtText": "Here's a cool thought...",
    "username": "lernantino",
    "userId": "5edff358a0fcb779aa7b118b"
  }
  ```

* `PUT` to update a thought by its `_id`

* `DELETE` to remove a thought by its `_id`

---

**`/api/thoughts/:thoughtId/reactions`**

* `POST` to create a reaction stored in a single thought's `reactions` array field

* `DELETE` to pull and remove a reaction by the reaction's `reactionId` value

   Frontpagr
<p>
<img src = "./readmepic/1.JPG" height = 60% width = 60%></p>

login page
<p>
<img src = "./readmepic/2.JPG" height = 60% width = 60%></p>

Board post
<p><img src = "./readmepic/3.JPG" height = 60% width = 60%></p>

Create ticket
<p><img src = "./readmepic/4.JPG" height = 60% width = 60%></p>

## Questions
    
    If you have any questions, feel free to reach out to me at (mailto:chauhk88@gmail.com).

    
    Github repository:

    https://github.com/georgecho98/bootcamp-hw-13-module-17

    