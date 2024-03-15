import { makeAutoObservable, action } from 'mobx';
import { makePersistable, hydrateStore } from 'mobx-persist-store';

export class SidebarStore {
    open:boolean
    constructor(){
        this.open = false;
        makeAutoObservable(this);
        makePersistable(this, {
            name: 'sidebarStore',
            properties: [
              {
                key: 'open',
                serialize: (value) => {
                  return value;
                },
                deserialize: (value) => {
                  return value;
                },
              },
            ],
            storage: window.localStorage,
          });
    }
    @action setOpen(open:boolean) {
        this.open = open;
    }
    @action getOpen()
    {
        return this.open;
    }
    @action toggle()
    {
        this.open = !this.open;
    }
    rehydrate() {
        hydrateStore(this);
      }
}

export const sidebarStore = new SidebarStore();
