import { UILayer } from "../../data";

export default function StateDetails() {
  return (
    <div className="flex flex-col gap-5">
      {UILayer.map((label) => (
        <p className="text-xs font-semibold tracking-wide text-zinc-400 uppercase">
          {`${label}:`}
        </p>
      ))}
    </div>
  );
}
