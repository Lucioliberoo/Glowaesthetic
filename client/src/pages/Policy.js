import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "69%" }}
          />
        </div>
        <div className="col-md-4">
          <p>
            <h3>Privacy Policy for Glowaesthetic</h3>
            At Glowaesthetic, we are committed to ensuring the privacy and security of our customers' personal information. This Privacy Policy outlines how we collect, use, and protect your data when you use our website or interact with our services. By accessing or using Glowaesthetic's website, you agree to the terms outlined in this Privacy Policy.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
