import { gql } from '@apollo/client';

const INSERTAR_USUARIO = gql`
  mutation InsertarUsuario($input: UsuarioInput!) {
    insertarUsuario(input: $input) {
      estado
      nombreUsuario
      rol
    }
  }
`;

const USER_LOGIN = gql`
  mutation loginUsuario($nombreUsuario: String!, $contrasena: String!) {
    loginUsuario(nombreUsuario: $nombreUsuario, contrasena: $contrasena)
  }
`;


export { INSERTAR_USUARIO, USER_LOGIN};