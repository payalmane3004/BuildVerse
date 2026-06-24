export default function Howitworks() {
  const steps = [
    {
      step: "01",
      title: "Create Your Profile",
      description: "Add your details, skills, interests, and work preferences."
    },
    {
      step: "02",
      title: "Showcase Your Skills",
      description: "Highlight technologies, domains, and experiences that define you."
    },
    {
      step: "03",
      title: "Discover Builders",
      description: "Find students, developers, designers, and founders who match your goals."
    },
    {
      step: "04",
      title: "Connect & Build",
      description: "Send requests, form teams, participate in hackathons, build projects, or launch startups."
    }
  ];

  return (
    <section className="flex justify-center gap-20 py-10 border border-white rounded-lg">
      {steps.map((step) => (
        <div key={step.step} className="text-center">
          <h2 className="text-4xl font-bold">
            {step.step}
          </h2>

          <h3 className="text-xl font-semibold mt-2">
            {step.title}
          </h3>

          <p className="mt-2 max-w-xs">
            {step.description}
          </p>
        </div>
      ))}
    </section>
  );
}