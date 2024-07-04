import './Header.css'

export const Header = () => {
  return (
    <>
      <header>
        {/* <img className="logo" src="/Rick-and-Morty-logo.png" alt="" /> */}
        <h1 className='title'><span className='rick'><span className='first-letter'>R</span>ick</span> <span className='and'>and</span> <span className='morty'><span className='letter-m'>M</span>ort<span className='ultimate-letter'>y</span></span></h1>
        <h3 className='subtitle'>characters</h3>
      </header>
    </>
  );
};
