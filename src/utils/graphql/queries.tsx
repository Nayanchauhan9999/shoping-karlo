import { gql } from "@apollo/client";

export const getProductPriceAndId = gql`
  query getProductsPrice {
    productList {
      price
      id
      title
    }
  }
`;
