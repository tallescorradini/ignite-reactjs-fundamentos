interface Props {
  repository: {
    name: string;
    description: string;
    html_url: string;
  };
}

export function RespositoryItem({ repository }: Props) {
  return (
    <li>
      <strong>{repository?.name ?? "Default"}</strong>
      <p>{repository?.description}</p>
      <a href={repository?.html_url}>Access repository</a>
    </li>
  );
}
