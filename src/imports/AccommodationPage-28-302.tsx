import svgPaths from "./svg-edsdfkxck7";

// Dummy image placeholders
const imgLogo1 = "https://via.placeholder.com/150x100/cccccc/666666?text=Logo";
const imgMain = "https://via.placeholder.com/800x500/cccccc/666666?text=Accommodation+Hero";
const img202410111 = "https://via.placeholder.com/400x300/cccccc/666666?text=Inspiration+1";
const img2024101141 = "https://via.placeholder.com/400x300/cccccc/666666?text=Inspiration+2";
const img2024101121 = "https://via.placeholder.com/400x300/cccccc/666666?text=Inspiration+3";
const img2024101131 = "https://via.placeholder.com/400x300/cccccc/666666?text=Inspiration+4";
const imgDsc050121 = "/images/fff.JPG";
const imgDsc50122 = "https://via.placeholder.com/400x300/cccccc/666666?text=Room+Detail+2";
const imgDsc50123 = "https://via.placeholder.com/400x300/cccccc/666666?text=Room+Detail+3";

function PlusCircle() {
  return (
    <div
      className="absolute left-[1197px] size-4 top-[34px]"
      data-name="plus-circle"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g clipPath="url(#clip0_1_23)" id="plus-circle">
          <path
            d={svgPaths.p228b1080}
            fill="var(--fill-0, black)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_23">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[1108px] top-[27px]">
      <div className="absolute bg-[rgba(255,255,255,0.75)] h-[30px] left-[1108px] rounded-[173px] top-[27px] w-[119px]" />
      <div className="absolute font-['Outfit:SemiBold',_sans-serif] font-semibold leading-[0] left-[1121px] text-[#000000] text-[16px] text-left top-[31px] tracking-[0.64px] w-[77px]">
        <p className="adjustLetterSpacing block leading-[normal]">Booking</p>
      </div>
      <PlusCircle />
    </div>
  );
}

function Top() {
  return (
    <div className="absolute h-[78px] left-0 top-0 w-[1280px]" data-name="top">
      <div className="absolute bg-[rgba(0,0,0,0.61)] h-[78px] left-0 shadow-[0px_8px_50px_5px_#000000] top-0 w-[1280px]" />
      <Group1 />
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[59px] left-[619px] top-2.5 w-[58.874px]"
        data-name="logo 1"
        style={{ backgroundImage: `url('${imgLogo1}')` }}
      />
      <div className="absolute font-['Outfit:SemiBold',_sans-serif] font-semibold leading-[0] left-[357px] text-[#ffffff] text-[16px] text-left text-nowrap top-8 tracking-[0.64px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          Home
        </p>
      </div>
      <div className="absolute font-['Outfit:SemiBold',_sans-serif] font-semibold leading-[0] left-[447px] text-[#ffffff] text-[16px] text-left text-nowrap top-8 tracking-[0.64px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          Accommodation
        </p>
      </div>
      <div className="absolute font-['Outfit:SemiBold',_sans-serif] font-semibold leading-[0] left-[723px] text-[#ffffff] text-[16px] text-left text-nowrap top-8 tracking-[0.64px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          Gallery
        </p>
      </div>
      <div className="absolute font-['Outfit:SemiBold',_sans-serif] font-semibold leading-[0] left-[838px] text-[#ffffff] text-[16px] text-left text-nowrap top-8 tracking-[0.64px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          About Us
        </p>
      </div>
    </div>
  );
}

