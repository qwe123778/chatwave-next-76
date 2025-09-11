import { useState } from "react";
import { ConfettiAnimation } from "./ConfettiAnimation";
import { BirthdayHero } from "./BirthdayHero";
import { WishesSection } from "./WishesSection";
import { PhotoMemorySection } from "./PhotoMemorySection";
import { PersonalMessage } from "./PersonalMessage";

export const BirthdayWebsite = () => {
  // You can customize the friend's name here
  const [friendName] = useState("Amazing Friend");

  const scrollToWishes = () => {
    document.getElementById('wishes')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-poppins">
      <ConfettiAnimation />
      
      <BirthdayHero 
        friendName={friendName}
        onScrollToWishes={scrollToWishes}
      />
      
      <WishesSection />
      
      <PhotoMemorySection />
      
      <PersonalMessage friendName={friendName} />
      
      {/* Footer */}
      <footer className="bg-foreground text-white py-8 text-center">
        <p className="font-dancing text-xl">
          Made with ❤️ for a very special birthday! 🎂
        </p>
      </footer>
    </div>
  );
};