const skillsData = [
  { name: 'UI/UX Design', level: '95%' },
  { name: 'Photography', level: '90%' },
  { name: 'Creativity', level: '80%' },
  { name: 'Team Work', level: '95%' },
  { name: 'Web Design', level: '97%' },
];

const Skills = () => {
  return (
    <div id="skills" className="main-container grid grid-cols-12">
      <div className="col-span-12 lg:col-span-3"></div>
      <div className="col-span-12 lg:col-span-9 lg:pl-12 lg:pt-10 px-4 lg:px-0">
        <div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold mt-12 md:mt-20 mb-8"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Skills
          </h2>
          <div className="w-full lg:w-4/5">
            {skillsData.map((skill, index) => (
              <div
                key={index}
                className="mb-8"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="flex items-center justify-between mb-2.5">
                  <h5 className="text-4 md:text-2xl text-white">
                    {skill.name}
                  </h5>
                  <h5 className="md:text-2xl text-primary">{skill.level}</h5>
                </div>
                <div className="w-full h-3 md:h-4 bg-amber-800 rounded-full">
                  <div
                    className="h-full bg-primary rounded-full"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
