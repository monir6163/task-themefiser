'use client';

import { Link } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const categories = [
  'All',
  'Graphic Design',
  'Mobile App',
  'Photography',
  'UI/UX Design',
];

const portfolioItems = [
  {
    title: 'Figma Mockup',
    category: 'Graphic Design',
    image: '/images/p5.png',
    heightClass: 'h-64',
  },
  {
    title: 'Shopping Bag',
    category: 'Graphic Design',
    image: '/images/p1.png',
    heightClass: 'h-80',
  },
  {
    title: 'Smart Watch',
    category: 'Mobile App',
    image: '/images/p2.png',
    heightClass: 'h-60',
  },
  {
    title: 'Mobile App UI',
    category: 'Mobile App',
    image: '/images/p3.png',
    heightClass: 'h-96',
  },
  {
    title: 'Mug Design',
    category: 'Graphic Design',
    image: '/images/p4.png',
    heightClass: 'h-64',
  },
  {
    title: 'Website Design',
    category: 'UI/UX Design',
    image: '/images/p6.png',
    heightClass: 'h-80',
  },
  {
    title: 'Photography',
    category: 'Photography',
    image: '/images/p7.png',
    heightClass: 'h-64',
  },
  {
    title: 'Photography',
    category: 'Photography',
    image: '/images/p8.png',
    heightClass: 'h-64',
  },
  {
    title: 'Photography',
    category: 'Photography',
    image: '/images/p8.png',
    heightClass: 'h-64',
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems =
    activeCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);
  const leftColumnItems = filteredItems.filter((_, index) => index % 2 === 0);
  const rightColumnItems = filteredItems.filter((_, index) => index % 2 !== 0);

  return (
    <div id="portfolio" className="main-container grid grid-cols-12">
      <div className="col-span-12 lg:col-span-3"></div>
      <div className="col-span-12 lg:col-span-9 lg:pl-16 pt-10 px-4 lg:px-0">
        <h2
          className="text-4xl lg:text-5xl font-bold mb-10"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Portfolio
        </h2>
        <div className="bg-pure-black w-full lg:w-4/5 rounded flex justify-between items-center overflow-x-auto px-4 py-2 sm:px-6 sm:py-3 shadow-lg">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-4 py-2 text-sm sm:text-base font-medium transition-colors duration-300
                ${
                  activeCategory === category
                    ? 'text-[#f5bd4d]'
                    : 'text-white/80 hover:text-[#f5bd4d]'
                }`}
            >
              {category}
              {activeCategory === category && (
                <span className="absolute -bottom-[2px] left-1/2 -translate-x-1/2 w-full h-[2px] bg-[#f5bd4d] rounded-full" />
              )}
            </button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-5 w-full lg:w-4/5 mt-5">
          {/* Left Column */}
          <div className="w-full md:w-1/2 space-y-5">
            {rightColumnItems.map((item, index) => (
              <PortfolioItem key={index} item={item} />
            ))}
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2 space-y-5">
            {leftColumnItems.map((item, index) => (
              <PortfolioItem key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
const PortfolioItem = ({ item }: { item: (typeof portfolioItems)[0] }) => {
  return (
    <div
      className={`relative group overflow-hidden rounded-md ${item.heightClass}`}
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-center">
        <h3 className="text-white text-lg font-semibold">{item.title}</h3>
        <p className="text-white text-sm">{item.category}</p>
        <div className="bg-black rounded-full p-2 w-8 h-8 flex items-center justify-center">
          <Link className="text-white text-xs" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
