import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { AccordionDataType } from "@/types/drinks.index";

const AccordionTemplate = ({ data }: { data: AccordionDataType[] }) => {
  return (
    <div className="xl:mt-10">
      <Accordion
        type="single"
        collapsible
        className="w-full gap-2"
        defaultValue={data[0].title}
      >
        {data.map((data: AccordionDataType) => {
          if (!data.items.length) return null;
          return (
            <AccordionItem
              key={data.title}
              value={data.title}
              className="mb-10"
            >
              <AccordionTrigger className="orange-heading">
                {data.title}
              </AccordionTrigger>
              <AccordionContent className="mt-4 py-2">
                {data.items.map((ingredient: string) => (
                  <p key={ingredient} className="medium-18 py-1 text-light-100">
                    {ingredient}
                  </p>
                ))}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default AccordionTemplate;
