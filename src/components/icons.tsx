export const RightArrowIcon = () => {
  return (
    <svg
      width="13"
      height="11"
      viewBox="0 0 13 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 5.36353L10 5.36353"
        stroke="white"
        stroke-width="1.52728"
        stroke-linecap="round"
      />
      <path
        d="M6.54533 9.72727L11.5739 5.70438C11.7923 5.52969 11.7923 5.19758 11.5739 5.02289L6.54533 1"
        stroke="white"
        stroke-width="1.63637"
        stroke-linecap="round"
      />
    </svg>
  );
};

export const ShareIcon = () => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.81825 1.18188C7.64251 1.00615 7.35759 1.00615 7.18185 1.18188L4.18185 4.18188C4.00611 4.35762 4.00611 4.64254 4.18185 4.81828C4.35759 4.99401 4.64251 4.99401 4.81825 4.81828L7.05005 2.58648V9.49996C7.05005 9.74849 7.25152 9.94996 7.50005 9.94996C7.74858 9.94996 7.95005 9.74849 7.95005 9.49996V2.58648L10.1819 4.81828C10.3576 4.99401 10.6425 4.99401 10.8182 4.81828C10.994 4.64254 10.994 4.35762 10.8182 4.18188L7.81825 1.18188ZM2.5 9.99997C2.77614 9.99997 3 10.2238 3 10.5V12C3 12.5538 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2238 12.2239 9.99997 12.5 9.99997C12.7761 9.99997 13 10.2238 13 10.5V12C13 13.104 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2238 2.22386 9.99997 2.5 9.99997Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
};

export const DotsHorizontal = ({ className }: { className?: string }) => {
  return (
    <svg
      width="16"
      height="4"
      viewBox="0 0 16 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="1.98758"
        cy="1.98752"
        r="1.98758"
        transform="rotate(-90 1.98758 1.98752)"
        fill="#585F68"
      />
      <circle
        cx="8.00003"
        cy="1.98752"
        r="1.98758"
        transform="rotate(-90 8.00003 1.98752)"
        fill="#585F68"
      />
      <circle
        cx="14.0125"
        cy="1.98752"
        r="1.98758"
        transform="matrix(0 -1 1 0 12.025 16)"
        fill="#585F68"
      />
    </svg>
  );
};

