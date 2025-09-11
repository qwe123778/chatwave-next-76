import { Button } from "@/components/ui/button";
import { Heart, Gift, Sparkles } from "lucide-react";

interface BirthdayHeroProps {
  friendName: string;
  onScrollToWishes: () => void;
}

export const BirthdayHero = ({ friendName, onScrollToWishes }: BirthdayHeroProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-celebration relative overflow-hidden">
      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Gift className="w-8 h-8 text-birthday-secondary" />
      </div>
      <div className="absolute top-32 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <Heart className="w-6 h-6 text-birthday-primary" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <Sparkles className="w-7 h-7 text-birthday-accent" />
      </div>
      
      <div className="text-center px-4 animate-bounce-in">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-dancing font-bold text-white mb-4 drop-shadow-lg">
            Happy Birthday
          </h1>
          <h2 className="text-4xl md:text-6xl font-dancing font-bold text-birthday-secondary mb-6">
            {friendName}! 🎉
          </h2>
        </div>
        
        <p className="text-xl md:text-2xl text-white/90 font-poppins mb-8 max-w-2xl mx-auto leading-relaxed">
          Today is all about celebrating the amazing person you are! 
          <br />
          Here's a little something special just for you ✨
        </p>
        
        <Button
          onClick={onScrollToWishes}
          className="bg-white text-birthday-primary hover:bg-white/90 text-lg px-8 py-6 rounded-full font-poppins font-medium shadow-celebration transition-all duration-300 hover:scale-105"
        >
          See Your Birthday Wishes 🎁
        </Button>
      </div>
    </section>
  );
};