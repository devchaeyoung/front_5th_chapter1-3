import { useState } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import { UserProvider } from "./contexts/UserContext";
import { NotificationProvider } from "./contexts/NotificationContext";
import {
  Header,
  ItemList,
  ComplexForm,
  NotificationSystem,
} from "./components";
import { generateItems } from "./utils";

const App = () => {
  const [items, setItems] = useState(generateItems(1000));

  const addItems = () => {
    setItems((prev) => [...prev, ...generateItems(1000, prev.length)]);
  };

  return (
    <ThemeProvider>
      <NotificationProvider>
        <UserProvider>
          <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <Header />
            <div className="container mx-auto px-4 py-8">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 md:pr-4">
                  <ItemList items={items} onAddItemsClick={addItems} />
                </div>
                <div className="w-full md:w-1/2 md:pl-4">
                  <ComplexForm />
                </div>
              </div>
            </div>
          </div>
         <NotificationSystem />     
        </UserProvider>
     </NotificationProvider>
    </ThemeProvider>
  );
};

export default App;
