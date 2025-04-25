import Navbar from "@/components/Navbar";
import MemeGrid from "@/components/MemeGrid";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto py-8 px-4 sm:px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">МемоМания</h1>
          <p className="text-muted-foreground">
            Лучшая коллекция мемов в интернете. Смешно, остроумно, актуально!
          </p>
        </div>
        
        <MemeGrid />
      </main>
      
      <footer className="bg-card py-6 border-t">
        <div className="container mx-auto px-4 sm:px-6 text-center text-sm text-muted-foreground">
          <p>© 2025 МемоМания — Все права зарезервированы</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;