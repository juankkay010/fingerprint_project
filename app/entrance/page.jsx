/* eslint-disable @next/next/no-img-element */
import { notFound } from "next/navigation";
import moment from 'moment';


async function SearchPage({ searchParams }) {
  
  if (!searchParams.id) return notFound();

  console.log(
    `http://localhost:3000/api/entrance/${searchParams.id}`
  );
  const results = await fetch(
    `http://localhost:3000/api/entrance/${searchParams.id}`,{
      
      method: 'GET',
      cache: 'no-store'
    });
  
  const data = await results.json();
  
  if (data.message === 'Usuario no encontrado') return <div>No results...</div>;

  return (
    <section>
    <div className="mx-auto max-w-7xl p-6 lg:px-8">
    <h1 className="text-4xl font-bold pb-3">Fechas</h1>

    <h2 className="pb-3">
      registros del usuario {searchParams.id}
      <span className="italic ml-2">{searchParams.departureDate}</span>
    </h2>

    <hr className="mb-5" />

    <div className="space-y-2 mt-5">

      {data.map((item, i) => (
        <div key={i} className="flex space-y-2 justify-between space-x-4 p-5 border rounded-lg">  
          <div className="flex flex-1 items-center">
            <p className="text-xl font-bold">{moment(item.date).format('YYYY-MM-DD HH:mm:ss')}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}

export default SearchPage;
