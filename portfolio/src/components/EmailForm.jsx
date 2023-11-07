import React from 'react'

function EmailForm() {
  const email = "estefi.monumental@gmail.com"

  return (
    <form target="_blank" action={`https://formsubmit.co/${email}`} method="POST">
      <div className="form-group">
        <div className="form-row">
          <div className="col">
            <input type="text" name="name" className="form-control" placeholder="Full Name" required/>
          </div>
          <div class="col">
            <input type="email" name="email" className="form-control" placeholder="Email Address" required/>
          </div>
        </div>
      </div>
      <div className="form-group">
        <textarea placeholder="Your Message" className="form-control" name="message" rows="6" required></textarea>
      </div>
      <button type="submit" className="">SEND MESSAGE</button>
    </form>
  )
}

export default EmailForm