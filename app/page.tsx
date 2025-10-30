import { FlippingCard } from "@/components/flippingCard";
import { Logo } from "@/components/logo";


export default function Home() {
  return (
    <div className="bg-background h-screen w-full text-black flex flex-col justify-between items-center"> 
      <Logo className="text-text-primary opacity-60 mt-1"/> 
      <FlippingCard />
      <footer className="text-text-primary font-mono text-sm mb-1">Design & Developed by Prasanjit.</footer>
    </div>
  );
}
