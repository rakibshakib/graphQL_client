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
    variables: { completed: undefined },
  });
  console.log({ data });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <>
      <div>
        <h2>This is Simple GraphQL Practice Code</h2>
{/*         {data?.getTodos?.map((todo) => (
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
        ))} */}
         <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid purple', padding: '8px' }}>SL</th>
          <th style={{ border: '1px solid purple', padding: '8px' }}>Title</th>
          <th style={{ border: '1px solid purple', padding: '8px' }}>Status</th>
          <th style={{ border: '1px solid purple', padding: '8px' }}>Assigned To</th>
        </tr>
      </thead>
      <tbody>
        {data?.getTodos?.map((todo) => (
          <tr key={todo?.id}>
            <td style={{ border: '1px solid purple', padding: '8px' }}>{todo?.id}</td>
            <td style={{ border: '1px solid purple', padding: '8px' }}>{todo?.title}</td>
            <td 
              style={{
                border: '1px solid purple',
                padding: '8px',
                backgroundColor: todo?.completed ? '#d4edda' : '#f8d7da',
                color: todo?.completed ? '#155724' : '#721c24'
              }}
            >
              {todo?.completed ? "Complete" : "Pending"}
            </td>
            <td style={{ border: '1px solid purple', padding: '8px' }}>{todo?.user?.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
      </div>
    </>
  );
}

export default App;
