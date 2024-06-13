import { toast } from "react-toastify";

type ToastifyProps = {
  msg: string;
  type: "info" | "success" | "warning" | "error" | "default";
  autoclose?: number | false;
  toastId?: number | string;
  pauseOnFocusLoss?: boolean;
};

const launchToast = ({ msg, type, toastId }: ToastifyProps) => {
  toast(msg, {
    type,
    autoClose: 3000,
    pauseOnHover: false,
    draggable: false,
    pauseOnFocusLoss: true,
    toastId,
  });
};

export { launchToast };
