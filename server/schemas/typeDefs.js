const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    client: User 
  }

  type Auth {
    user: User
    token: ID!

  }

  type Mutation {
    login( username: String!, password: String!): Auth
    addUser(email:String! username: String!, password: String!): Auth
    bookSave(bookInfo: bInput): User
  }

  type User {
    _id: ID!
    email: String!
    username: String!
    bookSaved: [Book]
  }

  type Book {
    bookId: ID!
    bookDesc: String
    bookAuth: [String]
    image: String
  }

  type BookInfo {
    bookDesc: String
    bookAuth: [String]
    image: String
  }

  input bInput {
    bookId: ID!
    bookDesc: String
    bookAuth: [String]
    image: String
  }





`

module.exports = typeDefs;
