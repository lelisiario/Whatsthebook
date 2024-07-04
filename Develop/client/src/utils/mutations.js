import {gql} from "@apollo/client"

export const ADD_USER = gql`


mutation AddUser($username: String!, $password: String!, $email: String!) {
  addUser(username: $username, password: $password, email: $email) {
    token
    user {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
}
`
export const SAVE_BOOK = gql`
mutation SaveBook($bookData: BookInput!) {
  saveBook(bookData: $bookData) {
    _id
    username
    email
    bookCount
    savedBooks {
      bookId
      authors
      description
      title
      image
      link
    }
  }
}
`

export const REMOVE_BOOK = gql`
mutation RemoveBook($bookId: ID!) {
  removeBook(bookId: $bookId) {
    _id
    username
    email
    bookCount
    savedBooks {
      bookId
      authors
      description
      title
      image
      link
    }
  }
}
`

export const LOGIN_USER = gql`
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
}
`
