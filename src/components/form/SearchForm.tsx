import { Button, Input } from "../base";

type SearchFormProps = {
  query: string;
  onQueryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
};

export const SearchForm = ({
  query,
  onQueryChange,
  onSearch,
}: SearchFormProps) => {
  return (
    <div className="flex mb-4">
      <Input
        value={query}
        onChange={onQueryChange}
        onKeyPress={(e) => e.key === "Enter" && onSearch()}
      />
      <Button onClick={onSearch} variant="primary">Search</Button>
    </div>
  );
};
