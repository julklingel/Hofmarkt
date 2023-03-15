import { createContext, useState } from "react";


export type AddressData = {
  firstName: string;
  lastName: string;
  companyName: string;
  streetAddress: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
};

type AddressDataContext = {
  addressData: AddressData;
  setAddressData: React.Dispatch<React.SetStateAction<AddressData>>;
};

export type NameFormData = {
  website: string;
  mobileNumber: string;
  about: string;
  profilePicture: string;
  facilityPicture: Array<string>;
};

type NameFormDataContext = {
  nameFormData: NameFormData;
  setNameFormData: React.Dispatch<React.SetStateAction<NameFormData>>;
};


export const AddressDataContext = createContext<AddressDataContext>({
  addressData: {
    firstName: "",
    lastName: "",
    companyName: "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  },
  setAddressData: () => {}
    
});

export const NameFormDataContext = createContext<NameFormDataContext>({
  nameFormData: {
    website: "",
    mobileNumber: "",
    about: "",
    profilePicture: "",
    facilityPicture: [],
  },
  setNameFormData: () => {}
});


export default function DataProvider(props: any): JSX.Element {

  const [addressData, setAddressData] = useState<AddressData>({
    firstName: "",
    lastName: "",
    companyName: "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  });

  const [nameFormData, setNameFormData] = useState<NameFormData>({
    website: "",
    mobileNumber: "",
    about: "",
    profilePicture: "",
    facilityPicture: [],
  });



  return (
    <AddressDataContext.Provider value={{ addressData, setAddressData }}>
      <NameFormDataContext.Provider value={{ nameFormData, setNameFormData }}>
      {props.children}
      </NameFormDataContext.Provider>
    </AddressDataContext.Provider>
  );
}