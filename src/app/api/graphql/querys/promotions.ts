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
    porcentajeDescuento
    fechaFin
    fechaInicio
    categoria
  }
}
`;
const GET_PROMOCION_BY_ID = gql`
  query ObtenerPromocionPorId($id: ID!) {
    obtenerPromocionPorId(id: $id) {
      promocionId
      titulo
      categoria
      fechaInicio
      fechaFin
      porcentajeDescuento
      activa
      productos {
        productoId
        nombre
      }
    }
  }
`;
export { GET_PROMOCIONES,GET_PROMOCION_BY_ID }



