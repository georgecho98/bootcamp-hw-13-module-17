# Fate Social Network API

## Description
    Fate Social Network API. Thanks for viewing. 
    
    
    Repository: https://github.com/georgecho98/bootcamp-hw-13-module-17

    
## Table of Contents
1. [Installation](#installation)
2. [License](#license)
3. [Credit](#credit)
4. [Usage](#Usage)
5. [Questions](#questions)


## Installation 
    
    Download the repostary. Then follow the following step: npm install, npm run build,  npm run start.

## License
    no license

## Credit
    typscript, API, JWT, Mongoose

## Usage

/api/users
* `GET` all users
 /api/users/:id
* `GET` a single user by its `_id` and populated thought and friend data
 /api/users
* `POST` a new user (note that the examples below are just sample data):

  ```json
  {
    "username": "lernantino",
    "email": "lernantino@gmail.com"
  }
  ```
 /api/users/:id
* `PUT` to update a user by its `_id`
 /api/users/:id
* `DELETE` to remove user by its `_id`

/api/users/:userId/friends/:friendId
* `POST` to add a new friend to a user's friend list
/api/users/:userId/friends/:friendId
* `DELETE` to remove a friend from a user's friend list

/api/thoughts
* `GET` to get all thoughts
/api/thoughts/:thoughtid
* `GET` to get a single thought by its `_id`
/api/thoughts/
* `POST` to create a new thought. Don't forget to push the created thought's `_id` to the associated user's `thoughts` array field. (note that the examples below are just sample data):

  ```json
  // example data
  {
    "thoughtText": "Here's a cool thought...",
    "username": "lernantino",
    "userId": "5edff358a0fcb779aa7b118b"
  }
  ```
/api/thoughts/:thoughtid
* `PUT` to update a thought by its `_id`
/api/thoughts/:thoughtid
* `DELETE` to remove a thought by its `_id`

api/thoughts/:thoughtId/reactions
* `POST` to create a reaction stored in a single thought's `reactions` array field
api/thoughts/:thoughtId/reactions
* `DELETE` to pull and remove a reaction by the reaction's `reactionId` value



## Questions
    
    If you have any questions, feel free to reach out to me at (mailto:chauhk88@gmail.com).

    
    Github repository:

    https://github.com/georgecho98/bootcamp-hw-13-module-17

    