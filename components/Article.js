export default function Article({ title }) {
  return (
    <div className="bg-white0 rounded-md overflow-hidden shadow-md">
      <img src="/images/article.jpg" alt="" />
      <div className="p-2">
        <h5 className="font-semibold">{title}</h5>
        <ul>
          <li>react</li>
          <li>express js</li>
          <li>styled components</li>
          <li>JWT</li>
        </ul>
        <div>
          <a href="#" className="float-right mb-2 px-2 py-1 border-2 border-purple-600 rounded-md  text-purple-600 bg-white hover:-translate-y-1 hover:shadow-xl transform ease-out duration-500">READ</a>
        </div>
      </div>
    </div>
  );
}
