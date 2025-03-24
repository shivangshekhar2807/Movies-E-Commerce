import "./ContactUs.css";

function ContactUs() {


   async function handleUserDetailProblem(event) {
        event.preventDefault();
        const name = event.target.elements["name"].value;
        const email = event.target.elements["email"].value;
        const phone = event.target.elements["phone"].value;
        
        const sendObj = {
            name: name,
            email: email,
            phone:phone,
        }
       
       try {
           const postedData = await fetch("https://movies-e-commerce-default-rtdb.firebaseio.com/userdetails.json", {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json' 
           },
           body:JSON.stringify(sendObj)
           })
           if (!postedData.ok) {
               throw new Error("somthing wrong in posting user detail")
           }
       }
       catch (error) {
           console.log(error.message);
       }
    
       

  }


   return (
    <div className="contact-container">
      <form className="contact-form" onSubmit={handleUserDetailProblem}>
        <h2 className="form-title">Contact Us</h2>

        <div className="form-group">
          <label className="form-label">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Email</label>
          <input
             id="email"
            type="email"
            placeholder="Enter your email"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Phone Number</label>
          <input
             id="phone"
            type="tel"
            placeholder="Enter your phone number"
            className="form-input"
          />
        </div>

        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
    </div>
  );

    
}
export default ContactUs;