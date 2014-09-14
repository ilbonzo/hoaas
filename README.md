hoaas
=====

v0.0.1

HOAAS HOAAS (HOdor As A Service) provides a modern, RESTful, scalable solution to the common problem of talk with Hodor
![Hodor](https://github.com/ilbonzo/hoaas/raw/master/public/images/talk-hodor.gif "Hodor")

img(src="/images/talk-hodor.gif")

# Content Negotiation

HOAAS will respond to the following 'Accept:' values with appropriate content

* text/plain - Content will be returned as a plain string.
* application/json - Content will be returned as a JSON object { message: 'message' }
* text/html - Content will be returned as an HTML page with a twitter bootstrap hero unit, containing the Hodor's message.

# API

## /hodor

Will return content of the form 'Hodor' with or without different final dot.

## /hodor/:number
Will return content of the form 'Hodor, Hodor' for :number times with or without different final dot.

## /hodor/question/:question
p Will return content of right Hodor answer for your question.

# Alternative URLs

- http://hoaas.herokuapp.com


![Hodor](https://github.com/ilbonzo/hoaas/raw/master/public/images/1-hodor.jpg "Hodor")

All contributions are very welcome.
