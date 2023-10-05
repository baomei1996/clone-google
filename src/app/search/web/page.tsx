import Link from "next/link";
import React from "react";
import WebSearchResults from "@/components/WebSearchResults";

export default async function WebSearchPage({
    searchParams,
}: {
    searchParams: { searchTerm: string };
}) {
    const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`
    );
    const data: GetSearchResultResponseType = await response.json();
    const results = data.items;
    if (!results) {
        return (
            <div className="flex flex-col justify-center items-center pt-10">
                <h1 className="text-3xl pb-4">No results found.</h1>
                <p className="text-lg">
                    Try search for something else or go back to the homepage.
                    <Link href={"/"} className="text-blue-500 ml-2">
                        HOME
                    </Link>
                </p>
            </div>
        );
    }

    return <>{results && <WebSearchResults results={data} />}</>;
}
