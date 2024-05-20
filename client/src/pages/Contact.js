import React from "react";
import Layout from "./../components/Layout/Layout";
// import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.png"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            Any query and info about prodduct feel free to call anytime we 24/7
            avialible :D
          </p>
          <p className="mt-3">
            {/* <BiMailSend /> : glowstheticnp@gmail.com */}
             Email: glowstheticnp@gmail.com
          </p>
          <p className="mt-3">
            {/* <BiPhoneCall /> : 981-7547498 */}
             Contact no.: 981-7547498
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
