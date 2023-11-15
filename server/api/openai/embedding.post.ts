import OpenAI from 'openai';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  // get the body of the request
  const body = await readBody(event);

  const openai = new OpenAI({
    apiKey: config.openaiApiKey,
  });

  // create the embedding from the query
  const response = await openai.embeddings.create({
    model: 'text-embedding-ada-002',
    input: body.query,
  });

  // return the embedding vector array
  return response.data[0].embedding;
});
