interface CircleProps {
    id: number;
    isActive?: boolean;
}

const Circle = ({ id, isActive = true }: CircleProps) => {
    const colors = isActive
        ? { fill: 'url(#grad1)', stroke: '#FDFDFD' }
        : { fill: '#FDFDFD', stroke: 'url(#grad1)' };

    return (
        <svg width="54" height="20" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" id={`circle-${id}`}>
            <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#00c5de" stopOpacity={1} />
                    <stop offset="100%" stopColor="#0b7fb0" stopOpacity={1} />
                </linearGradient>
            </defs>
            <circle cx="9" cy="9" r="8" fill={colors.fill}
                stroke="url(#grad1)" strokeWidth={1} />
            <circle cx="9" cy="9" r="4" fill={colors.stroke} />
        </svg>
    );
};

export default Circle;
