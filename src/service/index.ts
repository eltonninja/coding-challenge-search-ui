type SearchResult = {
  id: string;
  title: string;
  url: string;
  description: string;
  category: "VIDEOS" | "PLAYLISTS" | "BLOG_POSTS";
};

export const filterData = async (query: string) => {
  const response = await fetch(
    `http://localhost:3001/api/data?search=${encodeURIComponent(query)}`
  );
  const data: SearchResult[] = await response.json();
  return data;
};
