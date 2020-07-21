import React from 'react';
import Routes from "./src/routes"
import { StatusBar } from "react-native"

console.disableYellowBox = true;

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#3a66e8" />
      <Routes />
    </>
  );
}

