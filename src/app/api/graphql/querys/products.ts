import { gql } from '@apollo/client';


const GET_PRODUCTS = gql`
query MyQuery {
  productos {
    nombre
    precio
    productoId
    promociones {
        activa
        porcentajeDescuento
      }
  }
}
`;


export {GET_PRODUCTS}