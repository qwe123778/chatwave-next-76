import { Card } from "@/components/ui/card";
import { Heart, Star, Smile, Sparkles } from "lucide-react";

const wishes = [
  {
    icon: Heart,
    title: "Wishing you joy",
    message: "May your special day be filled with happiness, laughter, and all the things that make you smile! You deserve nothing but the best today and always.",
  },
  {
    icon: Star,
    title: "You're a star",
    message: "Your kindness, humor, and amazing spirit light up every room you enter. Thank you for being such an incredible friend and human being!",
  },
  {
    icon: Smile,
    title: "Endless happiness",
    message: "Here's to another year of adventures, memories, and dreams coming true. May this new chapter of your life be even more amazing than the last!",
  },
  {
    icon: Sparkles,
    title: "Make it magical",
    message: "Birthdays are nature's way of telling us to eat more cake! So go ahead, make a wish, blow out those candles, and make this day absolutely magical! 🎂",
  },
];

export const WishesSection = () => {
  return (
    <section className="py-20 px-4 bg-background" id="wishes">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-dancing font-bold text-center text-foreground mb-16">
          Birthday Wishes Just for You 💖
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {wishes.map((wish, index) => (
            <Card 
              key={index}
              className="p-8 bg-card-bg shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border-0"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-gradient-birthday p-3 rounded-full shadow-lg">
                  <wish.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-poppins font-semibold text-foreground mb-3">
                    {wish.title}
                  </h3>
                  <p className="text-foreground/80 font-poppins leading-relaxed">
                    {wish.message}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};