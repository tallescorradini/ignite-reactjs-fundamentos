export function RespositoryItem({ repository }) {
  return (
    <li>
      <strong>{repository?.name ?? "Default"}</strong>
      <p>Forms in React</p>
      <a href={repository?.link}>Access repository</a>
    </li>
  );
}
