# HTTP Intro

## What is hyperText?

* Text which is not constrained to be linear
  * Containts links to other texts

* Hypermedia is a term used for hypertext which is not constrained to be text. includes graphics,video and sound.

## HTTP Introduction

* HTTP is a protocol used to read and write "resources" (data) in a simple text-based manner. 

* It is used for HTML, JS, CSS, and anything else that our browser is capable of downloading (PDFs, etc.)

## Request and Response

HTTP is a request-response based protocal.

* a client makes a request to an HTTP server
  * immediately the server sends down as a respons for what they are looking for

  
## URL

URL stands for Uniform REsource Locator.

* A URL is nothing more than the address of a given unique resource on the Web.

* In theory, each valid URL points to a unique resource.

### A URL anatomy :

1. http:
  * this is the protocal
  A protocol is a set mothod for exchanging or transfering data around a computer ntetwork.

2. www.example.com:
  * This is the domain name
    * indicates which Web server is being requested.
    * can use IP address, but less convenient

3. :80 : 
  * THis is the port
    * Technical term for the gate to access the resources on the web server. usually Omitted

4. /path/to/myfile.html:
  * the path to the resource on the Web server.

5. ?key1=value1&key2=value2 :
  * extra params provided to the Web server.
    * listed as key/value pairs
    * Web can use this stuff to do extra stuff before returning

6. #SomewhereInTheDocument
  * is an anchor to another part of the resource itself. almost like a bookmark

### URL's are like a regular postal mail address

## Conclusion

Specifically:

* HTTP is a request-response protocol, where the client makes requests and the server sends responses
* HTTP is a text based protocol, making it easy to read and understand for humans
* HTTP requests must contain the verb/method (eg: GET) and the Path (eg: /about)
* HTTP requests aren't always to receive data, but sometimes to save data, like when we submit a form on a website. This is done via a POST instead of a GET
* Requests and responses both contain key-value based headers (eg: Accept-Language: fr, Content-Type: text/html, etc.)