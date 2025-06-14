// SQL Joins and relationships

import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgresql://postgres:mysecretpassword@localhost:5432/postgres"
    );
    await client.connect();
    return client;
}