import Quote from "../models/Quote";

export const loadQuote: Function = async () => {
  const endpoint: string = "https://stoicquotesapi.com/v1/api/quotes/random";

  const response: Response = await fetch(endpoint);

  const quote: Quote = await response.json().then((data) => ({
    id: data["id"],
    body: data["body"],
    authorId: data["author_id"],
    author: data["author"]
  }));

  return quote;
};
