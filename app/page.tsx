import { getDrinkById } from "@/lib/actions/drinks.actions";

export default async function Home() {
  const drink = await getDrinkById(11007);

  console.log("DRINK:", drink);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="vertical-between size-80">
        <p>Home Page</p>
        <p>Home Page</p>
      </div>
    </main>
  );
}
