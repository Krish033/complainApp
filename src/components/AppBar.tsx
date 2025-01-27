import React from "react";

const AppBar = () => {
  return (
    <>
      <div className="flex items-center bg-white justify-end space-x-3 p-3">
        <div className="relative">
          <button className="focus:outline-none">
            <img
              width="35"
              height="35"
              src="https://img.icons8.com/fluency/35/appointment-reminders.png"
              alt="appointment-reminders"
            />
          </button>
        </div>
        <div className="flex items-center space-x-3">
          <img
            width="35"
            height="35"
            src="https://img.icons8.com/external-emojis-because-i-love-you-royyan-wijaya/35/external-avatar-hana-emojis-general-ii-emojis-because-i-love-you-royyan-wijaya-9.png"
            alt="external-avatar-hana-emojis-general-ii-emojis-because-i-love-you-royyan-wijaya-9"
          />
          <div className="hidden sm:block">
            <div className="text-sm font-semibold">John Doe</div>
            <div className="text-xs text-gray-400">Admin</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppBar;
