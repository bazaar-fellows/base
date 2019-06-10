# BAZAAR 

_E-commerce framework using Gatsby, NodeJS, GraphQL, and MongoDB for small business and developers made easy._



## Team
Heather Cherewaty, Hannah Ingham, Tanner Seramur, Lena Eivy, and Caity Heath

## Links and Resources

* [Front-end Repo](https://github.com/bazaar-fellows/base)
* [Back-end Repo](https://github.com/bazaar-fellows/store-db)
* [Front-end]()
* [Back-end](https://bazaarapi.herokuapp.com/graphql)

### Modules/Pages

#### `index.js`
Initial home screen - Welcome to site.

#### `products/index.js`
Renders products.

#### `login/index.js`
CMS login for business owner to manage shop.

#### `lookbook/index.js`
Photo gallery to highlight products.

#### `about/index.js`
About section for the business/shop.

#### `cart/index.js`
Cart page for checkout.

#### `contact/index.js`
Contact section for additional business information and hours.

**Login, products, about, and contact pages are all wrapped in auth so the business owner has the ability to manage and edit their shop while on the pages itself, updating in real-time.**

### Setup
#### Fork and clone `base` and `store-db` repositories.
#### `.env` requirements
PayPal API url defined in ENV.  
 * **A PayPal account to accept online payments through the shop is required.**

#### Running the app (locally)
* `npm i` to install package dependencies
* `npm run develop` will navigate to the front-end page in your browser on `http://localhost:8000/`. 
* To login to shop as a business owner and/or developer:  `http://localhost:8000/login`.
  * Username:  `admin`.  Password:  `ADMIN`.  **This credentials are for local testing purposes ONLY.  In production, choose a secure username and password that is unique to you and  don't share it!**
  * Add and delete products, add lookbook product photos, about content, and contact information.
  * Choose a theme to customize the shop.

* To use app as a consumer:
    * You can browse the shop, add items to cart, and checkout via paypal.
    * Browse lookbook, learn more about the shop, and connect with the shop in contact section.

#### Running the app
* The shop site will need to be deployed by your hosting provider of choice.  We have used netlify for demo purposes.  Vist links and resources above for more information.
* The database will also need to be deployed by your hosting provider of choice.  We have used heroku for demo purposes.  Vist links and resources above for more information.

#### Tests
* Testing config files are setup and ready for use.
* To run tests use the command `npm test` or `npm test <filename>` to test individual test files. 
* Assertions made: 
    * On components: Do the components exist, do they render what is expected?
    * `actions.test.js`:  Are actions dispatched? 
    * `reducers.test.js`: Is initial state available, do reducers provide state change?
    * Snapshots.  

#### Instructions on setting up, adding, and deleting categories and products in the database:

Add a product

MUTATIONS:

/////     CREATE A PRODUCT      //////////
**     Join a category by category id   **

mutation{
  createProduct(input: {
    name: "Crocs", 
    description: "hot", 
    price: 30,
    qty: 10,
    category: "5c748fbe240877650da919a1"
    }){
  name 
  description
  price
  qty
  category {
    _id
    name
 	 }
	}
}

//////////    CREATE A CATEGORY     //////////
mutation{
  createCategory( name: "Shoes" ){
    _id
    name
  }
}

/////////     DELETE A PRODUCT     \\\\\\\\\\\
mutation{
  deleteProduct(_id: " product id "){
    name
  }
}

/////////     DELETE A CATEGORY     \\\\\\\\\\\
mutation{
  deleteCategory(_id: " category id "){
    name
  }
}

/////////     UPDATE A CATEGORY     \\\\\\\\\\\
mutation{
  updateCategory(_id: " cateogory id ", input: { name: "newName" }){
    _id
    name
  }
}

/////////     UPDATE A PRODUCT     \\\\\\\\\\\\
mutation{
  updateProduct(_id: " product id ", input: { name: "newName", price: "newPrice" }){
  name 
  description
  price
  qty
  category {
    _id
    name
 	 }
  }
}




QUERY:

////////    getAllProducts    \\\\\\\\\\\
query{
  getAllProducts{
    _id
    name
    description
    price
    category { 
      name
      _id
    }
  }
}

////////    getProduct    \\\\\\\\\\\
query{
  getProduct(_id: " product id "){
    _id
    name
    description
    price
    category { 
      name
      _id 
    }
  }
}

////////    getAllCategories    \\\\\\\\\\\
query{
  getAllCategories{
    _id
    name
  }
}

////////      getCategory      \\\\\\\\\\\
query{
  getCategory(_id: " category id " ){
    _id 
    name
  }
}

////////    getProductsByCategory    \\\\\\\\\\\
query{
  getProductsByCategory(category: " category id "){
	name
  _id
  }
}


 /$$$$$$$                      /$$      
| $$__  $$                    | $$      
| $$  \ $$  /$$$$$$  /$$$$$$$ | $$   /$$
| $$$$$$$  |____  $$| $$__  $$| $$  /$$/
| $$__  $$  /$$$$$$$| $$  \ $$| $$$$$$/ 
| $$  \ $$ /$$__  $$| $$  | $$| $$_  $$ 
| $$$$$$$/|  $$$$$$$| $$  | $$| $$ \  $$
|_______/  \_______/|__/  |__/|__/  \__/
                                        
                                       

CATEGORY IDS
        "_id": "5c76d0c6844edd0031106627",
        "name": "Shirts"
      },
      {
        "_id": "5c76d0cb844edd0031106628",
        "name": "Shoes"
      },
      {
        "_id": "5c76d0d0844edd0031106629",
        "name": "Outerwear"
      },
      {
        "_id": "5c76d0d9844edd003110662a",
        "name": "Pants"
      },
      {
        "_id": "5c76d0de844edd003110662b",
        "name": "Denim"


PRODUCT IDS
----------------------------------------
      "_id": "5c75c83f7f8e2b11d46bf2ef",
      "name": "Adidas",
----------------------------------------
      "_id": "5c75c8747f8e2b11d46bf2f0",
      "name": "Pumas",






