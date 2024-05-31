import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { AccordionTemplateProps } from "@/types/drinks.index";

const AccordionTemplate = ({
  data,
  title,
  open = false,
}: AccordionTemplateProps) => {
  return (
    <div className="mt-10">
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue={open ? "title" : undefined}
      >
        <AccordionItem value="title">
          <AccordionTrigger className="orange-heading">
            {title}
          </AccordionTrigger>
          <AccordionContent className="mt-4 py-2">
            {data.map((ingredient: string) => (
              <p key={ingredient} className="medium-18 py-1 text-light-100">
                {ingredient}
              </p>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AccordionTemplate;
