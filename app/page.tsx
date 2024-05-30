import { getAllDrinks } from "@/lib/actions/drinks.actions";

export default async function Home() {
  const drinks = await getAllDrinks();

  console.log(drinks);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="vertical-between size-80">test</div>
    </main>
  );
}
