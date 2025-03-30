import React from "react";

const insights = [
  "20+ Projects Completed",
  "3+ Years of Freelancing",
  "99% Client Satisfaction",
  "20K+ Subscribers",
  "Authored In-Depth Course on Educative",
  "Contributed as a Technical Course Reviewer 📝",
  "Recipient of the Hackernoon Noonies Award 🏆",
];
const InsightRoll = () => {
  return (
    <div className="w-full bg-accent dark:bg-accentDark text-light dark:text-dark whitespace-nowrap overflow-hidden">
      <div className="animate-roll w-full py-2 sm:py-3 flex items-center justify-center capitalize font-semibold tracking-wider text-sm sm:text-base">
        {insights.map((insight, index) => (
          <div key={index} className="px-4">
            {insight}
            <span className="px-4">|</span>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsightRoll;
