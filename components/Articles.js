import Article from './Article';

export default function Articles() {
  return (
    <section className="mt-10">
      <h3 className="font-semibold text-3xl text-gray-800 border-b-4 border-purple-600 inline-block pb-1">Articles</h3>
      <div className="grid gap-4 grid-cols-3 mt-10">
        <Article title="Article 1"/>
        <Article title="Article 2"/>
        <Article title="Article 3"/>
        <Article title="Article 4"/>
      </div>
    </section>
  );
}
