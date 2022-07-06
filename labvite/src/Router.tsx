import { Route, Routes } from "react-router-dom";
import { Event } from "./pages/Event";
import { Subscribe } from "./pages/Subscribe";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Subscribe />} />
      <Route path="/Event" element={<Event />} />
      <Route path="/Event/lesson/:slug" element={<Event />} />


    </Routes>
  )

}