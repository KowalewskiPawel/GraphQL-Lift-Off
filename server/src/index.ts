import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema";

const startApolloSever = async () => {
    const apolloServer = new ApolloServer({ typeDefs });
    const { url } = await startStandaloneServer(apolloServer);

    console.log(`Apollo Sever running, URL: ${url}`);
};

startApolloSever();