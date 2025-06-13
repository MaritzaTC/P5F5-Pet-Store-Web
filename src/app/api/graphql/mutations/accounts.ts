import { gql } from '@apollo/client';

export const INSERTAR_USUARIO = gql`
  mutation InsertarUsuario($input: UsuarioInput!) {
    insertarUsuario(input: $input) {
      estado
      nombreUsuario
      rol
    }
  }
`;

