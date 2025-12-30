"use client";
import React, { useState, useEffect } from "react";
import { amazonQuestions } from "../../shared/data/amazonQuestions";
import { googleQuestions } from "../../shared/data/googleQuestions";
import { microsoftQuestions } from "../../shared/data/microsoftQuestions";
import { appleQuestions } from "../../shared/data/appleQuestions";
import { metaQuestions } from "../../shared/data/metaQuestions";
import { netflixQuestions } from "../../shared/data/netflixQuestions";
import { uberQuestions } from "../../shared/data/uberQuestions";
import { technicalMCQDatabase } from "../../shared/data/technicalMCQDatabase";
import { questionsData } from "../../shared/data/questionsData";
import Image from "next/image";
import Link from "next/link";
import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { MdCodeOff } from "react-icons/md";
import dynamic from "next/dynamic";

const CodingEnviorment = dynamic(() => import("../../shared/components/Codinground"), { ssr: false });
const MCQround = dynamic(() => import("../../shared/components/MCQround"), { ssr: false });
const Interviewround = dynamic(() => import("../../shared/components/Interviewround"), { ssr: false });
function Navbar() {
  const sidebar = useSidebar();
  const { open, isMobile } = sidebar || { open: false, isMobile: false };

  return (
    <header className="border-b bg-black w-full h-8 border-[#191919] flex items-center justify-between  ">
      {open && isMobile && (
        <div className="flex items-center ml-4 sm:ml-19 md:ml-65 mt-[-20px]">
          <Link href="/home">
            <Image
              src="/logo2.png"
              alt="MockRound.AI Logo"
              width={150}
              height={10}
              className=""
            />
          </Link>
        </div>
      )}
    </header>
  );
}

