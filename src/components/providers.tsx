import React, { FC, PropsWithChildren } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  const apolloClient = new ApolloClient({
    uri: "https://graphql.anilist.co",
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};
