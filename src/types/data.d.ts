type GetSearchResultResponseType = {
    searchInformation: {
        searchTime: number;
        formattedSearchTime: string;
        totalResults: string;
        formattedTotalResults: string;
    };
    items: SearchResultItemType[];
};

type SearchResultItemType = {
    title: string;
    link: string;
    htmlSnippet: string;
    formattedUrl: string;
};
