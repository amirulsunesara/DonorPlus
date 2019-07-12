# Assignment 4 (Amirul Sunesara B00813456)

## Features
There were two features choosed in assignment 3
1) Dashboard.
2) Reports: (View report and download). \

In assignment 4, for back-end implementation, report feature is selected.

## Feature Completeness

The report feature provides user with a mechanism to view report and download. User can view report by specifying 'from date' and 'to date' then pressing view report button. User can either choose to view inventory report or reservation report between these two dates. Once user viewed the choosen report, user will then able to download this report.

All functions specified above are implemented including form validation and validation messages.

----
## Deployment Description
The application is based on Node.js hosted on bluenose with following URL
> http://129.173.22.35:20011/

----
## Source code on GitLab
Source code for 'view report and download' feature can be found in branch "amirulSunesara".
> https://git.cs.dal.ca/jays/donor.git

----
## Important Note
Inventory and reservation records were manually inserted in database for the month of july. Therefore, to view reservation and inventory reports, specify date between 2019-07-01 and 2019-07-31.

----

## Folder Structure
Web service and web application are standalone and deployed separately on bluenose. Since the application is developed on sails.js, the folder structure follows different hierarchy.
### Web Service
- Controllers:
>  WebService -> API -> Controllers
- Models: 
> WebService -> API -> Models
### Web Application
- CSS: 
> WebApplication -> Assets -> styles
- Javascript files: 
> WebApplication -> Assets -> js
- HTML (.ejs files): 
> WebApplication -> views -> layouts\
> WebApplication -> views -> pages


----
## Database

A centralized MySQL database is hosted on Azure cloud platform. 

----
## Code Sources
- Donor+ theme (layout): To make overall design of application consistent, our team agreed upon using Jay Sharma's theme which he implemented in assignment 2. We will be using this theme in every page with slight modifications in screens after login success. 
- JqueryUI Date Picker: https://jqueryui.com/datepicker/ \
This source was used to check the syntax of jquery UI datepicker. The line is modified with 'from date' and 'to date' fields.

````
$( function() {
    $( "#datepicker" ).datepicker();
  });

````
- JsPDF for converting HTML to pdf report: https://github.com/MrRio/jsPDF \
This source was used to give functionality of downloading report. The code is modified with text name and file name in text() and save() function.

````
var doc = new jsPDF() 
doc.text('Hello world!', 10, 10) 
doc.save('a4.pdf')
```` 
- Js-PDF Autotable: https://github.com/simonbengtsson/jsPDF-AutoTable. This source is extension to jsPDF API and it was used to to beautify the report tables. Following source code is modified and implemented in report.js file. The code is customized by changing head attributes and passing value to body from array. 
````
 doc.autoTable({ 
        head: [['Name', 'Email', 'Country']],
        body: [
            ['David', 'david@example.com', 'Sweden'],
            ['Castille', 'castille@example.com', 'Norway'],
            // ...
        ]
    });
````
- Bootstrap Modal for validation popup: https://getbootstrap.com/docs/4.0/components/modal/  \
This source code is a template for bootstrap modal, which is implemented in report.ejs file. This code is modified with setting id so that javascript function named showModal() can dynamically change the text of modal title and body.

````
<div class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Save changes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

````
- Bootstrap navigation bar: https://getbootstrap.com/docs/4.0/components/navbar/ 
This source provides template for sample navigation bar. This code is not entirely used. However, the code of navigation items is customized and implemented in layout.ejs file.

````
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav
````
- Bootstrap Dropdown:  https://getbootstrap.com/docs/4.0/components/dropdowns/
This source was used to implement dropdown for account setting, forgot your password and logout button in navigation bar. This source is modified with custom styles and text.

````
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
````
- HTML date pattern (YYYY-MM-DD) : http://html5pattern.com/Dates
This source does not provide any source code but provides a guide to implement date pattern in HTML form.

- Sails.js - Models: https://sailsjs.com/documentation/concepts/models-and-orm/models
This source was only used to get to know the syntax of models in sails.js. The code was then written from scratch.

- Sails.js - Controllers: https://sailsjs.com/documentation/concepts/actions-and-controllers
This source was only used to learn the syntax of controllers in sails.js. The code was then written from scratch.

- Sails.js - Find() function: https://sailsjs.com/documentation/reference/waterline-orm/models/find
This source was only used to learn the syntax of find function in sails.js. The code was then written from scratch.



----
## Test Cases
- From date and To Date fields are mandatory for querying reports.
- 'From date' must be less than 'To date'.
- Prompt message if there are no reservations and inventory items exist in specified date.
- Front-end of reports screen must be w3c compliant.

