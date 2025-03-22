import Figure from 'react-bootstrap/Figure';

function HeaderLogo() {
return (
    <h1
      style={{
        backgroundColor: "#ccc", // Gray background
        color: "#000", // Text color
        padding: "20px 0", // Increased padding (doubled from 10px)
        textAlign: "center", // Center the text
        margin: "0", // Remove default margin
            width: "100%", // Full width
        fontSize: "100px"
      }}
    >
      The Generics
    </h1>
  );
}
export default HeaderLogo;