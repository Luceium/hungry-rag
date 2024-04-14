import { redirect } from "next/dist/server/api-utils";
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "redis";

interface VectaraResponse {
  responseSet: [
    {
      response: [];
      status: [];
      document: [];
      summary: [];
      futureId: number;
    }
  ];
  status: [];
  metrics: any;
}

const client = createClient({ url: "redis://default:luceium@10.0.0.95:6379" });
client.on("error", (err) => console.log("Redis Client Error", err));
client.connect();

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("query");
  if (!query) {
    return NextResponse.json({ error: "Query is required" }, { status: 400 });
  }

  //wait until redis is connected

  // check if redis has the query
  const redisResponse = await queryRedis(query);
  console.log("redisResponse " + redisResponse);
  if (redisResponse) {
    return Response.json({ data: redisResponse });
  }

  const vectaraResponse = await queryVectara(query);
  console.log("vectaraResponse ", vectaraResponse);
  // updateRedis(query, vectaraResponse);

  return Response.json({ data: vectaraResponse });
}

async function queryRedis(query: string): Promise<string | false> {
  const value = await client.get(query);
  return value ?? false;
}

async function queryVectara(query: string): Promise<string> {
  let data = JSON.stringify({
    query: [
      {
        query: query,
        start: 0,
        numResults: 10,
        contextConfig: {
          sentences_before: 3,
          sentences_after: 3,
          start_tag: "<b>",
          end_tag: "</b>",
        },
        corpusKey: [
          {
            corpus_id: 2,
          },
        ],
        summary: [
          {
            max_summarized_results: 10,
            response_lang: "en",
          },
        ],
      },
    ],
  });

  let apikey = process.env.DEFAULT_API_KEY || "";

  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "x-api-key": apikey,
    },
    body: data,
  };
  const res = await fetch("https://api.vectara.io/v1/query", config);
  const result = await res.json();
  console.log("result ", result);

  return result;
}

async function updateRedis(query: string, response: string) {
  await client.set(query, response);
}
