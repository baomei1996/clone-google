import React from "react";

type SearchResultType = {
    title: string;
    link: string;
    snippet: string;
    formattedUrl: string;
};

export default async function WebSearchPage({
    searchParams,
}: {
    searchParams: { searchTerm: string };
}) {
    const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`
    );
    const data = await response.json();
    const results: SearchResultType[] = data.items;

    return (
        <div>
            {results.map((result, index) => (
                <h1 key={index}>{result.title}</h1>
            ))}
        </div>
    );
}
