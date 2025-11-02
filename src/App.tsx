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
import ZustandPractice from "./pages/zustand/practice/Index";
import ZustandFillInCounter from "./pages/zustand/practice/FillInCounter";
import ZustandBuildBookmark from "./pages/zustand/practice/BuildBookmark";
import ZustandBuildNotification from "./pages/zustand/practice/BuildNotification";
import HooksIndex from "./pages/hooks/Index";
import UseStateIndex from "./pages/hooks/use-state/Index";
import UseStateCounter from "./pages/hooks/use-state/Counter";
import UseStateForm from "./pages/hooks/use-state/Form";
import UseStateTodos from "./pages/hooks/use-state/Todos";
import UseStatePractice from "./pages/hooks/use-state/practice/Index";
import UseStateTemperatureConverter from "./pages/hooks/use-state/practice/TemperatureConverter";
import UseStateShoppingCart from "./pages/hooks/use-state/practice/ShoppingCart";
import UseStateMultiStepForm from "./pages/hooks/use-state/practice/MultiStepForm";
import UseEffectIndex from "./pages/hooks/use-effect/Index";
import UseEffectDataFetching from "./pages/hooks/use-effect/DataFetching";
import UseEffectTimer from "./pages/hooks/use-effect/Timer";
import UseEffectEventListeners from "./pages/hooks/use-effect/EventListeners";
import UseEffectPractice from "./pages/hooks/use-effect/practice/Index";
import UseEffectWindowTracker from "./pages/hooks/use-effect/practice/WindowTracker";
import UseEffectAutoSaveForm from "./pages/hooks/use-effect/practice/AutoSaveForm";
import UseEffectSearchFilter from "./pages/hooks/use-effect/practice/SearchFilter";
import UseRefIndex from "./pages/hooks/use-ref/Index";
import UseRefInputFocus from "./pages/hooks/use-ref/InputFocus";
import UseRefVideoPlayer from "./pages/hooks/use-ref/VideoPlayer";
import UseRefPreviousValue from "./pages/hooks/use-ref/PreviousValue";
import UseReducerIndex from "./pages/hooks/use-reducer/Index";
import UseReducerCounter from "./pages/hooks/use-reducer/Counter";
import UseReducerForm from "./pages/hooks/use-reducer/Form";
import UseReducerTodoList from "./pages/hooks/use-reducer/TodoList";
import UseMemoIndex from "./pages/hooks/use-memo/Index";
import UseMemoExpensiveCalculation from "./pages/hooks/use-memo/ExpensiveCalculation";
import UseMemoFilteredList from "./pages/hooks/use-memo/FilteredList";
import UseMemoComplexObject from "./pages/hooks/use-memo/ComplexObject";
import UseCallbackIndex from "./pages/hooks/use-callback/Index";
import UseCallbackParentChild from "./pages/hooks/use-callback/ParentChild";
import UseCallbackEventHandler from "./pages/hooks/use-callback/EventHandler";
import UseCallbackFormOptimization from "./pages/hooks/use-callback/FormOptimization";
import CustomHooksIndex from "./pages/hooks/custom-hooks/Index";
import CustomHooksLocalStorage from "./pages/hooks/custom-hooks/LocalStorage";
import CustomHooksFetch from "./pages/hooks/custom-hooks/Fetch";
import CustomHooksDebounce from "./pages/hooks/custom-hooks/Debounce";
import UseImperativeHandleIndex from "./pages/hooks/use-imperative-handle/Index";
import UseImperativeHandleInputFocus from "./pages/hooks/use-imperative-handle/InputFocusControl";
import UseImperativeHandleFormControl from "./pages/hooks/use-imperative-handle/FormControl";
import UseImperativeHandleModalControl from "./pages/hooks/use-imperative-handle/ModalControl";
import AllComponents from "./pages/AllComponents";
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
            <Route path="/all-components" element={<AllComponents />} />
            <Route path="/zustand" element={<ZustandIndex />} />
            <Route path="/zustand/counter" element={<Counter />} />
            <Route path="/zustand/todos" element={<Todos />} />
            <Route path="/zustand/profile" element={<Profile />} />
            <Route path="/zustand/cart" element={<Cart />} />
            <Route path="/zustand/collaboration" element={<Collaboration />} />
            <Route path="/zustand/practice" element={<ZustandPractice />} />
            <Route path="/zustand/practice/fill-in-counter" element={<ZustandFillInCounter />} />
            <Route path="/zustand/practice/build-bookmark" element={<ZustandBuildBookmark />} />
            <Route path="/zustand/practice/build-notification" element={<ZustandBuildNotification />} />
            <Route path="/hooks" element={<HooksIndex />} />
            <Route path="/hooks/use-state" element={<UseStateIndex />} />
            <Route path="/hooks/use-state/counter" element={<UseStateCounter />} />
            <Route path="/hooks/use-state/form" element={<UseStateForm />} />
            <Route path="/hooks/use-state/todos" element={<UseStateTodos />} />
            <Route path="/hooks/use-state/practice" element={<UseStatePractice />} />
            <Route path="/hooks/use-state/practice/temperature-converter" element={<UseStateTemperatureConverter />} />
            <Route path="/hooks/use-state/practice/shopping-cart" element={<UseStateShoppingCart />} />
            <Route path="/hooks/use-state/practice/multi-step-form" element={<UseStateMultiStepForm />} />
            <Route path="/hooks/use-effect" element={<UseEffectIndex />} />
            <Route path="/hooks/use-effect/data-fetching" element={<UseEffectDataFetching />} />
            <Route path="/hooks/use-effect/timer" element={<UseEffectTimer />} />
            <Route path="/hooks/use-effect/event-listeners" element={<UseEffectEventListeners />} />
            <Route path="/hooks/use-effect/practice" element={<UseEffectPractice />} />
            <Route path="/hooks/use-effect/practice/window-tracker" element={<UseEffectWindowTracker />} />
            <Route path="/hooks/use-effect/practice/auto-save-form" element={<UseEffectAutoSaveForm />} />
            <Route path="/hooks/use-effect/practice/search-filter" element={<UseEffectSearchFilter />} />
            <Route path="/hooks/use-ref" element={<UseRefIndex />} />
            <Route path="/hooks/use-ref/input-focus" element={<UseRefInputFocus />} />
            <Route path="/hooks/use-ref/video-player" element={<UseRefVideoPlayer />} />
            <Route path="/hooks/use-ref/previous-value" element={<UseRefPreviousValue />} />
            <Route path="/hooks/use-reducer" element={<UseReducerIndex />} />
            <Route path="/hooks/use-reducer/counter" element={<UseReducerCounter />} />
            <Route path="/hooks/use-reducer/form" element={<UseReducerForm />} />
            <Route path="/hooks/use-reducer/todo-list" element={<UseReducerTodoList />} />
            <Route path="/hooks/use-memo" element={<UseMemoIndex />} />
            <Route path="/hooks/use-memo/expensive-calculation" element={<UseMemoExpensiveCalculation />} />
            <Route path="/hooks/use-memo/filtered-list" element={<UseMemoFilteredList />} />
            <Route path="/hooks/use-memo/complex-object" element={<UseMemoComplexObject />} />
            <Route path="/hooks/use-callback" element={<UseCallbackIndex />} />
            <Route path="/hooks/use-callback/parent-child" element={<UseCallbackParentChild />} />
            <Route path="/hooks/use-callback/event-handler" element={<UseCallbackEventHandler />} />
            <Route path="/hooks/use-callback/form-optimization" element={<UseCallbackFormOptimization />} />
            <Route path="/hooks/custom-hooks" element={<CustomHooksIndex />} />
            <Route path="/hooks/custom-hooks/local-storage" element={<CustomHooksLocalStorage />} />
            <Route path="/hooks/custom-hooks/fetch" element={<CustomHooksFetch />} />
            <Route path="/hooks/custom-hooks/debounce" element={<CustomHooksDebounce />} />
            <Route path="/hooks/use-imperative-handle" element={<UseImperativeHandleIndex />} />
            <Route path="/hooks/use-imperative-handle/input-focus" element={<UseImperativeHandleInputFocus />} />
            <Route path="/hooks/use-imperative-handle/form-control" element={<UseImperativeHandleFormControl />} />
            <Route path="/hooks/use-imperative-handle/modal-control" element={<UseImperativeHandleModalControl />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
