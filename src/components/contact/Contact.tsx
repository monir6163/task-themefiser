'use client';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  // Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div id="contact" className="main-container grid grid-cols-12">
      <div className="col-span-12 lg:col-span-3"></div>
      <div className="col-span-12 lg:col-span-9 lg:pl-16 pt-20 pb-10 lg:py-32 px-4 lg:px-0">
        <h2
          className="text-4xl lg:text-5xl font-bold mb-10"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Contact
        </h2>
        <div className="w-full lg:w-4/5">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* First name */}
              <div>
                <h5 className="text-xl text-white">First name*</h5>
                <input
                  name="firstName"
                  className="text-white w-full h-12 bg-pure-black border border-[#F5BD4D] border-opacity-50 rounded-[10px] pl-5 mt-2
                  focus:outline-none focus:border-[#F5BD4D] focus:ring-1 focus:ring-[#F5BD4D]"
                  autoComplete="off"
                  type="text"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                />
              </div>

              {/* Last name */}
              <div>
                <h5 className="text-xl text-white">Last name*</h5>
                <input
                  name="lastName"
                  className="text-white w-full h-12 bg-pure-black border border-[#F5BD4D] border-opacity-50 rounded-[10px] pl-5 mt-2
                  focus:outline-none focus:border-[#F5BD4D] focus:ring-1 focus:ring-[#F5BD4D]"
                  type="text"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
              {/* Email */}
              <div>
                <h5 className="text-xl text-white">Email*</h5>
                <input
                  name="email"
                  className="text-white w-full h-12 bg-pure-black border border-[#F5BD4D] border-opacity-50 rounded-[10px] pl-5 mt-2
                  focus:outline-none focus:border-[#F5BD4D] focus:ring-1 focus:ring-[#F5BD4D]"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                />
              </div>

              {/* Phone */}
              <div>
                <h5 className="text-xl text-white">Phone*</h5>
                <input
                  name="phone"
                  className="text-white w-full h-12 bg-pure-black border border-[#F5BD4D] border-opacity-50 rounded-[10px] pl-5 mt-2
                  focus:outline-none focus:border-[#F5BD4D] focus:ring-1 focus:ring-[#F5BD4D]"
                  type="text"
                  value={formData.phone}
                  onChange={handleInputChange}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                />
              </div>
            </div>

            {/* Message */}
            <div className="mt-[32px]">
              <h5 className="text-[20px] text-white tracking-[1px]">
                Message*
              </h5>
              <textarea
                name="message"
                className="text-white w-full bg-pure-black border border-[#F5BD4D] border-opacity-50 rounded-[10px] pl-5 mt-2
                  focus:outline-none focus:border-[#F5BD4D] focus:ring-1 focus:ring-[#F5BD4D]"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                data-aos="fade-up"
                data-aos-duration="1000"
              ></textarea>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="text-xl font-normal text-white w-full h-12 gradient-bg rounded-[10px] mt-8 hover:border-1 hover:border-[#F5BD4D] hover:bg-[#F89222] hover:text-white transition duration-300 ease-in-out"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
