import { useRef, useImperativeHandle, forwardRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface ModalHandle {
  open: () => void;
  close: () => void;
  toggle: () => void;
}

const CustomModal = forwardRef<ModalHandle, { title: string; children: React.ReactNode }>(
  ({ title, children }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    useImperativeHandle(ref, () => ({
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      toggle: () => setIsOpen((prev) => !prev),
    }));

    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        <Card className="relative z-10 w-full max-w-md p-6 m-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">{title}</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div>{children}</div>
        </Card>
      </div>
    );
  }
);

CustomModal.displayName = 'CustomModal';

export const ModalControlExample = () => {
  const modalRef1 = useRef<ModalHandle>(null);
  const modalRef2 = useRef<ModalHandle>(null);

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Modal Control Demo</h2>
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Control modal state from parent component using imperative methods.
          </p>

          <div className="flex flex-wrap gap-2">
            <Button onClick={() => modalRef1.current?.open()}>
              Open Modal 1
            </Button>
            <Button onClick={() => modalRef2.current?.open()}>
              Open Modal 2
            </Button>
            <Button variant="outline" onClick={() => modalRef1.current?.toggle()}>
              Toggle Modal 1
            </Button>
            <Button variant="outline" onClick={() => modalRef2.current?.toggle()}>
              Toggle Modal 2
            </Button>
          </div>
        </div>
      </Card>

      <CustomModal ref={modalRef1} title="First Modal">
        <div className="space-y-4">
          <p className="text-muted-foreground">
            This modal is controlled from the parent component using useImperativeHandle.
          </p>
          <div className="flex gap-2">
            <Button onClick={() => modalRef1.current?.close()}>
              Close
            </Button>
            <Button variant="outline" onClick={() => modalRef2.current?.open()}>
              Open Other Modal
            </Button>
          </div>
        </div>
      </CustomModal>

      <CustomModal ref={modalRef2} title="Second Modal">
        <div className="space-y-4">
          <p className="text-muted-foreground">
            You can control multiple modals independently using refs.
          </p>
          <div className="flex gap-2">
            <Button onClick={() => modalRef2.current?.close()}>
              Close
            </Button>
            <Button variant="outline" onClick={() => modalRef1.current?.open()}>
              Open Other Modal
            </Button>
          </div>
        </div>
      </CustomModal>

      <Card className="p-6 bg-muted/50">
        <h3 className="text-lg font-semibold mb-3">Code Example</h3>
        <pre className="bg-background p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`interface ModalHandle {
  open: () => void;
  close: () => void;
  toggle: () => void;
}

const CustomModal = forwardRef<ModalHandle>((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    toggle: () => setIsOpen(prev => !prev),
  }));

  if (!isOpen) return null;

  return (
    <div className="modal">
      <h3>{props.title}</h3>
      {props.children}
      <button onClick={() => setIsOpen(false)}>Close</button>
    </div>
  );
});

function Parent() {
  const modalRef = useRef<ModalHandle>(null);

  return (
    <div>
      <button onClick={() => modalRef.current?.open()}>
        Open Modal
      </button>
      <button onClick={() => modalRef.current?.toggle()}>
        Toggle Modal
      </button>
      <CustomModal ref={modalRef} title="My Modal">
        <p>Modal content here</p>
      </CustomModal>
    </div>
  );
}`}</code>
        </pre>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-3">Key Concepts</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Parent component controls modal visibility imperatively</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Multiple modals can be controlled independently</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Encapsulates modal state management</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Perfect for component libraries and reusable UI</span>
          </li>
        </ul>
      </Card>
    </div>
  );
};
