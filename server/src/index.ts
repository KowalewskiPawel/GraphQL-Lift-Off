import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { addMocksToSchema } from "@graphql-tools/mock";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { mocks } from "./MOCKS";
import { typeDefs } from "./schema";

const startApolloSever = async () => {
    const apolloServer = new ApolloServer({
        schema: addMocksToSchema({
          schema: makeExecutableSchema({ typeDefs }),
          mocks
        }),
      });
    const { url } = await startStandaloneServer(apolloServer);

    console.log(`Apollo Sever running, URL: ${url}`);
};

startApolloSever();