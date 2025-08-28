import svgPaths from "./svg-4u3mehqz72";

// Dummy image placeholders
const imgLogo1 = "/images/imgLogo1.png";
const imgMain2 = "https://via.placeholder.com/800x600/cccccc/666666?text=Main+Hero";
const imgIntro1 = "https://via.placeholder.com/600x400/cccccc/666666?text=Intro+Image";
const imgImg11 = "https://via.placeholder.com/400x300/cccccc/666666?text=Room+Image+1";
const imgImg12 = "https://via.placeholder.com/400x300/cccccc/666666?text=Room+Image+2";
const imgImg2 = "https://via.placeholder.com/400x300/cccccc/666666?text=Room+Image+3";
const img202410111 = "https://via.placeholder.com/400x300/cccccc/666666?text=Gallery+Image+1";
const img2024101141 = "https://via.placeholder.com/400x300/cccccc/666666?text=Gallery+Image+2";
const img2024101121 = "https://via.placeholder.com/400x300/cccccc/666666?text=Gallery+Image+3";
const img2024101131 = "https://via.placeholder.com/400x300/cccccc/666666?text=Gallery+Image+4";

function Group3() {
  return (
    <div className="absolute contents leading-[0] left-[299px] text-[#ffffff] text-left text-nowrap top-[417px]">
      <div className="[text-shadow:rgba(0,0,0,0.5)_0px_4px_2px] absolute font-['Baskervville_SC:Regular',_sans-serif] left-[299px] not-italic text-[40px] top-[417px] tracking-[6px]">
        <p className="adjustLetterSpacing block leading-[normal] text-nowrap whitespace-pre">
          Experience Nature in Luxury
        </p>
      </div>
      <div className="absolute font-['Outfit:Light',_sans-serif] font-light left-[609px] text-[8px] top-[426px] tracking-[4.16px]">
        <p className="adjustLetterSpacing block leading-[normal] text-nowrap whitespace-pre">
          OTES OF NIRVANA
        </p>
      </div>
    </div>
  );
}

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
      <div className="absolute font-['Outfit:SemiBold',_sans-serif] font-semibold leading-[0] left-[826px] text-[#ffffff] text-[16px] text-left text-nowrap top-8 tracking-[0.64px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          About Us
        </p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[852px] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-full">
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[854px] left-0 top-0 w-[1280.53px]"
        data-name="main 2"
        style={{ backgroundImage: `url('${imgMain2}')` }}
      />
      <Group3 />
      <Top />
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
        className="absolute bottom-[41%] left-[7.325%] right-[91.01%] top-[42%]"
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
        className="absolute bottom-[44%] left-[33.185%] right-[65.15%] top-[39%]"
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
    <div className="absolute h-[100px] left-[168px] top-[-50px] w-[901px]">
      <div className="absolute bg-[#ffffff] h-[100px] left-0 rounded-[50px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[989px]" />
      <In />
      <Out />
      <Guest />
      <Btn />
    </div>
  );
}

