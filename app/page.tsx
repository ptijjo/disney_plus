import Affiche from "@/components/Affiche";
import Categories from "@/components/Categories";
import Theme from "@/components/Theme";

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center p-3.5">
      <Affiche />
      <Theme />
      <Categories/>
    </main>
  );
}
