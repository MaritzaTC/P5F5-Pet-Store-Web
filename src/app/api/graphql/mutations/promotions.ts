import { gql } from '@apollo/client';

const CREAR_PROMOCION = gql`
  mutation CrearPromocion($input: PromocionInput!) {
    crearPromocion(input: $input) {
      activa
    }
  }
`;

const ACTUALIZAR_PROMOCION = gql`
  mutation ActualizarPromocion($id: ID!, $input: PromocionInput!) {
    actualizarPromocion(id: $id, input: $input) {
      activa
      titulo
      promocionId
      porcentajeDescuento
      fechaInicio
      fechaFin
      categoria
    }
  }
`;



const ELIMINAR_PROMOCION = gql`
  mutation EliminarPromocion($id: ID!) {
    deletePromocion(id: $id)
  }
`;



export { CREAR_PROMOCION, ACTUALIZAR_PROMOCION,ELIMINAR_PROMOCION,};
