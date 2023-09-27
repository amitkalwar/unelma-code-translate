import React, { MouseEventHandler } from 'react';

import { Tooltip } from 'react-tooltip';
import ThemeButton from '@/components/ThemeButton';

interface themeBtn {
  isDark: boolean;
  toggleDarkMode: MouseEventHandler<HTMLButtonElement>;
}

const Footer: React.FC<themeBtn> = ({ isDark, toggleDarkMode }) => {
  return (
    <div
      className={`border-t-2
             border-[#2f343c]
            px-10
            py-10

             ${
               isDark
                 ? 'bg-[#131416] text-[#a1abb5] transition-all duration-300'
                 : 'bg-[#fff] text-[#6c7789] transition-all duration-300'
             }`}
    >
      <Tooltip
        id="my-tooltip"
        style={{
            height:"26px",
            width:"auto",
            backgroundColor: isDark ? 'white' : 'black',
            color: isDark ? 'black' : 'white',
            fontSize: '14px',
            display: 'flex',
    justifyContent: 'center',
    alignItems: 'center' 
          }}
      />

<Tooltip
        id="theme"
        style={{
            height:"30px",
            width:'auto',
            backgroundColor: isDark ? 'white' : 'black',
            color: isDark ? 'black' : 'white',
            fontSize: '14px',
            display: 'flex',
    justifyContent: 'center',
    alignItems: 'center' 
          }}
          />
      <div className="mb-3 block sm:flex sm:justify-between ">
        <div>
          <a
            className=" cursor-pointer  text-xl font-medium hover:underline"
            href="https://u16p.com/"
          >
            <span className="mb-2">U16P</span>
          </a>
          <div className="text-base">Copyright © 2023 U16P.</div>
        </div>

        <div className="mb-2" data-tooltip-id="theme"
            data-tooltip-content={isDark ? 'Switch to Dark Mode' : 'Switch to Light Mode'}>
            
          <ThemeButton
            isDark={isDark}
            toggleDarkMode={toggleDarkMode}
            
          />
        </div>
      </div>

      <div className="row-auto block justify-between text-base sm:mt-4 sm:flex">
        <div className=" ">
          <ul className="m-0 flex flex-wrap">
            <li className="mb-2 mr-4 cursor-pointer hover:underline">
              <a href="https://u16p.com/affiliate">Affiliate</a>
            </li>
            <li className="mb-2 cursor-pointer hover:underline">
              <a href="https://unelmaplatforms.com" target="_blank">
                Powered by Unelma Platforms
              </a>
            </li>
          </ul>
        </div>

        <div className="mb-2 flex flex-wrap gap-2">
          <a
            href="https://facebook.com/unelmaplatforms"
            target="_blank"
            data-tooltip-content="Facebook"
            data-tooltip-id="my-tooltip"
            title=""
          >
            <svg
              width="24"
              height="20"
              viewBox="0 0 512 512"
              aria-hidden="true"
              focusable="false"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
              ></path>
            </svg>{' '}
            <i></i>
          </a>
          <a
            href="https://twitter.com/unelmaplatforms"
            target="_blank"
            data-tooltip-content="Twitter"
            data-tooltip-id="my-tooltip"
          >
            <svg
              width="24"
              height="20"
              viewBox="0 0 512 512"
              aria-hidden="true"
              focusable="false"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
              ></path>
            </svg>{' '}
            <i></i>
          </a>
          <a
            href="https://linkedin.com/company/unelma-platforms"
            target="_blank"
            data-tooltip-content="Linkedin"
            data-tooltip-id="my-tooltip"
          >
            <svg
              width="24"
              height="20"
              viewBox="0 0 512 512"
              aria-hidden="true"
              focusable="false"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
              ></path>
            </svg>{' '}
            <i></i>
          </a>
          <a
            href="https://wa.me/+9779849529607"
            target="_blank"
            data-tooltip-content="Whatsapp"
            data-tooltip-id="my-tooltip"
          >
            <svg
              width="24"
              height="20"
              viewBox="0 0 512 512"
              aria-hidden="true"
              focusable="false"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
              ></path>
            </svg>{' '}
            <i></i>
          </a>
          <a
            href="mailto:info@unelmaplatforms.com"
            target="_blank"
            data-tooltip-content="Email"
            data-tooltip-id="my-tooltip"
          >
            <svg
              width="24"
              height="20"
              viewBox="0 0 512 512"
              aria-hidden="true"
              focusable="false"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
              ></path>
            </svg>{' '}
            <i></i>
          </a>
        </div>
      </div>
      <div className="d-inline play-store-badge mt-4 ">
        <a href="https://play.google.com/store/apps/details?id=com.unelma.u16p">
          <img
            src="https://unelmapay.com.np/assets/sample/google-store.png"
            className=" ml-auto mr-auto block  h-12"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
