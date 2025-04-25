import { Link } from "react-router-dom";
import { LaughIcon, SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 bg-background border-b py-3 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <LaughIcon className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-primary">МемоМания</span>
          </Link>
          
          <div className="relative w-full max-w-sm mx-4 hidden md:block">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Поиск мемов..."
              className="w-full pl-9 bg-accent focus:bg-card"
            />
          </div>
          
          <div className="flex items-center gap-2">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Популярные
            </Link>
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Новые
            </Link>
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Случайный
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;