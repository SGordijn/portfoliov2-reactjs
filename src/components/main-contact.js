import React from 'react';

export class MainContact extends React.Component {
  render() {
    return (
      <main className="main" role="main">
        <section>
          <article className="article-title flex-row-around flex-align-items-center" data-aos="fade-down" data-aos-duration="1500">
            <h1 className="main-title">Contact</h1>
          </article>

          <article className="article-full flex-column-around flex-align-items-center" data-aos="fade-up" data-aos-duration="1500">
            <div className="full-widget">
              <h2 className="widget-title text-align-center">WARNING: CONTACTFORM NOT OPERATIONAL! HEAD TO THE FOOTER FOR CONTACT INFORMATION!</h2>
              <div className="formcontainer flex-column-around flex-align-items-center">
                <form action="" method="post">
                  <label>First name*</label>
                  <input
                  type="text"
                  id="fname"
                  name="fname"
                  placeholder="Type Here"
                  required/>

                  <label>Last name*</label>
                  <input
                  type="text"
                  id="lname"
                  name="lname"
                  placeholder="Type Here"
                  required/>

                  <label>Email*</label>
                  <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Type Here"
                  required/>

                  <label>Subject*</label>
                  <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Type Here"
                  required/>

                  <label>Message*</label>
                  <textarea
                  name="message"
                  id="message"
                  placeholder="Type Here"
                  required></textarea>

                  <input type="submit" id="submit" className="btn btn-success btn-form" name="submit" value="Submit"/>
                </form>
              </div>
            </div>
          </article>
        </section>
      </main>
    );
  }
}

export default MainContact;
