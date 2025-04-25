import { useState } from "react";
import MemeCard, { MemeProps } from "./MemeCard";
import { Button } from "@/components/ui/button";

// Моковые данные для мемов
const MOCK_MEMES: MemeProps[] = [
  {
    id: 1,
    title: "Кот в шоке",
    imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1327&q=80",
    category: "Коты",
    likes: 2452,
    comments: 128
  },
  {
    id: 2,
    title: "Программирование это...",
    imageUrl: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
    category: "Айти",
    likes: 1890,
    comments: 215
  },
  {
    id: 3,
    title: "Когда дедлайн уже завтра",
    imageUrl: "https://images.unsplash.com/photo-1583947582886-f40b8acf29f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "Работа",
    likes: 3142,
    comments: 287
  },
  {
    id: 4,
    title: "Понедельник vs Пятница",
    imageUrl: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80",
    category: "Жизнь",
    likes: 2811,
    comments: 176
  },
  {
    id: 5,
    title: "Когда все сломалось в проде",
    imageUrl: "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
    category: "Айти",
    likes: 4215,
    comments: 342
  },
  {
    id: 6,
    title: "Идеальное утро",
    imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "Еда",
    likes: 1756,
    comments: 94
  },
];

// Уникальные категории мемов
const CATEGORIES = ["Все", ...Array.from(new Set(MOCK_MEMES.map(meme => meme.category)))];

const MemeGrid = () => {
  const [activeCategory, setActiveCategory] = useState("Все");

  const filteredMemes = activeCategory === "Все" 
    ? MOCK_MEMES 
    : MOCK_MEMES.filter(meme => meme.category === activeCategory);

  return (
    <div>
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {CATEGORIES.map(category => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory(category)}
            className="rounded-full"
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredMemes.map(meme => (
          <MemeCard key={meme.id} {...meme} />
        ))}
      </div>
    </div>
  );
};

export default MemeGrid;