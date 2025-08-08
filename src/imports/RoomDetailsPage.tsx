import svgPaths from "./svg-6zn9x4s6db";

// Dummy image placeholders
const imgLogo1 = "https://via.placeholder.com/150x100/cccccc/666666?text=Logo";
const imgMain = "https://via.placeholder.com/800x500/cccccc/666666?text=Room+Hero";
const imgRectangle18 = "https://via.placeholder.com/400x300/cccccc/666666?text=Gallery+1";
const imgRectangle19 = "https://via.placeholder.com/400x300/cccccc/666666?text=Gallery+2";
const imgRectangle20 = "https://via.placeholder.com/400x300/cccccc/666666?text=Gallery+3";
const imgRectangle21 = "https://via.placeholder.com/400x300/cccccc/666666?text=Gallery+4";
const imgRectangle22 = "https://via.placeholder.com/400x300/cccccc/666666?text=Gallery+5";
const imgRectangle23 = "https://via.placeholder.com/400x300/cccccc/666666?text=Gallery+6";
const imgRectangle24 = "https://via.placeholder.com/400x300/cccccc/666666?text=Gallery+7";
const imgRectangle25 = "https://via.placeholder.com/400x300/cccccc/666666?text=Gallery+8";
const imgRectangle26 = "https://via.placeholder.com/400x300/cccccc/666666?text=Gallery+9";
const imgRectangle27 = "https://via.placeholder.com/400x300/cccccc/666666?text=Gallery+10";
const imgRectangle28 = "https://via.placeholder.com/400x300/cccccc/666666?text=Gallery+11";
const imgRectangle29 = "https://via.placeholder.com/400x300/cccccc/666666?text=Gallery+12";
const imgRectangle30 = "https://via.placeholder.com/400x300/cccccc/666666?text=Gallery+13";
const imgRectangle31 = "https://via.placeholder.com/400x300/cccccc/666666?text=Gallery+14";
const imgRectangle32 = "https://via.placeholder.com/400x300/cccccc/666666?text=Gallery+15";
const imgRectangle33 = "https://via.placeholder.com/400x300/cccccc/666666?text=Gallery+16";
const imgRectangle34 = "https://via.placeholder.com/400x300/cccccc/666666?text=Gallery+17";
const imgRectangle35 = "https://via.placeholder.com/400x300/cccccc/666666?text=Gallery+18";
const imgRectangle36 = "https://via.placeholder.com/400x300/cccccc/666666?text=Gallery+19";
const imgRectangle37 = "https://via.placeholder.com/400x300/cccccc/666666?text=Gallery+20";
const imgRectangle38 = "https://via.placeholder.com/400x300/cccccc/666666?text=Gallery+21";

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
    <div className="h-[500px] relative shrink-0 w-full">
      <div
        className="absolute bg-[0%_16.18%] bg-no-repeat bg-size-[100%_170.8%] h-[500px] left-0 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[1280.53px]"
        data-name="main"
        style={{ backgroundImage: `url('${imgMain}')` }}
      />
      <div className="[text-shadow:rgba(0,0,0,0.5)_0px_4px_2px] absolute font-['Baskervville_SC:Regular',_sans-serif] leading-[0] left-[368px] not-italic text-[#ffffff] text-[40px] text-left text-nowrap top-[250px] tracking-[6px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          Explore The Bungalow
        </p>
      </div>
      <Top />
      <Frame3 />
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
      className="absolute h-[743px] left-[-1px] top-[6995px] w-[1282px]"
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

