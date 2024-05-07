import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase"; // Importing Firebase authentication module
import { onAuthStateChanged } from "firebase/auth"; // Importing Firebase auth state change listener

// Creating a context for managing Authentication state
export const AuthContext = createContext();

// Component to provide authentication   context to its Children..
export const AuthContextProvider = ({ children }) => {
  // State to store the current user
  const [currentUser, setCurrentUser] = useState(() => {
    // Retrieve the current user from localStorage if available, otherwise initialize as an empty object
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    return storedUser || {};
  });

  // Effect to listen if any   changes in authentication state
  useEffect(() => {
    // Function to unsubscribe from the auth state change listener
    const unsub = onAuthStateChanged(auth, (user) => {
      // Update the currentUser state with the user object received from Firebase
      setCurrentUser(user);
      // Store the current user in localStorage 
      localStorage.setItem("currentUser", JSON.stringify(user));
    });

    // Cleanup function to unsubscribe from the auth state change listener when the component unmounts
    return () => {
      unsub();
    };
  }, []); // The effect runs only once when the component mounts

  // Provide the currentUser state value to its children components through the context
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
