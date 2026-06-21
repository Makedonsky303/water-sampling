// app/page.js
'use client';
import React, { useState, useCallback } from 'react';
import Header from '../components/Header';
import Step1_ChemTare from '../steps/Stage1/Step1_ChemTare';
import Step2_BioTare from '../steps/Stage1/Step2_BioTare';
import Step3_FieldKit from '../steps/Stage1/Step3_FieldKit';
import Step1_SitePrep from '../steps/Stage2/Step1_SitePrep';
import Step2_WaterDrain from '../steps/Stage2/Step2_WaterDrain';
import Step3_FaucetSterilize from '../steps/Stage2/Step3_FaucetSterilize';
import Report from '../steps/Report';

export default function Home() {
const [currentStep, setCurrentStep] = useState(1);
const [showConfirm, setShowConfirm] = useState(false);

const [logs, setLogs] = useState({
chemCart: [], chemResults: [], chemScore: 0, chemFound1: false, chemFound2: false,
bioCart: [], bioResults: [], bioScore: 0, bioFound1: false, bioFound2: false,
kitResults: [], kitErrors: [], kitScore: 0,
prepErrors: [], prepScorePenalty: 0, gogglesEquipped: false, glovesEquipped: null,
drainErrors: [], drainScorePenalty: 0, drainGoal: null, drainType: null, drainSuccess: false,
sterilizeErrors: [], sterilizeScorePenalty: 0, faucetType: null, sterilizeSuccess: false
});

const updateLogs = useCallback((newData) => {
setLogs((prev) => ({ ...prev, ...newData }));
}, []);

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

const handleSterilizeComplete = (sterilizeData) => {
setLogs((prev) => ({ ...prev, ...sterilizeData }));
setCurrentStep(7);
};

const handleReset = () => {
setLogs({
chemCart: [], chemResults: [], chemScore: 0, chemFound1: false, chemFound2: false,
bioCart: [], bioResults: [], bioScore: 0, bioFound1: false, bioFound2: false,
kitResults: [], kitErrors: [], kitScore: 0,
prepErrors: [], prepScorePenalty: 0, gogglesEquipped: false, glovesEquipped: null,
drainErrors: [], drainScorePenalty: 0, drainGoal: null, drainType: null, drainSuccess: false,
sterilizeErrors: [], sterilizeScorePenalty: 0, faucetType: null, sterilizeSuccess: false
});
setCurrentStep(1);
};

return (
<div className="min-h-screen bg-slate-100 p-8 flex flex-col items-center font-sans">
code Code

<Header currentStep={currentStep} 
    onStepClick={(step) => {
      // Если мы на 3-м шаге и переходим дальше, вызываем модалку, иначе просто переключаем
      if (currentStep === 3 && step === 4) {
        setShowConfirm(true);
      } else if (step < 4) {
        setCurrentStep(step);
      }
    }}  
  />
  
  
  {currentStep === 1 && <Step1_ChemTare savedData={logs} onUpdate={updateLogs} onComplete={(d) => {updateLogs(d); setCurrentStep(2)}} />}
  {currentStep === 2 && <Step2_BioTare savedData={logs} onUpdate={updateLogs} onComplete={(d) => {updateLogs(d); setCurrentStep(3)}} />}
  {currentStep === 3 && <Step3_FieldKit savedData={logs} onUpdate={updateLogs} onComplete={(d) => {updateLogs(d); setCurrentStep(4)}} />}
  {currentStep === 4 && <Step1_SitePrep logs={logs} savedData={logs} onComplete={(d) => {updateLogs(d); setCurrentStep(5)}} />}
  {currentStep === 5 && <Step2_WaterDrain logs={logs} onComplete={handleDrainComplete} />}
  {currentStep === 6 && <Step3_FaucetSterilize logs={logs} onComplete={handleSterilizeComplete} />}      
  {currentStep === 7 && <Report logs={logs} onReset={handleReset} />}
</div>

);
}