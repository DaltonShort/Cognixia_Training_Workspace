// base url for api http://localhost:3000/product

const PRODUCT_URL = "http://localhost:3000/product";

const updateBtn = id => {
    // create button element...
    const btn = document.createElement("button")

    //...then add btn text and bootstrap class...
    btn.textContent = "Update"
    btn.classList.add("btn")
    btn.classList.add("btn-primary")
    
    // ...and finally the click event listener
    btn.addEventListener('click', () => {
        alert("Product Updated with id = " + id)
    })

    return btn
}

const deleteBtn = id => {
    // create button element...
    const btn = document.createElement("button")

    //...then add btn text and bootstrap class...
    btn.textContent = "Delete"
    btn.classList.add("btn")
    btn.classList.add("btn-danger")
    
    // ...and finally the click event listener
    btn.addEventListener('click', () => {
        alert("Product Deleted with id = " + id)
    })

    return btn
}


// once we have the data from the api we will need to place it on the page
// each product will be json that looks like this: { id: ..., name: ..., price: ..., qty: ... }
// first create a function that creates a product object and places it within a row on the table

const createRow = (product) => { // product = product object
    // create row for product
    const row = document.createElement("tr");

    // set an id for the row that we create
    row.id = `product-${product.id}`;

    // names of the product keys that we have
    const colAttributes = ["id", "name", "price", "qty"]

    for(col of colAttributes) {

        // create the cell
        const cell = document.createElement("td");

        // add text to cell
        cell.textContent = product[col];

        // append cell to row
        row.appendChild(cell);
    }

    // add in delete and update buttons to the last cell
    const buttonCell = document.createElement("td");
    buttonCell.appendChild( updateBtn(product.id) );
    buttonCell.appendChild( deleteBtn(product.id) );

    row.appendChild(buttonCell);




    // add row to the tbody
    document.getElementById("product-t-body").appendChild(row);
}



// loading products to table using the api
const getProducts = () => {
    // fetch(url, <optional: object that includes method head, body, etc.)
    // .then( callback function checking initial response )
    // .then( callback function doing something with the data returned  )
    // .catch( callback function for ehat to do if an error is thrown )

    fetch(PRODUCT_URL)
        .then( (response) => {
            console.log("RESPONSE :");
            console.log(response);
            
            // response.json extracts json data held within the object (response body)
            return response.json();
        } )
        .then( (data) => {
            console.log("DATA:");
            console.log(data);
            
            // loop through products in an array and create row for each one
            for(product of data) {
                createRow(product);
            }
        } )
        .catch( (error) => {
            // printing error
            console.error(error)
        } )

}


// create a product after dubmitting the form 
const createProduct = () => {
    // grab form through id
    const form = document.getElementById("product-form");

    // create an event listener that takes the data from the form and adds ot to the table and does a post request to our api
    form.addEventListener('submit', (event) => {
        // prevent default behavior of reloading the page
        event.preventDefault();

        // get values from the form
        const name = document.getElementById("product-name").value
        const price = document.getElementById("product-price").value
        const qty = document.getElementById("product-qty").value

        // create product object
        const product = {
            "name": name,
            "price": price,
            "qty": qty
        }


        // send a post request
        // fetch(url, optional method, head, body)
        fetch(PRODUCT_URL, {
            method: "POST",
            headers: {
                "content-type": "application.json"
            },
            body: JSON.stringify(product)
        })
            .then( response => {
                if(response.ok) {
                    console.log("Product created successfully");
                    
                } else{
                    alert("Product could not be created");
                    throw new Error("Could not create product");

                }

                return response.json()
            } )
            .then( data => {

                //data is product object we just created with a generated id
                alert("Product created with id = " + data.id);

                createRow(data);
                

            } )
            .catch( (error) => {
                console.error("error creating product");
                console.error(error);
            })
    })
}



getProducts();


createProduct();