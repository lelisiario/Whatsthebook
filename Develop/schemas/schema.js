// server/schemas/schema.js
const { ApolloServer } = require('apollo-server-express');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const server = new ApolloServer({
  schema,
  context: ({ req }) => {
    // Add the user to the context
    const token = req.headers.authorization || '';
    const user = getUserFromToken(token);
    return { user };
  },
});

module.exports = server;
