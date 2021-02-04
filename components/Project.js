export default function Project({ title }) {
  return (
    <div className="flex flex-col-reverse md:flex-row my-2 border-2 shadow-md">
      <div className="flex-1 p-5 bg-blue-50">
        <h5 className="text-lg font-semibold">{title}</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          vel eveniet porro ratione a quis eum officia dignissimos sint hic
          tenetur ex, sit voluptatem voluptate odit quae atque, harum
          repellendus!
        </p>
        <ul className="flex justify-end text-lg ">
          <li className="mx-1 hover:text-blue-400 transition ease-out duration-500">
            <a href="">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li className="mx-1 hover:text-blue-400 transition ease-out duration-500">
            <a href="">
              <i className="fas fa-globe-africa"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full h-52 md:w-1/3 md:h-auto">
        <img className="h-full w-full object-cover" src="/images/project.png" alt=""/>
      </div>
    </div>
  );
}
