import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/aboutUs.svg"
            alt="contactus"
            style={{ width: "79.2%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            ‘Glowaesthetic’ is an online based Jewelry and Fashion Accessories.
            It is a local business that utilizes social media platform,
            ‘Instagram’ to advertise its products. Using Naikap, Kathmandu as
            its base of operation, this shop provides various earrings,
            bracelets, necklaces, rings, crochet, and clay accessories as well
            as providing the customers with the ability to order custom made
            accessories. Glowaesthetic was established in the year 2023 A.D. and
            has been providing its services since then.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
