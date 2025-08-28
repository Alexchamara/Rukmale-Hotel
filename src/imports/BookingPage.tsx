import svgPaths from "./svg-ziizrqf333";

// Dummy image placeholders
const imgLogo1 = "https://via.placeholder.com/150x100/cccccc/666666?text=Logo";
const imgDsc05036 = "https://via.placeholder.com/800x500/cccccc/666666?text=Booking+Hero";
const img202410111 = "https://via.placeholder.com/400x300/cccccc/666666?text=Inspiration+1";
const img2024101141 = "https://via.placeholder.com/400x300/cccccc/666666?text=Inspiration+2";
const img2024101121 = "https://via.placeholder.com/400x300/cccccc/666666?text=Inspiration+3";
const img2024101131 = "https://via.placeholder.com/400x300/cccccc/666666?text=Inspiration+4";

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
        data-name="DSC05036"
        style={{ backgroundImage: `url('${imgDsc05036}')` }}
      />
      <div className="[text-shadow:rgba(0,0,0,0.5)_0px_4px_2px] absolute font-['Baskervville_SC:Regular',_sans-serif] leading-[0] left-[417px] not-italic text-[#ffffff] text-[40px] text-left text-nowrap top-[275px] tracking-[6px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          Reserve Your Room
        </p>
      </div>
      <Top />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents left-[168px] top-0">
      <div className="absolute h-[33px] left-[168px] rounded-[3px] top-0 w-[498px]">
        <div
          aria-hidden="true"
          className="absolute border-[#000000] border-[0px_0px_1px] border-solid inset-0 pointer-events-none rounded-[3px]"
        />
      </div>
      <div className="absolute font-['Outfit:Light',_sans-serif] font-light leading-[0] left-[177px] text-[14px] text-[rgba(99,99,99,0.5)] text-left top-2 tracking-[0.56px] w-[118px]">
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
      className="absolute h-[33px] left-[313px] top-[-94px] w-[666px]"
      data-name="name"
    >
      <div className="absolute font-['Outfit:Light',_sans-serif] font-light leading-[0] left-0 text-[#000000] text-[16px] text-left top-1.5 tracking-[0.64px] w-[164px]">
        <p className="adjustLetterSpacing block leading-[normal]">Name:</p>
      </div>
      <Group8 />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents left-[167px] top-0">
      <div className="absolute h-[33px] left-[167px] rounded-[3px] top-0 w-[498px]">
        <div
          aria-hidden="true"
          className="absolute border-[#000000] border-[0px_0px_1px] border-solid inset-0 pointer-events-none rounded-[3px]"
        />
      </div>
      <div className="absolute font-['Outfit:Light',_sans-serif] font-light leading-[0] left-44 text-[14px] text-[rgba(99,99,99,0.5)] text-left top-2 tracking-[0.56px] w-[185px]">
        <p className="adjustLetterSpacing block leading-[normal]">
          Enter your phone number
        </p>
      </div>
    </div>
  );
}

function Phone() {
  return (
    <div
      className="absolute h-[33px] left-[313px] top-[-34px] w-[665px]"
      data-name="phone"
    >
      <div className="absolute font-['Outfit:Light',_sans-serif] font-light leading-[0] left-0 text-[#000000] text-[16px] text-left top-1.5 tracking-[0.64px] w-[57px]">
        <p className="adjustLetterSpacing block leading-[normal]">Phone:</p>
      </div>
      <Group11 />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents left-[167px] top-0">
      <div className="absolute h-[33px] left-[167px] rounded-[3px] top-0 w-[498px]">
        <div
          aria-hidden="true"
          className="absolute border-[#000000] border-[0px_0px_1px] border-solid inset-0 pointer-events-none rounded-[3px]"
        />
      </div>
      <div className="absolute font-['Outfit:Light',_sans-serif] font-light leading-[0] left-44 text-[14px] text-[rgba(99,99,99,0.5)] text-left top-2 tracking-[0.56px] w-[185px]">
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
      className="absolute h-[33px] left-[313px] top-[30px] w-[665px]"
      data-name="email"
    >
      <div className="absolute font-['Outfit:Light',_sans-serif] font-light leading-[0] left-0 text-[#000000] text-[16px] text-left top-1.5 tracking-[0.64px] w-[57px]">
        <p className="adjustLetterSpacing block leading-[normal]">Email:</p>
      </div>
      <Group12 />
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents left-[167px] top-0">
      <div className="absolute h-[98px] left-[167px] rounded-[3px] top-0 w-[498px]">
        <div
          aria-hidden="true"
          className="absolute border-[#000000] border-[0px_0px_1px] border-solid inset-0 pointer-events-none rounded-[3px]"
        />
      </div>
      <div className="absolute font-['Outfit:Light',_sans-serif] font-light leading-[0] left-44 text-[14px] text-[rgba(99,99,99,0.5)] text-left top-2 tracking-[0.56px] w-[301px]">
        <p className="adjustLetterSpacing block leading-[normal]">
          Any specific requirements or preferences
        </p>
      </div>
    </div>
  );
}

