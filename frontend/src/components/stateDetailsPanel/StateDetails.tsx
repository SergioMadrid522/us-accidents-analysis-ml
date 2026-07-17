import { UILayer } from "../../data";
import useGetData from "../../hooks/useGetData";

export default function StateDetails({ stateCode }: { stateCode: string }) {
  const { data, loading } = useGetData(stateCode);

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <p className="text-xs font-semibold tracking-wide text-zinc-400 uppercase">
          Loading...
        </p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center">
        <p className="text-xs font-semibold tracking-wide text-zinc-400 uppercase">
          Error while fetching the details, please try again.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      {UILayer(data).map(({ label, value }) => (
        <div key={label}>
          <p className="text-xs font-semibold tracking-wide text-zinc-400 uppercase">
            {label}:
          </p>
          {Array.isArray(value) ? (
            <ul className="list-disc ml-5">
              {value.map((item) => (
                <li
                  key={item}
                  className="text-xs font-semibold tracking-wide text-zinc-400 uppercase"
                >
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <span className="text-xs font-semibold tracking-wide text-zinc-400 uppercase">
              {value}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
