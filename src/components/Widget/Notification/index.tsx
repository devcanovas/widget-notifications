import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface NotificationProps {
  text: string;
  icon: string;
  hasAction?: boolean;
  onCancel?: () => void;
  onSubmit?: () => void;
}

export function Notification({
  text,
  icon,
  hasAction = false,
  onCancel,
  onSubmit,
}: NotificationProps) {
  return (
    <div className="w-full flex items-center gap-2 p-4 border-t-[0.1rem] border-gray-400">
      <div className="mr-4">
        <img src={icon} className="w-10" />
      </div>
      <div>
        <p>{text}</p>
      </div>
      <div>
        {hasAction && (
          <div className="flex gap-2">
            <button className="border-[0.1rem] bg-red-400 rounded-lg flex items-center justify-center p-2">
              <FontAwesomeIcon className="text-white" icon={faCheck} />
            </button>
            <button className="border-[0.1rem] border-gray-400 rounded-lg flex items-center justify-center p-2">
              <FontAwesomeIcon className="text-gray-400" icon={faXmark} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
