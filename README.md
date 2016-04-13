# Product Calculator

##### Overview

Your objective is to build a product calculator which allows you to add and
remove products while calculating the cost of the products as you change them.

The component will need to have a button to add a new product, a table (or
table-like) display of current products, a button to remove a product, and
finally a total cost for all products. Lastly, the component will need to load
some initial products via a ajax request to the fake API. Please see details
below.

There are 2 API ajax requests you'll need to make:

  1. *http://localhost:3030/api/all-products* Retrieves all the products available to the calculator. These should show in a dropdown next to the ADD button.
  2. *http://localhost:3030/api/products* Retrieves products that are to be pre-loaded in to the calculator.


##### Wireframes

ADD NEW PRODUCT _(add button + a dropdown containing all available products)_

*Product* | *Quantity* | *Cost* | *Action*
--- | --- | --- | ---
Roofing | 100 _(number input - ability to edit. Defaults to 1.)_ | $425 | REMOVE _(button)_
Window | 5 _(number input - ability to edit. Defaults to 1.)_ | $275 | REMOVE _(button)_

*Total:* $700

----------------------------------------------

## Project Guidelines

* Use React + es6 + modules + clean code.
* You can use flux inspired architecture.
* You can use clean and meaningful syntax. Don't over complicate for the sake of being fancy.
* You can use any other library you would like, but simplicity and minimalism is best.
* You can only use `npm` as a dependency manager (not bower or anything else). Just add to the the current [package.json](src/package.json) file.
* You can not use jQuery. kthx.
* You can not add any custom css. Simply use [React Bootstrap](http://react-bootstrap.github.io/components.html). The CSS [is already included](server/app.html). You should put careful thought in to which components you decide to use so the tool is user-friendly as possible.
* You can not touch anything in /server/.
* Calculator must load in initial products upon page load (api/products).
* Pay attention to the dot files in the root of the project.
* Bonus points for unit testing.
* Bonus points if it works offline.

## Getting Started

**Dependencies:**

* node.js >= v4.1.0
* gulp (`npm install -g gulp`)

**Setup:**

1. Clone the project and `cd` in to it.
2. Start up the server with by running `node server/server.js`.
3. Open in a new shell and `cd` in to src/.
4. Run `npm install` and finally, `gulp watch`. (make sure you have gulp installed)
5. Now you can make changes to files in ProductCalculator and a new [server/app.js](server/app.js) will automatically be compiled for you.

```bash
$ ~ node server/server.js

----------------------------------------------------------
Server listening on localhost:3030.

 * App URL: http://localhost:3030
 * Saved products: http://localhost:3030/api/products
 * Products index: http://localhost:3030/api/all-products
-----------------------------------------------------------
```

## Data Structures (API)

##### A product (/api/all-products)

This will be a collection of all available products in the (fake) database.

```json
[
  {
    "id": 3,
    "name": "Name of product",
    "cost": 3.50
  },
  ...
```

* `id`: This will be a unique id for the product.
* `name`: The name of the product.
* `cost`: The amount the product costs.

##### A saved product (/api/products)

This will be a collection of products that have been saved to the (fake) database.
The will be loaded to the calculator initially.

```json
[
  {
    "id": 0,
    "productId": 3,
    "quantity": 200
  },
  ...
```

* `id`: A unqiue id.
* `productId`: This id corresponds to the product's id.
* `quantity`: The number of products/units. Cost for product will be `quantity` * `cost`.
