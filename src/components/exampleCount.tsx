import useExampleStore from "~/store/exampleStore";

export default function ExampleCount() {
  const count = useExampleStore((state) => state.count);
  const increment = useExampleStore((state) => state.increment);
  const decrement = useExampleStore((state) => state.decrement);
  const reset = useExampleStore((state) => state.reset);

  return (
    <div className="rounded bg-zinc-100 p-2 ">
      <p className="text-center">Count is {count}</p>
      <div className="flex gap-2">
        <Button onClick={increment}>Increase</Button>
        <Button onClick={decrement}>Decrease</Button>
        <Button onClick={reset}>Reset</Button>
      </div>
    </div>
  );
}

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button className="rounded bg-zinc-200 p-2" onClick={onClick}>
      {children}
    </button>
  );
};
