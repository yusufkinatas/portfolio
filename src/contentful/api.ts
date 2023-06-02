import { GraphQLClient } from "graphql-request";

import { getSdk, Sdk } from "./contentful.graphql.types";

const SPACE_ID = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const CDA_TOKEN = process.env.NEXT_PUBLIC_CONTENTFUL_CDA_TOKEN;
const ENVIRONMENT = process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT;

export const CONTENTFUL_API_URL = `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}/environments/${ENVIRONMENT}?access_token=${CDA_TOKEN}`;

const client = new GraphQLClient(CONTENTFUL_API_URL);
export const contentful = getSdk(client);
export type ContentfulSdk = Sdk;
export type Contentful<K extends keyof Sdk> = ReturnType<Sdk[K]>;
