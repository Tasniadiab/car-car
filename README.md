# CarCar

Team:

* Tasnia Bhuiyan - Services
* Luis Santana - Sales

## Design

## Service microservice

I started this project by making my models, I made a AutomobileVO, Technician, and Appoinment model. I also had a status model, but then decided to change it to a status property that was a boolean that I could manipulate in the backend and frontend.

I then moved on to the poller, where I set it up to poll for data from the inventory api. This is so I can get vins from the AutomobileVO.

I went on to create all the backend view functions and creating the cooresponsing url paths. I checked all the http responses in insomnia and made sure I was getting the right json data sent.

When I went on to the front-end to went I went on the create the Lists in react. There, I created a function called isVIP to manipulate the boolean from the status field and render a yes or no for the is vip question. I also implemented filters inorder to show the items from my lists that I wanted to see. I then went on the to the forms. There I created calendar and time fields in my form and formatted the given information into iso format to send back to my backend.

Finally I moved to the Inventory frontend and created the Lists for Automobile, and Manufacturers.

## Sales microservice

I started off this project by making my models for the Sales Microservice. The sales api consist of three important parts, that being the Salespeople, the Customers, and the Sale themselves, there is also AutomobileVO a value object model for the automobile data recieved from the poller.

After making the models I moved on to the poller to pass in the correct Http so it can make a get request to the inventory api automobiles
for each automobile in the response.

Once I felt that the back-end portion of Sales has all the endpoint connected and sending data as it should, I tested out the expected responses by using insomnia. Once satisfied with all my responses giving me what was expected, I moved into working on the front-end.

The front-end for the sales microservices consisted of many list and forms. The front-end includes a list of sales people, customers, sales, and a list of sales filterable by sales person
It also includes forms to create new sales people, customers, and sales.

After making these list and forms I finalized the front-end by moving onto the Invertory Microservices and completeing all forms related to VehicleModels, Manufacturers, and Automobiles, along with a VehicleModel List.
