import { useContext } from 'react';
import { RootStore } from './RootStore';
import { StoreContext } from './StoreProvider'

export const useStores = (): RootStore => useContext(StoreContext);