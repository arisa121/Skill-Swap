import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
const SkillCard = () => {
  const data = useLoaderData();
  const [Skill, setSkills] = useState();
  useEffect(() => {
    const sortedSkill = [...data].sort((a, b) => b.rating - a.rating);
    setSkills(sortedSkill);
  }, [data]);
  return (
    <div>
      {/* Popular Skills */}
      <section className="my-10">
        <h2 className="text-3xl text-center font-bold mb-6">Popular Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((skill) => (
            <div
              key={skill.skillId}
              className="card w-full bg-base-100 shadow-md"
            >
              <figure>
                <img
                  src={skill.image}
                  alt={skill.skillName}
                  className="h-60 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{skill.skillName}</h2>
                <p>Rating: ⭐ {skill.rating}</p>
                <p>Price: ${skill.price}</p>
                <div className="card-actions justify-end">
                  <Link
                    to={`/skill/${skill.skillId}`}
                    className="btn btn-primary btn-sm"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SkillCard;
