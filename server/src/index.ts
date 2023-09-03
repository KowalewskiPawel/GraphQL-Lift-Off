import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { resolvers } from "./resolvers";
import { typeDefs } from "./schema";
import { TrackAPI } from "./datasources/track-api";

const startApolloSever = async () => {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  const { url } = await startStandaloneServer(apolloServer, {
    context: async () => {
      const { cache } = apolloServer;
      return {
        dataSources: {
          trackAPI: new TrackAPI({ cache }),
        },
      };
    },
  });

  console.log(`Apollo Sever running, URL: ${url}`);
};

startApolloSever();