export const DashboardIcon = ({ className, onClick }) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 10.8333H9.16667V2.5H2.5V10.8333ZM2.5 17.5H9.16667V12.5H2.5V17.5ZM10.8333 17.5H17.5V9.16667H10.8333V17.5ZM10.8333 2.5V7.5H17.5V2.5H10.8333Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const OffersIcon = ({ className, onClick }) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.1666 14.1667V15.8334C14.1666 16.2937 14.5397 16.6667 15 16.6667C15.4602 16.6667 15.8333 16.2937 15.8333 15.8334V3.33341H4.16665V12.5001H2.49998V2.50008C2.49998 2.03985 2.87308 1.66675 3.33331 1.66675H16.6666C17.1269 1.66675 17.5 2.03985 17.5 2.50008V15.8334C17.5 17.2142 16.3807 18.3334 15 18.3334H3.33331C1.9526 18.3334 0.833313 17.2142 0.833313 15.8334V14.1667H14.1666Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const MessagesIcon = ({ className, onClick }) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.37881 15.8333L1.66669 18.75V3.33333C1.66669 2.8731 2.03979 2.5 2.50002 2.5H17.5C17.9603 2.5 18.3334 2.8731 18.3334 3.33333V15C18.3334 15.4602 17.9603 15.8333 17.5 15.8333H5.37881ZM4.80237 14.1667H16.6667V4.16667H3.33335V15.3209L4.80237 14.1667ZM9.16669 8.33333H10.8334V10H9.16669V8.33333ZM5.83335 8.33333H7.50002V10H5.83335V8.33333ZM12.5 8.33333H14.1667V10H12.5V8.33333Z"
        fill="currentColor"
      />
    </svg>
  );
};
export const BountyIcon = ({ className, onClick }) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.02,8.79c-.59-.54-1.36-.81-2.17-.78-.8,.04-1.54,.39-2.09,.98l-3.22,3.53c-.55-.91-1.55-1.52-2.69-1.52h-3.86v-1h.38c1.45,0,2.62-1.18,2.62-2.62,0-1.29-.92-2.38-2.19-2.59l-3.29-.55c-.3-.05-.52-.31-.52-.62,0-.34,.28-.62,.62-.62h2.38c.55,0,1,.45,1,1h2c0-1.65-1.35-3-3-3V0h-2V1h-.38c-1.45,0-2.62,1.18-2.62,2.62,0,1.29,.92,2.38,2.19,2.59l3.29,.55c.3,.05,.52,.31,.52,.62,0,.34-.28,.62-.62,.62h-2.38c-.55,0-1-.45-1-1h-2c0,1.65,1.35,3,3,3v1H3c-1.65,0-3,1.35-3,3v7c0,1.65,1.35,3,3,3H13.45l9.79-10.99c1.09-1.23,.99-3.12-.22-4.23Zm-1.27,2.9l-9.19,10.32H3c-.55,0-1-.45-1-1v-7c0-.55,.45-1,1-1H12.86c.63,0,1.14,.51,1.14,1.14,0,.56-.42,1.05-.98,1.13l-5.16,.74,.28,1.98,5.16-.74c1.18-.17,2.13-.99,2.51-2.06l4.43-4.86c.18-.2,.43-.32,.7-.33,.27,0,.53,.08,.73,.26,.41,.37,.44,1.01,.07,1.42Z"
        fill="currentColor"
      />
    </svg>
  );
};
export const UserGroupIcon = ({ className, onClick }) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.66669 18.3333C1.66669 14.6513 4.65145 11.6666 8.33335 11.6666C12.0153 11.6666 15 14.6513 15 18.3333H13.3334C13.3334 15.5718 11.0948 13.3333 8.33335 13.3333C5.57193 13.3333 3.33335 15.5718 3.33335 18.3333H1.66669ZM8.33335 10.8333C5.57085 10.8333 3.33335 8.59575 3.33335 5.83325C3.33335 3.07075 5.57085 0.833252 8.33335 0.833252C11.0959 0.833252 13.3334 3.07075 13.3334 5.83325C13.3334 8.59575 11.0959 10.8333 8.33335 10.8333ZM8.33335 9.16658C10.175 9.16658 11.6667 7.67492 11.6667 5.83325C11.6667 3.99159 10.175 2.49992 8.33335 2.49992C6.49169 2.49992 5.00002 3.99159 5.00002 5.83325C5.00002 7.67492 6.49169 9.16658 8.33335 9.16658ZM15.2364 12.2523C17.5537 13.2967 19.1667 15.6266 19.1667 18.3333H17.5C17.5 16.3033 16.2903 14.5558 14.5524 13.7725L15.2364 12.2523ZM14.6635 2.84426C16.3287 3.53078 17.5 5.16959 17.5 7.08325C17.5 9.47509 15.6702 11.4376 13.3334 11.6479V9.97042C14.7473 9.76842 15.8334 8.55325 15.8334 7.08325C15.8334 5.93271 15.168 4.93828 14.2009 4.46354L14.6635 2.84426Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const UserIcon = ({ className, onClick }) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.00002 1.16699C5.47169 1.16699 4.22919 2.40949 4.22919 3.93783C4.22919 5.43699 5.40169 6.65033 6.93002 6.70283C6.97669 6.69699 7.02335 6.69699 7.05835 6.70283C7.07002 6.70283 7.07585 6.70283 7.08752 6.70283C7.09335 6.70283 7.09335 6.70283 7.09919 6.70283C8.59252 6.65033 9.76502 5.43699 9.77085 3.93783C9.77085 2.40949 8.52835 1.16699 7.00002 1.16699Z"
        fill="#6E7682"
      />
      <path
        d="M9.96331 8.25418C8.33581 7.16918 5.68164 7.16918 4.04248 8.25418C3.30164 8.75001 2.89331 9.42085 2.89331 10.1383C2.89331 10.8558 3.30164 11.5208 4.03664 12.0108C4.85331 12.5592 5.92664 12.8333 6.99998 12.8333C8.07331 12.8333 9.14664 12.5592 9.96331 12.0108C10.6983 11.515 11.1066 10.85 11.1066 10.1267C11.1008 9.40918 10.6983 8.74418 9.96331 8.25418Z"
        fill="#6E7682"
      />
    </svg>
  );
};

