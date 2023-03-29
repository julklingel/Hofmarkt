import AccountRecovery from "@/pages/components/auth/AccountRecovery";
import { Fragment } from "react";
import { useState, useEffect } from "react";
import AccountRecoveryPin from "@/pages/components/auth/AccountRecoveryPin";

export default function ResetPassword() {
  const [emailSend, setEmailSend] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleEmailSent = (success: any) => {
    if (success) {
      console.log("Email sent successfully");
      setEmailSend(true);
    } else {
      console.log("Failed to send email");
    }
  };

  return (
    <Fragment>
      {isClient &&
        (emailSend ? (
          <AccountRecoveryPin />
        ) : (
          <AccountRecovery onEmailSent={handleEmailSent} />
        ))}
    </Fragment>
  );
}


