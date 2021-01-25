export default function About() {
  return (
    <section className="flex flex-col items-center bg-blue-50 mt-5 shadow-md">
      <div className="w-56 m-5 mt-10 rounded-full overflow-hidden">
        <img src="/images/avatar.png" alt="avatar" />
      </div>
      <div className="m-5">
        <p className="text-center text-gray-700 font-chakra-petch font-bold text-3xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
          repudiandae consectetur nulla voluptatibus maiores quas aliquid. Culpa
          dolor natus accusantium nostrum labore voluptatum quaerat numquam at
          ipsa, et eveniet quia.
        </p>
      </div>
    </section>
  );
}
