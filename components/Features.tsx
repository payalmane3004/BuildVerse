// import { projectShutdown } from "next/dist/build/swc/generated-native";
// import { features } from "process";

export default function Features() {
    const features = [
        {
            title : "Build projects",
            description :"Find teammates to build amazing projects."
        },
          {
          title: "Find Project partners",
          description : "Connect with developers, designers, and creators who share your interests."
          },
            {
                title : "Join Hackathons"
,               description: "Discover hackathon teammates and build winning solutions together."
            },
            {
                title : "Find Co-Founders",
                description:
      "Connect with future startup partners who share your vision and goals."
            }
        ];
    return (
       <section className = "py-20 px-8">
        <h2 className = "text-4xl font-bold text-center mb-12">What You Can Do</h2>
        <div className = "grid grid-cols-2 gap-6">
        {
        features.map(feature => (
            <div key = {feature.title} className="p-6 rounded-xl shadow-md" style={{ backgroundColor: "var(--card)" }} >
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p>{feature.description}</p>
            </div>
        ))
        }
        </div>
        </section>
    );
}