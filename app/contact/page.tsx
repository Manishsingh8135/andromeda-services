import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import Breadcrumb from "@/components/Common/Breadcrumb";

const ContactPage: React.FC = () => {
  return (
    <div className='flex  justify-between'>
      <Breadcrumb
        pageName="Contact Page"
        description="Feel free to reach out to us with any questions, inquiries, or collaboration opportunities. Our dedicated team is ready to assist you. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <Contact />
    </div>
  );
};

const Contact: React.FC = () => {
  return (
    <div className="flex items-center flex-col justify-center mr-4">
      <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
      <div className="flex flex-col  gap-4">
        <div className="flex items-center ">
          <div className='mx-2'>
            <FaPhone />
          </div>
          <span className="contact-text">Phone: +1 (619) 816 2394</span>
        </div>

        <div className="flex items-center">
          <div className='mx-2'>
            <FaEnvelope />
          </div>
          <span className="contact-text">Email: eric@andromedaservices.org</span>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
