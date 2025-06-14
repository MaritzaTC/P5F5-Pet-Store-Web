import { gql } from '@apollo/client';

const CREAR_PROMOCION = gql`
  mutation CrearPromocion($input: PromocionInput!) {
    crearPromocion(input: $input) {
      promocionId
      titulo
      activa
      fechaInicio
      fechaFin
      porcentajeDescuento
    }
  }
`;

export { CREAR_PROMOCION };