function In() {
  return (
    <div className="absolute contents left-[66px] top-[30px]" data-name="in">
      <div className="absolute font-['Cormorant:SemiBold',_sans-serif] font-semibold leading-[0] left-[100px] text-[#000000] text-[20px] text-left text-nowrap top-[30px]">
        <p className="block leading-[normal] whitespace-pre">Check In</p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[0] left-[100px] text-[#000000] text-[12px] text-left text-nowrap top-[54px]">
        <p className="block leading-[normal] whitespace-pre">2025-03-16</p>
      </div>
      <div
        className="absolute bottom-[41%] left-[7.33%] right-[91.01%] top-[42%]"
        data-name="Vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 15 17"
        >
          <path
            d={svgPaths.p2b81e400}
            fill="var(--fill-0, black)"
            id="Vector"
          />
        </svg>
      </div>
      <div className="absolute flex h-[36px] items-center justify-center left-[239px] top-[30px] w-[0px]">
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-9">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 36 1"
              >
                <line
                  id="Line 1"
                  stroke="var(--stroke-0, black)"
                  x2="36"
                  y1="0.5"
                  y2="0.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Out() {
  return (
    <div className="absolute contents left-[299px] top-[27px]" data-name="out">
      <div className="absolute font-['Cormorant:SemiBold',_sans-serif] font-semibold leading-[0] left-[333px] text-[#000000] text-[20px] text-left text-nowrap top-[27px]">
        <p className="block leading-[normal] whitespace-pre">Check Out</p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[0] left-[333px] text-[#000000] text-[12px] text-left text-nowrap top-[51px]">
        <p className="block leading-[normal] whitespace-pre">2025-03-20</p>
      </div>
      <div
        className="absolute bottom-[44%] left-[33.19%] right-[65.15%] top-[39%]"
        data-name="Vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 15 17"
        >
          <path
            d={svgPaths.p2b81e400}
            fill="var(--fill-0, black)"
            id="Vector"
          />
        </svg>
      </div>
      <div className="absolute flex h-[36px] items-center justify-center left-[472px] top-[27px] w-[0px]">
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-9">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 36 1"
              >
                <line
                  id="Line 1"
                  stroke="var(--stroke-0, black)"
                  x2="36"
                  y1="0.5"
                  y2="0.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserFriends() {
  return (
    <div
      className="absolute left-[522px] size-[25px] top-[31px]"
      data-name="user-friends"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 25 25"
      >
        <g id="user-friends">
          <path d={svgPaths.p3147b80} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Guest() {
  return (
    <div className="absolute contents left-[522px] top-6" data-name="guest">
      <div className="absolute font-['Cormorant:SemiBold',_sans-serif] font-semibold leading-[0] left-[566px] text-[#000000] text-[20px] text-left text-nowrap top-6">
        <p className="block leading-[normal] whitespace-pre">Guest</p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[0] left-[566px] text-[#000000] text-[12px] text-left text-nowrap top-12">
        <p className="block leading-[normal] whitespace-pre">4 Guests</p>
      </div>
      <UserFriends />
    </div>
  );
}

function Btn() {
  return (
    <div className="absolute contents left-[747px] top-[21px]" data-name="Btn">
      <div className="absolute bg-[rgba(0,0,0,0.25)] h-[53px] left-[747px] rounded-[50px] top-[21px] w-[214px]" />
      <div className="absolute font-['Cormorant:Bold',_sans-serif] font-bold leading-[0] left-[781px] text-[#000000] text-[20px] text-left text-nowrap top-9">
        <p className="block leading-[normal] whitespace-pre">
          Check Availability
        </p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute h-[100px] left-[197px] top-[362px] w-[901px]">
      <div className="absolute bg-[#ffffff] h-[100px] left-0 rounded-[50px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[989px]" />
      <In />
      <Out />
      <Guest />
      <Btn />
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[852px] relative shrink-0 w-full">
      <div
        className="absolute bg-[0%_16.18%] bg-no-repeat bg-size-[100%_170.8%] h-[500px] left-0 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[1280.53px]"
        data-name="main"
        style={{ backgroundImage: `url('${imgMain}')` }}
      />
      <div className="[text-shadow:rgba(0,0,0,0.5)_0px_4px_2px] absolute font-['Baskervville_SC:Regular',_sans-serif] leading-[0] left-[467px] not-italic text-[#ffffff] text-[40px] text-left text-nowrap top-[250px] tracking-[6px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">{`Rooms & Rules`}</p>
      </div>
      <Top />
      <Frame3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute h-12 left-[519px] top-[1263px] w-[221px]">
      <div className="absolute font-['Outfit:Bold',_sans-serif] font-bold leading-[0] left-[-12px] text-[#000000] text-[40px] text-left text-nowrap top-0 tracking-[1.6px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          Feel Inspired
        </p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[0] left-[110px] text-[#000000] text-[20px] text-center text-nowrap top-[62px] translate-x-[-50%]">
        <p className="block leading-[normal] whitespace-pre">
          Show us how you’re enjoying your stay for a chance to be triturated on
          our website log @rukmale_gedara
          <br />
          {`Eco Resort on Instagram or upload your photo to share your experience.    `}
        </p>
      </div>
      <div
        className="absolute bg-[100.99%_0%] bg-no-repeat bg-size-[169.67%_100%] h-[401px] left-[-584px] rounded-[25px] top-[172px] w-[354.372px]"
        data-name="2024-10-11 1"
        style={{ backgroundImage: `url('${img202410111}')` }}
      />
      <div
        className="absolute bg-left bg-no-repeat bg-size-[171.21%_100.15%] h-[401px] left-[199px] rounded-[25px] top-[167px] w-[351.708px]"
        data-name="2024-10-11-4 1"
        style={{ backgroundImage: `url('${img2024101141}')` }}
      />
      <div
        className="absolute bg-[0.71%_0%] bg-no-repeat bg-size-[170.96%_100%] h-[401px] left-[-194px] rounded-[25px] top-[172px] w-[351.708px]"
        data-name="2024-10-11-2 1"
        style={{ backgroundImage: `url('${img2024101121}')` }}
      />
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[401px] left-[588px] rounded-[25px] top-[167px] w-[350.207px]"
        data-name="2024-10-11-3 1"
        style={{ backgroundImage: `url('${img2024101131}')` }}
      />
    </div>
  );
}

function Info() {
  return (
    <div
      className="absolute h-[189px] leading-[0] left-[728px] text-[#000000] text-left top-[454px] w-[356px]"
      data-name="info"
    >
      <div className="absolute font-['Outfit:SemiBold',_sans-serif] font-semibold left-0 text-[28px] top-0 tracking-[1.12px] w-[111px]">
        <p className="adjustLetterSpacing block leading-[normal]">Address</p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal left-2.5 text-[24px] top-[41px] tracking-[0.96px] w-[344px]">
        <p className="adjustLetterSpacing block leading-[normal]">
          Second Ln, Pannipitiya 10230.
        </p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal left-2.5 text-[24px] top-40 w-[405px]">
        <p className="block leading-[normal]">
          rukmalegedarabungalow@gmail.com
        </p>
      </div>
      <div className="absolute font-['Outfit:SemiBold',_sans-serif] font-semibold left-0 text-[28px] top-[87px] tracking-[1.12px] w-[109px]">
        <p className="adjustLetterSpacing block leading-[normal]">Contact</p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal left-2.5 text-[20px] top-32 tracking-[0.8px] w-[156px]">
        <p className="adjustLetterSpacing block leading-[normal]">
          +94 070 123 234
        </p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div
      className="absolute font-['Outfit:Medium',_sans-serif] font-medium h-[174px] leading-[0] left-[107px] text-[#000000] text-[28px] text-left top-[454px] tracking-[1.12px] w-[430px]"
      data-name="link"
    >
      <div className="absolute left-0 top-0 w-[79px]">
        <p className="adjustLetterSpacing block leading-[normal]">Home</p>
      </div>
      <div className="absolute left-0 top-[70px] w-[223px]">
        <p className="adjustLetterSpacing block leading-[normal]">
          Accommodation
        </p>
      </div>
      <div className="absolute left-0 top-[140px] w-[196px]">
        <p className="adjustLetterSpacing block leading-[normal]">{`Hotel & Resort`}</p>
      </div>
      <div className="absolute left-[263px] top-0 w-[188px]">
        <p className="adjustLetterSpacing block leading-[normal]">
          Photo Gallery
        </p>
      </div>
      <div className="absolute left-[263px] top-[70px] w-[124px]">
        <p className="adjustLetterSpacing block leading-[normal]">About Us</p>
      </div>
      <div className="absolute left-[263px] top-[140px] w-[150px]">
        <p className="adjustLetterSpacing block leading-[normal]">Contact Us</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute h-[141px] left-[428px] top-[233px] w-[427px]">
      <div className="absolute font-['Outfit:Medium',_sans-serif] font-medium leading-[0] left-0 text-[#000000] text-[40px] text-left text-nowrap top-[93px]">
        <p className="block leading-[normal] whitespace-pre">
          Rukmale Gedara Bungalow
        </p>
      </div>
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[84px] left-[191px] top-0 w-[83.821px]"
        data-name="logo 1"
        style={{ backgroundImage: `url('${imgLogo1}')` }}
      />
    </div>
  );
}

function Line() {
  return (
    <div
      className="absolute h-[337px] left-0 top-[405px] w-[1281px]"
      data-name="line"
    >
      <div className="absolute bottom-0 left-0 right-0 top-[-0.3%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1281 338"
        >
          <g id="line">
            <line
              id="Line 2"
              stroke="var(--stroke-0, black)"
              strokeOpacity="0.2"
              x2="1281"
              y1="0.5"
              y2="0.5"
            />
            <line
              id="Line 3"
              stroke="var(--stroke-0, black)"
              strokeOpacity="0.2"
              x1="640.5"
              x2="640.5"
              y1="1"
              y2="338"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Facebook() {
  return (
    <div className="absolute left-0 size-[25px] top-0" data-name="facebook">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 25 25"
      >
        <g clipPath="url(#clip0_1_13)" id="facebook">
          <path
            d={svgPaths.p29f54000}
            fill="var(--fill-0, black)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_13">
            <rect fill="white" height="25" width="25" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function YoutubeSquare() {
  return (
    <div
      className="absolute left-14 size-[25px] top-0"
      data-name="youtube-square"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 25 25"
      >
        <g id="youtube-square">
          <path
            d={svgPaths.p3ef92200}
            fill="var(--fill-0, black)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Instagram() {
  return (
    <div className="absolute left-28 size-[25px] top-0" data-name="instagram">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 25 25"
      >
        <g id="instagram">
          <path d={svgPaths.p99a0500} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Tripadvisor() {
  return (
    <div
      className="absolute left-[171px] size-[25px] top-0"
      data-name="tripadvisor"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 25 25"
      >
        <g clipPath="url(#clip0_1_28)" id="tripadvisor">
          <path d={svgPaths.p96f7800} fill="var(--fill-0, black)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_28">
            <rect fill="white" height="25" width="25" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div
      className="absolute h-[25px] left-[734px] top-[668px] w-[137px]"
      data-name="Icon"
    >
      <Facebook />
      <YoutubeSquare />
      <Instagram />
      <Tripadvisor />
    </div>
  );
}

function Footer() {
  return (
    <div
      className="absolute h-[743px] left-[-1px] top-[1738px] w-[1282px]"
      data-name="footer"
    >
      <Info />
      <Link />
      <Frame5 />
      <Line />
      <Icon />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents left-[187px] top-[567px]">
      <div className="absolute bg-[rgba(0,0,0,0.25)] h-[33px] left-[187px] rounded-[10px] top-[567px] w-[120px]">
        <div
          aria-hidden="true"
          className="absolute border border-[rgba(0,0,0,0.25)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_0px_10px_0px_#000000]"
        />
      </div>
      <div className="absolute font-['Outfit:Bold',_sans-serif] font-bold leading-[0] left-[213px] text-[#000000] text-[14px] text-left top-[575px] tracking-[0.56px] w-[76px]">
        <p className="adjustLetterSpacing block leading-[normal]">Book Now</p>
      </div>
    </div>
  );
}

function Family() {
  return (
    <div
      className="absolute h-[629px] left-[122px] rounded-md shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] top-[-196px] w-[495px]"
      data-name="family"
    >
      <div className="absolute bg-[rgba(217,217,217,0)] h-[629px] left-0 rounded-[25px] top-0 w-[495px]">
        <div
          aria-hidden="true"
          className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[25px] shadow-[0px_10px_25px_2px_rgba(0,0,0,0.25)]"
        />
      </div>
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[291px] left-7 rounded-[25px] shadow-[0px_4px_25px_0px_rgba(0,0,0,0.25)] top-[37px] w-[436.607px]"
        data-name="DSC05012 1"
        style={{ backgroundImage: `url('${imgDsc050121}')` }}
      />
      <div className="absolute font-['Outfit:SemiBold',_sans-serif] font-semibold leading-[0] left-[161px] text-[#000000] text-[24px] text-left text-nowrap top-[352px] tracking-[0.96px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">{`FAMILY WING `}</p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[0] left-[246.5px] text-[#000000] text-[20px] text-center top-[391px] translate-x-[-50%] w-[437px]">
        <p className="block leading-[normal]">
          Perfectly designed for families or small groups looking for comfort
          and convenience.
        </p>
      </div>
      <div className="absolute font-['Odibee_Sans:Regular',_sans-serif] leading-[0] left-[95px] not-italic text-[#000000] text-[16px] text-left text-nowrap top-[463px] tracking-[0.64px]">
        <p className="leading-[normal] whitespace-pre">
          <span className="font-['Outfit:Light',_sans-serif] font-light">{`• `}</span>
          <span className="font-['Outfit:Bold',_sans-serif] font-bold">2</span>
          <span className="font-['Outfit:Light',_sans-serif] font-light">{` Rooms (`}</span>
          <span className="font-['Outfit:Bold',_sans-serif] font-bold">2</span>
          <span className="adjustLetterSpacing font-['Outfit:Light',_sans-serif] font-light">{` dbl) `}</span>
        </p>
      </div>
      <div className="absolute font-['Odibee_Sans:Regular',_sans-serif] leading-[0] left-[267px] not-italic text-[#000000] text-[16px] text-left text-nowrap top-[463px] tracking-[0.64px]">
        <p className="leading-[normal] whitespace-pre">
          <span className="font-['Outfit:Light',_sans-serif] font-light">{`• `}</span>
          <span className="font-['Outfit:Bold',_sans-serif] font-bold">1</span>
          <span className="adjustLetterSpacing font-['Outfit:Light',_sans-serif] font-light">{` Bathroom  `}</span>
        </p>
      </div>
      <div className="absolute font-['Outfit:Light',_sans-serif] font-light leading-[0] left-[95px] text-[#000000] text-[16px] text-left text-nowrap top-[493px] tracking-[0.64px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          • A/C, Iron, Wash
        </p>
      </div>
      <div className="absolute font-['Odibee_Sans:Regular',_sans-serif] leading-[0] left-[95px] not-italic text-[#000000] text-[16px] text-left text-nowrap top-[523px] tracking-[0.64px]">
        <p className="leading-[normal] whitespace-pre">
          <span className="font-['Outfit:Light',_sans-serif] font-light">{`• LKR `}</span>
          <span className="font-['Outfit:Bold',_sans-serif] font-bold">
            18,000/
          </span>
          <span className="adjustLetterSpacing font-['Outfit:Light',_sans-serif] font-light">{`night `}</span>
        </p>
      </div>
      <div className="absolute font-['Outfit:Light',_sans-serif] font-light leading-[0] left-[95px] text-[#000000] text-[16px] text-left text-nowrap top-[493px] tracking-[0.64px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          • A/C, Iron, Wash
        </p>
      </div>
      <div className="absolute font-['Odibee_Sans:Regular',_sans-serif] leading-[0] left-[267px] not-italic text-[#000000] text-[16px] text-left text-nowrap top-[493px] tracking-[0.64px]">
        <p className="leading-[normal] whitespace-pre">
          <span className="font-['Outfit:Light',_sans-serif] font-light">{`• Sleeps up to `}</span>
          <span className="font-['Outfit:Bold',_sans-serif] font-bold">5</span>
          <span className="adjustLetterSpacing font-['Outfit:Light',_sans-serif] font-light">
            &nbsp;
          </span>
        </p>
      </div>
      <Group9 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents left-[187px] top-[567px]">
      <div className="absolute bg-[rgba(0,0,0,0.25)] h-[33px] left-[187px] rounded-[10px] top-[567px] w-[120px]">
        <div
          aria-hidden="true"
          className="absolute border border-[rgba(0,0,0,0.25)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_0px_10px_0px_#000000]"
        />
      </div>
      <div className="absolute font-['Outfit:Bold',_sans-serif] font-bold leading-[0] left-[213px] text-[#000000] text-[14px] text-left top-[575px] tracking-[0.56px] w-[76px]">
        <p className="adjustLetterSpacing block leading-[normal]">Book Now</p>
      </div>
    </div>
  );
}

function Couple() {
  return (
    <div
      className="absolute h-[629px] left-[661px] rounded-md shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] top-[-196px] w-[495px]"
      data-name="couple"
    >
      <div className="absolute bg-[rgba(217,217,217,0)] h-[629px] left-0 rounded-[25px] top-0 w-[495px]">
        <div
          aria-hidden="true"
          className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[25px] shadow-[0px_10px_25px_2px_rgba(0,0,0,0.25)]"
        />
      </div>
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[291px] left-7 rounded-[25px] shadow-[0px_4px_25px_0px_rgba(0,0,0,0.25)] top-[37px] w-[436.607px]"
        data-name="DSC05012 1"
        style={{ backgroundImage: `url('${imgDsc50122}')` }}
      />
      <div className="absolute font-['Outfit:SemiBold',_sans-serif] font-semibold leading-[0] left-[161px] text-[#000000] text-[24px] text-left text-nowrap top-[352px] tracking-[0.96px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          SERENITY WING
        </p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[0] left-[246.5px] text-[#000000] text-[20px] text-center top-[391px] translate-x-[-50%] w-[437px]">
        <p className="block leading-[normal]">
          Intimate and cozy, ideal for couples seeking a peaceful getaway.
        </p>
      </div>
      <div className="absolute font-['Odibee_Sans:Regular',_sans-serif] leading-[0] left-[95px] not-italic text-[#000000] text-[16px] text-left text-nowrap top-[463px] tracking-[0.64px]">
        <p className="leading-[normal] whitespace-pre">
          <span className="font-['Outfit:Light',_sans-serif] font-light">{`• `}</span>
          <span className="font-['Outfit:Bold',_sans-serif] font-bold">1</span>
          <span className="font-['Outfit:Light',_sans-serif] font-light">{` Rooms (`}</span>
          <span className="font-['Outfit:Bold',_sans-serif] font-bold">1</span>
          <span className="adjustLetterSpacing font-['Outfit:Light',_sans-serif] font-light">{` dbl) `}</span>
        </p>
      </div>
      <div className="absolute font-['Odibee_Sans:Regular',_sans-serif] leading-[0] left-[267px] not-italic text-[#000000] text-[16px] text-left text-nowrap top-[463px] tracking-[0.64px]">
        <p className="leading-[normal] whitespace-pre">
          <span className="font-['Outfit:Light',_sans-serif] font-light">{`• `}</span>
          <span className="font-['Outfit:Bold',_sans-serif] font-bold">1</span>
          <span className="adjustLetterSpacing font-['Outfit:Light',_sans-serif] font-light">{` Bathroom  `}</span>
        </p>
      </div>
      <div className="absolute font-['Outfit:Light',_sans-serif] font-light leading-[0] left-[95px] text-[#000000] text-[16px] text-left text-nowrap top-[493px] tracking-[0.64px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          • A/C, Iron, Wash
        </p>
      </div>
      <div className="absolute font-['Odibee_Sans:Regular',_sans-serif] leading-[0] left-[95px] not-italic text-[#000000] text-[16px] text-left text-nowrap top-[523px] tracking-[0.64px]">
        <p className="leading-[normal] whitespace-pre">
          <span className="font-['Outfit:Light',_sans-serif] font-light">{`• LKR `}</span>
          <span className="font-['Outfit:Bold',_sans-serif] font-bold">
            12,000/
          </span>
          <span className="adjustLetterSpacing font-['Outfit:Light',_sans-serif] font-light">{`night `}</span>
        </p>
      </div>
      <div className="absolute font-['Outfit:Light',_sans-serif] font-light leading-[0] left-[95px] text-[#000000] text-[16px] text-left text-nowrap top-[493px] tracking-[0.64px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          • A/C, Iron, Wash
        </p>
      </div>
      <div className="absolute font-['Odibee_Sans:Regular',_sans-serif] leading-[0] left-[267px] not-italic text-[#000000] text-[16px] text-left text-nowrap top-[493px] tracking-[0.64px]">
        <p className="leading-[normal] whitespace-pre">
          <span className="font-['Outfit:Light',_sans-serif] font-light">{`• Sleeps up to `}</span>
          <span className="font-['Outfit:Bold',_sans-serif] font-bold">2</span>
          <span className="adjustLetterSpacing font-['Outfit:Light',_sans-serif] font-light">
            &nbsp;
          </span>
        </p>
      </div>
      <Group10 />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents left-[187px] top-[591px]">
      <div className="absolute bg-[rgba(0,0,0,0.25)] h-[33px] left-[187px] rounded-[10px] top-[591px] w-[120px]">
        <div
          aria-hidden="true"
          className="absolute border border-[rgba(0,0,0,0.25)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_0px_10px_0px_#000000]"
        />
      </div>
      <div className="absolute font-['Outfit:Bold',_sans-serif] font-bold leading-[0] left-[213px] text-[#000000] text-[14px] text-left top-[599px] tracking-[0.56px] w-[76px]">
        <p className="adjustLetterSpacing block leading-[normal]">Book Now</p>
      </div>
    </div>
  );
}

function Bungolw() {
  return (
    <div
      className="absolute h-[666px] left-[379px] rounded-md shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] top-[455px] w-[495px]"
      data-name="bungolw"
    >
      <div className="absolute bg-[rgba(217,217,217,0)] h-[651px] left-[-252px] rounded-[25px] top-0 w-[1025px]">
        <div
          aria-hidden="true"
          className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[25px] shadow-[0px_10px_25px_2px_rgba(0,0,0,0.25)]"
        />
      </div>
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[291px] left-[-200px] rounded-[25px] shadow-[0px_4px_25px_0px_rgba(0,0,0,0.25)] top-[37px] w-[921px]"
        data-name="DSC05012 1"
        style={{ backgroundImage: `url('${imgDsc50123}')` }}
      />
      <div className="absolute font-['Outfit:SemiBold',_sans-serif] font-semibold leading-[0] left-[141px] text-[#000000] text-[24px] text-left text-nowrap top-[351px] tracking-[0.96px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          FULL BUNGALOW
        </p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[0] left-64 text-[#000000] text-[20px] text-center top-[391px] translate-x-[-50%] w-[456px]">
        <p className="block leading-[normal]">
          Book the entire bungalow for ultimate privacy and freedom, perfect for
          larger groups or families.
        </p>
      </div>
      <div className="absolute font-['Outfit:Light',_sans-serif] font-light leading-[0] left-[95px] text-[#000000] text-[16px] text-left text-nowrap top-[463px] tracking-[0.64px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          • Full access (all rooms + kitchen)
        </p>
      </div>
      <div className="absolute font-['Outfit:Light',_sans-serif] font-light leading-[0] left-[95px] text-[#000000] text-[16px] text-left text-nowrap top-[493px] tracking-[0.64px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          • Full kitchen, A/C, ironing, washing machine
        </p>
      </div>
      <div className="absolute font-['Outfit:Light',_sans-serif] font-light leading-[0] left-[95px] text-[#000000] text-[16px] text-left text-nowrap top-[523px] tracking-[0.64px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          • Sleeps up to 7
        </p>
      </div>
      <div className="absolute font-['Odibee_Sans:Regular',_sans-serif] leading-[0] left-[95px] not-italic text-[#000000] text-[16px] text-left text-nowrap top-[553px] tracking-[0.64px]">
        <p className="leading-[normal] whitespace-pre">
          <span className="font-['Outfit:Light',_sans-serif] font-light">{`• LKR `}</span>
          <span className="font-['Outfit:Bold',_sans-serif] font-bold">
            35,000/
          </span>
          <span className="adjustLetterSpacing font-['Outfit:Light',_sans-serif] font-light">{`night `}</span>
        </p>
      </div>
      <div className="absolute font-['Outfit:Light',_sans-serif] font-light leading-[0] left-[95px] text-[#000000] text-[16px] text-left text-nowrap top-[493px] tracking-[0.64px]">
        <ul className="css-ed5n1g">
          <li className="list-disc ms-6">
            <span className="adjustLetterSpacing leading-[normal] text-[16px]">
              &nbsp;
            </span>
          </li>
        </ul>
      </div>
      <Group11 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[4475px] relative shrink-0 w-[1281px]">
      <Frame4 />
      <Footer />
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[0] left-[638.5px] text-[#000000] text-[20px] text-center top-[-295px] translate-x-[-50%] w-[989px]">
        <p className="block leading-[normal]">
          Welcome to Ruhmake Gedara Bungalow, your luxurious home away from
          home. Choose the accommodation that best suits your needs and enjoy a
          comfortable, relaxing stay.
        </p>
      </div>
      <Family />
      <Couple />
      <Bungolw />
      <div className="absolute h-0 left-[55px] top-[1189px] w-[1167px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 1167 1"
          >
            <line
              id="Line 4"
              stroke="var(--stroke-0, black)"
              strokeOpacity="0.1"
              x2="1167"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function AccommodationPage() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start p-0 relative size-full"
      data-name="Accommodation Page"
    >
      <Frame1 />
      <Frame2 />
    </div>
  );
}