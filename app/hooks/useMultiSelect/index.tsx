import { useCallback, useState } from 'react';

export interface IActive {
  id: number,
  data: any;
}

export type IUseMultiHandlePress = (({ id, data }: IActive) => void)

export default function useMultiSelect () {
  const [active, setActive] = useState<IActive[]|[]>([]);

  /**
   * @param {number} id - invoke within a FlatList to check if the current list element is included in the active array.
   */

  const getIsActiveState: (id: number) => boolean = useCallback(
    (id: number) => active.some(({ id: activeId }) => (id === activeId)),
    [active]
  );

  const handlePress: IUseMultiHandlePress = useCallback(({ id, data }) => {
    const isSelected = active.some(({ id: activeId }: IActive) => activeId === id);

    if (isSelected) {
      setActive(prev => prev.filter(({ id: activeId }: IActive) => activeId !== id));
      return;
    }

    setActive(prev => [
      ...prev,
      { id, data }
    ]);
  }, [active]);

  return { getIsActiveState, active, handlePress };
}
