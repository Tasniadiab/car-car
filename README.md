# CarCar

Team:

* Tasnia Bhuiyan - Service Microservice?
* Luis Santana - Sales Microservice?

## Design

## Service microservice

Explain your models and integration with the inventory
microservice, here.

## Sales microservice

I started off this project by making my models for the Sales Microservice. The sales api consist of three important parts, that being the Salespeople, the Customers, and the Sale themselves, there is also AutomobileVO a value object model for the automobile data recieved from the poller.

After making the models I moved on to the poller to pass in the correct Http so it can make a get request to the inventory api automobiles
for each automobile in the response.

Once I felt that the back-end portion of Sales has all the endpoint connected and sending data as it should, I tested out the expected responses by using insomnia. Once satisfied with all my responses giving me what was expected, I moved into working on the front-end.

The front-end for the sales microservices consisted of many list and forms. The front-end includes a list of sales people, customers, sales, and a list of sales filterable by sales person
It also includes forms to create new sales people, customers, and sales.

After making these list and forms I finalized the front-end by moving onto the Invertory Microservices and completeing all forms related to VehicleModels, Manufacturers, and Automobiles, along with a VehicleModel List.
