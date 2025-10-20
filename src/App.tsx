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
import UseState from "./pages/hooks/UseState";
import UseEffect from "./pages/hooks/UseEffect";
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
            <Route path="/hooks/use-state" element={<UseState />} />
            <Route path="/hooks/use-effect" element={<UseEffect />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