export const PencilIcon = ({ className, onClick }) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      viewBox="0 0 12 13"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.44975 3.9274L8.57105 6.04869L3.62132 10.9984H1.5V8.87714L6.44975 3.9274ZM7.15685 3.22029L8.2175 2.15963C8.4128 1.96437 8.72935 1.96437 8.9246 2.15963L10.3389 3.57384C10.5341 3.7691 10.5341 4.08569 10.3389 4.28095L9.27815 5.34161L7.15685 3.22029Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const SparklesIcon = ({ className, onClick }) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.8072 8.8978L6.246 7.8927C6.63655 6.9983 7.33945 6.2863 8.21625 5.8971L9.4241 5.36095C9.8081 5.1905 9.8081 4.63184 9.4241 4.46139L8.25395 3.94197C7.3546 3.54276 6.6391 2.80441 6.25525 1.87947L5.81075 0.808365C5.6458 0.410883 5.09659 0.410884 4.93165 0.808365L4.48713 1.87946C4.10328 2.80441 3.38776 3.54276 2.48842 3.94197L1.31829 4.46139C0.934268 4.63184 0.934268 5.1905 1.31829 5.36095L2.52615 5.8971C3.40294 6.2863 4.10585 6.9983 4.49637 7.8927L4.9352 8.8978C5.10388 9.2841 5.6385 9.2841 5.8072 8.8978ZM10.2007 11.3449L10.3241 11.0621C10.5441 10.5578 10.9403 10.1562 11.4347 9.9366L11.8149 9.76765C12.0206 9.6763 12.0206 9.37745 11.8149 9.2861L11.456 9.1266C10.9489 8.9013 10.5456 8.4849 10.3293 7.96345L10.2026 7.6578C10.1142 7.4448 9.81975 7.4448 9.7314 7.6578L9.6047 7.96345C9.3885 8.4849 8.98515 8.9013 8.478 9.1266L8.11905 9.2861C7.91345 9.37745 7.91345 9.6763 8.11905 9.76765L8.49925 9.9366C8.9937 10.1562 9.3899 10.5578 9.6099 11.0621L9.73335 11.3449C9.82365 11.552 10.1103 11.552 10.2007 11.3449Z"
        fill="#969CA6"
      />
    </svg>
  );
};

export const StarIcon = ({ className, onClick }) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.6865 10.9228L8.84262 14.7979C8.72396 15.0473 8.42562 15.1533 8.17629 15.0346C8.12071 15.0082 8.07046 14.9717 8.02812 14.9269L5.07695 11.8113C4.99795 11.7279 4.89265 11.6743 4.77875 11.6594L0.523506 11.1032C0.249689 11.0673 0.0567391 10.8164 0.0925308 10.5426C0.100506 10.4815 0.119698 10.4225 0.149123 10.3684L2.2003 6.59893C2.25521 6.49801 2.2737 6.38126 2.25266 6.26835L1.46671 2.0495C1.41613 1.77803 1.59521 1.51696 1.86668 1.46638C1.92721 1.45511 1.9893 1.45511 2.04982 1.46638L6.26868 2.25233C6.38162 2.27337 6.49837 2.25488 6.59921 2.19998L10.3687 0.1488C10.6113 0.0168086 10.915 0.106442 11.0469 0.349C11.0764 0.403084 11.0955 0.462134 11.1035 0.523184L11.6597 4.77842C11.6746 4.89233 11.7283 4.99763 11.8116 5.07662L14.9273 8.02776C15.1278 8.21768 15.1364 8.53418 14.9465 8.73459C14.9041 8.77934 14.8539 8.81584 14.7983 8.84226L10.9232 10.6862C10.8195 10.7356 10.7359 10.8191 10.6865 10.9228ZM11.3505 12.5288L12.529 11.3503L16.0646 14.8858L14.8861 16.0643L11.3505 12.5288Z"
        fill="#207DF7"
      />
    </svg>
  );
};

