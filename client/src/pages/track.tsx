import React from "react";
import { gql } from "../__generated__";
import { DocumentNode, useQuery } from "@apollo/client";
import { Layout, QueryResult } from "../components";
import TrackDetail from "../components/track-detail";
import { useParams } from "react-router-dom";

export const GET_TRACK = gql(`
  // our query goes here
  query GetTrack($trackId: ID!) {
    track(id: $trackId) {
      id
      title
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
      numberOfViews
      modules {
        id
        title
        length
      }
      description
    }
  }
)`) as DocumentNode;

const Track = () => {
  const { trackId = "" } = useParams();

  const { loading, error, data } = useQuery(GET_TRACK, {
    variables: { trackId },
  });

  return (
    <Layout>
      <QueryResult error={error} loading={loading} data={data}>
        <TrackDetail track={data?.track} />
      </QueryResult>
    </Layout>
  );
};

export default Track;
