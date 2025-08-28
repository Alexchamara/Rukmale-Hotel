import svgPaths from "./svg-dhbv1x4h7x";

// Dummy image placeholders
const imgLogo1 = "https://via.placeholder.com/150x100/cccccc/666666?text=Logo";
const img202410112 = "https://via.placeholder.com/600x400/cccccc/666666?text=About+Image+1";
const img202410111 = "https://via.placeholder.com/400x300/cccccc/666666?text=About+Image+2";
const img2024101141 = "https://via.placeholder.com/400x300/cccccc/666666?text=About+Image+3";
const img2024101131 = "https://via.placeholder.com/400x300/cccccc/666666?text=About+Image+4";
const imgScreenshot20250522At100232Am1 = "https://via.placeholder.com/500x350/cccccc/666666?text=Screenshot";

function In() {
  return (
    <div className="absolute contents left-[66px] top-[30px]" data-name="in">
      <div className="absolute font-['Cormorant:SemiBold'] font-semibold leading-[0] left-[100px] text-[#000000] text-[20px] text-left text-nowrap top-[30px]">
        <p className="block leading-[normal] whitespace-pre">Check In</p>
      </div>
      <div className="absolute font-['Outfit:Regular'] font-normal leading-[0] left-[100px] text-[#000000] text-[12px] text-left text-nowrap top-[54px]">
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
    <div className="absolute h-[100px] left-[162px] top-[361px] w-[901px]">
      <div className="absolute bg-[#ffffff] h-[100px] left-0 rounded-[50px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[989px]" />
      <In />
      <Out />
      <Guest />
      <Btn />
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
      <div className="absolute font-['Outfit:SemiBold',_sans-serif] font-semibold leading-[0] left-[838px] text-[#ffffff] text-[16px] text-left text-nowrap top-8 tracking-[0.64px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          About Us
        </p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[852px] relative shrink-0 w-full">
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[500px] left-0 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[1280.53px]"
        data-name="2024-10-11-2"
        style={{ backgroundImage: `url('${img202410112}')` }}
      />
      <div className="[text-shadow:rgba(0,0,0,0.5)_0px_4px_2px] absolute font-['Baskervville_SC:Regular'] leading-[0] left-[178px] not-italic text-[#ffffff] text-[40px] text-left text-nowrap top-[235px] tracking-[6px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          Welcome to Ruhmake Gedara Bungalow
        </p>
      </div>
      <Frame3 />
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[303px] left-[191px] rounded-[159.5px] top-[625px] w-[302px]"
        data-name="logo 1"
        style={{ backgroundImage: `url('${imgLogo1}')` }}
      >
        <div
          aria-hidden="true"
          className="absolute border border-[rgba(0,0,0,0.25)] border-solid inset-0 pointer-events-none rounded-[159.5px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)]"
        />
      </div>
      <Top />
    </div>
  );
}