function Email1() {
  return (
    <div
      className="absolute h-[98px] left-[313px] top-[345px] w-[665px]"
      data-name="email"
    >
      <div className="absolute font-['Outfit:Light',_sans-serif] font-light leading-[0] left-0 text-[#000000] text-[16px] text-left top-1.5 tracking-[0.64px] w-[125px]">
        <p className="adjustLetterSpacing block leading-[normal]">
          Your Message:
        </p>
      </div>
      <Group13 />
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents left-[167px] top-0">
      <div className="absolute h-[33px] left-[167px] rounded-[3px] top-0 w-[141px]">
        <div
          aria-hidden="true"
          className="absolute border-[#000000] border-[0px_0px_1px] border-solid inset-0 pointer-events-none rounded-[3px]"
        />
      </div>
      <div className="absolute font-['Outfit:Light',_sans-serif] font-light leading-[0] left-[174px] text-[14px] text-[rgba(99,99,99,0.5)] text-left top-2 tracking-[0.56px] w-[38px]">
        <p className="adjustLetterSpacing block leading-[normal]">01</p>
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents left-[524px] top-0">
      <div className="absolute h-[33px] left-[524px] rounded-[3px] top-0 w-[141px]">
        <div
          aria-hidden="true"
          className="absolute border-[#000000] border-[0px_0px_1px] border-solid inset-0 pointer-events-none rounded-[3px]"
        />
      </div>
      <div className="absolute font-['Outfit:Light',_sans-serif] font-light leading-[0] left-[531px] text-[14px] text-[rgba(99,99,99,0.5)] text-left top-2 tracking-[0.56px] w-[38px]">
        <p className="adjustLetterSpacing block leading-[normal]">01</p>
      </div>
    </div>
  );
}

function Guests() {
  return (
    <div
      className="absolute h-[33px] left-[307px] top-[220px] w-[665px]"
      data-name="guests"
    >
      <div className="absolute font-['Outfit:Light',_sans-serif] font-light leading-[0] left-0 text-[#000000] text-[16px] text-left top-1.5 tracking-[0.64px] w-[154px]">
        <p className="adjustLetterSpacing block leading-[normal]">{` Number of Audlts:`}</p>
      </div>
      <Group14 />
      <Group9 />
      <div className="absolute font-['Outfit:Light',_sans-serif] font-light leading-[0] left-[377px] text-[#000000] text-[16px] text-left top-1.5 tracking-[0.64px] w-[154px]">
        <p className="adjustLetterSpacing block leading-[normal]">{` Number of kids:`}</p>
      </div>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents left-[167px] top-0">
      <div className="absolute h-[33px] left-[167px] rounded-[3px] top-0 w-[137px]">
        <div
          aria-hidden="true"
          className="absolute border-[#000000] border-[0px_0px_1px] border-solid inset-0 pointer-events-none rounded-[3px]"
        />
      </div>
      <div className="absolute font-['Outfit:Light',_'Noto_Sans:Regular',_sans-serif] font-light leading-[0] left-44 text-[14px] text-[rgba(99,99,99,0.5)] text-left top-2 tracking-[0.56px] w-[115px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre-wrap">{`Standard          ▼`}</p>
      </div>
    </div>
  );
}

function Type() {
  return (
    <div
      className="absolute h-[33px] left-[313px] top-[283px] w-[304px]"
      data-name="type"
    >
      <div className="absolute font-['Outfit:Light',_sans-serif] font-light leading-[0] left-0 text-[#000000] text-[16px] text-left top-1.5 tracking-[0.64px] w-[154px]">
        <p className="adjustLetterSpacing block leading-[normal]">Room Type:</p>
      </div>
      <Group15 />
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents left-[31px] top-0">
      <div className="absolute left-[31px] rounded-[3px] size-[33px] top-0">
        <div
          aria-hidden="true"
          className="absolute border-2 border-[#000000] border-solid inset-0 pointer-events-none rounded-[3px]"
        />
      </div>
    </div>
  );
}

function Whole() {
  return (
    <div
      className="absolute h-[33px] left-[645px] top-[283px] w-[257px]"
      data-name="whole"
    >
      <div className="absolute font-['Outfit:Light',_sans-serif] font-light leading-[0] left-[83px] text-[#000000] text-[16px] text-left top-[7px] tracking-[0.64px] w-[193px]">
        <p className="adjustLetterSpacing block leading-[normal]">{`Book Whole Bungalow `}</p>
      </div>
      <Group16 />
    </div>
  );
}

function CalendarAlt() {
  return (
    <div
      className="absolute left-[637.04px] size-5 top-1.5"
      data-name="calendar-alt"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="calendar-alt">
          <path
            d={svgPaths.p85e9000}
            fill="var(--fill-0, #636363)"
            fillOpacity="0.5"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents left-[167px] top-0">
      <div className="absolute h-[33px] left-[167px] rounded-[3px] top-0 w-[498px]">
        <div
          aria-hidden="true"
          className="absolute border-[#000000] border-[0px_0px_1px] border-solid inset-0 pointer-events-none rounded-[3px]"
        />
      </div>
      <div className="absolute font-['Outfit:Light',_sans-serif] font-light leading-[0] left-44 text-[14px] text-[rgba(99,99,99,0.5)] text-left top-2 tracking-[0.56px] w-[185px]">
        <p className="adjustLetterSpacing block leading-[normal]">../../....</p>
      </div>
      <CalendarAlt />
    </div>
  );
}

