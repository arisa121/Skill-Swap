import React from "react";

const OtherRequirment = () => {
  return (
    <section className="my-16">
      <h2 className="text-4xl font-bold text-center mb-10 animate__animated animate__fadeInDown">
        Why Choose <span className="text-primary">SkillSwap?</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* 1️⃣ Learn from Real People */}
        <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 animate__animated animate__fadeInUp hover:scale-105">
          <div className="card-body items-center text-center">
            <img
              src="https://i.postimg.cc/C1rXfPSc/images-2.jpg"
              alt="Learn from People"
              className="w-20 h-20 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Learn from Real People
            </h3>
            <p className="text-gray-600">
              Get hands-on knowledge directly from skilled individuals, not just
              pre-recorded videos.
            </p>
          </div>
        </div>

        {/* 2️⃣ Exchange Your Skills */}
        <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 animate__animated animate__fadeInUp animate__delay-1s hover:scale-105">
          <div className="card-body items-center text-center">
            <img
              src="https://i.postimg.cc/B689N9Yf/images-3.jpg"
              alt="Exchange Skills"
              className="w-20 h-20 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Exchange Your Skills</h3>
            <p className="text-gray-600">
              Teach your expertise while learning something new — a win-win for
              everyone!
            </p>
          </div>
        </div>

        {/* 3️⃣ Flexible Schedule */}
        <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 animate__animated animate__fadeInUp animate__delay-2s hover:scale-105">
          <div className="card-body items-center text-center">
            <img
              src="https://i.postimg.cc/Qx3wKT3V/download-13.jpg"
              alt="Flexible Schedule"
              className="w-20 h-20 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Flexible Schedule</h3>
            <p className="text-gray-600">
              Choose when and how you learn or teach — SkillSwap fits your
              lifestyle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherRequirment;
