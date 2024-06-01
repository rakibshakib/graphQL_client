import { gql, useQuery } from "@apollo/client";
import "./App.css";

const GET_All_Todos = gql`
  query getAllTodos($completed: Boolean) {
    getTodos(completed: $completed) {
      id
      completed
      title
      user {
        name
      }
    }
  }
`;
function App() {
  const { loading, error, data } = useQuery(GET_All_Todos, {
    variables: { completed: true },
  });
  console.log({ data });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <>
      <div>
        <h2>This is Simple GraphQL Practice Code</h2>
        {data?.getTodos?.map((todo) => (
          <div
            key={todo?.id}
            style={{
              border: "1px solid purple",
            }}
          >
            <a>{todo?.title} </a>
            <p>
              <small>{todo?.completed ? "Complete" : "Pending"}</small>
            </p>
            <p>Assigned To: {todo?.user?.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
