import { Resolvers } from "./types";

export const resolvers: Resolvers = {
  Query: {
    tracksForHome: (_parent, _args, { dataSources }) => {
      return dataSources.getTracksForHome();
    },
  },
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.getAuthor(authorId);
    },
  },
};
