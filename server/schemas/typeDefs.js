// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`

    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    input BookInput {
        bookId: ID
        authors: [String!]
        description: String
        title: String
        image: String
        link: String
    }

    type Book {
        bookId: ID
        authors: [String!]
        description: String
        title: String
        image: String
        link: String
    }

    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(bookData: BookInput!): User
        removeBook(bookId: ID!): User
    }

    type Auth {
        token: ID
        user: User
    }
`;

// export the typeDefs
module.exports = typeDefs;