import React from "react";

const Tag = ({ title }: { title: string }) => {
  return (
    <div className="rounded-sm bg-slate-light px-3 py-1 xl:px-[1.0625rem] xl:py-2.5">
      <span className="base-12 text-light-100">{title}</span>
    </div>
  );
};

export default Tag;
