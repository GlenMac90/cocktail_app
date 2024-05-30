const Drink = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <div>{params.id}</div>
    </div>
  );
};

export default Drink;
