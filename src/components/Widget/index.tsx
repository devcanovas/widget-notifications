import { Notification } from "./Notification";
import Devcanovas from '/logo/devcanovas.svg'

export function Widget() {
  return (
    <div className="w-[30rem] flex-col shadow-2xl">
      <div className="bg-zinc-700 text-white p-4">
        <span>Notifications</span>
      </div>
      <div className="bg-zinc-800 text-white py-2 px-4">
        <span>Recents</span>
      </div>
      <div className="flex flex-col">
        <Notification text="You received invete to join on devcanovas team!" icon={Devcanovas} hasAction/>
        <Notification text="You received invete to join on devcanovas team!" icon={Devcanovas} hasAction/>
      </div>
      <div className="bg-zinc-800 text-white py-2 px-4">
        <span>Latest</span>
      </div>
      <div className="flex flex-col">
        <Notification text="You received invete to join on devcanovas team!" icon={Devcanovas} hasAction/>
        <Notification text="You received invete to join on devcanovas team!" icon={Devcanovas} hasAction/>
      </div>
    </div>
  );
}
