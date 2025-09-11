import { useEffect, useState } from "react";

interface ConfettiPiece {
  id: number;
  color: string;
  left: string;
  delay: string;
  size: string;
}

export const ConfettiAnimation = () => {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const colors = ['#ec4899', '#f59e0b', '#8b5cf6', '#10b981', '#3b82f6', '#f97316'];
    const pieces = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      color: colors[Math.floor(Math.random() * colors.length)],
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      size: `${Math.random() * 10 + 5}px`,
    }));
    setConfetti(pieces);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-confetti"
          style={{
            left: piece.left,
            backgroundColor: piece.color,
            width: piece.size,
            height: piece.size,
            animationDelay: piece.delay,
          }}
        />
      ))}
    </div>
  );
};