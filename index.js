import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
// TypeDefs in GraphQL are a collection of definitions(types, queries, mutations)
// that describe the shape and structure of the data your API can handle,
//     enabling clients to interact with it in a predictable and well - defined way.
import db from "./_db.js";

/* Resolver is a collection of functions that generate response for a GraphQL query. */
const resolvers = {
  Query: {
    games() {
      return db.games;
    },
    authors() {
      return db.authors;
    },
    reviews() {
      return db.reviews;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });

console.log(`🚀 Server ready at: ${url}`);
