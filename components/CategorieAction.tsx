import React from "react";

interface Video {
  id: number;
  title: string;
  genre_ids: number[];
  // Ajoutez d'autres propriétés si nécessaire
}

const CategorieAction = ({ elem }: { elem: Video[] }) => {
  const data = elem.filter((item: any) => item.genre_ids.includes(28));

  console.log(data);

  return  (
  <div>
  </div>
  );
};

export default CategorieAction;
