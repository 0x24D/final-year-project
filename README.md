# final-year-project

* Simple web application which stores blog posts.

## Purpose
* Objective of the current project is to build a small website with couple of pages and containerise them. Containers need to take care of high availability in case any of the runtime goes down.

## Technologies used
* Frontend (just return raw json?)
* Middleware (Express)
* Backend (MongoDB)

## API
* Create - POST
* Read - GET
* Update - PUT
* Delete - DELETE
```
/v1/posts GET - return list of all blog posts
/v1/posts POST - create new blog post
/v1/posts PUT - error
/v1/posts DELETE - delete all blog posts

/v1/posts/{id} GET - return list of blog posts
/v1/posts/{id} POST - error
/v1/posts/{id} PUT - update blog post
/v1/posts/{id} DELETE - delete specific blog post
```
