import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";

interface PersonalMessageProps {
  friendName: string;
}

export const PersonalMessage = ({ friendName }: PersonalMessageProps) => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <Heart className="w-16 h-16 text-birthday-primary mx-auto mb-6 animate-float" />
          <h2 className="text-4xl md:text-5xl font-dancing font-bold text-foreground mb-8">
            A Special Message 💌
          </h2>
        </div>
        
        <Card className="bg-gradient-birthday p-12 shadow-celebration text-white">
          <div className="space-y-6 font-poppins">
            <p className="text-xl md:text-2xl leading-relaxed">
              Dear {friendName},
            </p>
            
            <div className="text-lg md:text-xl leading-relaxed space-y-4">
              <p>
                On this special day, I wanted to create something just for you to show 
                how much your friendship means to me. You have this incredible ability 
                to make everyone around you feel special and loved.
              </p>
              
              <p>
                Your kindness, your laughter, and your beautiful spirit make the world 
                a brighter place. I'm so grateful to have you in my life and I can't 
                wait to celebrate many more birthdays with you!
              </p>
              
              <p className="text-2xl font-dancing">
                Have the most amazing birthday ever! 🎉✨
              </p>
            </div>
            
            <div className="pt-6 border-t border-white/30">
              <p className="text-lg">
                With love and best wishes,
              </p>
              <p className="text-xl font-semibold">
                Your friend ❤️
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};