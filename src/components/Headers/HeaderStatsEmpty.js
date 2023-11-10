import React from "react";

export default function HeaderStatsEmpty() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Empty space */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <div className="your-custom-empty-space"> {/* Replace with your empty space or custom component */}
                  {/* Content for the first column */}
                </div>
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <div className="your-custom-empty-space">
                  {/* Content for the second column */}
                </div>
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <div className="your-custom-empty-space">
                  {/* Content for the third column */}
                </div>
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <div className="your-custom-empty-space">
                  {/* Content for the fourth column */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
