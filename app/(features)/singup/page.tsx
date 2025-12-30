"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { PiEyeSlashThin } from "react-icons/pi";
import { LiaEyeSolid } from "react-icons/lia";
import { Button } from "@heroui/react";
import { sendOTP, registerUser, verifyOTP } from './services/authService';
import { useRouter } from 'next/navigation';
import { FaGoogle } from "react-icons/fa";

function Page() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    const userStr = urlParams.get('user');
    
    if (token && userStr) {
      try {
        const user = JSON.parse(decodeURIComponent(userStr));
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        router.push('/home');
      } catch (error) {
        console.error('Error processing Google auth:', error);
      }
    }
  }, [router]);

  const handleGoogleSignup = async () => {
    setLoading(true);
    try {
      window.location.href = `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/google`;
    } catch (error) {
      console.error('Google signup error:', error);
      alert('Google signup failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      if (step === 1) {
        const otpResult = await sendOTP(formData.email, formData.name);
        
        if (otpResult.success) {
          alert('OTP sent to your email!');
          setStep(2);
        } else {
          alert(otpResult.message || 'Failed to send OTP');
        }
      } else {
        const verifyResult = await verifyOTP(formData.email, otp);
        
        if (verifyResult.success) {
          const registerResult = await registerUser(formData.email, formData.password, formData.name);
          
          if (registerResult.success) {
            localStorage.setItem('token', registerResult.token);
            localStorage.setItem('user', JSON.stringify(registerResult.user));
            alert('Registration successful!');
            router.push('/home');
          } else {
            alert(registerResult.message || 'Registration failed');
          }
        } else {
          alert(verifyResult.message || 'Invalid OTP');
        }
      }
    } catch (error) {
      alert('Process failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen min-w-screen bg-black flex flex-col justify-center items-center ">
      <div className="w-full max-w-sm p-4 rounded-2xl shadow-2xl">
        <div className="text-center mb-4 mt-5 ">
           <Image
                     src="https://ik.imagekit.io/qwzhnpeqg/mockround.ai%20imges%20public/logo2.png"
                     alt="Logo"
                     width={210}
                     height={210}
            className="mx-auto mb-13   h-10  md:h-10"
                   />
                  <h1 className="text-white text-xl lg:text-2xl mt-3 font-semibold mt-[-20]">Creat you account</h1>
          <h3 className="text-gray-400 text-sm mt-1 mb-5">Give mock interview and ace your interview</h3>


        </div>

        <form onSubmit={handleSubmit} className="space-y-2 ">
          {step === 1 ? (
            <>
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }));
                  }}
                  placeholder="Full Name"
                className="block w-full border-2 border-gray-600 rounded-lg text-white px-4 py-3 text-base focus:border-[#d58e76] focus:outline-none bg-transparent"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }));
                  }}
                  placeholder="Email Address"
                className="block w-full border-2 border-gray-600 rounded-lg text-white px-4 py-3 text-base focus:border-[#d58e76] focus:outline-none bg-transparent"
                  required
                />
              </div>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={(e) => {
                    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
                  }}
                  placeholder="Password"
                className="block mb-5 w-full border-2 border-gray-600 rounded-lg text-white px-4 py-3 text-base focus:border-[#d58e76] focus:outline-none bg-transparent"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-lg text-gray-400 hover:text-[#d97757] focus:outline-none transition-colors"
                >
                  {showPassword ? <PiEyeSlashThin /> : <LiaEyeSolid />}
                </button>
              </div>
            </>
          ) : (
            <>

              <div>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  placeholder="Enter  OTP"
                  className="block w-full border-2 border-[#9C9A92] rounded-xl text-white px-4 py-3 text-base focus:border-[#d58e76] focus:outline-none text-center text-2xl tracking-widest"
                  maxLength={6}
                  required
                />
              </div>
             
            </>
          )}

          <Button
            type="submit"
            disabled={loading || (step === 2 && otp.length !== 6)}
            color="default"
            className="w-full bg-[#d97757] hover:bg-[#b37e6d] text-white rounded-lg font-bold shadow-lg py-3"
          >
            {loading ? (step === 1 ? 'Sending OTP...' : 'Verifying...') : (step === 1 ? 'Send OTP' : 'Verify & Signup')}
          </Button>

          <div className="flex items-center my-2">
            <div className="flex-1 border-t border-gray-600"></div>
            <span className="px-3 text-gray-400 text-sm">or</span>
            <div className="flex-1 border-t border-gray-600"></div>
          </div>

          
       
          
          <div className="text-center mt-4">
            <p className="text-gray-400 text-sm">
              Already have an account?{" "}
              <a href="/login" className="text-[#d97757] hover:underline">
                Login here
              </a>
            </p>
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <button 
              type="button"
              onClick={handleGoogleSignup}
              disabled={loading}
              className="p-2 rounded-full hover:bg-gray-800 transition-colors"
            >
              <FaGoogle className='text-white font-bold text-xl hover:text-[#d97757]'/>
            </button>
          </div>          
        </form>
      </div>
    </div>
  );
}

export default Page;