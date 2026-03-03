"use client";
import { motion } from "motion/react";
/* import JonatasPhotoTeamBlue from '../../../../assets/img/photo_jonatasfg_bg_blue.webp' */
import JonatasPhotoTeamGreen from '../../../../assets/img/photo_jonatasfg_bg_green_2.webp'
import WhatsappIcon from '../../../../assets/icons/icons8-whatsapp-100.png'
import LinkedinIcon from '../../../../assets/icons/icons8-linkedin.svg'
import EmailIcon from '../../../../assets/icons/icons8-email-50.webp'
import InstagramIcon from '../../../../assets/icons/icons8-instagram-50.webp'

type team = {
  name: string;
  role: string;
  image: string;
  socials: {
    website: string;
    linkedin: string;
    email: string,
    instagram: string
  };
}[];

const teamData: team = [
  {
    name: "Jonatas Freire Giordano",
    role: "Ingeniero de IA | Fundador",
    image: JonatasPhotoTeamGreen,
    socials: {
      website: "#",
      linkedin: "#",
      email: "#",
      instagram: "#"
    },
  }
];

const Team = () => {
  return (
    <section>
      <div className="mb-32">
        <div className="mx-auto max-w-7xl px-10 sm:px-6 lg:px-16 flex flex-col items-center justify-center gap-8 md:gap-16">
          <motion.div
              initial={{ y: -40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.21, 0.47, 0.32, 0.98],
              }} className="max-w-4xl px-10 flex flex-col items-center justify-center text-center gap-4">
            <h2 className="text-3xl md:text-5xl font-medium text-foreground text-stone-700">
              De La Idea a Sistemas Reales
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6 items-center justify-center">
            {teamData?.map((value, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  className="group flex flex-col items-center justify-center gap-6"
                >
                  <img
                    className="h-[50%] w-[50%] hover:grayscale transition-all duration-300 rounded-full"
                    src={value.image}
                    alt="team-img"
                  />
                  <div className="w-full flex flex-col gap-4 items-center justify-center">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <h3 className="text-2xl font-medium text-foreground text-stone-700">
                        {value.name}
                      </h3>
                      <p className="text-sm font-normal text-muted-foreground">
                        {value.role}
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <a
                        href={value.socials.website}
                        className="p-2 hover:bg-teal-100 rounded-full"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={WhatsappIcon} alt="Whatsapp Jonatas Freire Giordano" className="size-6" />
                        
                      </a>
                      <a
                        href={value.socials.linkedin}
                        className="p-2 hover:bg-teal-100 rounded-full"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={LinkedinIcon} alt="Linkedin Jonatas Freire Giordano" className="size-6" />
                      </a>
                      <a
                        href={value.socials.linkedin}
                        className="p-2 hover:bg-teal-100 rounded-full"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={EmailIcon} alt="Email Jonatas Freire Giordano" className="size-6" />
                      </a>
                      <a
                        href={value.socials.linkedin}
                        className="p-2 hover:bg-teal-100 rounded-full"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={InstagramIcon} alt="Instagram Jonatas Freire Giordano" className="size-6" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
