import { useState } from 'react';

type TGetIsActiveState = (id: number) => boolean

export interface IActive {
  id: number,
  data: any;
}

export type IUseMultiHandlePress = (({ id, data }: IActive) => void)

export default function useMultiSelect () {
  const [active, setActive] = useState<IActive[]|[]>([]);

  /**
   * @param id - invoke within a FlatList to check if the current list element is included in the active array.
   */

  const getIsActiveState: TGetIsActiveState = id => active.some(({ id: activeId }) => (id === activeId));

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

  return { getIsActiveState, active, handlePress };
}
