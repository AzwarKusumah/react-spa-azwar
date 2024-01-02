import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUserLogged, login, putAccessToken } from "../../utils/network-data";
import LocaleContext from "../../components/contexts/LocaleContext";

import useInput from "../../components/hooks/useInput";
import AuthContext from "../../components/contexts/AuthContext";

function LoginPage() {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  const navigate = useNavigate();
  const { locale } = useContext(LocaleContext);
  const { setAuth } = useContext(AuthContext);

  const onSubmitHandlerEvent = async (event) => {
    event.preventDefault();

    try {
      const loginResult = await login({ email, password });

      if (!loginResult.error) {
        const accessToken = loginResult.data.accessToken;
        putAccessToken(accessToken);

        const userLoggedResult = await getUserLogged();

        setAuth(userLoggedResult.error ? null : userLoggedResult.data);
        navigate("/");
      }
    } catch (error) {
      alert("error");
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={onSubmitHandlerEvent}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={onEmailChange}
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              value={password}
              onChange={onPasswordChange}
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              {locale === "id" ? (
                <>
                  <span>Belum punya akun ?</span>
                  <Link
                    to="/register"
                    className="label-text-alt link link-hover"
                  >
                    Daftar disini
                  </Link>
                </>
              ) : (
                <>
                  <span>Dont have an account ?</span>
                  <Link
                    to="/register"
                    className="label-text-alt link link-hover"
                  >
                    Register here
                  </Link>
                </>
              )}
            </label>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
