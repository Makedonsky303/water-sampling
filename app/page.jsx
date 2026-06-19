// app/page.js
'use client';
import React, { useState } from 'react';
import Header from '../components/Header';
import Step1_ChemTare from '../steps/Stage1/Step1_ChemTare';
import Step2_BioTare from '../steps/Stage1/Step2_BioTare';
import Step3_FieldKit from '../steps/Stage1/Step3_FieldKit';
import Step1_SitePrep from '../steps/Stage2/Step1_SitePrep';
import Step2_WaterDrain from '../steps/Stage2/Step2_WaterDrain';
import Report from '../steps/Report';

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showConfirm, setShowConfirm] = useState(false);

  const [logs, setLogs] = useState({
    chemResults: [], chemScore: 0, chemFound1: false, chemFound2: false,
    bioResults: [], bioScore: 0, bioFound1: false, bioFound2: false,
    kitResults: [], kitErrors: [], kitScore: 0,
    prepErrors: [], prepScorePenalty: 0, gogglesEquipped: false, glovesEquipped: null,
    drainErrors: [], drainScorePenalty: 0, drainGoal: null, drainType: null, drainSuccess: false
  });

  const updateLogs = (newData) => {
    setLogs((prev) => ({ ...prev, ...newData }));
  };

  const handleChemComplete = (chemData) => {
    setLogs((prev) => ({ ...prev, ...chemData }));
    setCurrentStep(2);
  };

  const handleBioComplete = (bioData) => {
    setLogs((prev) => ({ ...prev, ...bioData }));
    setCurrentStep(3);
  };

  const handleKitComplete = (kitData) => {
    setLogs((prev) => ({ ...prev, ...kitData }));
    setCurrentStep(4);
  };

  const handlePrepComplete = (prepData) => {
    setLogs((prev) => ({ ...prev, ...prepData }));
    setCurrentStep(5);
  };

  const handleDrainComplete = (drainData) => {
    setLogs((prev) => ({ ...prev, ...drainData }));
    setCurrentStep(6);
  };

  const handleReset = () => {
    setLogs({
      chemResults: [], chemScore: 0, chemFound1: false, chemFound2: false,
      bioResults: [], bioScore: 0, bioFound1: false, bioFound2: false,
      kitResults: [], kitErrors: [], kitScore: 0,
      prepErrors: [], prepScorePenalty: 0, gogglesEquipped: false, glovesEquipped: null,
      drainErrors: [], drainScorePenalty: 0, drainGoal: null, drainType: null, drainSuccess: false
    });
    setCurrentStep(1);
  };

  

  return (
    <div className="min-h-screen bg-slate-100 p-8 flex flex-col items-center font-sans">

      {currentStep === 1 && <Step1_ChemTare onComplete={handleChemComplete} />}
      {currentStep === 2 && <Step2_BioTare onComplete={handleBioComplete} />}
      {currentStep === 3 && <Step3_FieldKit onComplete={handleKitComplete} />}
      {currentStep === 4 && <Step1_SitePrep logs={logs} onComplete={handlePrepComplete} />}
      {currentStep === 5 && <Step2_WaterDrain logs={logs} onComplete={handleDrainComplete} />}
      {currentStep === 6 && <Report logs={logs} onReset={handleReset} />}
    </div>
  );
}