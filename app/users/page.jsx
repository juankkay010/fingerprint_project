
import { notFound } from "next/navigation";
import Link from "next/link";

async function SearchPage(searchParams) {
  
  const results = await fetch(
    `http://localhost:3000/api/user`, {
      
      method: 'GET',
      cache: 'no-store'
    });

  const data = await results.json();
  console.log(data)
  

  if (!results) return <div>No results...</div>;

  return (
    <section>
      <div className="mx-auto max-w-7xl p-6 lg:px-8">
        <h1 className="text-4xl font-bold pb-3">
          usuarios
        </h1>

        <hr className="mb-5" />

        <h3 className="font-semibold text-xl">
          {/* Aquí se muestra la lista de resultados de la búsqueda*/}
        </h3>

        <div className="space-y-2 mt-5">
          {data.map((item, i) => (
            <div
              key={i}
              className="flex space-y-2 justify-between space-x-4 p-5 border rounded-lg"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/6522/6522581.png"
                alt="image of property"
                className="h-44 w-54 rounded-lg"
              />

              <div className="flex flex-1 space-x-5 justify-between">
                <div>
                  <p className="text-xl text-bold">
                   
                  </p>
                  <p className="text-sm"></p>
                </div>

                <div className="flex flex-col justify-between">
                  <div className="flex items-start justify-end space-x-2 text-right">
                    <div>
                      
                      
                      <p className="font-bold"><Link href={`/entrance/?id=${item.id}`}>{item.name_user}</Link></p>
                      <p className="text-xs">activo</p>
                    </div>

                    <p className="flex items-center justify-center font-bold text-sm w-10 h-10 text-white bg-blue-900 rounded-lg flex-shrink-0">
                      {item.id || "N/A"}
                    </p>
                  </div>

                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SearchPage;
