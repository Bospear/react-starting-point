import { makeAutoObservable, action } from 'mobx';
import { makePersistable, hydrateStore } from 'mobx-persist-store';

export class UserStore {
    currentUser:any
    constructor(){
      this.reset();
        makeAutoObservable(this);
        makePersistable(this, {
            name: 'userStore',
            properties: [
              {
                key: 'currentUser',
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
    @action setCurrentUser(user:any) {
        this.currentUser = user;
    }
    @action getCurrentUser()
    {
        return this.currentUser;
    }
    @action reset() {
      this.currentUser = {}
    }
    @action getPermissionByName(keyName:string)
    {
      if(this.currentUser.permissions !== undefined)
      {
      return Object.entries((this.currentUser.permissions)).filter(name => name.includes(keyName)).map(([key,value])=>{
        return (
            {value}
        );
      })[0].value
    }else{
      return undefined;
    }
    }
    rehydrate() {
        hydrateStore(this);
      }
}

export const userStore = new UserStore();
