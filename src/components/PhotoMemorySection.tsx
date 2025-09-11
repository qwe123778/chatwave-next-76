import { Card } from "@/components/ui/card";
import { Camera, Image } from "lucide-react";

export const PhotoMemorySection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-warm">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-dancing font-bold text-center text-white mb-16">
          Photo Memories 📸
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Placeholder photo cards - you can replace these with actual photos */}
          {[1, 2, 3].map((index) => (
            <Card 
              key={index}
              className="aspect-square bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="h-full flex flex-col items-center justify-center text-white">
                <div className="bg-white/20 p-4 rounded-full mb-4">
                  {index === 2 ? (
                    <Camera className="w-8 h-8" />
                  ) : (
                    <Image className="w-8 h-8" />
                  )}
                </div>
                <p className="font-poppins text-center px-4">
                  {index === 1 && "Add your favorite memory here!"}
                  {index === 2 && "Upload a special photo!"}
                  {index === 3 && "Another amazing moment!"}
                </p>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Card className="bg-white/10 backdrop-blur-sm border-white/30 p-8 max-w-2xl mx-auto">
            <p className="text-white font-poppins text-lg leading-relaxed">
              "The best things in life are the people we love, the places we've been, 
              and the memories we've made along the way. Here's to creating many more 
              beautiful memories together!" ✨
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};