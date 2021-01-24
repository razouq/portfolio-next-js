import Project from './Project';

export default function Projects() {
  return (
    <section className="mt-10">
      <h3 className="font-semibold text-3xl text-gray-800 border-b-4 border-purple-600 inline-block pb-1">projects</h3>
      <div className="flex flex-col mt-10">
        <Project title="project 1" />
        <Project title="project 2" />
        <Project title="project 3" />
        <Project title="project 4" />
      </div>
    </section>
  )
}