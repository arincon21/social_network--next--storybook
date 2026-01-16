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
    <div className="min-h-screen w-full flex overflow-hidden">

      {/* Left Column - Dark Branding Section */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="hidden md:flex md:w-1/2 bg-[#515365] flex-col justify-center items-center p-12 relative overflow-hidden"
      >
        {/* Decorative circles */}
        <div className="absolute top-[-10%] right-[-5%] w-64 h-64 rounded-full bg-white/5"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 rounded-full bg-black/5"></div>

        <div className="relative z-10 max-w-[500px] space-y-8">
          <div className="flex items-center space-x-4">
            <NavbarLogo title="OLYMPUS" className="text-4xl md:text-5xl text-white drop-shadow-md" />
            <div className="flex flex-col border-l border-white/30 pl-4">
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/80 font-bold">Social</span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/80 font-bold">Network</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-thin leading-tight tracking-tight text-white">
            Welcome to the <span className="font-bold">Biggest Social Network</span> in the World
          </h1>

          <p className="text-lg leading-relaxed font-light text-white/90">
            We are the best and biggest social network with 5 billion active users all around the world. Share your thoughts, write blog posts, show your favourite music via Stopify, earn badges and much more!
          </p>

          <div className="pt-4">
            <AnimatePresence mode="wait">
              {!isRegistering ? (
                <motion.div
                  key="register-btn"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <Button
                    variant="primary"
                    className="bg-[#ff5e3a] border-none hover:bg-[#ff763a] px-12 py-7 h-auto text-sm font-bold uppercase transition-all duration-300 rounded-md shadow-lg hover:shadow-xl hover:-translate-y-1"
                    onClick={toggleView}
                  >
                    Register Now!
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  key="login-btn"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <Button
                    variant="primary"
                    className="bg-[#ff5e3a] border-none hover:bg-[#ff763a] px-12 py-7 h-auto text-sm font-bold uppercase transition-all duration-300 rounded-md shadow-lg hover:shadow-xl hover:-translate-y-1"
                    onClick={toggleView}
                  >
                    Login Now!
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Right Column - Light Form Section */}
      <div className="w-full md:w-1/2 bg-[#edf2f6] flex items-center justify-center p-4 md:p-12">
        <div className="w-full max-w-[450px]">
          <AnimatePresence mode="wait">
            {!isRegistering ? (
              <motion.div
                key="login"
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: -90, opacity: 0 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 20 }}
                className="w-full bg-white p-10 md:p-12 rounded-sm relative overflow-hidden border border-[#e6ecf5]"
              >
                <div className="mb-10 text-center md:text-left">
                  <h2 className="text-2xl font-bold text-[#515365] mb-2">Login to your Account</h2>
                  <p className="text-sm text-[#888da8]">Welcome back! Please enter your details.</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                  <Input
                    placeholder="Your Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white border-[#e6ecf5] focus:border-[#ff5e3a] transition-all duration-300 h-12 rounded-md"
                    icon={<Icon name="olymp-happy-face-icon" className="w-5 h-5 text-[#888da8]" />}
                  />
                  <Input
                    placeholder="Your Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-white border-[#e6ecf5] focus:border-[#ff5e3a] transition-all duration-300 h-12 rounded-md"
                    icon={<Icon name="olymp-lock-icon" className="w-5 h-5 text-[#888da8]" />}
                  />

                  <div className="flex items-center justify-between text-xs text-[#888da8] mt-2">
                    <label className="flex items-center space-x-2 cursor-pointer select-none group">
                      <input type="checkbox" className="rounded border-gray-300 text-[#ff5e3a] focus:ring-[#ff5e3a] transition-colors" />
                      <span className="group-hover:text-[#515365] transition-colors">Remember Me</span>
                    </label>
                    <a href="#" className="hover:text-[#ff5e3a] transition-colors font-medium">Forgot my Password</a>
                  </div>

                  <Button
                    variant="primary"
                    className="w-full mt-6 h-14 text-sm font-bold rounded-md transition-all duration-300 transform hover:-translate-y-0.5"
                    onClick={() => router.push('/feed')}
                  >
                    Login
                  </Button>

                  <div className="relative flex py-6 items-center">
                    <div className="flex-grow border-t border-[#e6ecf5]"></div>
                    <span className="flex-shrink-0 mx-4 text-[#888da8] text-[10px] font-bold uppercase tracking-wider">OR LOGIN WITH</span>
                    <div className="flex-grow border-t border-[#e6ecf5]"></div>
                  </div>

                  <div className="flex space-x-4">
                    <Button
                      variant="facebook"
                      className="flex-1 h-12 text-xs font-bold transition-all rounded-md"
                      onClick={() => { }}
                    >
                      <span>Facebook</span>
                    </Button>
                    <Button
                      variant="twitter"
                      className="flex-1 h-12 text-xs font-bold transition-all rounded-md"
                      onClick={() => { }}
                    >
                      <span>Twitter</span>
                    </Button>
                  </div>

                  <div className="mt-8 text-center">
                    <p className="text-xs text-[#888da8]">
                      Don&apos;t have an account? <button type="button" onClick={toggleView} className="text-[#ff5e3a] font-bold hover:underline">Register Now!</button>
                    </p>
                  </div>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="register"
                initial={{ rotateY: -90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: 90, opacity: 0 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 20 }}
                className="w-full bg-white p-10 md:p-12 rounded-sm relative overflow-hidden border border-[#e6ecf5]"
              >
                <div className="mb-8 text-center md:text-left border-b border-[#e6ecf5] pb-6">
                  <h2 className="text-2xl font-bold text-[#515365]">Register to Olympus</h2>
                  <p className="text-sm text-[#888da8] mt-2">Join the community today!</p>
                </div>

                <form onSubmit={handleRegister} className="space-y-5">
                  <div className="flex space-x-4">
                    <Input
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-1/2 bg-white border-[#e6ecf5] focus:border-[#7c5ac2] h-12 rounded-md"
                    />
                    <Input
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-1/2 bg-white border-[#e6ecf5] focus:border-[#7c5ac2] h-12 rounded-md"
                    />
                  </div>

                  <Input
                    placeholder="Your Email"
                    type="email"
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
                    className="w-full bg-white border-[#e6ecf5] focus:border-[#7c5ac2] h-12 rounded-md"
                  />

                  <Input
                    placeholder="Your Password"
                    type="password"
                    value={regPassword}
                    onChange={(e) => setRegPassword(e.target.value)}
                    className="w-full bg-white border-[#e6ecf5] focus:border-[#7c5ac2] h-12 rounded-md"
                  />

                  <Input
                    placeholder="Your Birthday"
                    type="text"
                    onFocus={(e) => e.target.type = 'date'}
                    onBlur={(e) => e.target.type = 'text'}
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                    className="w-full bg-white border-[#e6ecf5] focus:border-[#7c5ac2] h-12 rounded-md"
                    icon={<Icon name="olymp-calendar-icon" className="w-5 h-5 text-[#888da8]" />}
                  />

                  <div className="relative">
                    <select
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      className="w-full h-12 px-4 rounded-md border border-[#e6ecf5] bg-white text-sm text-[#4b4f66] focus:outline-none focus:ring-2 focus:ring-[#7c5ac2]/20 focus:border-[#7c5ac2] appearance-none transition-all"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    <span className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-[#8f92a3]">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                    </span>
                  </div>

                  <div className="flex items-center space-x-3 text-xs text-[#888da8] mt-4 p-2">
                    <input
                      type="checkbox"
                      checked={termsAccepted}
                      onChange={(e) => setTermsAccepted(e.target.checked)}
                      className="rounded border-gray-300 text-[#7c5ac2] focus:ring-[#7c5ac2] w-4 h-4 cursor-pointer"
                    />
                    <span>I accept the <a href="#" className="text-[#ff5e3a] font-bold hover:underline">Terms and Conditions</a> of the website</span>
                  </div>

                  <Button
                    variant="purple"
                    className="w-full mt-6 h-14 text-sm font-bold rounded-md transition-all duration-300 transform hover:-translate-y-0.5"
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
