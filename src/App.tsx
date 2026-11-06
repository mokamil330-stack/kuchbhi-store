function App() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="bg-black py-2 text-center text-xs text-white">
        FREE SHIPPING ON ORDERS ABOVE ₹999
      </div>

      <header className="flex items-center justify-between border-b px-6 py-6 md:px-12">
        <button className="text-sm">MENU</button>

        <h1 className="text-3xl font-extrabold tracking-[0.2em]">
          KUCHBHI
        </h1>

        <button className="text-sm">CART (0)</button>
      </header>

      <section className="flex min-h-[65vh] flex-col items-center justify-center bg-neutral-100 px-6 text-center">
        <p className="mb-5 text-xs tracking-[0.4em]">
          DISCOVER SOMETHING DIFFERENT
        </p>

        <h2 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
          LUXURY FINDS.
          <br />
          UNEXPECTED CHOICES.
        </h2>

        <p className="mt-6 max-w-md text-sm text-neutral-600">
          Explore a curated collection of premium lifestyle,
          fashion, decor and everyday essentials.
        </p>

        <button className="mt-9 bg-black px-10 py-4 text-xs tracking-widest text-white transition hover:bg-neutral-700">
          EXPLORE COLLECTION
        </button>
      </section>

      <section className="px-6 py-16 md:px-12">
        <h2 className="mb-8 text-2xl font-bold tracking-wide">
          EXPLORE COLLECTIONS
        </h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {[
            'WOODEN COLLECTION',
            'PREMIUM FASHION',
            'HANDMADE DECOR',
            'PERSONAL CARE',
            'HEALTHY FOODS',
            'TRENDING FINDS',
            'GIFT COLLECTION',
            'HOME ESSENTIALS',
            'NEW ARRIVALS',
          ].map((category) => (
            <div
              key={category}
              className="flex min-h-36 items-center justify-center bg-neutral-100 p-5 text-center text-sm font-semibold tracking-wider transition hover:bg-black hover:text-white"
            >
              {category}
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-black px-6 py-12 text-center text-white">
        <h2 className="text-2xl font-bold tracking-[0.2em]">
          KUCHBHI
        </h2>

        <p className="mt-3 text-xs text-neutral-400">
          Luxury Finds. Unexpected Choices.
        </p>

        <p className="mt-8 text-xs text-neutral-500">
          © 2026 KUCHBHI. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}

export default App;
