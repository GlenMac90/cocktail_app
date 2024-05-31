import { getAllDrinks } from "@/lib/actions/drinks.actions";
import Hero from "@/components/Hero";
import AllDrinks from "@/components/AllDrinks";

export default async function Home() {
  const drinks = await getAllDrinks();
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <AllDrinks data={drinks} />
    </main>
  );
}
