import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { SOCIALS } from "@/config/socials";

export const ContactSection = () => {
  return (
    <section
      className="min-h-[calc(100svh-94px)] flex items-center justify-center"
      id="contact"
    >
      <div className="container flex flex-col items-center space-y-6">
        <h3 className="text-center text-5xl font-bold mb-6">Contact Me</h3>
        <p className="md:max-w-[50rem] lg:max-w-[50rem] text-center text-xl">
          I am waiting for new challenges, my mail is always open for any
          questions. Just ask anything and I will do my best to reach you with
          answers!
        </p>
        <div>
          <Link href={SOCIALS.email} className={buttonVariants()}>
            Send me a message!
          </Link>
        </div>
      </div>
    </section>
  );
};
