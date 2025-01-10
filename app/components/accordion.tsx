import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";

export const FAQs = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Why do we use 99 users?</AccordionTrigger>
        <AccordionContent>
          We use 99 users to manage bounce rates effectively. G Suite monitors
          bounce rates within a 60-minute window, and generating 3 bounces can
          lead to throttling of your delivery to the primary inbox. By
          distributing these bounces across 99 users, we mitigate risks to your
          domain's reputation, enabling you to send higher volumes of email
          safely.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How many emails can we send?</AccordionTrigger>
        <AccordionContent>
          The number of emails you can send varies based on your ability to use
          spintax effectively among other factors. Initial benchmarks indicate:
          <ul className="grid gap-3">
            <li>Day 1: Send 797 emails with 80-85% deliverability.</li>
            <li>Day 8: Increase to 1,500 emails with 85-90% deliverability.</li>
            <li>
              Day 15: Further increase to 2,000 emails with 85-90%
              deliverability.
            </li>
            <li>Month 2: Reach 3,500 emails with 85-90% deliverability.</li>
            <li>Month 3: Peak at 5,000 emails with 85-90% deliverability.</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          How does your deliverability compare to other providers?
        </AccordionTrigger>
        <AccordionContent>
          Our deliverability rates generally hover between 80-90%. These metrics
          can fluctuate based on several factors, including the quality of the
          email list and the industry’s reliance on email communication. For a
          reliable comparison, industry experts like Eric from Growth Engine X
          have validated these figures as mostly accurate.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
          How do you manage inboxes with 99 Users?
        </AccordionTrigger>
        <AccordionContent>
          Our system includes a built-in master inbox feature, and we provide
          three master inboxes (covering 33 users each). This setup allows you
          to manage all 99 inboxes as if they were part of a traditional
          single-domain, three-inbox configuration. For specific needs, tools
          like Front can be integrated for automations.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>
          What issues can we expect with this volume and these domains?
        </AccordionTrigger>
        <AccordionContent>
          The key principle here is accountability without penalty. If an issue
          arises from our end, we will replace your domain slot at no extra
          cost. This policy covers all sending issues and allows for the free
          exchange of domains as needed for your clients, ensuring flexibility
          and reliability in your campaigns.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
