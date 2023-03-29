import { Fragment } from "react";
import { useState, useEffect } from "react";
import AccountRecoveryPin from "@/pages/components/auth/AccountRecoveryPin";
import AccountRecovery from "@/pages/components/auth/AccountRecovery";

export default function ResetPassword() {
  const [emailSend, setEmailSend] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleEmailSent = (success: any) => {
    if (success) {
      setEmailSend(true);
    } else {
      console.log("Failed to send email");
    }
  };

  const handleEmailChange = (email: string) => {
    setEmail(email);
  };

  const handleTokenChange = (token: string) => {
    setToken(token);
    console.log("token: ", token);
    
  };

  return (
    <Fragment>
      {isClient && (emailSend ? (
          <AccountRecoveryPin email={email} token={token} onTokenChange={handleTokenChange} />
        ) : (
          <AccountRecovery
            onEmailSent={handleEmailSent}
            onEmailChange={handleEmailChange}
             // pass callback function to child component
          />
        ))}
    </Fragment>
  );
}
