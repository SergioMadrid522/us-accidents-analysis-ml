import Swal from "sweetalert2";

export function MoreInfoAlert() {
  const listStyles = `
    display: flex; 
    gap: 1em;
    flex-direction: column;
  `;
  Swal.fire({
    title: "How to fill out the form?",
    html: `
      <ol style=${listStyles}>
        <li><strong>Temperature (°F):</strong> Valid range: <strong>1 - 158°F</strong>.</li>
        <li><strong>Humidity (%):</strong> Valid range: <strong>1 - 100%</strong>.</li>
        <li><strong>Visibility (mi):</strong> Valid range: <strong>1 - 10 miles</strong>.</li>
        <li><strong>Wind Speed (mph):</strong> Valid range: <strong>1 - 253 mph</strong>.</li>
        <li><strong>Precipitation (in):</strong> Valid range: <strong>1 - 72 inches</strong>.</li>
      </ol>
    `,
    icon: "warning",
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Got it!",
  });
}
