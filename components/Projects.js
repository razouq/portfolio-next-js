import Project from './Project';

export default function Projects() {
  return (
    <section className="mt-10">
      <h3 className="font-semibold text-3xl text-blue-600 border-b-4 border-blue-600 inline-block pb-1">projects</h3>
      <div className="flex flex-col mt-10">
        <Project title="project 1" />
        <Project title="project 2" />
        <Project title="project 3" />
        <Project title="project 4" />
      </div>
      <div className="flex justify-center">
        <a href="#" className="tracking-widest text-center font-bold mx-auto mt-5 mb-2 px-2 py-1 border-2 border-blue-600 rounded-md  text-blue-600 bg-white hover:-translate-y-1 hover:shadow-xl transform ease-out duration-500">
          MORE PROJECTS..
        </a>
      </div>
    </section>
  )
}