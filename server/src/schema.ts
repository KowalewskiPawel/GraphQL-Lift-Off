import gql from "graphql-tag";

export const typeDefs = gql`
  # Schema definitions go here
  type Query {
    "Get tracks array for homepage grid"
    tracksForHome: [Track!]!
  }
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }

  type Author {
    id: ID!
    name: String!
    photo: String
  }
`;
