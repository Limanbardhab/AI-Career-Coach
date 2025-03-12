import { getUserOnboardingStatus } from '@/actions/user';
import { industries } from '@/data/industries';
import React from 'react'
import OnboardingForm from './_components/OnboardingForm';
import { redirect } from 'next/navigation';

const OnboardingPage = async() => {
  //check if user already onboarded!!
  const {isOnboarded} =await getUserOnboardingStatus();

  if(isOnboarded){
    redirect("/dashboard");
  }

  return (
    <main>
      <OnboardingForm industries={industries}/>
    </main>
  )
}

export default OnboardingPage;