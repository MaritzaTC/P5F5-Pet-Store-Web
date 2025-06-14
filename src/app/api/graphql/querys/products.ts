import { gql } from '@apollo/client';


const GET_PRODUCTS = gql`
query MyQuery {
  productos {
    nombre
    precio
    productoId
  
  }
}
`;

export {GET_PRODUCTS}