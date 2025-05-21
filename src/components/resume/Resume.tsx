import React from 'react';
import { LuGraduationCap } from 'react-icons/lu';
import { RiFileCheckFill } from 'react-icons/ri';

const Resume = () => {
  const educationData = [
    {
      year: '2016-2020',
      institution: 'Harvard University',
      degree: 'B.A. and M.S., Computer Science',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut commodi earum eligendi ipsum, laborum maiores mollitia, optio quam quis rerum totam voluptas.',
    },
    {
      year: '2016-2020',
      institution: 'Harvard University',
      degree: 'B.A. and M.S., Computer Science',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut commodi earum eligendi ipsum, laborum maiores mollitia, optio quam quis rerum totam voluptas.',
    },
  ];

  const workHistoryData = [
    {
      year: '2016-2022',
      title: 'UI/UX Design',
      position: 'Web site design',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut commodi earum eligendi ipsum, laborum maiores mollitia, optio quam quis rerum totam voluptas.',
    },
    {
      year: '2012-2016',
      title: 'Junior Web Designer',
      position: 'Product designer',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut commodi earum eligendi ipsum, laborum maiores mollitia, optio quam quis rerum totam voluptas.',
    },
  ];

  interface SectionProps {
    icon: React.ReactNode;
    title: string;
    data: Array<{
      year: string;
      institution?: string;
      degree?: string;
      title?: string;
      position?: string;
      description: string;
    }>;
  }

  const Section: React.FC<SectionProps> = ({ icon, title, data }) => (
    <div className="mt-6 lg:mt-20">
      <div className="flex text-white items-center gap-2.5">
        <div
          className="size-8 bg-pure-black rounded-sm flex items-center justify-center"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          {icon}
        </div>
        <h2 data-aos="fade-down" data-aos-duration="1000">
          {title}
        </h2>
      </div>
      <div className="flex gap-6">
        <div className="w-2 h-[600px] lg:h-[510px] border-[2px] border-[#646464] rounded-full ml-2 mt-8 relative hidden lg:block">
          <div className="w-4 h-4 border-[2px] border-[#646464] bg-pure-black rotate-45 absolute top-5 right-[-6px]"></div>
          <div className="w-4 h-4 border-[2px] border-[#646464] bg-pure-black rotate-45 absolute xl:top-[280px] top-[340px] right-[-6px]"></div>
        </div>
        <div className="mt-12">
          {data.map((item, index: number) => (
            <div key={index} className="mb-8">
              <div className="w-[87px] h-[26px] border-[1px] border-[#FFFFFF33] rounded-[4px] flex items-center justify-center">
                <h2
                  className="text-[14px] font-semibold text-white"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  {item.year}
                </h2>
              </div>
              <div
                className="xl:w-[646px] w-full xl:h-[190px] h-[250px] border-[1px] border-[#FFFFFF1A] bg-[#121414] p-[20px] rounded-[8px] mt-[12px]"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <h2 className="text-[18px] text-[#F5BD4D] font-semibold">
                  {item.institution || item.title}
                </h2>
                <h5 className="text-[12px] font-normal text-off-white mb-[16px]">
                  {item.degree || item.position}
                </h5>
                <div className="w-full bg-[#FFFFFF33] h-[1px]"></div>
                <p className="mt-4">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div id="resume" className="grid grid-cols-12">
      <div className="col-span-12 lg:col-span-3"></div>
      <div className="col-span-12 lg:col-span-9 lg:pl-24 pt-14 lg:pt-10 px-4 lg:px-0">
        <h2 className="text-4xl lg:text-5xl text-white lg:font-bold">Resume</h2>
        <Section
          icon={<LuGraduationCap className="text-2xl text-primary" />}
          title="Education"
          data={educationData}
          data-aos="fade-down"
          data-aos-duration="1000"
        />
        <Section
          icon={<RiFileCheckFill className="text-2xl text-primary" />}
          title="Work History"
          data={workHistoryData}
          data-aos="fade-down"
          data-aos-duration="1000"
        />
      </div>
    </div>
  );
};

export default Resume;
