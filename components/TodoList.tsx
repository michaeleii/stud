import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Separator } from "./ui/separator";

function Heading({ children }: { children: React.ReactNode }) {
  return <h3 className="my-3 text-2xl font-semibold">{children}</h3>;
}
function Todo({ children }: { children: React.ReactNode }) {
  return <div className="max-w-xl">{children}</div>;
}
function List({ children }: { children: React.ReactNode }) {
  return <ul className="flex flex-col gap-5">{children}</ul>;
}

function Item({
  children,
  checked,
}: {
  children: React.ReactNode;
  checked?: boolean;
}) {
  return (
    <li>
      <Card className="flex items-center gap-5 p-5">
        <Checkbox checked={checked} />
        <h4 className="text-xl">{children}</h4>
      </Card>
    </li>
  );
}
Todo.Heading = Heading;
Todo.List = List;
Todo.Item = Item;

export default Todo;
