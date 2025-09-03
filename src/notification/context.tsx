
import React, { createContext, useContext, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertColor } from "@mui/material/Alert";

type NotificationContextType = {
  showNotification: (message: string, severity?: AlertColor) => void;
};

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<AlertColor>("info");

  const showNotification = (msg: string, sev: AlertColor = "info") => {
    setMessage(msg);
    setSeverity(sev);
    setOpen(true);
  };

  const handleClose = (_?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <MuiAlert onClose={handleClose} severity={severity} variant="filled" sx={{ width: "100%" }}>
          {message}
        </MuiAlert>
      </Snackbar>
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) throw new Error("useNotification must be used inside NotificationProvider");
  return context;
};


 <div className="flex items-center space-x-8">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-900 italic">FashionHub</div>

        <ul className="flex space-x-8 text-blue-900 font-medium ">
          <li className="cursor-pointer hover:text-blue-600">Category</li>
          <li className="cursor-pointer hover:text-blue-600">Brand</li>
          <li className="cursor-pointer hover:text-blue-600">Contact</li>
          <li className="cursor-pointer hover:text-blue-600">FAQ's</li>
        </ul>
      </div>
