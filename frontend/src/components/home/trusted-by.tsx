import Image from "next/image";
import React from "react";

const TrustedBy = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-white">
      <div className="container mx-auto h-full">
        <div className="px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black">
            Trusted By
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-900 mb-8">
            Here are some of the companies that trust our solution
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
            <Image
              src="https://images.freecreatives.com/wp-content/uploads/2015/04/logo033.png"
              alt="Company Logo"
              height="200"
              width="200"
              className="grayscale"
            />
            <Image
              src="https://seeklogo.com/images/B/business-management-logo-03334B0904-seeklogo.com.png"
              alt="Company Logo"
              height="128"
              width="128"
              className="grayscale"
            />
            <Image
              src="https://www.freeiconspng.com/thumbs/logo-design/3d-link-logo-brand-design-png-image-12.png"
              alt="Company Logo"
              height="128"
              width="128"
              className="grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
