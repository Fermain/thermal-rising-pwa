import { useExampleStore } from "~/store";

export default function ExampleCount() {
  const { count, increase, increment, decrement, reset } = useExampleStore();
  const value: number = 10;

  return (
    <div className="rounded bg-zinc-100 p-2 ">
      <p className="text-center">Count is {count}</p>
      <div className="flex gap-2">
        <Button onClick={() => increase(value)}>Increase by {value}</Button>
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
