import Heading from "../components/Heading";

const Home = () => {
  return (
    <div className="flex justify-center mt-10">
      <Heading
        fontFamily="font-mono"
        textSize="text-5xl"
        textColor="text-emerald-500"
        fontWeight="font-semibold"
      >
        Battle of Brains
      </Heading>
    </div>
  );
};

export default Home;
