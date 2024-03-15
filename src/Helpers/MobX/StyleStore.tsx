import { makeAutoObservable, action } from 'mobx';
import { makePersistable, hydrateStore } from 'mobx-persist-store';
import LogoLight from "../../Assets/img/Logo.png"
import LogoDark from "../../Assets/img/Logo.png"

export class StyleStore {
    light_mode:boolean = true;
    constructor(){
        this.light_mode = true;
        this.toggleLightMode();
        makeAutoObservable(this);
        makePersistable(this, {
            name: 'styleStore',
            properties: [
              {
                key: 'light_mode',
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
    @action setLightMode(param:boolean) {
        this.light_mode = param;
        
      }
      @action getLightMode() {
        return this.light_mode;
        
      }
    @action toggleLightMode() {
      this.light_mode = !this.light_mode;
      
    }
    @action getForegroundPrimaryColor()
    {
      return this.light_mode? "#000000": "#ffffff";
    }
    @action getForegroundSecondaryColor()
    {
      return this.light_mode? "#000000": "#ffffff";
    }
    @action getBackgroundPrimaryColor()
    {
      return this.light_mode? "#ffffff": "#000000";
    }
    @action getButtonPrimaryColor()
    {
      return this.light_mode? "red": "red";
    }
    @action getButtonSecondaryColor()
    {
      return this.light_mode? "blue": "blue";
    }
    @action getButtonShadowColor()
    {
      return this.light_mode? "red": "blue";
    }
    @action getBoarderColor()
    {
      return this.light_mode? "#000000": "#ffffff";
    }
    @action getLabel()
    {
      return this.light_mode? "#666666" : "#C0C0C0";
    }
    @action getUnderline()
    {
      return this.light_mode? "#C0C0C0" : "#3D5165";
    }
    @action getLogo()
    {
      return this.light_mode? LogoLight: LogoDark;
    }

    @action rehydrate() {
        hydrateStore(this);
      }
}

export const styleStore = new StyleStore();
