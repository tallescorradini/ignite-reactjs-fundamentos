export function RespositoryItem({ repository }) {
  return (
    <li>
      <strong>{repository?.name ?? "Default"}</strong>
      <p>{repository?.description}</p>
      <a href={repository?.html_url}>Access repository</a>
    </li>
  );
}