function PhoneAlt() {
  return (
    <div
      className="absolute left-0 size-[25px] top-[3px]"
      data-name="phone-alt"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 25 25"
      >
        <g clipPath="url(#clip0_30_379)" id="phone-alt">
          <path
            d={svgPaths.p381fbb00}
            fill="var(--fill-0, black)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_30_379">
            <rect fill="white" height="25" width="25" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Phone() {
  return (
    <div
      className="absolute h-7 left-[169px] top-[518px] w-[169px]"
      data-name="phone"
    >
      <div className="absolute font-['Outfit:Light',_sans-serif] font-light leading-[0] left-[34px] text-[#000000] text-[16px] text-left top-1 tracking-[0.64px] w-[135px]">
        <p className="adjustLetterSpacing block leading-[normal]">
          +94 77 704 4826
        </p>
      </div>
      <PhoneAlt />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents left-0 top-7">
      <div className="absolute bg-[#ffffff] h-[33px] left-0 rounded-[3px] top-7 w-[498px]">
        <div
          aria-hidden="true"
          className="absolute border-[#000000] border-[0px_0px_1px] border-solid inset-0 pointer-events-none rounded-[3px]"
        />
      </div>
      <div className="absolute font-['Outfit:Light',_sans-serif] font-light leading-[0] left-[9px] text-[14px] text-[rgba(99,99,99,0.5)] text-left top-9 tracking-[0.56px] w-[118px]">
        <p className="adjustLetterSpacing block leading-[normal]">
          Enter your name
        </p>
      </div>
    </div>
  );
}

function Name() {
  return (
    <div
      className="absolute h-[61px] left-[621px] top-[572px] w-[498px]"
      data-name="name"
    >
      <div className="absolute font-['Outfit:Light',_sans-serif] font-light leading-[0] left-0 text-[#000000] text-[16px] text-left top-0 tracking-[0.64px] w-[57px]">
        <p className="adjustLetterSpacing block leading-[normal]">Name:</p>
      </div>
      <Group8 />
    </div>
  );
}

function Location() {
  return (
    <div
      className="absolute h-5 left-[203px] top-[632px] w-[294px]"
      data-name="location"
    >
      <div className="absolute font-['Outfit:Light',_sans-serif] font-light leading-[0] left-0 text-[#000000] text-[16px] text-left top-0 tracking-[0.64px] w-[294px]">
        <p className="adjustLetterSpacing block leading-[normal]">
          2nd lane new city , Kottawa, Sri Lanka
        </p>
      </div>
    </div>
  );
}

function LocationArrow() {
  return (
    <div
      className="absolute left-[169px] size-[25px] top-[632px]"
      data-name="location-arrow"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 25 25"
      >
        <g clipPath="url(#clip0_30_376)" id="location-arrow">
          <path
            d={svgPaths.p3550e200}
            fill="var(--fill-0, black)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_30_376">
            <rect fill="white" height="25" width="25" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents left-0 top-7">
      <div className="absolute h-[33px] left-0 rounded-[3px] top-7 w-[498px]">
        <div
          aria-hidden="true"
          className="absolute border-[#000000] border-[0px_0px_1px] border-solid inset-0 pointer-events-none rounded-[3px]"
        />
      </div>
      <div className="absolute font-['Outfit:Light',_sans-serif] font-light leading-[0] left-[9px] text-[14px] text-[rgba(99,99,99,0.5)] text-left top-9 tracking-[0.56px] w-[118px]">
        <p className="adjustLetterSpacing block leading-[normal]">
          Enter your email
        </p>
      </div>
    </div>
  );
}

function Email() {
  return (
    <div
      className="absolute h-[61px] left-[621px] top-[655px] w-[498px]"
      data-name="email"
    >
      <div className="absolute font-['Outfit:Light',_sans-serif] font-light leading-[0] left-0 text-[#000000] text-[16px] text-left top-0 tracking-[0.64px] w-[57px]">
        <p className="adjustLetterSpacing block leading-[normal]">Email:</p>
      </div>
      <Group9 />
    </div>
  );
}

function ChalkboardTeacher() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] left-[171.68px] size-[25px] top-[1.33px]"
      data-name="chalkboard-teacher"
    />
  );
}

function Reciption() {
  return (
    <div
      className="absolute h-7 left-[169px] top-[693px] w-[331px]"
      data-name="reciption"
    >
      <div className="absolute font-['Outfit:Light',_sans-serif] font-light leading-[0] left-[37px] text-[#000000] text-[16px] text-left top-1 tracking-[0.64px] w-[294px]">
        <p className="adjustLetterSpacing block leading-[normal]">
          Available 24/7
        </p>
      </div>
      <ChalkboardTeacher />
      <div
        className="absolute bottom-[14.29%] left-0 right-[92.45%] top-[14.29%]"
        data-name="Vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 25 20"
        >
          <path
            d={svgPaths.p366fbf00}
            fill="var(--fill-0, black)"
            id="Vector"
          />
        </svg>
      </div>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents left-0 top-7">
      <div className="absolute h-[33px] left-0 rounded-[3px] top-7 w-[498px]">
        <div
          aria-hidden="true"
          className="absolute border-[#000000] border-[0px_0px_1px] border-solid inset-0 pointer-events-none rounded-[3px]"
        />
      </div>
      <div className="absolute font-['Outfit:Light',_sans-serif] font-light leading-[0] left-[9px] text-[14px] text-[rgba(99,99,99,0.5)] text-left top-9 tracking-[0.56px] w-[187px]">
        <p className="adjustLetterSpacing block leading-[normal]">
          Enter your phone number
        </p>
      </div>
    </div>
  );
}

function Phone1() {
  return (
    <div
      className="absolute h-[61px] left-[621px] top-[738px] w-[498px]"
      data-name="phone"
    >
      <div className="absolute font-['Outfit:Light',_sans-serif] font-light leading-[0] left-0 text-[#000000] text-[16px] text-left top-0 tracking-[0.64px] w-[223px]">
        <p className="adjustLetterSpacing block leading-[normal]">
          Phone (Optional):
        </p>
      </div>
      <Group11 />
    </div>
  );
}

