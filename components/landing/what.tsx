import IconActionable from "@/public/images/icon-actionable.png";
import IconTraining from "@/public/images/icon-training1.png";
import IconJustice from "@/public/images/icon-justice.png";
import IconSupport from "@/public/images/icon-support.png";
import Image from "next/image";

export default function What() {
  return (
    <div className="py-10">
      {/* Section Title */}
      <div className="text-center">
        <h1 className="mx-3 text-3xl font-semibold">What You Get</h1>
        <hr className="w-1/4 mx-auto my-4 border-t-2" />
      </div>

      {/* Content Cards */}
      <div className="container grid grid-cols-1 gap-8 mx-auto md:grid-cols-4">
        {/* Card 1: Actionable Intelligence */}
        <div className="p-6 rounded-lg shadow-md bg-slate-600">
          <div className="flex justify-center mb-4">
            <Image
              src={IconActionable}
              alt="Actionable Intelligence"
              height={200}
            />
          </div>
          <h2 className="mb-4 text-xl font-semibold">
            Actionable Intelligence
          </h2>
          <p>
            Benefit from actionable insights derived from real-world data. Make
            informed decisions that are backed by comprehensive analytics and
            expert evaluation.
          </p>
        </div>

        {/* Card 2: Comprehensive Training */}
        <div className="p-6 rounded-lg shadow-md bg-slate-600">
          <div className="flex justify-center mb-4">
            <Image
              src={IconTraining}
              alt="Comprehensive Training"
              height={200}
            />
          </div>
          <h2 className="mb-4 text-xl font-semibold">Comprehensive Training</h2>
          <p>
            Equip your team with the knowledge and skills to excel in AI
            implementation. Our training modules are designed to be
            comprehensive yet easy to grasp, ensuring a smooth learning curve.
          </p>
        </div>

        {/* Card 3: Ethical Compliance */}
        <div className="p-6 rounded-lg shadow-md bg-slate-600">
          <div className="flex justify-center mb-4">
            <Image src={IconJustice} alt="Ethical Compliance" height={200} />
          </div>
          <h2 className="mb-4 text-xl font-semibold">Ethical Compliance</h2>
          <p>
            Stay ahead of the curve with our ethical compliance frameworks.
            Ensure your AI initiatives are not just effective but also ethically
            sound and compliant with regulations.
          </p>
        </div>

        {/* Card 4: Ongoing Support */}
        <div className="p-6 rounded-lg shadow-md bg-slate-600">
          <div className="flex justify-center mb-4">
            <Image src={IconSupport} alt="Ongoing Support" height={200} />
          </div>
          <h2 className="mb-4 text-xl font-semibold">Ongoing Support</h2>
          <p>
            Our commitment doesn’t end after implementation. Receive ongoing
            support and updates to ensure your AI initiatives continue to
            deliver optimal results.
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-10 text-center">
        <button className="px-8 py-2 text-white bg-apple-500 rounded-lg hover:bg-apple-600">
          Explore Our Offerings
        </button>
      </div>
    </div>
  );
}
