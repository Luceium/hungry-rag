'use client'
import Image from "next/image";
import { FormEvent } from 'react'

export default function Chat() {
  async function onSubmit(event: FormEvent<HTMLFormElement>){
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    console.log(formData)
    const response = await fetch("https://api.vectara.io:443/v1/stream-query", {
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer eyJraWQiOiJvUnVNVmNrXC9DRFN2R2RDa2ViVEc2SVIwM0NCbmtlbnRISjFkNGFEZUZpUT0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoibHVzczY2Z3E1OUpReVJ1VnBrTVdyQSIsInN1YiI6IjY5OTc2NGYyLTVlOTEtNGVmOS04OWQzLWM2YzkzNjc3MjJmNCIsImNvZ25pdG86Z3JvdXBzIjpbInVzLXdlc3QtMl9KMFZqQnd6b1dfR29vZ2xlIl0sImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtd2VzdC0yLmFtYXpvbmF3cy5jb21cL3VzLXdlc3QtMl9KMFZqQnd6b1ciLCJjb2duaXRvOnVzZXJuYW1lIjoiR29vZ2xlXzEwMDU1OTA0NzM1ODY2OTAyNDcwMyIsImdpdmVuX25hbWUiOiJNYXVyaWNpbyIsIm9yaWdpbl9qdGkiOiJmNzRkOTFlNi1lYjYxLTRkNjgtOTc1OC02MzEwNGU0NWUxNzUiLCJhdWQiOiI1dWtmNnY5bjliN21vcHJlbWhwMjljMnN0byIsImlkZW50aXRpZXMiOlt7InVzZXJJZCI6IjEwMDU1OTA0NzM1ODY2OTAyNDcwMyIsInByb3ZpZGVyTmFtZSI6Ikdvb2dsZSIsInByb3ZpZGVyVHlwZSI6Ikdvb2dsZSIsImlzc3VlciI6bnVsbCwicHJpbWFyeSI6InRydWUiLCJkYXRlQ3JlYXRlZCI6IjE3MTMwMzMwODg0OTcifV0sInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNzEzMDMzMDg5LCJuYW1lIjoiTWF1cmljaW8gQ3VyaWVsIiwiZXhwIjoxNzEzMDQwODQzLCJpYXQiOjE3MTMwMzcyNDMsImZhbWlseV9uYW1lIjoiQ3VyaWVsIiwianRpIjoiMTliMmNlYzktMDdjOC00OWM2LTkwMzQtMWI2MTdmZmQ0MmZkIiwiZW1haWwiOiJtYXVyaWNpb20uY3VyaWVsQGdtYWlsLmNvbSJ9.qFgTYYDyCr7ytXhCwdNhw-e3TtBIEEi_Y4pWak8XALoQWW4fbJB4DE47GfwUEcTkGaBHQDnmz7ESqG-Ptcz95U6B4suIxguu_LI1gwnsyncvopXSR1aOLoOXOwl6T0hfJDG81_t0T5BqogYGQpAryRItKM0-nG18ynVP8GhNVBQkCPbOXu1RUVTGHRS6gZnM3JVAqnbZe16ygd1YHaMejXg-feV_NkG5133FetEQ8EQTQfOUZXXCEy7ituHJNcXyOAqsz3F75CjaTdK24hD9z49zKrdpEWp13CStEjL9IVgu4zBWhCS8bs4aEp6I1RTjUWLvLamjP6sN0yqcs_crpA",
        "customer-id": "653553829",
      },
      body: "{\"query\":[{\"query\":\"What are the main concerns of food security in 2023\",\"queryContext\":\"\",\"start\":0,\"numResults\":10,\"contextConfig\":{\"charsBefore\":0,\"charsAfter\":0,\"sentencesBefore\":2,\"sentencesAfter\":2,\"startTag\":\"%START_SNIPPET%\",\"endTag\":\"%END_SNIPPET%\"},\"corpusKey\":[{\"customerId\":653553829,\"corpusId\":2,\"semantics\":0,\"metadataFilter\":\"\",\"lexicalInterpolationConfig\":{\"lambda\":0.025},\"dim\":[]}],\"summary\":[{\"debug\":false,\"chat\":{\"store\":true,\"conversationId\":\"30f8cfbf-dfd9-42f1-9b63-669ba5bbbae2\"},\"maxSummarizedResults\":5,\"responseLang\":\"eng\",\"summarizerPromptName\":\"vectara-summary-ext-v1.2.0\",\"factualConsistencyScore\":true}]}]}",
      method: "post",
      })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error))
      console.log("hello")
  }


  return (
    <div className="flex w-full min-h-screen items-center justify-center flex-col">
      
      <div>
        <div className="bg-gray-600 w-full"></div>
        <form onSubmit={onSubmit} className="inline-flex join">
          <input type="text" placeholder="Type here" className="input w-full max-w-xs bg-gray-700 rounded-lg p-2 join-item" />
          <button className="btn btn-primary p-2 join-item rounded-lg">Ask</button>
        </form>
        
      </div>
    </div>
  );
}
 