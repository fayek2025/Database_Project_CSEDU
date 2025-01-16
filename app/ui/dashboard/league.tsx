import { TrophyIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { League } from '@/app/lib/definitions';

export default function LeagueCard({ leagues }: { leagues: League[] }) {
  if (!leagues || leagues.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  return (
    <div className="w-full md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Popular Leagues
      </h2>

      <div className="rounded-xl bg-gray-50 p-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {leagues.map((league) => (
            <div
              key={league.id}
              className="flex flex-col items-center rounded-md bg-white p-4 shadow-sm"
            >
              <TrophyIcon className="h-8 w-8 text-yellow-500" />
              <h3 className="mt-2 text-lg font-semibold"> League :{league.leaguename}</h3>
              <p className="text-gray-500">{league.country}</p>
              <p className="text-sm text-gray-400">
                Established: {new Date(league.established).toDateString()}
              </p>
              <p className="mt-2 rounded-md bg-blue-100 px-3 py-1 text-sm text-blue-600">
                Tier: {league.tier}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
