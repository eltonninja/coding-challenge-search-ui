import React, { useState, useCallback } from "react";
import { Card } from "./components/Card";
import { filterData } from "./service";
import { SearchForm } from "./components/form/SearchForm";
import { Box, Spinner, Typography } from "./components/base";

type SearchResult = {
  id: string;
  title: string;
  url: string;
  description: string;
  category: "VIDEOS" | "PLAYLISTS" | "BLOG_POSTS";
};

const App: React.FC = () => {
  const [query, setQuery] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);

  const handleSearch = useCallback(async () => {
    setLoading(true);

    try {
      const data: SearchResult[] = await filterData(query);

      setResults(data);
    } catch (error) {
      console.error("Failed to fetch data", error);
      setResults([]); // Clear previous results on error
    } finally {
      setLoading(false);
    }
  }, [query]);

  return (
    <Box className="min-h-screen bg-gray-100 p-4">
      <Box className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <Typography component="h1" className="text-2xl mb-4">
          Search UI Challenge
        </Typography>
        <SearchForm
          query={query}
          onQueryChange={(e) => setQuery(e.target.value)}
          onSearch={handleSearch}
        />
        {!isLoading && results.length === 0 && (
          <Typography component="p" className="text-center text-gray-500">
            There are no results matching your query.
          </Typography>
        )}
        {isLoading ? (
          <Spinner />
        ) : (
          <Box>
            {results.map((result) => (
              <Card
                key={result.id}
                title={result.title}
                url={result.url}
                description={result.description}
                category={result.category}
              />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default App;
