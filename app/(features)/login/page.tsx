"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { PiEyeSlashThin } from "react-icons/pi";
import { LiaEyeSolid } from "react-icons/lia";
import { Button } from "@heroui/react";
import { loginUser , verifyOtp } from './services/authService';
import { useRouter } from 'next/navigation';
import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";

function Page() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [step, setStep] = useState('email');
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

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      window.location.href = `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/google`;
    } catch (error) {
      console.error('Google login error:', error);
      alert('Google login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      if (step === 'email') {
        const result = await loginUser(formData.email);
        if (result.success) {
          alert(result.message || 'OTP sent to your email');
          setStep('password');
        } else {
          alert(result.message || 'Failed to send OTP');
        }
      } else {
        const result = await verifyOtp(formData.email, formData.password);
        if (result.success) {
          localStorage.setItem('token', result.token);
          localStorage.setItem('user', JSON.stringify(result.user));
          router.push('/home');
        } else {
          alert(result.message || 'Invalid OTP');
        }
      }
    } catch (error) {
      alert('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="min-h-screen min-w-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-sm mx-auto">
        <div className="text-center mb-6">
          <Image
            src="https://ik.imagekit.io/qwzhnpeqg/mockround.ai%20imges%20public/logo2.png"
            alt="Logo"
            width={210}
            height={210}
            className="mx-auto mb-10   h-10  md:h-10"
          />
          
          <h1 className="text-white text-xl lg:text-2xl mt-3 font-semibold">Welcome Back</h1>
          <h3 className="text-gray-400 text-sm mt-1">Give mock interview and ace your interview</h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            {step === 'email' ? (
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="block w-full border-2 border-gray-600 rounded-lg text-white px-4 py-3 text-base focus:border-[#d58e76] focus:outline-none bg-transparent"
                required
              />
            ) : (
              <div className="relative">
                <input
                  type="text"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter OTP"
                  className="block w-full border-2 border-gray-600 rounded-lg text-white px-4 py-3 text-base focus:border-[#d58e76] focus:outline-none bg-transparent"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-lg text-gray-400 hover:text-[#d97757] focus:outline-none transition-colors"
                >
                </button>
              </div>
            )}
          </div>

          <Button
            type="submit"
            disabled={loading}
            color="default"
            className="w-full bg-[#d97757] hover:bg-[#b37e6d] text-white rounded-lg font-bold shadow-lg py-3"
          >
            {loading ? (step === 'email' ? 'Sending OTP...' : 'Verifying...') : (step === 'email' ? 'Send OTP' : 'Verify & Login')}
          </Button>

          <div className="flex items-center my-4">
            <div className="flex-1 border-t border-gray-600"></div>
            <span className="px-3 text-gray-400 text-sm">or</span>
            <div className="flex-1 border-t border-gray-600"></div>
          </div>

          
          <div className="text-center mt-6">
            <p className="text-gray-400 text-sm">
              Don't have an account?{" "}
              <a href="/singup" className="text-[#d97757] hover:underline font-medium">
                Sign up here
              </a>
            </p>
          </div>

          <div className="flex justify-center space-x-4 mt-4">
            <button 
              type="button"
              onClick={handleGoogleLogin}
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