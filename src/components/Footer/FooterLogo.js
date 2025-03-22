import FooterLinks from "./FooterLinks";


function FooterLogo() {

    
    return (
    <footer className="text-dark py-4" style={{ backgroundColor: '#ADD8E6' }}>
      <div className="d-flex justify-content-between align-items-center">
        
        <h1 style={{ textAlign: 'left' }}>The Generics</h1>
        
        
        <FooterLinks />
      </div>
    </footer>
  );
}

export default FooterLogo;