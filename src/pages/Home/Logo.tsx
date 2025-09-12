interface Props{
  size:string
  top:string
}

const Logo = ({size,top}:Props) => {
  return (
    <div
      className="img"
      style={{ 
        cursor: "pointer",
        width: `${size}`, 
        top: `${top}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'clamp(0.8rem, 1.5vw, 1.5rem)',
        fontWeight: '700',
        color: '#fff',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        fontFamily: 'Oswald, sans-serif',
        background: 'linear-gradient(135deg, rgba(74, 144, 226, 0.9), rgba(80, 200, 120, 0.9))',
        borderRadius: '50%',
        border: '2px solid rgba(255, 255, 255, 0.3)',
        backdropFilter: 'blur(10px)'
      }}
    >
      Home
    </div>
  );
};

export default Logo;