export const ArrowRightIcon = ({ className, onClick }) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.43344 6.41685L6.30444 3.28785L7.12939 2.46289L11.6667 7.00019L7.12939 11.5374L6.30444 10.7125L9.43344 7.58352H2.33334V6.41685H9.43344Z"
        fill="#6E7682"
      />
    </svg>
  );
};

export const EllipsistIcon = ({ className, onClick }) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      viewBox="0 0 4 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="2" cy="2" r="2" fill="#969CA6" />
    </svg>
  );
};

export const ChevronRightIcon = ({ className, onClick }) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      viewBox="0 0 11 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.28139 5.33327L4.70539 1.75726L5.64819 0.814453L10.8337 5.99993L5.64819 11.1853L4.70539 10.2425L8.28139 6.6666H0.166992V5.33327H8.28139Z"
        fill="#6E7682"
      />
    </svg>
  );
};

export const LogoutIcon = ({ className, onClick }) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.59668 7.04116C4.59668 6.80199 4.79501 6.60366 5.03418 6.60366H8.23085V1.66866C8.22501 1.38866 8.00335 1.16699 7.72335 1.16699C4.28751 1.16699 1.89001 3.56449 1.89001 7.00033C1.89001 10.4362 4.28751 12.8337 7.72335 12.8337C7.99751 12.8337 8.22501 12.612 8.22501 12.332V7.47283H5.03418C4.78918 7.47866 4.59668 7.28033 4.59668 7.04116Z"
        fill="#F53535"
      />
      <path
        d="M11.9816 6.73176L10.325 5.06926C10.1558 4.90009 9.87581 4.90009 9.70664 5.06926C9.53748 5.23842 9.53748 5.51842 9.70664 5.68759L10.6166 6.59759H8.22498V7.47259H10.6108L9.70081 8.38259C9.53164 8.55176 9.53164 8.83176 9.70081 9.00093C9.78831 9.08843 9.89914 9.12926 10.01 9.12926C10.1208 9.12926 10.2316 9.08843 10.3191 9.00093L11.9758 7.33842C12.1508 7.17509 12.1508 6.90092 11.9816 6.73176Z"
        fill="#F53535"
      />
    </svg>
  );
};

export const SortIcon = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.5 6.45801H2.5C2.15833 6.45801 1.875 6.17467 1.875 5.83301C1.875 5.49134 2.15833 5.20801 2.5 5.20801H17.5C17.8417 5.20801 18.125 5.49134 18.125 5.83301C18.125 6.17467 17.8417 6.45801 17.5 6.45801Z"
        fill="#6E7682"
      />
      <path
        d="M15 10.625H5C4.65833 10.625 4.375 10.3417 4.375 10C4.375 9.65833 4.65833 9.375 5 9.375H15C15.3417 9.375 15.625 9.65833 15.625 10C15.625 10.3417 15.3417 10.625 15 10.625Z"
        fill="#6E7682"
      />
      <path
        d="M11.6666 14.792H8.33325C7.99159 14.792 7.70825 14.5087 7.70825 14.167C7.70825 13.8253 7.99159 13.542 8.33325 13.542H11.6666C12.0083 13.542 12.2916 13.8253 12.2916 14.167C12.2916 14.5087 12.0083 14.792 11.6666 14.792Z"
        fill="#6E7682"
      />
    </svg>
  );
};