function Kitchen() {
  return (
    <div
      className="absolute h-[122px] left-[117px] top-[173px] w-[146px]"
      data-name="kitchen"
    >
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-24 left-0 rounded-[10px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[146px]"
        style={{ backgroundImage: `url('${imgRectangle18}')` }}
      />
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[0] left-[33px] text-[#000000] text-[16px] text-left text-nowrap top-[102px]">
        <p className="block leading-[normal] whitespace-pre">Full kitchen</p>
      </div>
    </div>
  );
}

function Kitchen1() {
  return (
    <div
      className="absolute h-[122px] left-[117px] top-[344px] w-[146px]"
      data-name="kitchen"
    >
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-24 left-0 rounded-[10px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[146px]"
        style={{ backgroundImage: `url('${imgRectangle19}')` }}
      />
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[0] left-[13px] text-[#000000] text-[16px] text-left text-nowrap top-[102px]">
        <p className="block leading-[normal] whitespace-pre">
          Full bathroom 02
        </p>
      </div>
    </div>
  );
}

function Kitchen2() {
  return (
    <div
      className="absolute h-[122px] left-[339px] top-[344px] w-[146px]"
      data-name="kitchen"
    >
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-24 left-0 rounded-[10px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[146px]"
        style={{ backgroundImage: `url('${imgRectangle20}')` }}
      />
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[0] left-11 text-[#000000] text-[16px] text-left text-nowrap top-[102px]">
        <p className="block leading-[normal] whitespace-pre">Exterior</p>
      </div>
    </div>
  );
}

function Dining() {
  return (
    <div
      className="absolute h-[122px] left-[339px] top-[173px] w-[146px]"
      data-name="dining"
    >
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-24 left-0 rounded-[10px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[146px]"
        style={{ backgroundImage: `url('${imgRectangle21}')` }}
      />
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[0] left-[31px] text-[#000000] text-[16px] text-left text-nowrap top-[102px]">
        <p className="block leading-[normal] whitespace-pre">Dining area</p>
      </div>
    </div>
  );
}

function Bed01() {
  return (
    <div
      className="absolute h-[122px] left-[561px] top-[173px] w-[146px]"
      data-name="bed01"
    >
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-24 left-0 rounded-[10px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[146px]"
        style={{ backgroundImage: `url('${imgRectangle22}')` }}
      />
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[0] left-[31px] text-[#000000] text-[16px] text-left text-nowrap top-[102px]">
        <p className="block leading-[normal] whitespace-pre">Bedroom 01</p>
      </div>
    </div>
  );
}

function Bed2() {
  return (
    <div
      className="absolute h-[122px] left-[1005px] top-[173px] w-[146px]"
      data-name="bed01"
    >
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-24 left-0 rounded-[10px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[146px]"
        style={{ backgroundImage: `url('${imgRectangle23}')` }}
      />
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[0] left-[13px] text-[#000000] text-[16px] text-left text-nowrap top-[102px]">
        <p className="block leading-[normal] whitespace-pre">
          Full bathroom 01
        </p>
      </div>
    </div>
  );
}

function Bed3() {
  return (
    <div
      className="absolute h-[122px] left-[785px] top-[173px] w-[146px]"
      data-name="bed01"
    >
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-24 left-0 rounded-[10px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[146px]"
        style={{ backgroundImage: `url('${imgRectangle24}')` }}
      />
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[0] left-[31px] text-[#000000] text-[16px] text-left text-nowrap top-[102px]">
        <p className="block leading-[normal] whitespace-pre">Bedroom 02</p>
      </div>
    </div>
  );
}

function PhotoTour() {
  return (
    <div
      className="absolute contents left-[117px] top-[74px]"
      data-name="photo tour"
    >
      <div className="absolute font-['Outfit:Bold',_sans-serif] font-bold leading-[0] left-[117px] text-[#000000] text-[40px] text-left text-nowrap top-[74px] tracking-[4px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          PHOTO TOUR
        </p>
      </div>
      <Kitchen />
      <Kitchen1 />
      <Kitchen2 />
      <Dining />
      <Bed01 />
      <Bed2 />
      <Bed3 />
    </div>
  );
}

function Kitchen3() {
  return (
    <div
      className="absolute contents left-[55px] top-[553px]"
      data-name="kitchen"
    >
      <div className="absolute font-['Outfit:Bold',_sans-serif] font-bold leading-[0] left-[117px] text-[#000000] text-[22px] text-left text-nowrap top-[553px] tracking-[2.2px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          Full Kitchen
        </p>
      </div>
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[245px] left-[412px] rounded-[3px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[553px] w-[366px]"
        style={{ backgroundImage: `url('${imgRectangle18}')` }}
      />
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[245px] left-[785px] rounded-[3px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[553px] w-[366px]"
        style={{ backgroundImage: `url('${imgRectangle25}')` }}
      />
      <div className="absolute h-0 left-[55px] top-[831px] w-[1167px]">
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

function DiningArea() {
  return (
    <div
      className="absolute contents left-[55px] top-[861px]"
      data-name="dining area"
    >
      <div className="absolute font-['Outfit:Bold',_sans-serif] font-bold leading-[0] left-[117px] text-[#000000] text-[22px] text-left text-nowrap top-[861px] tracking-[2.2px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          Dining Area
        </p>
      </div>
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[245px] left-[412px] rounded-[3px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[1366px] w-[366px]"
        style={{ backgroundImage: `url('${imgMain}')` }}
      />
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[496px] left-[412px] rounded-[3px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[861px] w-[739px]"
        style={{ backgroundImage: `url('${imgRectangle21}')` }}
      />
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[245px] left-[785px] rounded-[3px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[1366px] w-[366px]"
        style={{ backgroundImage: `url('${imgRectangle26}')` }}
      />
      <div className="absolute h-0 left-[55px] top-[1644px] w-[1167px]">
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

function Infor() {
  return (
    <div
      className="absolute h-[214px] leading-[0] left-[117px] text-left text-nowrap top-[4821px] w-52"
      data-name="infor"
    >
      <div className="absolute font-['Outfit:Bold',_sans-serif] font-bold left-0 text-[#000000] text-[22px] top-0 tracking-[2.2px]">
        <p className="adjustLetterSpacing block leading-[normal] text-nowrap whitespace-pre">
          Full bathroom 01
        </p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal left-0 text-[#6a6a6a] text-[16px] top-7 tracking-[0.64px]">
        <p className="adjustLetterSpacing block leading-[normal] text-nowrap whitespace-pre">{`•  Body soap`}</p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal left-0 text-[#6a6a6a] text-[16px] top-[55px] tracking-[0.64px]">
        <p className="adjustLetterSpacing block leading-[normal] text-nowrap whitespace-pre">{`•  Cleaning products`}</p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal left-0 text-[#6a6a6a] text-[16px] top-[82px] tracking-[0.64px]">
        <p className="adjustLetterSpacing block leading-[normal] text-nowrap whitespace-pre">{`•  Conditioner`}</p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal left-0 text-[#6a6a6a] text-[16px] top-[109px] tracking-[0.64px]">
        <p className="adjustLetterSpacing block leading-[normal] text-nowrap whitespace-pre">{`•  Hair dryer`}</p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal left-0 text-[#6a6a6a] text-[16px] top-[136px] tracking-[0.64px]">
        <p className="adjustLetterSpacing block leading-[normal] text-nowrap whitespace-pre">{`•  Hot water `}</p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal left-0 text-[#6a6a6a] text-[16px] top-[163px] tracking-[0.64px]">
        <p className="adjustLetterSpacing block leading-[normal] text-nowrap whitespace-pre">{`•  Shampoo`}</p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal left-0 text-[#6a6a6a] text-[16px] top-[190px] tracking-[0.64px]">
        <p className="adjustLetterSpacing block leading-[normal] text-nowrap whitespace-pre">{`•  Shower gel`}</p>
      </div>
    </div>
  );
}

function Bathroom01() {
  return (
    <div
      className="absolute contents left-[55px] top-[4821px]"
      data-name="bathroom 01"
    >
      <Infor />
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[245px] left-[412px] rounded-[3px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[5326px] w-[366px]"
        style={{ backgroundImage: `url('${imgRectangle19}')` }}
      />
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[496px] left-[412px] rounded-[3px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[4821px] w-[739px]"
        style={{ backgroundImage: `url('${imgRectangle27}')` }}
      />
      <div
        className="absolute bg-no-repeat bg-size-[100.4%_100%] bg-top h-[245px] left-[785px] rounded-[3px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[5326px] w-[366px]"
        style={{ backgroundImage: `url('${imgRectangle28}')` }}
      />
      <div className="absolute h-0 left-[55px] top-[5604px] w-[1167px]">
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

function Group9() {
  return (
    <div className="absolute contents left-0 top-[308px]">
      <div className="absolute bg-[rgba(0,0,0,0.25)] h-[33px] left-0 rounded-[10px] top-[308px] w-[282px]">
        <div
          aria-hidden="true"
          className="absolute border border-[rgba(0,0,0,0.25)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_0px_10px_0px_#000000]"
        />
      </div>
      <div className="absolute font-['Outfit:Bold',_sans-serif] font-bold leading-[0] left-[52px] text-[#000000] text-[14px] text-left top-[316px] tracking-[0.56px] w-[178.6px]">
        <p className="adjustLetterSpacing block leading-[normal]">
          Reserve your couple wing
        </p>
      </div>
    </div>
  );
}

function Infor1() {
  return (
    <div
      className="absolute h-[341px] left-[117px] top-[1676px] w-[291px]"
      data-name="infor"
    >
      <div className="absolute font-['Outfit:Bold',_sans-serif] font-bold leading-[0] left-0 text-[#000000] text-[22px] text-left text-nowrap top-0 tracking-[2.2px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          Bedroom 01
        </p>
      </div>
      <div className="absolute font-['Outfit:Medium',_sans-serif] font-medium leading-[0] left-[147px] text-[#000000] text-[20px] text-left text-nowrap top-0.5 tracking-[0.8px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          (Couple Wing)
        </p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[0] left-0 text-[#6a6a6a] text-[16px] text-left top-[35px] w-[291px]">
        <p className="block leading-[normal]">
          Intimate and cozy, ideal for couples seeking a peaceful getaway.
        </p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[0] left-0 text-[#6a6a6a] text-[16px] text-left text-nowrap top-[82px] tracking-[0.64px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          • Double bed
        </p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[0] left-0 text-[#6a6a6a] text-[16px] text-left text-nowrap top-[109px] tracking-[0.64px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">{`•  Bathroom 01`}</p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[0] left-0 text-[#6a6a6a] text-[16px] text-left text-nowrap top-[136px] tracking-[0.64px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">{`•  Air conditioning`}</p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[0] left-0 text-[#6a6a6a] text-[16px] text-left text-nowrap top-[163px] tracking-[0.64px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">{`•  Iron`}</p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[0] left-0 text-[#6a6a6a] text-[16px] text-left text-nowrap top-[190px] tracking-[0.64px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">{`•  Clothing storage`}</p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[0] left-0 text-[#6a6a6a] text-[16px] text-left text-nowrap top-[217px] tracking-[0.64px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">{`•  Extra pillows and blankets`}</p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[0] left-0 text-[#6a6a6a] text-[16px] text-left text-nowrap top-[244px] tracking-[0.64px]">
        <p className="leading-[normal] whitespace-pre">
          <span>{`•  Sleep up to `}</span>
          <span className="adjustLetterSpacing font-['Outfit:Bold',_sans-serif] font-bold">
            02
          </span>
        </p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[0] left-0 text-[#6a6a6a] text-[16px] text-left text-nowrap top-[271px] tracking-[0.64px]">
        <p className="leading-[normal] whitespace-pre">
          <span>{`•  LKR `}</span>
          <span className="font-['Outfit:Bold',_sans-serif] font-bold">
            12,000
          </span>
          <span className="adjustLetterSpacing">/night</span>
        </p>
      </div>
      <Group9 />
    </div>
  );
}

function Bedroom01() {
  return (
    <div
      className="absolute contents left-[55px] top-[1676px]"
      data-name="bedroom 01"
    >
      <div className="absolute h-0 left-[55px] top-[3214px] w-[1167px]">
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
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[245px] left-[412px] rounded-[3px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[2936px] w-[366px]"
        style={{ backgroundImage: `url('${imgRectangle22}')` }}
      />
      <div
        className="absolute bg-[26.02%_1.72%] bg-no-repeat bg-size-[123.01%_117.54%] h-[496px] left-[412px] rounded-[3px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[2433px] w-[739px]"
        style={{ backgroundImage: `url('${imgRectangle29}')` }}
      />
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[245px] left-[785px] rounded-[3px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[2936px] w-[366px]"
        style={{ backgroundImage: `url('${imgRectangle30}')` }}
      />
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[245px] left-[412px] rounded-[3px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[2181px] w-[366px]"
        style={{ backgroundImage: `url('${imgRectangle31}')` }}
      />
      <div
        className="absolute bg-[26.02%_1.72%] bg-no-repeat bg-size-[123.01%_117.54%] h-[496px] left-[412px] rounded-[3px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[1678px] w-[739px]"
        style={{ backgroundImage: `url('${imgRectangle32}')` }}
      />
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[245px] left-[785px] rounded-[3px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[2181px] w-[366px]"
        style={{ backgroundImage: `url('${imgRectangle33}')` }}
      />
      <Infor1 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents left-px top-[380px]">
      <div className="absolute bg-[rgba(0,0,0,0.25)] h-[33px] left-px rounded-[10px] top-[380px] w-[282px]">
        <div
          aria-hidden="true"
          className="absolute border border-[rgba(0,0,0,0.25)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_0px_10px_0px_#000000]"
        />
      </div>
      <div className="absolute font-['Outfit:Bold',_sans-serif] font-bold leading-[0] left-[53px] text-[#000000] text-[14px] text-left top-[388px] tracking-[0.56px] w-[178.6px]">
        <p className="adjustLetterSpacing block leading-[normal]">
          Reserve your family wing
        </p>
      </div>
    </div>
  );
}

function Infor2() {
  return (
    <div
      className="absolute h-[413px] left-[117px] top-[3250px] w-[291px]"
      data-name="infor"
    >
      <div className="absolute font-['Outfit:Bold',_sans-serif] font-bold leading-[0] left-0 text-[#000000] text-[22px] text-left text-nowrap top-0 tracking-[2.2px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          Bedroom 02
        </p>
      </div>
      <div className="absolute font-['Outfit:Medium',_sans-serif] font-medium leading-[0] left-[147px] text-[#000000] text-[20px] text-left text-nowrap top-0.5 tracking-[0.8px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          (Family Wing)
        </p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[0] left-0 text-[#6a6a6a] text-[16px] text-left top-[35px] w-[291px]">
        <p className="block leading-[normal]">
          Perfectly designed for families or small groups looking for comfort
          and convenience.
        </p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[0] left-0 text-[#6a6a6a] text-[16px] text-left text-nowrap top-[100px] tracking-[0.64px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          • Queen bed
        </p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[0] left-0 text-[#6a6a6a] text-[16px] text-left text-nowrap top-[127px] tracking-[0.64px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">{`•  Bathroom 01`}</p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[0] left-0 text-[#6a6a6a] text-[16px] text-left text-nowrap top-[154px] tracking-[0.64px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">{`•  Air conditioning`}</p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[0] left-0 text-[#6a6a6a] text-[16px] text-left text-nowrap top-[181px] tracking-[0.64px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">{`•  Iron`}</p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[0] left-0 text-[#6a6a6a] text-[16px] text-left text-nowrap top-52 tracking-[0.64px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">{`•  Clothing storage`}</p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[0] left-0 text-[#6a6a6a] text-[16px] text-left text-nowrap top-[235px] tracking-[0.64px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">{`•  Essentials`}</p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[0] left-0 text-[#6a6a6a] text-[16px] text-left text-nowrap top-[262px] tracking-[0.64px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">{`•  Room-darkening shades`}</p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[0] left-0 text-[#6a6a6a] text-[16px] text-left text-nowrap top-[289px] tracking-[0.64px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">{`•  Extra pillows and blankets`}</p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[0] left-0 text-[#6a6a6a] text-[16px] text-left text-nowrap top-[316px] tracking-[0.64px]">
        <p className="leading-[normal] whitespace-pre">
          <span>{`•  Sleep up to `}</span>
          <span className="adjustLetterSpacing font-['Outfit:Bold',_sans-serif] font-bold">
            02
          </span>
        </p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[0] left-0 text-[#6a6a6a] text-[16px] text-left text-nowrap top-[343px] tracking-[0.64px]">
        <p className="leading-[normal] whitespace-pre">
          <span>{`•  LKR `}</span>
          <span className="font-['Outfit:Bold',_sans-serif] font-bold">
            18,000
          </span>
          <span className="adjustLetterSpacing">/night</span>
        </p>
      </div>
      <Group10 />
    </div>
  );
}

function Bedroom2() {
  return (
    <div
      className="absolute contents left-[55px] top-[3250px]"
      data-name="bedroom 2"
    >
      <div className="absolute h-0 left-[55px] top-[4788px] w-[1167px]">
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
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[245px] left-[412px] rounded-[3px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[4510px] w-[366px]"
        style={{ backgroundImage: `url('${imgRectangle34}')` }}
      />
      <div
        className="absolute bg-[26.02%_1.72%] bg-no-repeat bg-size-[123.01%_117.54%] h-[496px] left-[412px] rounded-[3px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[4007px] w-[739px]"
        style={{ backgroundImage: `url('${imgRectangle35}')` }}
      />
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[245px] left-[785px] rounded-[3px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[4510px] w-[366px]"
        style={{ backgroundImage: `url('${imgRectangle36}')` }}
      />
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[245px] left-[412px] rounded-[3px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[3755px] w-[366px]"
        style={{ backgroundImage: `url('${imgRectangle37}')` }}
      />
      <div
        className="absolute bg-[57.78%_4.91%] bg-no-repeat bg-size-[123.01%_117.54%] h-[496px] left-[412px] rounded-[3px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[3252px] w-[739px]"
        style={{ backgroundImage: `url('${imgRectangle24}')` }}
      />
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[245px] left-[785px] rounded-[3px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[3755px] w-[366px]"
        style={{ backgroundImage: `url('${imgRectangle38}')` }}
      />
      <Infor2 />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents left-px top-[380px]">
      <div className="absolute bg-[rgba(0,0,0,0.25)] h-[33px] left-px rounded-[10px] top-[380px] w-[282px]">
        <div
          aria-hidden="true"
          className="absolute border border-[rgba(0,0,0,0.25)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_0px_10px_0px_#000000]"
        />
      </div>
      <div className="absolute font-['Outfit:Bold',_sans-serif] font-bold leading-[0] left-[53px] text-[#000000] text-[14px] text-left top-[388px] tracking-[0.56px] w-[178.6px]">
        <p className="adjustLetterSpacing block leading-[normal]">
          Reserve your bungalow
        </p>
      </div>
    </div>
  );
}

function Infor3() {
  return (
    <div
      className="absolute h-[413px] left-[117px] top-[5643px] w-[291px]"
      data-name="infor"
    >
      <div className="absolute font-['Outfit:Bold',_sans-serif] font-bold leading-[0] left-0 text-[#000000] text-[22px] text-left text-nowrap top-0 tracking-[2.2px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          Full Bungalow
        </p>
      </div>
      <div className="absolute font-['Outfit:Medium',_sans-serif] font-medium leading-[0] left-[177px] text-[#000000] text-[20px] text-left text-nowrap top-0.5 tracking-[0.8px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          (Exterior)
        </p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[0] left-0 text-[#6a6a6a] text-[16px] text-left top-[35px] w-[291px]">
        <p className="block leading-[normal]">
          Book the entire bungalow for ultimate privacy and freedom, perfect for
          larger groups or families.
        </p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[0] left-0 text-[#6a6a6a] text-[16px] text-left text-nowrap top-[100px] tracking-[0.64px]">
        <p className="leading-[normal] whitespace-pre">
          <span>{`•  `}</span>
          <span className="font-['Outfit:Bold',_sans-serif] font-bold">2</span>
          <span className="adjustLetterSpacing">{` Rooms`}</span>
        </p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[0] left-0 text-[#6a6a6a] text-[16px] text-left text-nowrap top-[127px] tracking-[0.64px]">
        <p className="leading-[normal] whitespace-pre">
          <span>{`•  `}</span>
          <span className="font-['Outfit:Bold',_sans-serif] font-bold">2</span>
          <span className="adjustLetterSpacing">{` Bathrooms`}</span>
        </p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[0] left-0 text-[#6a6a6a] text-[16px] text-left text-nowrap top-[154px] tracking-[0.64px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">{`•  Full kitchen access`}</p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[0] left-0 text-[#6a6a6a] text-[16px] text-left text-nowrap top-[181px] tracking-[0.64px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">{`•  Air conditioning`}</p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[0] left-0 text-[#6a6a6a] text-[16px] text-left text-nowrap top-52 tracking-[0.64px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">{`•  Iron`}</p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[0] left-0 text-[#6a6a6a] text-[16px] text-left text-nowrap top-[235px] tracking-[0.64px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">{`•  Clothing storage`}</p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[0] left-0 text-[#6a6a6a] text-[16px] text-left text-nowrap top-[262px] tracking-[0.64px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">{`•  Washing machine`}</p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[0] left-0 text-[#6a6a6a] text-[16px] text-left text-nowrap top-[289px] tracking-[0.64px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">{`•  Extra pillows and blankets`}</p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[0] left-0 text-[#6a6a6a] text-[16px] text-left text-nowrap top-[316px] tracking-[0.64px]">
        <p className="leading-[normal] whitespace-pre">
          <span>{`•  Sleep up to `}</span>
          <span className="adjustLetterSpacing font-['Outfit:Bold',_sans-serif] font-bold">
            07
          </span>
        </p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[0] left-0 text-[#6a6a6a] text-[16px] text-left text-nowrap top-[343px] tracking-[0.64px]">
        <p className="leading-[normal] whitespace-pre">
          <span>{`•  LKR `}</span>
          <span className="font-['Outfit:Bold',_sans-serif] font-bold">
            35,000
          </span>
          <span className="adjustLetterSpacing">/night</span>
        </p>
      </div>
      <Group11 />
    </div>
  );
}

function Bungalow() {
  return (
    <div
      className="absolute contents left-[117px] top-[5643px]"
      data-name="bungalow"
    >
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[245px] left-[412px] rounded-[3px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[6903px] w-[366px]"
        style={{ backgroundImage: `url('${imgRectangle34}')` }}
      />
      <div
        className="absolute bg-[26.02%_1.72%] bg-no-repeat bg-size-[123.01%_117.54%] h-[496px] left-[412px] rounded-[3px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[6400px] w-[739px]"
        style={{ backgroundImage: `url('${imgRectangle35}')` }}
      />
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[245px] left-[785px] rounded-[3px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[6903px] w-[366px]"
        style={{ backgroundImage: `url('${imgRectangle36}')` }}
      />
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[245px] left-[412px] rounded-[3px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[6148px] w-[366px]"
        style={{ backgroundImage: `url('${imgRectangle37}')` }}
      />
      <div
        className="absolute bg-[57.78%_4.91%] bg-no-repeat bg-size-[123.01%_117.54%] h-[496px] left-[412px] rounded-[3px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[5645px] w-[739px]"
        style={{ backgroundImage: `url('${imgRectangle24}')` }}
      />
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[245px] left-[785px] rounded-[3px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[6148px] w-[366px]"
        style={{ backgroundImage: `url('${imgRectangle38}')` }}
      />
      <Infor3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[7737px] relative shrink-0 w-[1281px]">
      <Footer />
      <PhotoTour />
      <Kitchen3 />
      <DiningArea />
      <Bathroom01 />
      <Bedroom01 />
      <Bedroom2 />
      <Bungalow />
    </div>
  );
}

export default function RoomDetailsPage() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start p-0 relative size-full"
      data-name="Room details Page"
    >
      <Frame1 />
      <Frame2 />
    </div>
  );
}