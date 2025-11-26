"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/shared/components/button";
import Input from "@/shared/components/input";
import NavbarLogo from "@/features/navbar-top/components/navbar-logo";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "@/shared/components/icon";

export default function LoginPage() {
  const router = useRouter();
  const [isRegistering, setIsRegistering] = useState(false);

  // Login State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Register State
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("Male");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/feed");
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/feed");
  };

  const toggleView = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div className="min-h-screen w-full bg-[#ff5e3a] flex items-center justify-center p-4 overflow-hidden relative">

      <div className="w-full max-w-[1100px] flex flex-col md:flex-row items-center gap-10 md:gap-20">

        {/* Left Column */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-1 text-white flex flex-col justify-center items-start space-y-8 max-w-[500px]"
        >
          <div className="flex items-center space-x-3">
            <NavbarLogo title="OLYMPUS" className="text-3xl md:text-4xl" />
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest opacity-70 font-bold">Social</span>
              <span className="text-[10px] uppercase tracking-widest opacity-70 font-bold">Network</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-light leading-tight">
            Welcome to the Biggest Social Network in the World
          </h1>

          <p className="text-base md:text-lg opacity-90 leading-relaxed font-light">
            We are the best and biggest social network with 5 billion active users all around the world. Share you thoughts, write blog posts, show your favourite music via Stopify, earn badges and much more!
          </p>

          <div className="pt-2">
            {!isRegistering && (
              <Button
                variant="primary"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-[#ff5e3a] px-10 py-6 h-auto text-sm font-bold uppercase transition-all rounded-md"
                onClick={toggleView}
              >
                Register Now!
              </Button>
            )}
            {isRegistering && (
              <Button
                variant="primary"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-[#ff5e3a] px-10 py-6 h-auto text-sm font-bold uppercase transition-all rounded-md"
                onClick={toggleView}
              >
                Login Now!
              </Button>
            )}
          </div>
        </motion.div>

        {/* Right Column - Forms */}
        <div className="w-full md:w-[400px] relative">
          <AnimatePresence mode="wait">
            {!isRegistering ? (
              <motion.div
                key="login"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 50, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full bg-white p-8 md:p-10 rounded-xl shadow-2xl relative"
              >
                <div className="mb-8 text-center md:text-left">
                  <h2 className="text-xl font-bold text-[#515365] mb-2">Login to your Account</h2>
                </div>

                <form onSubmit={handleLogin} className="space-y-5">
                  <Input
                    placeholder="Your Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full"
                  />
                  <Input
                    placeholder="Your Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full"
                  />

                  <div className="flex items-center justify-between text-xs text-[#888da8] mt-2">
                    <label className="flex items-center space-x-2 cursor-pointer select-none">
                      <input type="checkbox" className="rounded border-gray-300 text-[#ff5e3a] focus:ring-[#ff5e3a]" />
                      <span>Remember Me</span>
                    </label>
                    <a href="#" className="hover:text-[#ff5e3a] transition-colors">Forgot my Password</a>
                  </div>

                  <Button
                    variant="primary"
                    className="w-full mt-4 h-12 text-sm font-bold shadow-lg shadow-orange-500/30 rounded-md"
                    onClick={() => router.push('/feed')}
                  >
                    Login
                  </Button>

                  <div className="relative flex py-4 items-center">
                    <div className="flex-grow border-t border-gray-200"></div>
                    <span className="flex-shrink-0 mx-4 text-gray-400 text-[10px] font-bold uppercase">OR</span>
                    <div className="flex-grow border-t border-gray-200"></div>
                  </div>

                  <div className="space-y-3">
                    <Button
                      variant="facebook"
                      className="w-full h-10 text-xs font-bold shadow-sm"
                      onClick={() => { }}
                    >
                      <span>Login with Facebook</span>
                    </Button>
                    <Button
                      variant="twitter"
                      className="w-full h-10 text-xs font-bold shadow-sm"
                      onClick={() => { }}
                    >
                      <span>Login with Twitter</span>
                    </Button>
                  </div>

                  <div className="mt-6 text-center">
                    <p className="text-xs text-[#888da8]">
                      Don't you have an account? <button type="button" onClick={toggleView} className="text-[#ff5e3a] font-bold hover:underline">Register Now!</button> it's really simple and you can start enjoing all the benefits!
                    </p>
                  </div>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="register"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 50, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full bg-white p-8 md:p-10 rounded-xl shadow-2xl relative"
              >
                <div className="mb-6 text-center md:text-left border-b border-gray-100 pb-4">
                  <h2 className="text-xl font-bold text-[#515365]">Register to Olympus</h2>
                </div>

                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="flex space-x-4">
                    <Input
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-1/2"
                    />
                    <Input
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-1/2"
                    />
                  </div>

                  <Input
                    placeholder="Your Email"
                    type="email"
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
                    className="w-full"
                  />

                  <Input
                    placeholder="Your Password"
                    type="password"
                    value={regPassword}
                    onChange={(e) => setRegPassword(e.target.value)}
                    className="w-full"
                  />

                  <Input
                    placeholder="Your Birthday"
                    type="text"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                    className="w-full"
                    icon={<Icon name="olymp-calendar-icon" className="w-5 h-5" />}
                  />

                  <div className="relative">
                    <select
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      className="w-full h-10 px-3 rounded-md border border-[#e6e8f2] text-sm text-[#4b4f66] focus:outline-none focus:ring-2 focus:ring-[#d9ccff] appearance-none bg-white"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-[#8f92a3]">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                    </span>
                  </div>

                  <div className="flex items-center space-x-2 text-xs text-[#888da8] mt-4">
                    <input
                      type="checkbox"
                      checked={termsAccepted}
                      onChange={(e) => setTermsAccepted(e.target.checked)}
                      className="rounded border-gray-300 text-[#7c5ac2] focus:ring-[#7c5ac2]"
                    />
                    <span>I accept the <a href="#" className="text-[#ff5e3a]">Terms and Conditions</a> of the website</span>
                  </div>

                  <Button
                    variant="purple"
                    className="w-full mt-6 h-12 text-sm font-bold shadow-lg shadow-purple-500/30 rounded-md"
                    onClick={() => router.push('/feed')}
                  >
                    Complete Registration!
                  </Button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