function Icon() {
  return (
    <div
      className="absolute h-[25px] left-0 top-[86px] w-[104px]"
      data-name="icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 104 25"
      >
        <g id="icon">
          <g id="facebook-square">
            <path
              d={svgPaths.pb52b480}
              fill="var(--fill-0, black)"
              id="Vector"
            />
          </g>
          <path
            d={svgPaths.p3bd3c070}
            fill="var(--fill-0, black)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p251311c0}
            fill="var(--fill-0, black)"
            id="Vector_3"
          />
        </g>
      </svg>
    </div>
  );
}

function Contact() {
  return (
    <div
      className="absolute h-[129px] left-[169px] top-[762px] w-[476px]"
      data-name="contact"
    >
      <div className="absolute font-['Outfit:SemiBold',_sans-serif] font-semibold leading-[0] left-0 text-[#000000] text-[24px] text-left text-nowrap top-0 tracking-[0.96px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          Connect with Us
        </p>
      </div>
      <div className="absolute font-['Outfit:Light',_sans-serif] font-light leading-[0] left-0 text-[#000000] text-[16px] text-left top-[38px] tracking-[0.64px] w-[412px]">
        <p className="adjustLetterSpacing block leading-[normal]">
          Follow us on social media to stay updated with the latest news and
          special offers:
        </p>
      </div>
      <Icon />
    </div>
  );
}

