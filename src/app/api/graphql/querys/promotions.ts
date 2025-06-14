import { gql } from '@apollo/client';


const GET_PROMOCIONES = gql`
query MyQuery {
  promociones {
    activa
    titulo
    promocionId
    productos {
      nombre
      precio
      productoId
    }
  }
}
`;

export {GET_PROMOCIONES}



