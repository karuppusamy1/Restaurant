import "./Contact.css" 
  
 const Contact = () => { 
     return ( 
         <section id="contact" className="contact">
          
          <div className="container"> 
  
          <div className="section-title"> 
                     <h2><span>Contact</span> Us</h2> 
                     <p> </p> 
                 </div> 
             </div>  
         
  
             
  
             <div className="container mt-5"> 
  
                 <div className="info-wrap"> 
                     <div className="row"> 
                         <div className="col-lg-3 col-md-6 info"> 
                             <i className="bi bi-geo-alt"></i> 
                             <h4>Location:</h4> 
                             <p>Los Angeles<br />California,United States</p> 
                         </div> 
  
                         <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0"> 
                             <i className="bi bi-clock"></i> 
                             <h4>Open Hours:</h4> 
                             <p>Monday-Saturday:<br />11:00 AM - 2300 PM</p> 
                         </div> 
  
                         <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0"> 
                             <i className="bi bi-envelope"></i> 
                             <h4>Email:</h4> 
                             <p>infp@example.com<br />contact@example.com</p> 
                         </div> 
  
                         <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0"> 
                             <i className="bi bi-phone"></i> 
                             <h4>Call:</h4> 
                             <p>(555)123 1234<br />(555)635 3566</p> 
                         </div> 
                     </div> 
                 </div> 

                 <div className="container mt-5">
                     <div className="wrap">
                          <div className="map">
                                 <iframe
                                    style={{ border: '0', width: '100%', height: '350px' }}
                                    src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=california,United States&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                    title="map"
                                    className="contact-map"
                                 ></iframe>
                           </div>
                           <form
                              action="forms/contact.php"
                              method="post"
                              role="form"
                              className="php-email-form"
                             >
                             <div className="row">
                                 <div className="col-md-6 form-group">
                                     <input
                                         type="text"
                                         name="name"
                                         className="form-control"
                                          id="name"
                                          placeholder="Your Name"
                                          required=""
                                        />
                                   </div>
                                   <div className="col-md-6 form-group mt-3 mt-md-0">
                                      <input
                                         type="email"
                                         className="form-control"
                                         name="email"
                                         id="email"
                                         placeholder="Your Email"
                                         required=""
                                        />
                                  </div>
                             </div>
                              <div className="form-group mt-3">
                                  <input
                                     type="text"
                                     className="form-control"
                                     name="subject"
                                     id="subject"
                                     placeholder="Subject"
                                     required=""
                                     />
                               </div>
                               <div className="form-group mt-3">
                                  <textarea
                                     className="form-control"
                                     name="message"
                                     rows="5"
                                     placeholder="Message"
                                     required=""
                                    ></textarea>
                              </div>

                              <div className="text-center">
                                  <button type="submit">Send Message</button>
                              </div>
                         </form>
                     </div>
                 </div>
  
                 
             </div> 
         </section> 
     ) 
 } 
  
 export default Contact;