import HelloWorld from "../examples/basico/01_HelloWorld.tsx";
import Syntax from "../examples/basico/02_Syntax.tsx";
import Components from "../examples/basico/03_Components.tsx";
import Props from "../examples/basico/04_Props.tsx";
import States from "../examples/basico/05_States.tsx";
import Events from "../examples/basico/06_Events.tsx";
import Conditionals from "../examples/basico/07_Conditionals.tsx";
import Lists from "../examples/basico/08_Loops.tsx";

function Basico() {
  return (
    <section className="p-4">
      <div className="flex flex-col items-center gap-8">
        <h2 className="text-3xl font-semibold text-lime-300">Basico</h2>
        <HelloWorld />
        <Syntax />
        <Components />
        <Props />
        <States />
        <Events />
        <Conditionals />
        <Lists />
      </div>
    </section>
  );
}

export default Basico;
