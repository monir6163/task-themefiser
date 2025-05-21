import Image, { StaticImageData } from 'next/image';

interface BlogCardProps {
  imgurl: StaticImageData;
  date: string;
  title: string;
  description: string;
  postid: string;
  category?: string;
}

const BlogCard = ({
  imgurl,
  date,
  title,
  description,
  postid,
  category,
}: BlogCardProps) => {
  return (
    <div>
      <div className="w-80" data-aos="fade-up" data-aos-duration="1000">
        <Image
          src={imgurl}
          alt={title}
          className="w-full object-cover"
          width={320}
          height={200}
          priority={true}
        />
        <div className="p-6 bg-pure-black">
          <h5 className="text-off-white text-sm font-normal mb-2">
            {category} | {date}
          </h5>
          <h3 className="text-white font-semibold mb-4">{title}</h3>
          <p className="text-pure-off-white  text-sm mb-6 font-normal">
            {description}
          </p>
          <div className="flex items-center gap-2">
            <div className="w-4 h-[1px] bg-primary rounded-full"></div>
            <h4 className="text-sm text-white font-normal">
              Posted By {postid}
            </h4>
            <div className="w-4 h-[1px] bg-primary rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
