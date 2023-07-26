const API_URL = process.env.API_URL;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

let productList = [];
let containerEle = document.querySelector('.container');

const sendQueryUsingGQL = async () => {
    try {
        const headers = {
            'content-type': 'application/json',
            'X-Shopify-Storefront-Access-Token': `${ACCESS_TOKEN}`
        };

        const reqBody = {

            // Paste your GQL query below
            query: `{
                products(first: 5) {
                    edges {
                        node {
                            title
                            description
                            images(first: 1) {
                                edges {
                                    node {
                                        url
                                    }
                                }
                            }
                        }
                    }
                }
            }`
        }

        const options = {
            method: 'POST',
            headers,
            body: JSON.stringify(reqBody)
        };

        const { data } = await (await fetch(API_URL, options)).json();

        productList = data?.products?.edges;
        showProducts(productList);

    } catch (err) {
        console.log('Err during request processing', err);
    }
}

const showProducts = (products) => {
    let containerInnerHTML = '';
    products.forEach(product => {
        console.log(product);
        const productTitle = product.node.title;
        const productDescription = product.node.description;
        const productIMG = product.node.images.edges[0].node.url;

        containerInnerHTML += `
            <div class="product">
                <img src=${productIMG}>
                <h6>${productTitle}</h6>
                <p>${productDescription}</p>
            </div>
        `
    })
    containerEle.innerHTML = containerInnerHTML;
}

sendQueryUsingGQL();