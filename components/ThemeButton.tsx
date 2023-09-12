import React, { MouseEventHandler } from 'react';
import { IoIosMoon, IoIosPartlySunny } from 'react-icons/io';

interface themeBtn {
    isDark:boolean;
    toggleDarkMode: MouseEventHandler<HTMLButtonElement>;

}

const ThemeButton: React.FC<themeBtn>  = ({isDark,toggleDarkMode}) => {

  return (
    <div className={`bg-${isDark ? 'black' : 'white'} text-${isDark ? 'white' : 'black'} transition-all duration-300 mt-6`}>
      <div className="flex items-center justify-center">
        <button
          onClick={toggleDarkMode}
          className={`rounded-full p- ${isDark ? '' : ''} hover:bg-${isDark ? 'yellow-400' : 'gray-600'}`}
        >
          {isDark ? (
            <IoIosMoon color='yellow' fontSize={40}/>
              
          ) : (
            <IoIosPartlySunny fontSize={40}/>
              
          )}
        </button>
      </div>
    </div>
  );
};

export default ThemeButton;
