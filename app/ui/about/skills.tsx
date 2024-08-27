import { skills } from "@/app/lib/data";
import clsx from "clsx";
import Image from "next/image";

interface SkillSchema {
   name: string;
   image: string;
   width: number;
   height: number;
}

const Skills = () => {
   return (
      <article>
         <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="frontend basis-full md:basis-1/2">
               <h4 className="text-center text-xl mb-3">Frontend</h4>

               <div className="flex gap-4 mb-4 md:gap-0">
                  {skills.frontend.map(
                     (skill: SkillSchema) =>
                        skill.width == 50 && (
                           <div key={skill.name} className="border-8 h-32 w-32 rounded-full border-green-400 flex items-center justify-center mx-auto bg-white">
                              <Image src={`/images/brands/${skill.image}`} width={skill.width} height={skill.width} alt={skill.name} />
                           </div>
                        )
                  )}
               </div>
               <div className="flex justify-center gap-x-4">
                  {skills.frontend.map(
                     (skill) =>
                        skill.width == 30 && (
                           <div key={skill.name} className="border-8 h-20 w-20 rounded-full border-green-400 flex items-center justify-center bg-white">
                              <Image src={`/images/brands/${skill.image}`} width={skill.width} height={skill.width} alt={skill.name} />
                           </div>
                        )
                  )}
               </div>
            </div>

            <div className="w-[2px] h-10  bg-white rounded-full md:h-48"></div>

            <div className="backend basis-full md:basis-1/2">
               <h4 className="text-center text-xl mb-3 relative">Backend</h4>

               <div className="flex gap-4 mb-4 md:gap-0">
                  {skills.backend.map(
                     (skill) =>
                        skill.width == 50 && (
                           <div key={skill.name} className="border-8 h-32 w-32 rounded-full border-green-400 flex items-center justify-center mx-auto bg-white">
                              <Image src={`/images/brands/${skill.image}`} width={skill.width} height={skill.width} alt={skill.name} />
                           </div>
                        )
                  )}
               </div>
               <div className="flex justify-center gap-x-4">
                  {skills.backend.map(
                     (skill) =>
                        skill.width == 30 && (
                           <div key={skill.name} className="border-8 h-20 w-20 rounded-full border-green-400 flex items-center justify-center bg-white">
                              <Image src={`/images/brands/${skill.image}`} width={skill.width} height={skill.width} alt={skill.name} />
                           </div>
                        )
                  )}
               </div>
            </div>
         </div>
      </article>
   );
};

export default Skills;
