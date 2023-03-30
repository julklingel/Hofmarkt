import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import UpdateProfile from "./UpdateProfile";
import UpdateAddress from "./UpdateAddress";
 
export default function Overview() {
  const [open, setOpen] = useState(1);
 
  const handleOpen = (value : any) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <Fragment>
       <section className="bg-secondary max-w-2xl px-4 py-3 mt-12 mx-auto lg:py-16 rounded-2xl shadow-2xl text-c.green">
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          Update Profile
        </AccordionHeader>
        <AccordionBody>
          <UpdateProfile/>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          Update Address
        </AccordionHeader>
        <AccordionBody>
       <UpdateAddress/>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          Delete Account
        </AccordionHeader>
        <AccordionBody>
        <button
                  type="button"
                  className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                >
                  <svg
                    className="w-5 h-5 mr-1 -ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Delete Account
                </button>
        </AccordionBody>
      </Accordion>
      </section>
      
    </Fragment>
  );
}