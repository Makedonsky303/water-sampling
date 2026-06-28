// app/page.js
'use client';
import React, { useState, useCallback, useMemo } from 'react';
import Header from '../components/Header';
import Step1_ChemTare from '../steps/Stage1/Step1_ChemTare';
import Step2_BioTare from '../steps/Stage1/Step2_BioTare';
import Step3_FieldKit from '../steps/Stage1/Step3_FieldKit';
import Stage1Report from '../steps/Stage1/Report'; // Импорт нового отчета
import Step1_SitePrep from '../steps/Stage2/Step1_SitePrep';
import Step2_WaterDrain from '../steps/Stage2/Step2_WaterDrain';
import Step3_FaucetSterilize from '../steps/Stage2/Step3_FaucetSterilize';
import Stage4Simulator from '../steps/Stage4';
import Report from '../steps/Report';
import { InventoryProvider } from '../components/inventory/InventoryContext';
import Step1_Marking from '../steps/Stage3/step1';
import Step2_Cooling from '../steps/Stage3/step2';
import Step3_DigitalAct from '../steps/Stage3/step3';
import InventorySidebar from '@/components/inventory/InventorySideBar';
import { ICON_MAP } from '@/components/inventory/itemRegistry';

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

// Новый обработчик для перехода к отчету Stage 1
const handleStage1Complete = () => {
  setCurrentStep(3.5); // Промежуточный шаг
};

const handleChemComplete = (chemData) => {
setLogs((prev) => ({ ...prev, ...chemData }));
// Не переходим автоматически - пользователь сам нажимает "Далее"
};

const handleBioComplete = (bioData) => {
setLogs((prev) => ({ ...prev, ...bioData }));
};

const handleKitComplete = (kitData) => {
setLogs((prev) => ({ ...prev, ...kitData }));
// Переходим к отчету после завершения всех трех шагов
setCurrentStep(3.5);
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

// Обработчик для продолжения после отчета Stage 1
const handleStage1ReportContinue = () => {
  setCurrentStep(4); // Переход к Stage 2
};

const [inventoryKey, setInventoryKey] = useState(0);

const handleStage4Complete = (stage4Data) => {
  setLogs((prev) => ({ ...prev, stage4Results: stage4Data }));
  setCurrentStep(11);
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
  setInventoryKey((key) => key + 1);
};

const buildInitialInventory = (logsData) => {
  const items = [];

  (logsData.kitResults || []).forEach(kitItem => {
    items.push({ id: kitItem.id, name: kitItem.name, qty: kitItem.qty ?? 1 });
  });

  const chemGrouped = {};
  (logsData.chemResults || []).forEach(res => {
    const key = res.configKey || res.name;
    if (!chemGrouped[key]) {
      chemGrouped[key] = { 
        id: `chem_tare_${key}`, 
        name: `Тара Хим. — ${res.name} (${res.vol}л)`, 
        qty: 0 
      };
    }
    chemGrouped[key].qty += 1;
  });
  items.push(...Object.values(chemGrouped));

  const bioGrouped = {};
  (logsData.bioResults || []).forEach(res => {
    const key = res.configKey || res.name;
    if (!bioGrouped[key]) {
      bioGrouped[key] = { 
        id: `bio_tare_${key}`, 
        name: `Тара Био — ${res.name} (${res.vol}л)`, 
        qty: 0 
      };
    }
    bioGrouped[key].qty += 1;
  });
  items.push(...Object.values(bioGrouped));

  return items;
};

const initialInventoryItems = useMemo(() => buildInitialInventory(logs), [logs]);

// Обновим функцию проверки навигации
const handleStepClick = (step) => {
  // Если пытаемся перейти к Stage 2 (шаг 4 и выше) до завершения Stage 1
  if (currentStep <= 3 && step >= 4) {
    setShowConfirm(true);
    return;
  }
  
  // Разрешаем навигацию внутри Stage 1
  if (step >= 1 && step <= 3) {
    setCurrentStep(step);
    return;
  }
  
  // Разрешаем навигацию внутри Stage 2
  if (step >= 4 && step <= 6) {
    setCurrentStep(step);
    return;
  }
  
  // Разрешаем навигацию внутри Stage 3
  if (step >= 7 && step <= 9) {
    setCurrentStep(step);
    return;
  }
};

return (
<div className="min-h-screen bg-slate-100 p-8 flex flex-col items-center font-sans">

<Header 
  currentStep={currentStep} 
  onStepClick={handleStepClick}
  onStage1ReportContinue={handleStage1ReportContinue} // Передаем обработчик
/>

<InventoryProvider key={inventoryKey} initialItems={initialInventoryItems} shouldInitialize={currentStep >= 4}>
    {/* Stage 1 - Шаги 1-3 */}
    {currentStep === 1 && (
      <Step1_ChemTare 
        savedData={logs} 
        onUpdate={updateLogs} 
        onComplete={(d) => {
          updateLogs(d);
          setCurrentStep(2);
        }} 
      />
    )}
    
    {currentStep === 2 && (
      <Step2_BioTare 
        savedData={logs} 
        onUpdate={updateLogs} 
        onComplete={(d) => {
          updateLogs(d);
          setCurrentStep(3);
        }} 
      />
    )}
    
    {currentStep === 3 && (
      <Step3_FieldKit 
        savedData={logs} 
        onUpdate={updateLogs} 
        onComplete={(d) => {
          updateLogs(d);
          setCurrentStep(3.5); // Переход к отчету
        }} 
      />
    )}

    {/* Новый промежуточный отчет - Stage 1 */}
    {currentStep === 3.5 && (
      <Stage1Report 
        logs={logs} 
        onContinue={handleStage1ReportContinue} 
      />
    )}

    {/* Stage 2 - Шаги 4-6 */}
    {currentStep === 4 && (
      <Step1_SitePrep 
        logs={logs} 
        savedData={logs} 
        onComplete={(d) => {
          updateLogs(d);
          setCurrentStep(5);
        }} 
      />
    )}
    
    {currentStep === 5 && (
      <Step2_WaterDrain 
        logs={logs} 
        onComplete={handleDrainComplete} 
      />
    )}
    
    {currentStep === 6 && (
      <Step3_FaucetSterilize 
        logs={logs} 
        onComplete={handleSterilizeComplete} 
      />
    )}
    
    {/* Stage 3 - Шаги 7-9 */}
    {currentStep >= 7 && currentStep <= 9 && (
      <div className="flex gap-6 items-start w-full max-w-7xl">
        <InventorySidebar />
        <div className="flex-1">
          {currentStep === 7 && (
            <Step1_Marking onComplete={() => setCurrentStep(8)} />
          )}
          {currentStep === 8 && (
            <Step2_Cooling onComplete={() => setCurrentStep(9)} />
          )}
          {currentStep === 9 && (
            <Step3_DigitalAct onComplete={() => setCurrentStep(10)} />
          )}
        </div>
      </div>
    )}

    {/* Stage 4 и финальный отчет */}
    {currentStep === 10 && <Stage4Simulator onComplete={handleStage4Complete} />}
    {currentStep === 11 && <Report logs={logs} onReset={handleReset} />}
  </InventoryProvider>
</div>
);
}