function AddressCard() {
  return (
    <div className="absolute left-0 size-[25px] top-1" data-name="address-card">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 25 25"
      >
        <g clipPath="url(#clip0_30_371)" id="address-card">
          <path
            d={svgPaths.p140d0380}
            fill="var(--fill-0, black)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_30_371">
            <rect fill="white" height="25" width="25" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute h-7 left-[169px] top-[568px] w-[318px]">
      <AddressCard />
      <div className="absolute font-['Outfit:Light',_sans-serif] font-light leading-[0] left-[37px] text-[#000000] text-[16px] text-left top-1 tracking-[0.64px] w-[281px]">
        <p className="adjustLetterSpacing block leading-[normal]">
          reservations@ruhmakegedara.com
        </p>
      </div>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents left-[621px] top-[838px]">
      <div className="absolute h-[109px] left-[621px] rounded-[3px] top-[838px] w-[498px]">
        <div
          aria-hidden="true"
          className="absolute border-[#000000] border-[0px_0px_1px] border-solid inset-0 pointer-events-none rounded-[3px]"
        />
      </div>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents left-[621px] top-[986px]">
      <div className="absolute bg-[rgba(0,0,0,0.25)] h-[33px] left-[621px] rounded-[10px] top-[986px] w-[148px]">
        <div
          aria-hidden="true"
          className="absolute border border-[rgba(0,0,0,0.25)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_0px_10px_0px_#000000]"
        />
      </div>
      <div className="absolute font-['Outfit:Bold',_sans-serif] font-bold leading-[0] left-[647px] text-[#000000] text-[14px] text-left top-[994px] tracking-[0.56px] w-[107px]">
        <p className="adjustLetterSpacing block leading-[normal]">
          Send Message
        </p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute h-12 left-[519px] top-[1620px] w-[221px]">
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
        style={{ backgroundImage: `url('${img202410112}')` }}
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

function Icon1() {
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
      className="absolute h-[743px] left-[-1px] top-[2068px] w-[1282px]"
      data-name="footer"
    >
      <Info />
      <Link />
      <Frame5 />
      <Line />
      <Icon1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[2810px] relative shrink-0 w-[1281px]">
      <div className="absolute font-['Outfit:Medium',_sans-serif] font-medium leading-[0] left-[578px] text-[#000000] text-[24px] text-left text-nowrap top-[-203px] tracking-[0.96px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          About Us
        </p>
      </div>
      <div className="absolute font-['Outfit:Light',_sans-serif] font-light leading-[0] left-[578px] text-[#000000] text-[16px] text-left top-[-163px] tracking-[0.64px] w-[554px]">
        <p className="adjustLetterSpacing block leading-[normal]">{`Welcome to Ruhmake Gedara Bungalow, where nature meets luxury to create unforgettable experiences. Situated amidst lush greenery and tranquil surroundings, our bungalow is more than just a place to stay—it's your sanctuary to relax, rejuvenate, and reconnect.`}</p>
      </div>
      <div className="absolute font-['Outfit:Light',_sans-serif] font-light leading-[0] left-[578px] text-[#000000] text-[16px] text-left top-[-72px] tracking-[0.64px] w-[554px]">
        <p className="adjustLetterSpacing block leading-[normal]">
          At Ruhmake Gedara, we pride ourselves on blending traditional
          hospitality with contemporary comforts. Our beautifully appointed
          rooms, carefully designed amenities, and warm, attentive service
          ensure every moment of your stay is special.
        </p>
      </div>
      <div className="absolute font-['Outfit:Light',_sans-serif] font-light leading-[0] left-[578px] text-[#000000] text-[16px] text-left top-[19px] tracking-[0.64px] w-[554px]">
        <p className="adjustLetterSpacing block leading-[normal]">
          Our bungalow embraces sustainable practices to minimize our
          environmental impact, reflecting our deep respect for nature and
          commitment to preserving the beauty of our surroundings for future
          generations.
        </p>
      </div>
      <div className="absolute font-['Outfit:Light',_sans-serif] font-light leading-[0] left-[578px] text-[#000000] text-[16px] text-left top-[110px] tracking-[0.64px] w-[554px]">
        <p className="adjustLetterSpacing block leading-[normal]">
          Come, experience the true essence of relaxation and create lasting
          memories at Ruhmake Gedara Bungalow.
        </p>
      </div>
      <div className="absolute font-['Outfit:Bold',_sans-serif] font-bold leading-[0] left-[578px] text-[#000000] text-[40px] text-left text-nowrap top-[-265px] tracking-[4px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          WELCOME
        </p>
      </div>
      <div className="absolute font-['Outfit:Bold',_sans-serif] font-bold leading-[0] left-[499px] text-[#000000] text-[40px] text-left text-nowrap top-[299px] tracking-[4px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          GET IN TOUCH
        </p>
      </div>
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[0] left-[640.5px] text-[#000000] text-[20px] text-center top-[378px] translate-x-[-50%] w-[989px]">
        <p className="block leading-[normal]">{`We'd love to hear from you! Whether you have questions about our accommodations, need assistance with your booking, or simply want to learn more about Ruhmake Gedara Bungalow, we're here to help.`}</p>
      </div>
      <div className="absolute font-['Outfit:SemiBold',_sans-serif] font-semibold leading-[0] left-[621px] text-[#000000] text-[24px] text-left text-nowrap top-[517px] tracking-[0.96px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          Contact Us
        </p>
      </div>
      <Phone />
      <Name />
      <Location />
      <LocationArrow />
      <Email />
      <Reciption />
      <Phone1 />
      <Contact />
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[390px] left-[169px] rounded-[25px] top-[1062px] w-[951.882px]"
        data-name="Screenshot 2025-05-22 at 10.02.32 AM 1"
        style={{
          backgroundImage: `url('${imgScreenshot20250522At100232Am1}')`,
        }}
      >
        <div
          aria-hidden="true"
          className="absolute border border-[rgba(0,0,0,0.25)] border-solid inset-0 pointer-events-none rounded-[25px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)]"
        />
      </div>
      <Frame6 />
      <div className="absolute font-['Outfit:Light',_sans-serif] font-light leading-[0] left-[621px] text-[#000000] text-[16px] text-left top-[810px] tracking-[0.64px] w-[223px]">
        <p className="adjustLetterSpacing block leading-[normal]">Message:</p>
      </div>
      <Group12 />
      <div className="absolute font-['Outfit:Light',_sans-serif] font-light h-[17px] leading-[0] left-[631px] text-[14px] text-[rgba(99,99,99,0.5)] text-left top-[847px] tracking-[0.56px] w-[187px]">
        <p className="adjustLetterSpacing block leading-[normal]">
          Enter your message
        </p>
      </div>
      <Group10 />
      <div className="absolute h-0 left-[55px] top-[229px] w-[1167px]">
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
      <Frame4 />
      <div className="absolute h-0 left-[55px] top-[1546px] w-[1167px]">
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
      <Footer />
    </div>
  );
}

export default function AboutUs() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start p-0 relative size-full"
      data-name="About us"
    >
      <Frame1 />
      <Frame2 />
    </div>
  );
}