const API_URL = '';
const ACCESS_TOKEN = '';
var productList = [];
var containerELE = document.querySelector('.container');

const sendQueryUsingGQL = async () => {
    try {
        const headers = {
            'content-type': 'application/json',
            'X-Shopify-Storefront-Access-Token': `${ACCESS_TOKEN}`
        };

        const reqBody = {
            // Shopify GQL Exploration: https://shopify.dev/docs/custom-storefronts/building-with-the-storefront-api/api-exploration/graphiql-storefront-api

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
        console.log('ERROR DURING FETCH REQUEST', err);
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
    containerELE.innerHTML = containerInnerHTML;
}

sendQueryUsingGQL();