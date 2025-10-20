import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Layout } from "@/components/Layout";
import Home from "./pages/Home";
import ZustandIndex from "./pages/zustand/Index";
import Counter from "./pages/zustand/Counter";
import Todos from "./pages/zustand/Todos";
import Profile from "./pages/zustand/Profile";
import Cart from "./pages/zustand/Cart";
import Collaboration from "./pages/zustand/Collaboration";
import HooksIndex from "./pages/hooks/Index";
import UseStateIndex from "./pages/hooks/use-state/Index";
import UseStateCounter from "./pages/hooks/use-state/Counter";
import UseStateForm from "./pages/hooks/use-state/Form";
import UseStateTodos from "./pages/hooks/use-state/Todos";
import UseEffectIndex from "./pages/hooks/use-effect/Index";
import UseEffectDataFetching from "./pages/hooks/use-effect/DataFetching";
import UseEffectTimer from "./pages/hooks/use-effect/Timer";
import UseEffectEventListeners from "./pages/hooks/use-effect/EventListeners";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/zustand" element={<ZustandIndex />} />
            <Route path="/zustand/counter" element={<Counter />} />
            <Route path="/zustand/todos" element={<Todos />} />
            <Route path="/zustand/profile" element={<Profile />} />
            <Route path="/zustand/cart" element={<Cart />} />
            <Route path="/zustand/collaboration" element={<Collaboration />} />
            <Route path="/hooks" element={<HooksIndex />} />
            <Route path="/hooks/use-state" element={<UseStateIndex />} />
            <Route path="/hooks/use-state/counter" element={<UseStateCounter />} />
            <Route path="/hooks/use-state/form" element={<UseStateForm />} />
            <Route path="/hooks/use-state/todos" element={<UseStateTodos />} />
            <Route path="/hooks/use-effect" element={<UseEffectIndex />} />
            <Route path="/hooks/use-effect/data-fetching" element={<UseEffectDataFetching />} />
            <Route path="/hooks/use-effect/timer" element={<UseEffectTimer />} />
            <Route path="/hooks/use-effect/event-listeners" element={<UseEffectEventListeners />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
