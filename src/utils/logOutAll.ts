
import { BroadcastChannel } from 'broadcast-channel';
declare type Message = {
  foo: string;
};
const channel: BroadcastChannel<Message> = new BroadcastChannel('foobar');

let i = true;

 const logout = () => {
    channel.postMessage({foo:'logged out'}); 
    localStorage.clear();
    window.location.href = window.location.origin + '/' ;
  }

   const logoutAllTabsEventListener = () => {
    channel.onmessage = () => {
      logout();
      channel.close();
    }
  }

  export {logout,logoutAllTabsEventListener};

      