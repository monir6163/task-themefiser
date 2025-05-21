import { StaticImageData } from 'next/image';
import BlogCard from './BlogCard';

const Blog = () => {
  const blogPosts = [
    {
      imgurl: '/images/b1.png',
      date: '28 Apr 2022',
      category: 'Photography',
      title: 'The artist vocation is to send light into the human heart.',
      description:
        'Lorem Ipsum is simply dummy text the printing typesetting industry. Lorem Ipsum has been...',
      postid: 'Daryl Smith',
    },
    {
      imgurl: '/images/b2.png',
      date: '28 Apr 2022',
      category: 'Advanture',
      title: 'The mission of art is to represent nature not to imitate her.',
      description:
        'Lorem Ipsum is simply dummy text the printing typesetting industry. Lorem Ipsum has been...',
      postid: 'Daryl Smith',
    },
    {
      imgurl: '/images/b3.png',
      date: '28 Apr 2022',
      category: 'Graphic Design',
      title: 'There are countless versions of lorem ipsum, the most famous.',
      description:
        'Lorem Ipsum is simply dummy text the printing typesetting industry. Lorem Ipsum has been...',
      postid: 'Daryl Smith',
    },
    {
      imgurl: '/images/b4.png',
      date: '28 Apr 2022',
      category: 'Travel',
      title: 'The principles of true art is not to portray, but to evoke.',
      description:
        'Lorem Ipsum is simply dummy text the printing typesetting industry. Lorem Ipsum has been...',
      postid: 'Daryl Smith',
    },
    {
      imgurl: '/images/b5.png',
      date: '28 Apr 2022',
      category: 'Design',
      title: 'UI Interactions of the week',
      description:
        'Lorem Ipsum is simply dummy text the printing typesetting industry. Lorem Ipsum has been...',
      postid: 'Daryl Smith',
    },
    {
      imgurl: '/images/b6.png',
      date: '28 Apr 2022',
      category: 'Travel',
      title: 'Party Jokes Startling But Unnecessary',
      description:
        'Lorem Ipsum is simply dummy text the printing typesetting industry. Lorem Ipsum has been...',
      postid: 'Daryl Smith',
    },
  ];
  return (
    <div id="blog" className="main-container grid grid-cols-12">
      <div className="col-span-12 lg:col-span-3"></div>
      <div className="col-span-12 lg:col-span-9 lg:pl-16 py-20 lg:py-32 px-4 lg:px-0">
        <h2
          className="text-4xl lg:text-5xl font-bold mb-10"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Blog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 w-full lg:w-4/5">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              imgurl={post.imgurl as unknown as StaticImageData}
              date={post.date}
              title={post.title}
              description={post.description}
              postid={post.postid}
              category={post.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
