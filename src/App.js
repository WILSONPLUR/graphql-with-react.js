import { gql, useQuery } from "@apollo/client";

const SPOTIFY = gql`
  query Query {
    queryArtists(byName: "Dababy") {
      name
      id
      image
    }
  }
`;
function App() {
  const { data } = useQuery(SPOTIFY);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        {data?.queryArtists.map((el) => {
          return (
            <div>
              <h1>{el.name}</h1>
              <br />
              <img alt="artist image" src={el.image} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default App;
