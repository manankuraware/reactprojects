import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

const query = gql`
  query GetTodosWithUser {
    getTodos {
      title
      completed
      user {
        email
        phone
        website
      }
    }
  }
`;

function App() {
  // install npm install @apollo/client graphql
  const { loading, error, data } = useQuery(query);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div>
      <h2>Todo List</h2>

      <table
        border="1"
        cellPadding="10"
        style={{ borderCollapse: "collapse", width: "100%" }}
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Status</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>

        <tbody>
          {data.getTodos.map((todo, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{todo.title}</td>
              <td>{todo.completed ? "✅ Done" : "❌ Pending"}</td>
              <td>{todo.user.email}</td>
              <td>{todo.user.phone}</td>
              <td>{todo.user.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
