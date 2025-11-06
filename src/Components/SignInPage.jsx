import React, { useState } from "react";
import "./SignInPage.css";
import GoogleLogo from "../assets/google.png";
import FacebookLogo from "../assets/facebook.png";
import PeopleIllustration from "../assets/SignIn.png";

function SignInPage() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="signin-container container-fluid py-5">
  <div className="row align-items-center justify-content-center text-center text-md-start">

      
        <div className="col-md-6 ps-md-5 text-start mb-5 mb-md-0">
          <h2 className="fw-bold display-6">
            Explore your <span className="text-hobby-color">hobby</span>{" "}
            or <span className="text-passion-color">passion</span>
          </h2>
          <p className="mt-4 text-secondary lh-lg">
            Sign-in to interact with a community of fellow hobbyists and an
            eco-system of experts, teachers, suppliers, classes, and workshops.
            Your hobby may be about visual or performing arts, sports, games,
            gardening, cooking, or outdoor activities…
          </p>
          <p className="text-secondary lh-lg">
            If you are an expert or a seller, you can add your listing and
            promote yourself, your students, products, or services. Hop on your
            hobbyhorse and enjoy the ride.
          </p>
          <img
            src={PeopleIllustration}
            alt="Hobby community"
            className="img-fluid mt-4 illustration"
          />
        </div>

     
        <div className="col-md-5 offset-md-1">
          <div className="card p-4 card-bgc shadow-sm rounded-4 border-0">

            <div className="d-flex justify-content-around mb-4">
              <h5
                className={`fw-bold pb-1 cursor-pointer ${
                  isSignIn ? "border-bottom border-3 border-primary" : "text-muted"
                }`}
                onClick={() => setIsSignIn(true)}
                style={{ cursor: "pointer" }}
              >
                Sign In
              </h5>
              <h5
                className={`pb-1 cursor-pointer ${
                  !isSignIn ? "border-bottom border-3 border-primary fw-bold" : "text-muted"
                }`}
                onClick={() => setIsSignIn(false)}
                style={{ cursor: "pointer" }}
              >
                Join In
              </h5>
            </div>

    
            <button className="btn btn-outline-secondary w-100 mb-3 d-flex align-items-center justify-content-center gap-2">
              <img src={GoogleLogo} alt="Google" height="20" /> Continue with Google
            </button>

            <button className="btn btn-outline-secondary w-100 mb-3 d-flex align-items-center justify-content-center gap-2">
              <img src={FacebookLogo} alt="Facebook" height="20" /> Continue with Facebook
            </button>

            <div className="text-center text-muted my-3 position-relative">
              <hr />
              <span className="position-absolute top-50 start-50 translate-middle bg-white px-3 small">
                Or connect with
              </span>
            </div>

            {/* FORM */}
            <form>
              <input
                type="email"
                className="form-control mb-3 py-2"
                placeholder="Email"
              />
              <input
                type="password"
                className="form-control mb-3 py-2"
                placeholder="Password"
              />

    
              {isSignIn ? (
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="remember"
                    />
                    <label className="form-check-label" htmlFor="remember">
                      Remember me
                    </label>
                  </div>
                  <a href="#" className="small text-muted">
                    Forgot password?
                  </a>
                </div>
              ) : (
                <p className="small text-muted text-center mb-3">
                  By continuing, you agree to our{" "}
                  <a href="#" className="text-decoration-none text-primary">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-decoration-none text-primary">
                    Privacy Policy
                  </a>.
                </p>
              )}

              <button className="btn btn-dark w-100 py-2 rounded-3">
                {isSignIn ? "Continue" : "Agree and Continue"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
