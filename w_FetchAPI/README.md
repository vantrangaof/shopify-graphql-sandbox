## Notes

- API Endpoint:
Admin: https://{shop}.myshopify.com/admin/api/{api_version}/graphql.json
Storefront: https://{shop}.myshopify.com/api/{api_version}/graphql.json
- Headers:
Include the access token as a `X-Shopify-Access-Token` header in your requests.

## Rate limits

The API supports a maximum of 1000 cost points per app per store per minute.

## References

- https://shopify.dev/docs/api/admin/getting-started
- https://www.shopify.com/partners/blog/query-argument-graphql
- Install Shopify’s own GraphiQL app to explore your shop’s data using the GraphQL Admin API.
[Shopify GraphiQL](https://shopify-graphiql-app.shopifycloud.com/login)
or if you can play around with some demo data in [Shopify GQL Exploration] (https://shopify.dev/docs/custom-storefronts/building-with-the-storefront-api/api-exploration/graphiql-storefront-api)


*Template code is initially forked from my colleague, Minrey



