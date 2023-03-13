import { createContext, useContext, useState } from "react";

export type PersonalData = {
  firstName: string;
  lastName: string;
  phoneNumber: number;
};

export type AddressData = {
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
};


type PersonalDataContextType = {
  personalData: PersonalData;
  setPersonalData: React.Dispatch<React.SetStateAction<PersonalData>>;
  addressData: AddressData;
  setAddressData: React.Dispatch<React.SetStateAction<AddressData>>;
};

export const PersonalDataContext = createContext<PersonalDataContextType>({
  personalData: {
    firstName: "",
    lastName: "",
    phoneNumber: 0,
  },
  setPersonalData: () => {},

  addressData: {
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    postalCode: "",
    country: ""
  },
  setAddressData: () => {}
    
});

export default function DataProvider(props: any): JSX.Element {
  const [personalData, setPersonalData] = useState<PersonalData>({
    firstName: "",
    lastName: "",
    phoneNumber: 0,
  });

  const [addressData, setAddressData] = useState<AddressData>({
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  });

  return (
    <PersonalDataContext.Provider value={{ personalData, setPersonalData, addressData, setAddressData }}>
      {props.children}
    </PersonalDataContext.Provider>
  );
}