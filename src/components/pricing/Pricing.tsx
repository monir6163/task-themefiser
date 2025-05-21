import PricingCard from './PricingCard';

const Pricing = () => {
  return (
    <div id="pricing" className="main-container grid grid-cols-12">
      <div className="col-span-12 lg:col-span-3"></div>
      <div className="col-span-12 lg:col-span-9 lg:pl-16 px-4 lg:px-0">
        <h2
          className="text-4xl lg:text-5xl font-bold mb-10"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Pricing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 w-full lg:w-4/5">
          <PricingCard
            name="Intro"
            price={29}
            features={[
              'Interface Design',
              'Front-end Code',
              'Back-end Development',
              'Search Engine Optimization',
              'Awesome Support',
              'Responsive site',
              'Easy in use',
              'Useful site',
              'Speedy web',
            ]}
            lineThroughFeatures={[3, 4, 6, 8]}
            isActive={true}
          />

          <PricingCard
            name="Base"
            price={49}
            features={[
              'Interface Design',
              'Front-end Code',
              'Back-end Development',
              'Search Engine Optimization',
              'Awesome Support',
              'Responsive site',
              'Easy in use',
              'Useful site',
              'Speedy web',
            ]}
            lineThroughFeatures={[3, 4, 6, 8]}
            isActive={false}
          />
          <PricingCard
            name="Popular"
            price={99}
            features={[
              'Interface Design',
              'Front-end Code',
              'Back-end Development',
              'Search Engine Optimization',
              'Awesome Support',
              'Responsive site',
              'Easy in use',
              'Useful site',
              'Speedy web',
            ]}
            lineThroughFeatures={[3, 4, 6, 8]}
            isActive={false}
          />
          <PricingCard
            name="Enterprise"
            price={199}
            features={[
              'Interface Design',
              'Front-end Code',
              'Back-end Development',
              'Search Engine Optimization',
              'Awesome Support',
              'Responsive site',
              'Easy in use',
              'Useful site',
              'Speedy web',
            ]}
            lineThroughFeatures={[3, 4, 6, 8]}
            isActive={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