export const TrashIcon = ({ className, onClick }) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      viewBox="0 0 14 14"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.08342 3.50033V1.75033C4.08342 1.42816 4.34458 1.16699 4.66675 1.16699H9.33342C9.65559 1.16699 9.91675 1.42816 9.91675 1.75033V3.50033H12.8334V4.66699H11.6667V12.2503C11.6667 12.5725 11.4056 12.8337 11.0834 12.8337H2.91675C2.59458 12.8337 2.33341 12.5725 2.33341 12.2503V4.66699H1.16675V3.50033H4.08342ZM5.25008 2.33366V3.50033H8.75008V2.33366H5.25008Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const NotesIcon = ({ className, onClick }) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.8334 18.3332H4.16675C2.78604 18.3332 1.66675 17.2139 1.66675 15.8332V2.49984C1.66675 2.0396 2.03985 1.6665 2.50008 1.6665H14.1667C14.627 1.6665 15.0001 2.0396 15.0001 2.49984V12.4998H18.3334V15.8332C18.3334 17.2139 17.2142 18.3332 15.8334 18.3332ZM15.0001 14.1665V15.8332C15.0001 16.2934 15.3732 16.6665 15.8334 16.6665C16.2937 16.6665 16.6667 16.2934 16.6667 15.8332V14.1665H15.0001ZM5.00008 5.83317V7.49984H11.6667V5.83317H5.00008ZM5.00008 9.1665V10.8332H11.6667V9.1665H5.00008ZM5.00008 12.4998V14.1665H9.16675V12.4998H5.00008Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const FilterByTagsIcon = ({ className }) => {
  return (
    <svg
      className={className}
      // onClick={onClick}
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.08675 1.75L17.3363 2.92851L18.5148 11.1781L10.8545 18.8384C10.5291 19.1638 10.0015 19.1638 9.67601 18.8384L1.42645 10.5888C1.10101 10.2634 1.10101 9.73575 1.42645 9.41033L9.08675 1.75ZM9.67601 3.51777L3.19422 9.99958L10.2653 17.0707L16.7471 10.5888L15.8633 4.40165L9.67601 3.51777ZM11.4438 8.82108C10.7929 8.17019 10.7929 7.11492 11.4438 6.46404C12.0947 5.81317 13.1499 5.81317 13.8008 6.46404C14.4517 7.11492 14.4517 8.17019 13.8008 8.82108C13.1499 9.47192 12.0947 9.47192 11.4438 8.82108Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const DownloadIcon = ({ className, onClick }) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      viewBox="0 0 14 14"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.75 11.0832H12.25V12.2498H1.75V11.0832ZM7.58333 7.68327L11.1248 4.1418L11.9498 4.96676L7 9.9165L2.05025 4.96676L2.87521 4.1418L6.41667 7.68327V1.1665H7.58333V7.68327Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const FlashCardsIcon = ({ className, onClick }) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      viewBox="0 0 14 14"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.08322 3.49984V1.74984C4.08322 1.42767 4.34439 1.1665 4.66655 1.1665H11.6666C11.9887 1.1665 12.2499 1.42767 12.2499 1.74984V9.9165C12.2499 10.2387 11.9887 10.4998 11.6666 10.4998H9.91655V12.2493C9.91655 12.5718 9.65411 12.8332 9.32925 12.8332H2.33722C2.01284 12.8332 1.75 12.5738 1.75 12.2493L1.75152 4.08368C1.75157 3.76123 2.01404 3.49984 2.33883 3.49984H4.08322ZM5.24988 3.49984H9.91655V9.33317H11.0832V2.33317H5.24988V3.49984ZM4.08322 6.4165V7.58317H7.58322V6.4165H4.08322ZM4.08322 8.74984V9.9165H7.58322V8.74984H4.08322Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const FlashCardsSolidIcon = ({ className, onClick }) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      viewBox="0 0 17 17"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.72361 1.4873L14.7358 2.48904L15.7375 9.50118L9.2262 16.0125C8.94959 16.2891 8.50115 16.2891 8.22447 16.0125L1.21235 9.00031C0.935726 8.72371 0.935726 8.27519 1.21235 7.99859L7.72361 1.4873ZM9.72713 7.49773C10.2803 8.05093 11.1773 8.05093 11.7306 7.49773C12.2838 6.94447 12.2838 6.04748 11.7306 5.49424C11.1773 4.941 10.2803 4.941 9.72713 5.49424C9.17385 6.04748 9.17385 6.94447 9.72713 7.49773Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const UploadIcon = ({ className, onClick }) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 15.8332H17.5V17.4998H2.5V15.8332ZM10.8333 4.85686V14.1665H9.16667V4.85686L4.10744 9.91609L2.92893 8.73759L10 1.6665L17.0711 8.73759L15.8926 9.91609L10.8333 4.85686Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const WardIcon = ({ className, onClick }) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Frame">
        <path
          id="Vector"
          d="M12.6862 12.9228L10.8423 16.7979C10.7236 17.0473 10.4253 17.1533 10.1759 17.0346C10.1203 17.0082 10.0701 16.9717 10.0278 16.9269L7.07658 13.8113C6.99758 13.7279 6.89228 13.6743 6.77838 13.6594L2.52314 13.1032C2.24932 13.0673 2.05637 12.8164 2.09216 12.5426C2.10014 12.4815 2.11933 12.4225 2.14876 12.3684L4.19993 8.59893C4.25484 8.49801 4.27333 8.38126 4.25229 8.26835L3.46634 4.0495C3.41576 3.77803 3.59484 3.51696 3.86631 3.46638C3.92684 3.45511 3.98893 3.45511 4.04946 3.46638L8.26831 4.25233C8.38126 4.27337 8.49801 4.25488 8.59884 4.19998L12.3683 2.1488C12.6109 2.01681 12.9146 2.10644 13.0465 2.349C13.076 2.40308 13.0952 2.46213 13.1031 2.52318L13.6593 6.77842C13.6743 6.89233 13.7279 6.99763 13.8113 7.07662L16.9269 10.0278C17.1274 10.2177 17.136 10.5342 16.9461 10.7346C16.9038 10.7793 16.8535 10.8158 16.7979 10.8423L12.9228 12.6862C12.8191 12.7356 12.7355 12.8191 12.6862 12.9228ZM13.3502 14.5288L14.5287 13.3503L18.0643 16.8858L16.8858 18.0643L13.3502 14.5288Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

export const LightningBoltIcon = ({ className, onClick }) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Frame">
        <path
          id="Vector"
          d="M10.833 8.33301H16.6663L9.16634 19.1663V11.6663H3.33301L10.833 0.833008V8.33301Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

export const KeepQuizIcon = ({ className, onClick }) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      viewBox="0 0 16 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Frame">
        <path
          id="Vector"
          d="M6.66746 10.1136L12.7957 3.98535L13.7385 4.92816L6.66746 11.9992L2.4248 7.7566L3.36761 6.81381L6.66746 10.1136Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

export const EditQuizIcon = ({ className, onClick }) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      viewBox="0 0 18 18"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Frame">
        <path
          id="Vector"
          d="M5.43198 13.4974H2.25V10.3155L10.8263 1.7392C11.1192 1.44631 11.594 1.44631 11.8869 1.7392L14.0083 3.86052C14.3012 4.15341 14.3012 4.62829 14.0083 4.92118L5.43198 13.4974ZM2.25 14.9974H15.75V16.4974H2.25V14.9974Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};
export const DeleteQuizIcon = ({ className, onClick }) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      viewBox="0 0 18 18"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Frame">
        <path
          id="Vector"
          d="M5.25 4.5V2.25C5.25 1.83579 5.58579 1.5 6 1.5H12C12.4142 1.5 12.75 1.83579 12.75 2.25V4.5H16.5V6H15V15.75C15 16.1642 14.6642 16.5 14.25 16.5H3.75C3.33579 16.5 3 16.1642 3 15.75V6H1.5V4.5H5.25ZM6.75 3V4.5H11.25V3H6.75Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

export const TakeQuizIcon = ({ className, onClick }) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_4376_11438)">
        <rect width="100" height="100" rx="50" fill="#F7F7F8" />
        <g filter="url(#filter0_d_4376_11438)">
          <rect
            x="18"
            y="33"
            width="44"
            height="71"
            rx="4"
            fill="white"
            fill-opacity="0.65"
            shape-rendering="crispEdges"
          />
        </g>
        <g filter="url(#filter1_d_4376_11438)">
          <rect x="40" y="44" width="45" height="57" rx="4" fill="white" />
          <rect x="44" y="66" width="35" height="5" rx="2.5" fill="#EAEBEB" />
          <rect x="44" y="74" width="23" height="5" rx="2.5" fill="#EAEBEB" />
          <rect x="44" y="51" width="13" height="11" rx="1" fill="#EFF0F0" />
        </g>
        <g clip-path="url(#clip1_4376_11438)">
          <path
            d="M22.3338 21.8057L23.213 23.4542L24.8615 24.3334L23.213 25.2127L22.3338 26.8612L21.4545 25.2127L19.806 24.3334L21.4545 23.4542L22.3338 21.8057ZM16.3338 23.889L18.1115 27.2223L21.4449 29.0001L18.1115 30.7779L16.3338 34.1112L14.556 30.7779L11.2227 29.0001L14.556 27.2223L16.3338 23.889ZM24.1115 31.889L23.0005 29.8057L21.8893 31.889L19.806 33.0001L21.8893 34.1112L23.0005 36.1945L24.1115 34.1112L26.1949 33.0001L24.1115 31.889Z"
            fill="white"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_4376_11438"
          x="14"
          y="30"
          width="52"
          height="79"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.36 0 0 0 0 0.408 0 0 0 0 0.44 0 0 0 0.04 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_4376_11438"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_4376_11438"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_4376_11438"
          x="24"
          y="32"
          width="77"
          height="89"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="8" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.36 0 0 0 0 0.408 0 0 0 0 0.44 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_4376_11438"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_4376_11438"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_4376_11438">
          <rect width="100" height="100" rx="50" fill="white" />
        </clipPath>
        <clipPath id="clip1_4376_11438">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(11 21)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const PinLogo = ({
  // iconColor = '#6E7682',
  className
}) => {
  return (
    <svg
      className={className}
      // width="14"
      // height="14"
      viewBox="0 0 14 19"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.4997 0.25V2.08333H11.583V7.58333L13.4163 10.3333V12.1667H7.91634V18.5833H6.08301V12.1667H0.583008V10.3333L2.41634 7.58333V2.08333H1.49967V0.25H12.4997ZM4.24967 2.08333V8.13847L2.7864 10.3333H11.2129L9.74967 8.13847V2.08333H4.24967Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const ThumbsUp = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 16 15"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.73316 5.8329H14C14.7364 5.8329 15.3333 6.42986 15.3333 7.16622V8.56915C15.3333 8.74328 15.2992 8.91575 15.2329 9.07682L13.17 14.0867C13.0671 14.3365 12.8236 14.4995 12.5535 14.4995H1.33329C0.965106 14.4995 0.666626 14.2011 0.666626 13.8329V7.16622C0.666626 6.79804 0.965106 6.49957 1.33329 6.49957H3.65452C3.87114 6.49957 4.07425 6.39432 4.19917 6.21736L7.83476 1.06692C7.92976 0.93234 8.10883 0.887334 8.25616 0.961004L9.46556 1.56569C10.1666 1.91624 10.5287 2.70796 10.3354 3.46758L9.73316 5.8329ZM4.66663 7.55788V13.1662H12.107L14 8.56915V7.16622H9.73316C8.86336 7.16622 8.22649 6.34687 8.44103 5.50396L9.04323 3.13864C9.08189 2.98672 9.00949 2.82837 8.86923 2.75826L8.42849 2.53788L5.28846 6.98627C5.12186 7.22228 4.9089 7.41575 4.66663 7.55788ZM3.33329 7.83288H1.99996V13.1662H3.33329V7.83288Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const ThumbsDown = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 16 15"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.26674 9.16667H1.99996C1.26358 9.16667 0.666626 8.56973 0.666626 7.83333V6.43047C0.666626 6.25627 0.700746 6.0838 0.767053 5.9228L2.82997 0.912833C2.93283 0.663033 3.17627 0.5 3.44642 0.5H14.6666C15.0348 0.5 15.3333 0.79848 15.3333 1.16667V7.83333C15.3333 8.20153 15.0348 8.5 14.6666 8.5H12.3454C12.1288 8.5 11.9257 8.60527 11.8008 8.7822L8.16516 13.9327C8.07016 14.0672 7.89109 14.1123 7.74376 14.0385L6.53438 13.4339C5.83328 13.0833 5.47121 12.2916 5.66459 11.532L6.26674 9.16667ZM11.3333 7.44167V1.83333H3.89289L1.99996 6.43047V7.83333H6.26674C7.13656 7.83333 7.77343 8.65267 7.55889 9.4956L6.95669 11.8609C6.91803 12.0129 6.99043 12.1712 7.13069 12.2413L7.57143 12.4617L10.7115 8.01333C10.8781 7.77727 11.091 7.5838 11.3333 7.44167ZM12.6666 7.16667H14V1.83333H12.6666V7.16667Z"
        fill="currentColor"
      />
    </svg>
  );
};