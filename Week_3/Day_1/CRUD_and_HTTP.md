# CRUD and HTTP

## CRUD:

1. Create - add a new record
2. Read - Retrieve the value of a record
3. Update - Update a records value
4. Delete - delete a record

## CRUD and HTTP

* most apps can be thouhg of as fancy user interfaces on top of databases

* HTTP is the protocol used to facilitate communication between interface and the database

* HTTp was desidned around the concept of resources and actions that can be taken on them.


|HTTP METHOD   |  CRUD ACTION |
|---|---|
| GET  | Read  |
| POST  | Create  | 
| PUT  |  Update |
| DELETE | Delete |


## Limitations of HTTP in the Browser

* Theres a catch...using just links and forms we cant achieve our goal of issuing the right type of HTTP method for each request, because links can only create GET requests and forms can only create GET and POST requests.

* to create pUT and DELETE requests we ened to use a workaround known as _HTTP Method Override_. but for now just use POST

