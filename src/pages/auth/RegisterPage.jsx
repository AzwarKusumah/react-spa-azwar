import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../utils/network-data";
import { ToastContainer, toast } from "react-toastify";
import { useContext } from "react";
import LocaleContext from "../../components/contexts/LocaleContext";

import useInput from "../../components/hooks/useInput";

function RegisterPage() {
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [confirmPassword, onConfirmPasswordChange] = useInput("");

  const navigate = useNavigate();
  const { locale } = useContext(LocaleContext);

  const onSubmitHandlerEvent = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Konfirmasi password tidak sesuai");
      return;
    }

    register({ name, email, password })
      .then((result) => {
        if (!result.error) {
          toast.success("Akun berhasil dibuat");
          navigate("/login");
        }
      })
      .catch(() => {
        alert("error");
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <ToastContainer />
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={onSubmitHandlerEvent}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Nama</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={onNameChange}
              placeholder="nama"
              className="input input-bordered"
              required
            />
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
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={onConfirmPasswordChange}
              placeholder="confirm password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
