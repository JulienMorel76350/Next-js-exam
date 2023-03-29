import { Select } from "@chakra-ui/react";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button, Input } from "@chakra-ui/react";

export default function Home() {
  const [date, setDate] = useState();
  const router = useRouter();

  const dates: any = [];
  const today = dayjs();
  for (let i = 0; i < 6; i++) {
    dates.push(today.add(i, "day"));
  }
  console.log(dates.map((d: any) => d.toISOString()));

  function handleSearchDate() {
    console.log(date);
    router.push("/icandeploy/" + date);
  }
  const selectChange = (event: any) => {
    setDate(event.target.value);
  };
  return (
    <>
      <h1></h1>
      <select onChange={selectChange}>
        <option selected disabled>
          Choisir un jours
        </option>
        {dates.map((d: any, i = 0) => {
          i++;
          return (
            <option key={i} value={d.toISOString()}>
              {i} + Jours
            </option>
          );
        })}
      </select>
      <Button
        onClick={(e: { preventDefault: () => void }) => {
          handleSearchDate();
        }}
        colorScheme="teal"
        variant="solid"
      >
        Rechercher
      </Button>
    </>
  );
}
