import cassandra from 'cassandra-driver';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  // get the body of the request
  const body = await readBody(event);

  // connect to the database
  const client = new cassandra.Client({
    cloud: {
      secureConnectBundle: config.astraDbSecureConnectBundle,
    },
    credentials: {
      username: config.astraDbSecureConnectUsername,
      password: config.astraDbSecureConnectPassword,
    },
  });
  await client.connect();

  // execute a query
  const query = `SELECT * FROM ${config.astraDbKeyspace}.movie_table ORDER BY openai_title_embedding ANN OF ? LIMIT 10;`;
  const embeddingArray = new Float32Array(body.query);
  const response = await client.execute(query, [embeddingArray], {
    prepare: true,
  });
  console.log(`The database returned ${response.rowLength} row(s)`);

  // return the embedding vector array
  return response;
});
