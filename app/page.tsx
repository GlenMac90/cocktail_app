import Hero from "@/components/Hero";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center">
      <Hero />
      <div className="vertical-between size-80">test</div>
    </main>
  );
}
