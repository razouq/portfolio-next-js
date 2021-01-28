export default function About() {
  return (
    <section className=" flex items-center bg-blue-50 mt-5 shadow-md">
      <div className="w-1/3 m-5 mt-10 rounded-full overflow-hidden">
        <img src="/images/avatar.png" alt="avatar" />
      </div>
      <div className="w-2/3 m-5">
        <p className="text-center text-gray-700 font-bold text-3xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
          repudiandae consectetur nulla voluptatibus maiores quas aliquid. Culpa
          dolor natus accusantium nostrum labore voluptatum quaerat numquam at
          ipsa, et eveniet quia.
        </p>
      </div>
    </section>
  );
}
