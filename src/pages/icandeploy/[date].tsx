import useSWR from "swr";

import { useRouter } from "next/router";

export default function () {
  const router = useRouter();
  const date = router.query.date;

  const fetcher = (...args: Parameters<typeof fetch>) =>
    fetch(...args).then((res) => res.json());
  const { data, error } = useSWR("/api/icandeploy?date=" + date, fetcher, {
    revalidateOnFocus: false,
  });
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      {data.validated
        ? <h1 className='Fine'>l'application peut etre déployé on est pas vendredi </h1>
        : <h1 className='Bad'>l'application ne peut pas etres déployé on est vendredi</h1>}
    </div>
  );
}
