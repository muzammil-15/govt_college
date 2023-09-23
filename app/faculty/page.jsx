import FeaturesCard from "@/components/featuresCard";

const Faculty = () => {
  return (
    <div className="mt-10 mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <FeaturesCard
        image={"/pp.jpeg"}
        title="Manzoor Karim"
        subtitle="Principle"
      />
      <FeaturesCard
        image={"/p8.jpeg"}
        title="Karim Baksh"
        subtitle="Vice Principle"
      />
      <FeaturesCard
        image={"/p7.jpeg"}
        title="Abdul Aziz"
        subtitle="Urdu Lecturer"
      />
      <FeaturesCard
        image={"/p3.jpeg"}
        title="Muhammad Irfan"
        subtitle="Chemistry Lecturer"
      />
      <FeaturesCard
        image={"/p4.jpeg"}
        title="Anjum Hussain"
        subtitle="English Lecturer"
      />
      <FeaturesCard
        image={"/p5.jpeg"}
        title="Fida Hussain"
        subtitle="Mathematics Lecturer"
      />
      <FeaturesCard
        image={"/p6.jpeg"}
        title="Yasin Hussain"
        subtitle="English Lecturer"
      />
    </div>
  );
};

export default Faculty;
