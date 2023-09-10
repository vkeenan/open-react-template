import IconWisdom from "@/public/images/icon-wisdom2.png";
import IconEthics from "@/public/images/icon-ethics.png";
import IconCustomized from "@/public/images/icon-customized.png";
import IconTraining from "@/public/images/icon-training.png";
import Image from "next/image";

export default function How() {
  return (
    <div className="py-10">
      {/* Section Title */}
      <div className="text-center">
        <h1 className="mx-3 text-3xl font-semibold">How We Guide You</h1>
        <hr className="w-1/4 mx-auto my-4 border-t-2" />
      </div>

      {/* Content Cards */}
      <div className="container grid grid-cols-1 gap-8 mx-auto md:grid-cols-4">
        {/* Card 1: Expert Insights */}
        <div className="p-6 rounded-lg shadow-md bg-slate-600">
          <div className="flex justify-center mb-4">
            <Image src={IconWisdom} alt="Expert Insights" height={200} />
          </div>
          <h2 className="mb-4 text-xl font-semibold">Expert Insights</h2>
          <p>
            With years of experience in navigating the complex landscape of
            enterprise AI, we provide you with expert insights that go beyond
            the surface. From risk assessment to strategy formulation, get the
            wisdom you need.
          </p>
        </div>

        {/* Card 2: Ethical Frameworks */}
        <div className="p-6 rounded-lg shadow-md bg-slate-600">
          <div className="flex justify-center mb-4">
            <Image src={IconEthics} alt="Ethical Frameworks" height={200} />
          </div>
          <h2 className="mb-4 text-xl font-semibold">Ethical Frameworks</h2>
          <p>
            Ethics aren't just an 'add-on' for us; they are integral to all our
            AI recommendations. Our frameworks help you implement AI
            responsibly, aligning with both legal requirements and moral
            imperatives.
          </p>
        </div>

        {/* Card 3: Tailored Strategies */}
        <div className="p-6 rounded-lg shadow-md bg-slate-600">
          <div className="flex justify-center mb-4">
            <Image
              src={IconCustomized}
              alt="Tailored Strategies"
              height={200}
            />
          </div>
          <h2 className="mb-4 text-xl font-semibold">Tailored Strategies</h2>
          <p>
            No two enterprises are the same, and neither should their AI
            strategies be. We offer tailored strategies that take into account
            your unique needs, challenges, and objectives.
          </p>
        </div>

        {/* Card 4: Hands-On Training */}
        <div className="p-6 rounded-lg shadow-md bg-slate-600">
          <div className="flex justify-center mb-4">
            <Image src={IconTraining} alt="Hands-On Training" height={200} />
          </div>
          <h2 className="mb-4 text-xl font-semibold">Hands-On Training</h2>
          <p>
            Learning by doing is the most effective way to understand AI. Our
            hands-on training sessions give your team the practical skills they
            need to implement AI solutions confidently.
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-10 text-center">
        <button className="px-8 py-2 text-white bg-bourbon-500 rounded-lg hover:bg-bourbon-600">
          Get Started on Your AI Journey
        </button>
      </div>
    </div>
  );
}
