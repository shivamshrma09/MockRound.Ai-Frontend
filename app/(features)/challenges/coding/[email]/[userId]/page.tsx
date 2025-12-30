"use client";
import React from "react";
import { useRouter } from 'next/navigation';
import CodingEnvironment from "../../../components/Codinground";

function CodingRound() {
  const router = useRouter();

  return <CodingEnvironment 
    questionsList={[]}
    testdetails={{}}
    onBack={() => router.back()}
  />;
}

export default CodingRound;