"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Simple and Affordable Pricing"
          paragraph="Benefit from straightforward and budget-friendly pricing options that cater to your specific needs."
          center
          width="665px"
        />

        <div className="w-full">
          <div
            className="wow fadeInUp mb-8 flex justify-center md:mb-12 lg:mb-16"
            data-wow-delay=".1s"
          >
            <span
              onClick={() => setIsMonthly(true)}
              className={`${isMonthly
                ? "pointer-events-none text-primary"
                : "text-dark dark:text-white"
                } mr-4 cursor-pointer text-base font-semibold`}
            >
              Monthly
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${isMonthly ? "" : "translate-x-full"
                    } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${isMonthly
                ? "text-dark dark:text-white"
                : "pointer-events-none text-primary"
                } ml-4 cursor-pointer text-base font-semibold`}
            >
              Yearly
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Lite"
            price={isMonthly ? "149" : "1,489"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Affordable SEO with essential features. Boost visibility with targeted keywords and quality content."
          >
            <OfferList text="No. of Keywords: Up to 12" status="active" />
            <OfferList text="Landing Page: 1" status="active" />
            <OfferList text="Backlinks Per Month: 20" status="active" />
            <OfferList text="Content Optimization: Basic" status="active" />
            <OfferList text="SEO Friendly URL Setup: Yes" status="active" />
            <OfferList text="Article Posting: 3/month" status="active" />
            <OfferList text="Blog Posting: 3/month" status="active" />
            <OfferList text="Competitor Analysis" status="inactive" />
            <OfferList text="Keyword Research & Analysis: Yes" status="active" />
            <OfferList text="Monthly Report: Basic" status="active" />
            <OfferList text="Client Support: Email and Phone" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Standard"
            price={isMonthly ? "249" : "1,999"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Optimized SEO for growing businesses. Expand keywords, content, and backlinks strategically."
          >
            <OfferList text="No. of Keywords: Up to 25" status="active" />
            <OfferList text="Landing Page: 2" status="active" />
            <OfferList text="Backlinks Per Month: 40" status="active" />
            <OfferList text="Content Optimization: Intermediate" status="active" />
            <OfferList text="SEO Friendly URL Setup: Yes" status="active" />
            <OfferList text="Article Posting: 7/month" status="active" />
            <OfferList text="Blog Posting: 7/month" status="active" />
            <OfferList text="Competitor Analysis: Intermediate" status="active" />
            <OfferList text="Keyword Research & Analysis: Yes" status="active" />
            <OfferList text="Monthly Report: Detailed" status="active" />
            <OfferList text="Client Support: Email and Phone" status="active" />
          </PricingBox>

          <PricingBox
            packageName="Premium"
            price={isMonthly ? "499" : "3,499"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Comprehensive SEO for maximum impact. Dominate with advanced strategies, social media, and analytics."
          >
            <OfferList text="No. of Keywords: Up to 35" status="active" />
            <OfferList text="Landing Page: 5" status="active" />
            <OfferList text="Backlinks Per Month: 60" status="active" />
            <OfferList text="Content Optimization: Advanced" status="active" />
            <OfferList text="SEO Friendly URL Setup: Yes" status="active" />
            <OfferList text="Article Posting: 12/month" status="active" />
            <OfferList text="Blog Posting: 12/month" status="active" />
            <OfferList text="Social Media Optimization: Yes" status="active" />
            <OfferList text="Social Media Platforms: Facebook, Instagram, Twitter" status="active" />
            <OfferList text="Competitor Analysis: Advanced" status="active" />
            <OfferList text="Keyword Research & Analysis: Yes" status="active" />
            <OfferList text="Monthly Report: Comprehensive" status="active" />
            <OfferList text="Client Support: Email and Phone" status="active" />
          </PricingBox>

          <PricingBox
            packageName="Website Development"
            price="499"
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Get a professional website with essential features. Perfect for small businesses and startups."
          >
            <OfferList text="Responsive Website Design: Yes" status="active" />
            <OfferList text="Number of Pages: Up to 5" status="active" />
            <OfferList text="Custom Design: Basic" status="active" />
            <OfferList text="Content Management System (CMS): Yes" status="active" />
            <OfferList text="Contact Form: Yes" status="active" />
            <OfferList text="Basic SEO Setup: Yes" status="active" />
            <OfferList text="Hosting and Domain Setup: No" status="inactive" />
            <OfferList text="Mobile Optimization: Yes" status="active" />
            <OfferList text="Basic Analytics Integration: Yes" status="active" />
            <OfferList text="Estimated Delivery Time: 4-6 weeks" status="active" />
            <OfferList text="Client Support: Email and Phone" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Custom Website "
            price="999"
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Elevate your brand with a unique custom website. Ideal for businesses seeking advanced features."
          >
            <OfferList text="Responsive Custom Design: Yes" status="active" />
            <OfferList text="Number of Pages: Up to 10" status="active" />
            <OfferList text="Content Management System (CMS): Yes" status="active" />
            <OfferList text="Contact Forms (Customized): Yes" status="active" />
            <OfferList text="SEO Friendly URL Setup: Yes" status="active" />
            <OfferList text="Basic SEO Optimization: Yes" status="active" />
            <OfferList text="Hosting and Domain Setup: Yes" status="active" />
            <OfferList text="Mobile Optimization: Yes" status="active" />
            <OfferList text="Advanced Analytics Integration: Yes" status="active" />
            <OfferList text="Blog Section: Yes" status="active" />
            <OfferList text="Social Media Integration: Yes" status="active" />
            <OfferList text="Estimated Delivery Time: 6-8 weeks" status="active" />
            <OfferList text="Client Support: Email and Phone" status="active" />
          </PricingBox>
          <PricingBox
            packageName="App Development"
            price="2,999"
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Transform your ideas into a fully functional app. Comprehensive features for long-term success."
          >
            <OfferList text="Platform: iOS and Android" status="active" />
            <OfferList text="Custom App Design: Yes" status="active" />
            <OfferList text="Number of Screens: Up to 15" status="active" />
            <OfferList text="User Authentication: Yes" status="active" />
            <OfferList text="Database Integration: Yes" status="active" />
            <OfferList text="In-App Purchases: No" status="active" />
            <OfferList text="Push Notifications: Yes" status="active" />
            <OfferList text="App Submission: Yes" status="active" />
            <OfferList text="Basic Analytics Integration: Yes" status="active" />
            <OfferList text="App Maintenance (1 Year): Yes" status="active" />
            <OfferList text="Client Support: Email, Phone, and Priority Support" status="active" />
          </PricingBox>



        </div>
      </div>

      <div className="absolute left-0 bottom-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
