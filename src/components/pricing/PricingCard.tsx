interface PricingCardProps {
  name: string;
  price: number;
  features: string[];
  lineThroughFeatures?: number[]; // Optional list of indexes to strike-through
  className?: string;
  isActive?: boolean;
}

export default function PricingCard({
  name,
  price,
  features,
  lineThroughFeatures = [],
  className = '',
  isActive,
}: PricingCardProps) {
  return (
    <div
      className="bg-pure-black py-6"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="flex flex-col relative p-6">
        <h5 className="px-6 py-3 gradient-bg-2 text-white text-base flex items-center justify-center absolute left-0 top-5 rounded-r-full">
          {name}
        </h5>
        <h2 className="text-5xl text-white font-bold mt-16">
          ${price} <span className="text-lg font-normal">/ month</span>
        </h2>
        <ul className="bg-common-black py-5 px-4 mt-7 rounded-md">
          {features.map((feature, index) => (
            <li
              key={index}
              className={`text-base text-white mb-4 font-normal ${
                lineThroughFeatures.includes(index)
                  ? 'line-through opacity-50'
                  : ''
              } ${className}`}
            >
              {feature}
            </li>
          ))}
        </ul>
        {isActive ? (
          <button className="bg-gradient-to-r from-[#f6ad55] to-[#f89222] border-[#F5BD4D] text-white font-semibold px-6 py-3 rounded w-[139px] mt-8 hover:opacity-90 transition duration-200">
            Get Started
          </button>
        ) : (
          <button className="border border-[#F5BD4D] hover:bg-gradient-to-r from-[#f6ad55] to-[#f89222] text-primary font-semibold px-6 py-3 rounded w-[139px] mt-8 hover:opacity-90 transition duration-200 hover:text-white">
            Get Started
          </button>
        )}
      </div>
    </div>
  );
}
