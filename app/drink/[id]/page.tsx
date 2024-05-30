import { getDrinkById } from "@/lib/actions/drinks.actions";

const Drink = async ({ params }: { params: { id: string } }) => {
  const drink = await getDrinkById(+params.id);

  console.log(drink);
  return (
    <div>
      <div>{params.id}</div>
    </div>
  );
};

export default Drink;
