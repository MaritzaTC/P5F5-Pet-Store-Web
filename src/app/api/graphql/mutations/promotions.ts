import { gql } from '@apollo/client';

const CREAR_PROMOCION = gql`
  mutation CrearPromocion($input: PromocionInput!) {
    crearPromocion(input: $input) {
      activa
    }
  }
`;



export { CREAR_PROMOCION };
