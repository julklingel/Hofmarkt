import { createContext, useContext, useState } from "react";
import NameForm from "./NameForm";
import AddressForm from "./AddressForm";
import DataConsentForm from "./DataConsentForm";

type ViewContextType = {
  currentView: 1 | 2 | 3;
  setCurrentView: (view: 1 | 2 | 3) => void;
};

const ViewContext = createContext<ViewContextType>({
  currentView: 1,
  setCurrentView: () => {},
});

const views: Record<1 | 2 | 3, JSX.Element> = {
  1: (
    <div>
      <NameForm />
    </div>
  ),
  2: (
    <div>
      {" "}
      <AddressForm />{" "}
    </div>
  ),
  3: (
    <div>
      {" "}
      <DataConsentForm />{" "}
    </div>
  ),
};

function CurrentView(): JSX.Element {
  const { currentView } = useContext(ViewContext);

  return <div>{views[currentView]}</div>;
}

function ViewSwitcher(): JSX.Element {
  const { currentView, setCurrentView } = useContext(ViewContext);

  function handleClick(view: 1 | 2 | 3): void {
    setCurrentView(view);
  }

  return (
    <div className="flex justify-center pt-16 text-c.green ">
      {Object.keys(views).map((view) => (
        <div className="p-6">
          <input
            id="inline-radio"
            type="radio"
            value=""
            defaultChecked={currentView === Number(view)}
            name="inline-radio-group"
            className="w-4 h-4 "
            onClick={() => handleClick(view as 1 | 2 | 3)}
          />
        </div>
      ))}


    </div>
  );
}

interface ViewContainerProps {
  children: React.ReactNode;
}

function ViewContainer({ children }: ViewContainerProps): JSX.Element {
  const [currentView, setCurrentView] = useState<1 | 2 | 3>(1);

  return (
    <ViewContext.Provider value={{ currentView, setCurrentView }}>
      {children}
      <ViewSwitcher />
    </ViewContext.Provider>
  );
}

export default function NavigationContext(): JSX.Element {
  return (
    <ViewContainer>
      <CurrentView />
    </ViewContainer>
  );
}
