# What is a Template Engine

* Templates are files taht define the presentation of a web ap's data seperately from the server logic.

* in context of tinyapp, that means theyll deifne the HTML of a particular page seperately from the logc in the Express erver

Why are templates helpful?

  * Keep server logic seperate from HTML markup. than easier for debugging
  * Keep HTML docs shorter by sepearting them into manageable file

* to use tempalte files, we need an engine

* LHL uses Embedded JS (EJS)

* Partials are resused code we can store inside our views directory and resuce that code

## Conclusion:

EJS let's us spin up quick applications when we don't need anything too complex. By using partials and having the ability to easily pass variables to our views, we can build some great applications quickly.
