import { RespositoryItem } from "./RepositoryItem";

const repository = {
  name: "unform",
  description: "Forms in React",
  link: "https://github.com/unform/unform",
};

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Repository list</h1>

      <ul>
        <RespositoryItem repository={repository} />
      </ul>
    </section>
  );
}
