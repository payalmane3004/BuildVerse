export default function Stats() {

  const stats = [
    {
      number: "500+",
      label: "Builders"
    },
    {
      number: "120+",
      label: "Hackathon Teams"
    },
    {
      number: "40+",
      label: "Startup Matches"
    }
  ];

  return (
    <section className="flex justify-center gap-20 py-3">

      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <h2 className="text-4xl font-bold">
            {stat.number}
          </h2>

          <p>{stat.label}</p>
        </div>
      ))}

    </section>
  );
}