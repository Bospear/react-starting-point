
 import { SidebarStore } from './SidebarStore';
 import { sidebarStore } from './SidebarStore';
 import { StyleStore } from './StyleStore';
 import { styleStore } from './StyleStore';
 import { userStore } from './UserStore';
 import { UserStore } from './UserStore';

 export class RootStore {

   sidebarStore: SidebarStore;
   styleStore: StyleStore;
   userStore: UserStore;
 
   constructor() {
 // Pass `this` into stores for easy communication
    this.sidebarStore = sidebarStore;
    this.styleStore = styleStore;
    this.userStore = userStore;
   }
 }

 export const rootStore = new RootStore();