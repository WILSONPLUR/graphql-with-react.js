import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://spotify-graphql-server.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query Query {
        queryArtists(byName: "Red Hot Chili Peppers") {
          name
          id
          image
        }
      }
    `,
  })
  .then((result) => console.log(result));

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
