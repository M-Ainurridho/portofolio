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
         <header className="mb-4">
            <h2 className="text-center text-2xl font-medium">Skills</h2>
         </header>

         <div className="flex">
            <div className="frontend basis-1/2">
               <h4 className="text-center text-xl mb-3">Frontend</h4>

               <div className="flex justify-around mb-4">
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

            <div className="backend basis-1/2">
               <h4 className="text-center text-xl mb-3">Backend</h4>

               <div className="flex justify-around mb-4">
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
