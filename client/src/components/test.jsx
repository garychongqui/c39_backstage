import React from 'react';
const test = () => {
  return (
    <div className="container">
      <div className="main-area">
        <form className="form" /* onSubmit={handleLogin}*/>
          <div className="inner-form">
            <h1 className="text-ob">Welcome Backstage</h1>
            <input
              type="email"
              name="email"
              id=""
              className="text-input"
              placeholder="Enter your e-mail"
              // onChange={handleChange}
            />
          </div>
          <div className="inner-form">
            <input
              type="password"
              name="password"
              id=""
              className="text-input"
              placeholder="Enter your password"
              // onChange={handleChange}
            />
          </div>
          <section>
            <button className="btn-1" type="button">
              PRIMARY
            </button>
          </section>
          <section>
            <button className="btn-2" type="button">
              SECONDARY
            </button>
          </section>
          <section>
            <button className="btn-3" type="button">
              3RD
            </button>
          </section>
          <section>
            <button className="btn-4" type="button">
              4TH
            </button>
          </section>
          <section>
            <button className="btn-5" type="button">
              5TH
            </button>
          </section>

          <div></div>
        </form>
      </div>
    </div>
  );
};

export default test;