function CheckIn() {
  return (
    <div
      className="absolute h-[33px] left-[313px] top-[94px] w-[665px]"
      data-name="check in"
    >
      <div className="absolute font-['Outfit:Light',_sans-serif] font-light leading-[0] left-0 text-[#000000] text-[16px] text-left top-1.5 tracking-[0.64px] w-[121px]">
        <p className="adjustLetterSpacing block leading-[normal]">
          Check-in Date:
        </p>
      </div>
      <Group17 />
    </div>
  );
}

function CalendarAlt1() {
  return (
    <div
      className="absolute left-[637.04px] size-5 top-1.5"
      data-name="calendar-alt"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="calendar-alt">
          <path
            d={svgPaths.p85e9000}
            fill="var(--fill-0, #636363)"
            fillOpacity="0.5"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents left-[167px] top-0">
      <div className="absolute h-[33px] left-[167px] rounded-[3px] top-0 w-[498px]">
        <div
          aria-hidden="true"
          className="absolute border-[#000000] border-[0px_0px_1px] border-solid inset-0 pointer-events-none rounded-[3px]"
        />
      </div>
      <div className="absolute font-['Outfit:Light',_sans-serif] font-light leading-[0] left-44 text-[14px] text-[rgba(99,99,99,0.5)] text-left top-2 tracking-[0.56px] w-[185px]">
        <p className="adjustLetterSpacing block leading-[normal]">../../....</p>
      </div>
      <CalendarAlt1 />
    </div>
  );
}

function CheckOut() {
  return (
    <div
      className="absolute h-[33px] left-[313px] top-[158px] w-[665px]"
      data-name="check out"
    >
      <div className="absolute font-['Outfit:Light',_sans-serif] font-light leading-[0] left-0 text-[#000000] text-[16px] text-left top-1.5 tracking-[0.64px] w-[139px]">
        <p className="adjustLetterSpacing block leading-[normal]">
          Check-out Date:
        </p>
      </div>
      <Group18 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents left-[313px] top-[474px]">
      <div className="absolute bg-[rgba(0,0,0,0.25)] h-[33px] left-[313px] rounded-[10px] top-[474px] w-[665px]">
        <div
          aria-hidden="true"
          className="absolute border border-[rgba(0,0,0,0.25)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_0px_10px_0px_#000000]"
        />
      </div>
      <div className="absolute font-['Outfit:Bold',_sans-serif] font-bold leading-[0] left-[557px] text-[#000000] text-[14px] text-left top-[482px] tracking-[0.56px] w-[187px]">
        <p className="adjustLetterSpacing block leading-[normal]">
          Send Reservation Request
        </p>
      </div>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute contents left-[313px] top-[474px]">
      <Group10 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute h-12 left-[519px] top-[709px] w-[221px]">
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
      className="absolute h-[743px] left-[-1px] top-[1157px] w-[1282px]"
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

function Frame2() {
  return (
    <div className="h-[1900px] relative shrink-0 w-[1281px]">
      <div className="absolute font-['Outfit:Regular',_sans-serif] font-normal leading-[0] left-[659.5px] text-[#000000] text-[20px] text-center top-[-190px] translate-x-[-50%] w-[989px]">
        <p className="block leading-[normal]">{`We’re delighted you're considering Rukmale Gedara Bungalow for your next getaway. Fill out the form below to request your reservation. We will confirm your booking shortly after receiving your details.`}</p>
      </div>
      <div className="absolute font-['Outfit:Medium',_sans-serif] font-medium leading-[normal] left-[639.5px] text-[#000000] text-[16px] text-center top-[520px] translate-x-[-50%] w-[989px]">
        <p className="block mb-0">
          Upon submission, we’ll contact you directly to finalize your booking
          details.
        </p>
        <p className="block">
          Thank you for choosing Rukmale Gedara Bungalow. We look forward to
          welcoming you soon!
        </p>
      </div>
      <div className="absolute font-['Outfit:Bold',_sans-serif] font-bold leading-[0] left-[499px] text-[#000000] text-[40px] text-left text-nowrap top-[-265px] tracking-[4px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          BOOK YOUR STAY
        </p>
      </div>
      <Name />
      <Phone />
      <Email />
      <Email1 />
      <Guests />
      <Type />
      <Whole />
      <CheckIn />
      <CheckOut />
      <Group19 />
      <Frame4 />
      <div className="absolute h-0 left-[55px] top-[635px] w-[1167px]">
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

export default function BookingPage() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start p-0 relative size-full"
      data-name="Booking Page"
    >
      <Frame1 />
      <Frame2 />
    </div>
  );
}