function Intro() {
  return (
    <div
      className="absolute h-[796px] left-[253px] top-[90px] w-[816px]"
      data-name="intro"
    >
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[normal] left-[408.5px] text-[#000000] text-[20px] text-center text-nowrap top-[11px] translate-x-[-50%] whitespace-pre">
        <p className="block mb-0">{`A lifestyle revolution for a `}</p>
        <p className="block">sustainable fulfilling future</p>
      </div>
      <div
        className="absolute bg-[0.1%_48.19%] bg-no-repeat bg-size-[112.17%_140.19%] h-[413px] left-[21px] rounded-[10px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] top-[101px] w-[774px]"
        data-name="intro 1"
        style={{ backgroundImage: `url('${imgIntro1}')` }}
      />
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[normal] left-[397.5px] text-[#000000] text-[20px] text-center top-[556px] translate-x-[-50%] w-[901px]">
        <p className="block mb-0">
          Welcome to Rukmale Gedara Bungalow Resort, where sustainable and
          luxury come together to create an unforgettable escape. Nested in the
          heat of pristine nature landscape.
        </p>
        <p className="block mb-0">&nbsp;</p>
        <p className="block">
          our resort is designed to harmonize with the environment while
          offering you a truly indulgent experience. From our solar-powered
          villa and eco-friendly amenities to organic farm-to-table dinning.
          every detail reflects our commitment to sustainability.
        </p>
      </div>
    </div>
  );
}

function Btn1() {
  return (
    <div className="absolute contents left-[152px] top-[376px]" data-name="btn">
      <div className="absolute bg-[rgba(0,0,0,0.25)] h-[46px] left-[152px] rounded-[50px] top-[376px] w-[254px]" />
      <div className="absolute font-['Outfit:SemiBold',_sans-serif] font-semibold leading-[0] left-[175px] text-[#000000] text-[16px] text-left text-nowrap top-[389px] tracking-[0.64px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          BOOK YOUR ROOM
        </p>
      </div>
      <div className="absolute h-0 left-[338px] top-[399px] w-10">
        <div className="absolute bottom-[-3.682px] left-0 right-[-1.25%] top-[-3.682px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 41 8"
          >
            <path
              d={svgPaths.p17d56600}
              fill="var(--stroke-0, black)"
              id="Arrow 1"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Info() {
  return (
    <div
      className="absolute contents left-[152px] top-[184px]"
      data-name="info"
    >
      <div className="absolute font-['Outfit:SemiBold',_sans-serif] font-semibold leading-[0] left-[152px] text-[#000000] text-[24px] text-left text-nowrap top-[184px] tracking-[0.96px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          SERENITY WING
        </p>
      </div>
      <div className="absolute font-['Outfit:Light',_sans-serif] font-light leading-[normal] left-[152px] text-[#000000] text-[16px] text-left text-nowrap top-[214px] tracking-[0.64px] whitespace-pre">
        <p className="adjustLetterSpacing block mb-0">{`Intimate and cozy, ideal for couples seeking `}</p>
        <p className="adjustLetterSpacing block">a peaceful getaway.</p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[0] left-[164px] text-[#000000] text-[16px] text-left text-nowrap top-[289px] tracking-[0.64px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          A/C, Iron, Washing machine
        </p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[0] left-[164px] text-[#000000] text-[16px] text-left text-nowrap top-[263px] tracking-[0.64px]">
        <p className="leading-[normal] whitespace-pre">
          <span className="font-['Outfit:Bold',_sans-serif] font-bold">1</span>
          <span>{` Room (`}</span>
          <span className="font-['Outfit:Bold',_sans-serif] font-bold">1</span>
          <span className="adjustLetterSpacing">{` double bed)`}</span>
        </p>
      </div>
      <div className="absolute font-['Outfit:Bold',_sans-serif] font-bold leading-[0] left-[164px] text-[#000000] text-[16px] text-left text-nowrap top-[340px] tracking-[0.64px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          LKR 12,000 / night
        </p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[0] left-[164px] text-[#000000] text-[16px] text-left text-nowrap top-[314px] tracking-[0.64px]">
        <p className="leading-[normal] whitespace-pre">
          <span>{`Sleeps up to `}</span>
          <span className="adjustLetterSpacing font-['Outfit:Bold',_sans-serif] font-bold">
            2
          </span>
        </p>
      </div>
      <Btn1 />
    </div>
  );
}

function Section() {
  return (
    <div
      className="absolute contents left-[-356px] top-[153px]"
      data-name="section"
    >
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-80 left-[-356px] rounded-br-[50px] rounded-tl-[50px] top-[153px] w-[479.824px]"
        data-name="img1 1"
        style={{ backgroundImage: `url('${imgImg11}')` }}
      />
      <div className="absolute h-80 left-[-356px] rounded-br-[50px] rounded-tl-[50px] top-[153px] w-[993px]">
        <div className="absolute border border-[rgba(0,0,0,0.25)] border-solid inset-0 pointer-events-none rounded-br-[50px] rounded-tl-[50px] shadow-[0px_0px_10px_4px_rgba(0,0,0,0.25)]" />
      </div>
      <Info />
    </div>
  );
}

function Btn2() {
  return (
    <div
      className="absolute contents left-[152px] top-[1106px]"
      data-name="btn"
    >
      <div className="absolute bg-[rgba(0,0,0,0.25)] h-[46px] left-[152px] rounded-[50px] top-[1106px] w-[299px]" />
      <div className="absolute font-['Outfit:SemiBold',_sans-serif] font-semibold leading-[0] left-[175px] text-[#000000] text-[16px] text-left text-nowrap top-[1119px] tracking-[0.64px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          BOOK YOUR BUNGALOW
        </p>
      </div>
      <div className="absolute h-0 left-[387px] top-[1129px] w-10">
        <div className="absolute bottom-[-3.682px] left-0 right-[-1.25%] top-[-3.682px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 41 8"
          >
            <path
              d={svgPaths.p17d56600}
              fill="var(--stroke-0, black)"
              id="Arrow 1"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Info1() {
  return (
    <div
      className="absolute contents left-[152px] top-[914px]"
      data-name="info"
    >
      <div className="absolute font-['Outfit:SemiBold',_sans-serif] font-semibold leading-[0] left-[152px] text-[#000000] text-[24px] text-left text-nowrap top-[914px] tracking-[0.96px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          FULL BUNGALOW
        </p>
      </div>
      <div className="absolute font-['Outfit:Light',_sans-serif] font-light leading-[normal] left-[152px] text-[#000000] text-[16px] text-left text-nowrap top-[944px] tracking-[0.64px] whitespace-pre">
        <p className="adjustLetterSpacing block mb-0">{`Book the entire bungalow for ultimate privacy and `}</p>
        <p className="adjustLetterSpacing block">
          freedom—perfect for larger groups or families.
        </p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[0] left-[164px] text-[#000000] text-[16px] text-left text-nowrap top-[1019px] tracking-[0.64px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          Fully equipped kitchen, A/C, Ironing, Washing machine
        </p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[0] left-[164px] text-[#000000] text-[16px] text-left text-nowrap top-[993px] tracking-[0.64px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          Full access (all rooms + kitchen)
        </p>
      </div>
      <div className="absolute font-['Outfit:Bold',_sans-serif] font-bold leading-[0] left-[164px] text-[#000000] text-[16px] text-left text-nowrap top-[1070px] tracking-[0.64px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          LKR 35,000 / night
        </p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[0] left-[164px] text-[#000000] text-[16px] text-left text-nowrap top-[1044px] tracking-[0.64px]">
        <p className="leading-[normal] whitespace-pre">
          <span>{`Sleeps up to `}</span>
          <span className="adjustLetterSpacing font-['Outfit:Bold',_sans-serif] font-bold">
            7
          </span>
        </p>
      </div>
      <Btn2 />
    </div>
  );
}

function Section1() {
  return (
    <div
      className="absolute contents left-[-356px] top-[883px]"
      data-name="section"
    >
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-80 left-[-356px] rounded-br-[50px] rounded-tl-[50px] top-[883px] w-[479.824px]"
        data-name="img1 1"
        style={{ backgroundImage: `url('${imgImg12}')` }}
      />
      <div className="absolute h-80 left-[-356px] rounded-br-[50px] rounded-tl-[50px] top-[883px] w-[993px]">
        <div className="absolute border border-[rgba(0,0,0,0.25)] border-solid inset-0 pointer-events-none rounded-br-[50px] rounded-tl-[50px] shadow-[0px_0px_10px_4px_rgba(0,0,0,0.25)]" />
      </div>
      <Info1 />
    </div>
  );
}

function Btn3() {
  return (
    <div
      className="absolute contents left-[-320px] top-[750px]"
      data-name="btn"
    >
      <div className="absolute bg-[rgba(0,0,0,0.25)] h-[46px] left-[-320px] rounded-[50px] top-[750px] w-[254px]" />
      <div className="absolute font-['Outfit:SemiBold',_sans-serif] font-semibold leading-[0] left-[-297px] text-[#000000] text-[16px] text-left text-nowrap top-[763px] tracking-[0.64px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          BOOK YOUR ROOM
        </p>
      </div>
      <div className="absolute h-0 left-[-134px] top-[773px] w-10">
        <div className="absolute bottom-[-3.682px] left-0 right-[-1.25%] top-[-3.682px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 41 8"
          >
            <path
              d={svgPaths.p17d56600}
              fill="var(--stroke-0, black)"
              id="Arrow 1"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Info2() {
  return (
    <div
      className="absolute contents left-[-320px] top-[558px]"
      data-name="info"
    >
      <div className="absolute font-['Outfit:SemiBold',_sans-serif] font-semibold leading-[0] left-[-320px] text-[#000000] text-[24px] text-left text-nowrap top-[558px] tracking-[0.96px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          FAMILY WING
        </p>
      </div>
      <div className="absolute font-['Outfit:Light',_sans-serif] font-light leading-[normal] left-[-320px] text-[#000000] text-[16px] text-left text-nowrap top-[588px] tracking-[0.64px] whitespace-pre">
        <p className="adjustLetterSpacing block mb-0">{`Perfectly designed for families or small groups looking `}</p>
        <p className="adjustLetterSpacing block">
          for comfort and convenience.
        </p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[0] left-[-308px] text-[#000000] text-[16px] text-left text-nowrap top-[663px] tracking-[0.64px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          A/C, Iron, Washing machine
        </p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[0] left-[-308px] text-[#000000] text-[16px] text-left text-nowrap top-[637px] tracking-[0.64px]">
        <p className="leading-[normal] whitespace-pre">
          <span className="font-['Outfit:Bold',_sans-serif] font-bold">2</span>
          <span>{` Room (`}</span>
          <span className="font-['Outfit:Bold',_sans-serif] font-bold">2</span>
          <span className="adjustLetterSpacing">{` double bed)`}</span>
        </p>
      </div>
      <div className="absolute font-['Outfit:Bold',_sans-serif] font-bold leading-[0] left-[-308px] text-[#000000] text-[16px] text-left text-nowrap top-[714px] tracking-[0.64px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          LKR 18,000 / night
        </p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[0] left-[-308px] text-[#000000] text-[16px] text-left text-nowrap top-[688px] tracking-[0.64px]">
        <p className="leading-[normal] whitespace-pre">
          <span>{`Sleeps up to `}</span>
          <span className="adjustLetterSpacing font-['Outfit:Bold',_sans-serif] font-bold">
            5
          </span>
        </p>
      </div>
      <Btn3 />
    </div>
  );
}

function Section2() {
  return (
    <div
      className="absolute contents left-[-356px] top-[518px]"
      data-name="section"
    >
      <div className="absolute flex h-80 items-center justify-center left-[157px] top-[518px] w-[479.824px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div
            className="bg-center bg-cover bg-no-repeat h-80 rounded-br-[50px] rounded-tl-[50px] w-[479.824px]"
            data-name="img2"
            style={{ backgroundImage: `url('${imgImg2}')` }}
          />
        </div>
      </div>
      <div className="absolute flex h-80 items-center justify-center left-[-356px] top-[518px] w-[993px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-80 relative rounded-br-[50px] rounded-tl-[50px] w-[993px]">
            <div className="absolute border border-[rgba(0,0,0,0.25)] border-solid inset-0 pointer-events-none rounded-br-[50px] rounded-tl-[50px] shadow-[0px_0px_10px_4px_rgba(0,0,0,0.25)]" />
          </div>
        </div>
      </div>
      <Info2 />
    </div>
  );
}

function Rooms() {
  return (
    <div
      className="absolute h-[62px] left-[524px] top-[837px] w-[232px]"
      data-name="rooms"
    >
      <Section />
      <Section1 />
      <Section2 />
      <div className="absolute font-['Outfit:Bold',_sans-serif] font-bold leading-[0] left-0 text-[#000000] text-[40px] text-left text-nowrap top-[31px] tracking-[1.6px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          Our Rooms
        </p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[0] left-[116px] text-[#000000] text-[20px] text-center text-nowrap top-[89px] translate-x-[-50%]">
        <p className="block leading-[normal] whitespace-pre">
          Discover our selection of inviting accommodations, designed for your
          comfort and relaxation.
        </p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute h-12 left-[519px] top-[2105px] w-[221px]">
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

function Info3() {
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
      <div className="absolute bottom-0 left-0 right-0 top-[-0.297%]">
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
      className="absolute h-[743px] left-[-1px] top-[2580px] w-[1282px]"
      data-name="footer"
    >
      <Info3 />
      <Link />
      <Frame5 />
      <Line />
      <Icon />
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[3323px] relative shrink-0 w-[1281px]">
      <Frame3 />
      <Intro />
      <Rooms />
      <Frame4 />
      <Footer />
    </div>
  );
}

export default function LandingPage() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start p-0 relative size-full"
      data-name="Landing Page"
    >
      <Frame1 />
      <Frame2 />
    </div>
  );
}