"use server";

import { Client, Account, Databases, Users } from "node-appwrite";
import { cookies } from "next/headers";

/**
 * Create new Appwrite Client
 * Setting its endpoint and project
 * So this client knows which appwrite project it should modify
 * @returns 
 */
export async function createSessionClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!);

  const session = cookies().get("appwrite-session");
  // Checks if session exist
  if (!session || !session.value) {
    throw new Error("No session");
  }

  // Attach session to the client
  client.setSession(session.value);

  // We call this whenever we want to access the session
  return {
    get account() {
      return new Account(client);
    },
  };
}

/**
 * Same as above, but with the appwrite key, so it can do anything
 * within the appwrite project (because we gave all permissions in the project)
 * @returns 
 */
export async function createAdminClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!)
    .setKey(process.env.NEXT_APPWRITE_KEY!); // This needs to be secure!

  return {
    get account() {
      return new Account(client);
    },
    get database() {
      return new Databases(client);
    },
    get user() {
      return new Users(client);
    }
  };
}
