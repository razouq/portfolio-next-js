import Project from './Project';

export default function Projects() {
  return (
    <section className="mt-10">
      <h3 className="inline-block pb-1 text-3xl font-semibold text-yellow-900 border-b-4 border-yellow-900">projects</h3>
      <div className="flex flex-col mt-10">
        <Project title="project 1" animationDirection="left" />
        <Project title="project 2" animationDirection="right"/>
        <Project title="project 3" animationDirection="left"/>
        <Project title="project 4" animationDirection="right"/>
      </div>
      <div className="flex justify-center">
        <a href="#" className="px-2 py-1 mx-auto mt-5 mb-2 font-bold tracking-widest text-center text-yellow-900 duration-500 ease-out transform bg-white border-2 border-yellow-900 rounded-md hover:-translate-y-1 hover:shadow-xl">
          MORE PROJECTS..
        </a>
      </div>
    </section>
  )
}