import { ReactElement, useState } from 'react';

export function useMultiStepForm(steps: ReactElement[]) {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    function next() {
        setCurrentStepIndex((prevState) => {
            if (prevState >= steps.length - 1) return prevState;
            return prevState + 1;
        });
    }
    function back() {
      setCurrentStepIndex((prevState) => {
        if (prevState <= 0) return prevState;
        return prevState - 1;
    });
    }
    function goTo(index: number) {
      setCurrentStepIndex(index)
    }
    return {
      currentStepIndex,
      step: steps[currentStepIndex],
      next,
      back,
      goTo,
      steps,
    }
}
