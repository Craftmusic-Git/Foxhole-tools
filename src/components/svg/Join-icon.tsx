type JoinIconProps = {
    className?: string;
}

const JoinIcon = ({ className }: JoinIconProps) => {
    return <svg viewBox="0 0 24 24" fill="none" className={ className }>
        <path d="M20 18L17 18M17 18L14 18M17 18V15M17 18V21M11 21H4C4 17.134 7.13401 14 11 14C11.695 14 12.3663 14.1013 13 14.2899M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
}

export default JoinIcon;