const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
  }

  type Book {
    _id: ID!
    user1: String!
    user2: String!
    user1_votes: Int
    user2_votes: Int
  }

  type Query {
    user: [User]
    books(_id: String): [Book]
  }

  type Mutation {
    createBook(user1: String!, user2: String!): Book
    createVote(_id: String!, userNum: Int!): Book
  }
`;

module.exports = typeDefs;
