import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { HeartIcon, MessageSquareIcon, ShareIcon } from "lucide-react";

export interface MemeProps {
  id: number;
  title: string;
  imageUrl: string;
  category: string;
  likes: number;
  comments: number;
}

const MemeCard = ({ title, imageUrl, category, likes, comments }: MemeProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-0">
        <div className="relative">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-2 right-2">
            <span className="text-xs bg-primary/90 text-white px-2 py-1 rounded-full">
              {category}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start p-4 gap-2">
        <h3 className="font-medium text-sm">{title}</h3>
        <div className="flex items-center justify-between w-full mt-2">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 text-muted-foreground hover:text-primary text-sm">
              <HeartIcon className="h-4 w-4" />
              <span>{likes}</span>
            </button>
            <button className="flex items-center gap-1 text-muted-foreground hover:text-primary text-sm">
              <MessageSquareIcon className="h-4 w-4" />
              <span>{comments}</span>
            </button>
          </div>
          <button className="text-muted-foreground hover:text-primary">
            <ShareIcon className="h-4 w-4" />
          </button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default MemeCard;