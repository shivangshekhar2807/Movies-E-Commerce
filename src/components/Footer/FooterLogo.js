import FooterLinks from "./FooterLinks";


function FooterLogo() {
//      return (
//     <footer className="text-dark text-center py-4" style={{ backgroundColor: '#ADD8E6' }}>
//       <h1 className="ms-3" style={{ textAlign: 'left' }}>The Generics</h1>
//       <FooterLinks></FooterLinks>
//     </footer>
    //   );
    
    return (
    <footer className="text-dark py-4" style={{ backgroundColor: '#ADD8E6' }}>
      <div className="d-flex justify-content-between align-items-center">
        {/* Left aligned text */}
        <h1 style={{ textAlign: 'left' }}>The Generics</h1>
        
        {/* FooterLinks aligned to the right */}
        <FooterLinks />
      </div>
    </footer>
  );
}

export default FooterLogo;