import { Badge } from "./base/Badge";
import { Link } from "./base/Link";
import { Typography } from "./base/Typography";

type CardProps = {
  title: string;
  url: string;
  description: string;
  category: "VIDEOS" | "PLAYLISTS" | "BLOG_POSTS";
};

export const Card = ({ title, url, description, category }: CardProps) => {
  return (
    <div className="mb-4 bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <Link href={url} className="text-blue-500 hover:underline text-lg">
        {title}
      </Link>
      <Typography component="p" className="text-gray-600 mt-2">
        {description}
      </Typography>
      <Badge label={category} />
    </div>
  );
};
