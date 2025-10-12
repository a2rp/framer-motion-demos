const IndianFlag = ({ width = 24, height = 24 }) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 3 2"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M0,0 H3 V2 H0 Z" fill="#f93" />
        <path d="M0,0.667 H3 V1.333 H0 Z" fill="#fff" />
        <path d="M0,1.333 H3 V2 H0 Z" fill="#128807" />
        <circle cx="1.5" cy="1" r="0.2" fill="#008" />
    </svg>
);

export default IndianFlag;