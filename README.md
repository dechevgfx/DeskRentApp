# DeskRentApp
### Task for Programmingo

## Description
Create an Nuxt SPA (single page application) that helps a company manage its rooms and desks rental business. Their business model is to rent out desks on a weekly basis to various people.
## Models/Entities
1. Users have roles: Admin, RoomManager, Client
2. Rooms have types: Small, Big
Create a class for each model. (information about classes https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
TIP: Do not by any means follow this structure very strictly, make modifications as needed, based on the app. You can also skip anything you feel too hard to do or unnecessary. 
## User
- Admin: Unlimited rights. (access to all endpoints)
- Room Manager: Has access to the room he manages and all desks inside the room. Does not have access to other rooms.
- Client: Has access to a desk in a room, only if he/she rented it.

All have view access to the rooms with desks available.
(That is the base access structure, change it according to needs)
All users have name, email, password. Feel free to add anything you think will be useful.

TIP: Users should have predetermined role. Keep the logged in user in state. After refresh he should again be redirected to login page. 
## Desk
- Can only be used by 1 person.
- Has only 1 room manager.
- Has price, size, position (next to window, next to door, center, etc)
- Has is_taken attribute and time for which it is taken (paid for).

## Room
- Have desk_capacity, size (small, big)
- Can be left without room manager, in which case Admin is the room manager.
- Can be looked up by everyone for vacant spots. 


