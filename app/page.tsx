import Affiche from "@/components/Affiche";
import Categorie from "@/components/Categorie";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center p-3.5">
      <Affiche />
      <Categorie/>
    </main>
  );
}