function page() {
  const [selectedQuestions, setSelectedQuestions] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [roundType, setRoundType] = useState(null);
  const [resumeData, setResumeData] = useState(null);
  const [stepnumber, setstepnumber] = useState(1);
  const [selectedCompanyName, setSelectedCompanyName] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedExperience, setSelectedExperience] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);

  const getCompanyQuestions = (company) => {
    const companyMap = {
      amazon: amazonQuestions,
      google: googleQuestions,
      microsoft: microsoftQuestions,
      apple: appleQuestions,
      meta: metaQuestions,
      netflix: netflixQuestions,
      uber: uberQuestions,
    };
    return companyMap[company.toLowerCase()] || [];
  };

  const parseResumeFile = async (file) => {
    if (!file || typeof window === 'undefined') return null;

    try {
      let text = '';
      
      if (file.type === 'application/pdf') {
        const pdfjsLib = await import('pdfjs-dist');
        pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`;
        
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;
        
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const textContent = await page.getTextContent();
          const pageText = textContent.items
            .filter(item => 'str' in item)
            .map(item => (item as any).str)
            .join(' ');
          text += pageText + ' ';
        }
      } else {
        text = await file.text();
      }

      return text;
    } catch (error) {
      console.error("PDF parsing error:", error);
      return null;
    }
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const roundType = formData.get("roundType") as string;
    const company = formData.get("company") as string;
    const role = formData.get("role") as string;
    const experience = formData.get("experience") as string;
    const resumeFile = formData.get("resume");

    let pdfText = null;
    if (resumeFile && resumeFile instanceof File && resumeFile.size > 0) {
      pdfText = await parseResumeFile(resumeFile);
      setResumeData(pdfText);
    }

    if (roundType === "coding") {
      const companyQuestions = getCompanyQuestions(company);

      if (companyQuestions.length > 0) {
        const randomQuestions = companyQuestions
          .sort(() => 0.5 - Math.random())
          .slice(0, 3);

        setSelectedQuestions(randomQuestions);
        setSelectedCompany({
          companyName: company.charAt(0).toUpperCase() + company.slice(1),
          roundType: "Coding Round",
          duration: "2 hours",
          questions: 3,
        });
        setRoundType("coding");
      }
    } else if (roundType === "mcq") {
      const mcqQuestions = technicalMCQDatabase;

      if (mcqQuestions.length > 0) {
        const randomQuestions = mcqQuestions
          .sort(() => 0.5 - Math.random())
          .slice(0, 12);

        setSelectedQuestions(randomQuestions);
        setSelectedCompany({
          companyName: company.charAt(0).toUpperCase() + company.slice(1),
          roundType: "Technical MCQ",
          duration: "90 min",
          questions: 12,
        });
        setRoundType("mcq");
      }
    } else if (
      roundType === "technical" ||
      roundType === "hr" ||
      roundType === "behavioral"
    ) {
      setSelectedCompany({
        companyName: company.charAt(0).toUpperCase() + company.slice(1),
        role: role,
        experience: experience,
        resumeData: pdfText,
      });
      setRoundType(roundType);
    } else {
      alert("Please select a round type and company.");
    }
  };

  if (selectedQuestions && roundType === "coding") {
    return (
      <CodingEnviorment
        questionsList={selectedQuestions}
        onBack={() => {
          setSelectedQuestions(null);
          setSelectedCompany(null);
          setRoundType(null);
        }}
        testdetails={{
          companyName: selectedCompany?.companyName,
          roundType: selectedCompany?.roundType,
          duration: selectedCompany?.duration,
          questions: selectedCompany?.questions,
        }}
      />
    );
  }

  if (selectedQuestions && roundType === "mcq") {
    return (
      <MCQround
        questionsList={selectedQuestions}
        onBack={() => {
          setSelectedQuestions(null);
          setSelectedCompany(null);
          setRoundType(null);
        }}
        testdetails={{
          companyName: selectedCompany?.companyName,
          roundType: selectedCompany?.roundType,
          duration: selectedCompany?.duration,
          questions: selectedCompany?.questions,
        }}
      />
    );
  }

  if (
    roundType === "technical" ||
    roundType === "hr" ||
    roundType === "behavioral"
  ) {
    const getRoundTypeName = () => {
      switch (roundType) {
        case "technical":
          return "Technical";
        case "hr":
          return "HR";
        case "behavioral":
          return "Behavioral";
        default:
          return "Technical";
      }
    };
    return (
      <Interviewround
        company_Name={selectedCompany?.companyName || "Google"}
        role={selectedCompany?.role || "Software Engineer"}
        experience={selectedCompany?.experience || 3}
        roundType={getRoundTypeName()}
        resumeData={selectedCompany?.resumeData}
      />
    );
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 bg-black min-h-screen">
        <div className="bg-black">
          <div className="flex items-center ">
            <SidebarTrigger className="text-white lg:ml-60" />
          </div>
          <Navbar />
        </div>

        <div className="max-w-7xl mx-auto p-6 bg-black text-white">
          <form className="space-y-8" onSubmit={handleSubmit}>
            {stepnumber == 1 && (
              <div className="text-center">
                <div className="mb-8">
                  <h1 className="text-4xl font-bold text-white mb-2">
                    Select Your Interview Round
                  </h1>
                  <p className="text-gray-400 text-lg mb-6">
                    Choose from coding, technical MCQ, system design, HR, or behavioral rounds
                  </p>
                  <div className="flex items-center justify-center mb-8">
                    <span className="text-gray-400 mr-3">Step</span>
                    <div className="w-12 h-12 rounded-full bg-[#d97757] flex items-center justify-center text-white font-bold text-lg">
                      1
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1  md:ml-30 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                  <div className="border border-gray-700 rounded-lg overflow-hidden hover:border-[#d97757] transition-all cursor-pointer"
                       onClick={() => {
                         setRoundType('coding');
                         setstepnumber(2);
                       }}>
                    <Image
                      src="/coding.png"
                      alt="Coding Round"
                      width={300}
                      height={200}
                      loading="eager"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-bold text-lg flex items-center justify-center gap-2">
                        <MdCodeOff /> Coding Round
                      </h3>
                    </div>
                  </div>

                  <div className=" border border-gray-700 rounded-lg overflow-hidden hover:border-[#d97757] transition-all cursor-pointer"
                       onClick={() => {
                         setRoundType('mcq');
                         setstepnumber(2);
                       }}>
                    <Image
                      src="/technicalMCQ.png"
                      alt="MCQ Round"
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-bold text-lg flex items-center justify-center gap-2">
                        <MdCodeOff /> MCQ Round
                      </h3>
                    </div>
                  </div>

                  <div className=" border border-gray-700 rounded-lg overflow-hidden hover:border-[#d97757] transition-all cursor-pointer"
                       onClick={() => {
                         setRoundType('technical');
                         setstepnumber(2);
                       }}>
                    <Image
                      src="/techncial.png"
                      alt="Technical Round"
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-bold text-lg flex items-center justify-center gap-2">
                        <MdCodeOff /> Technical Round
                      </h3>
                    </div>
                  </div>

                  <div className=" border border-gray-700 rounded-lg overflow-hidden hover:border-[#d97757] transition-all cursor-pointer"
                       onClick={() => {
                         setRoundType('hr');
                         setstepnumber(2);
                       }}>
                    <Image
                      src="/hrr.png"
                      alt="HR Round"
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-bold text-lg flex items-center justify-center gap-2">
                        <MdCodeOff /> HR Round
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {stepnumber == 2 && (
              <div className="text-center">
                <div className="mb-8">
                  <h1 className="text-2xl font-bold text-white mb-2">
                    Company & Role
                  </h1>
                  <p className="text-gray-400 text-lg mb-6">
                    Select your target company and desired role
                  </p>
                  <div className="flex items-center justify-center mb-6">
                    <span className="text-gray-400 mr-3">Step</span>
                    <div className="w-8 h-8 rounded-full bg-[#d97757] flex items-center justify-center text-white font-bold">
                      2
                    </div>
                  </div>
                </div>

                <div className="max-w-2xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <select
                      value={selectedCompanyName}
                      onChange={(e) => setSelectedCompanyName(e.target.value)}
                      className="p-3 bg-black border border-gray-700 rounded-lg focus:border-[#d97757] outline-none text-white"
                    >
                      <option value="">Select Company</option>
                      <option value="Google">Google</option>
                      <option value="Amazon">Amazon</option>
                      <option value="Microsoft">Microsoft</option>
                      <option value="Apple">Apple</option>
                      <option value="Meta">Meta</option>
                      <option value="Netflix">Netflix</option>
                    </select>

                    <select
                      value={selectedRole}
                      onChange={(e) => setSelectedRole(e.target.value)}
                      className="p-3 bg-black border border-gray-700 rounded-lg focus:border-[#d97757] outline-none text-white"
                    >
                      <option value="">Select Role</option>
                      <option value="Software Engineer">Software Engineer</option>
                      <option value="Frontend Developer">Frontend Developer</option>
                      <option value="Backend Developer">Backend Developer</option>
                      <option value="Full Stack Developer">Full Stack Developer</option>
                      <option value="Data Scientist">Data Scientist</option>
                      <option value="Product Manager">Product Manager</option>
                      <option value="DevOps Engineer">DevOps Engineer</option>
                      <option value="Mobile Developer">Mobile Developer</option>
                      <option value="UI/UX Designer">UI/UX Designer</option>
                      <option value="QA Engineer">QA Engineer</option>
                    </select>
                  </div>

                  <input type="hidden" name="roundType" value={roundType} />
                  <input type="hidden" name="company" value={selectedCompanyName} />
                  <input type="hidden" name="role" value={selectedRole} />

                  <div className="flex justify-center">
                    <button type="button" 
                            onClick={() => {
                              if (selectedCompanyName && selectedRole) {
                                setstepnumber(3);
                              } else {
                                alert('Please select company and role');
                              }
                            }}
                            className="px-8 py-3 bg-[#d97757] hover:bg-[#c86a47] rounded-lg font-medium">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            )}

            {stepnumber == 3 && (
              <div className="text-center">
                <div className="mb-8">
                  <h1 className="text-2xl font-bold text-white mb-2">
                    Experience & Resume
                  </h1>
                  <p className="text-gray-400 text-lg mb-6">
                    Tell us about your experience level and upload your resume
                  </p>
                  <div className="flex items-center justify-center mb-6">
                    <span className="text-gray-400 mr-3">Step</span>
                    <div className="w-8 h-8 rounded-full bg-[#d97757] flex items-center justify-center text-white font-bold">
                      3
                    </div>
                  </div>
                </div>

                <div className="max-w-2xl mx-auto">
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-4 text-left">Years of Experience</h3>
                    <div className="flex gap-3 flex-wrap">
                      {['0-1', '1-3', '3-5', '5-8', '8+'].map((exp) => (
                        <button
                          key={exp}
                          type="button"
                          onClick={() => setSelectedExperience(exp)}
                          className={`px-4 py-2 rounded-full border transition-all ${
                            selectedExperience === exp
                              ? 'bg-[#d97757] border-[#d97757] text-white'
                              : 'bg-black text-gray-300 hover:border-[#d97757]'
                          }`}
                        >
                          {exp} years
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-lg font-medium mb-4 text-left">Upload Resume (Optional)</h3>
                    <div className="border-2 border-dashed border-gray-700 rounded-lg p-8 hover:border-[#d97757] transition-all">
                      <input
                        type="file"
                        name="resume"
                        accept=".pdf,.doc,.docx,.txt"
                        onChange={(e) => setUploadedFile(e.target.files[0])}
                        className="hidden"
                        id="resume-upload"
                      />
                      <label htmlFor="resume-upload" className="cursor-pointer">
                        <div className="text-center">
                          <svg className="w-12 h-12 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          {uploadedFile ? (
                            <div>
                              <p className="text-[#d97757] font-medium mb-2">{uploadedFile.name}</p>
                              <button type="button" 
                                      onClick={(e) => {
                                        e.preventDefault();
                                        alert('Resume preview feature coming soon!');
                                      }}
                                      className="text-blue-400 hover:text-blue-300 text-sm underline mb-2 block">
                                View Resume
                              </button>
                              <p className="text-gray-400 text-sm">Click to change file</p>
                            </div>
                          ) : (
                            <div>
                              <p className="text-gray-300 font-medium mb-2">Drag & drop your resume here</p>
                              <p className="text-gray-400 text-sm mb-1">or click to browse files</p>
                              <p className="text-gray-500 text-xs">Supports PDF, DOC, DOCX, TXT</p>
                            </div>
                          )}
                        </div>
                      </label>
                    </div>
                  </div>

                  <input type="hidden" name="roundType" value={roundType} />
                  <input type="hidden" name="company" value={selectedCompanyName} />
                  <input type="hidden" name="role" value={selectedRole} />
                  <input type="hidden" name="experience" value={selectedExperience} />

                  <div className="flex justify-center">
                    <button type="submit" 
                            className="px-8 py-3 bg-[#d97757] hover:bg-[#c86a47] rounded-lg font-medium">
                      Start Interview
                    </button>
                  </div>
                </div>
              </div>
            )}

            {stepnumber == 1 &&(
              <div className="flex justify-end mt-4"></div>
            )}
          </form>
        </div>
      </main>
    </SidebarProvider>
  );
}

export default page;
