import { MongoClient } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error(
    "MONGODB_URI is not defined. Add it to your .env.local file.\n" +
    "Example: MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/dsec"
  );
}

const uri = process.env.MONGODB_URI;

/**
 * Re-use the MongoClient across hot-reloads in development.
 * In production a new client is created once per cold start.
 */
const globalForMongo = globalThis as unknown as {
  _mongoClient?: MongoClient;
};

export const client =
  globalForMongo._mongoClient ?? new MongoClient(uri);

if (process.env.NODE_ENV !== "production") {
  globalForMongo._mongoClient = client;
}

export const db = client.db();
