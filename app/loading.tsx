import LoadingGraphic from "@/components/LoadingGraphic";

const Loading = () => {
  return (
    <main className="screen-center">
      <div className="vertical-center gap-[1.875rem]">
        <LoadingGraphic />
        <h2 className="semibold-40 animate-pulse text-light-100">
          Preparing Your Drink...
        </h2>
      </div>
    </main>
  );
};

export default Loading;
