import { useState } from 'react';

export interface IActive {
  id: number,
  data: any;
}

export type IUseMultiHandlePress = (({ id, data }: IActive) => void)

export default function useMultiSelect () {
  const [active, setActive] = useState<IActive[]|[]>([]);

  const handlePress: IUseMultiHandlePress = ({ id, data }) => {
    const isSelected = active.some(({ id: activeId }: IActive) => activeId === id);

    if (isSelected) {
      setActive(prev => prev.filter(({ id: activeId }: IActive) => activeId !== id));
      return;
    }

    setActive(prev => [
      ...prev,
      { id, data }
    ]);
  };

  return { active, handlePress };
}
