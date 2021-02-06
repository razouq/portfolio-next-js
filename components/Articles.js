import Article from "./Article";

export default function Articles() {
  return (
    <section className="mt-10">
      <h3 className="inline-block pb-1 text-3xl font-semibold text-yellow-900 border-b-4 border-yellow-900">
        Articles
      </h3>
      <div className="grid gap-4 mt-10 md:grid-cols-3">
        <Article title="Article 1" delay={0} />
        <Article title="Article 2" delay={1} />
        <Article title="Article 3" delay={2} />
        <Article title="Article 4" delay={0} />
      </div>
      <div className="flex justify-center">
        <a href="#" className="px-2 py-1 mx-auto mt-5 mb-2 font-bold tracking-widest text-center text-yellow-900 duration-500 ease-out transform bg-white border-2 border-yellow-900 rounded-md hover:-translate-y-1 hover:shadow-xl">
          MORE ARTICLES..
        </a>
      </div>
    </section>
  );
}
