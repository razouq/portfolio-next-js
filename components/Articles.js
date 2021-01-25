import Article from "./Article";

export default function Articles() {
  return (
    <section className="mt-10">
      <h3 className="font-semibold text-3xl text-blue-600 border-b-4 border-blue-600 inline-block pb-1">
        Articles
      </h3>
      <div className="grid gap-4 grid-cols-3 mt-10">
        <Article title="Article 1" />
        <Article title="Article 2" />
        <Article title="Article 3" />
        <Article title="Article 4" />
      </div>
      <div className="flex justify-center">
        <a href="#" className="tracking-widest text-center font-bold mx-auto mt-5 mb-2 px-2 py-1 border-2 border-blue-600 rounded-md  text-blue-600 bg-white hover:-translate-y-1 hover:shadow-xl transform ease-out duration-500">
          MORE ARTICLES..
        </a>
      </div>
    </section>
  );
}
