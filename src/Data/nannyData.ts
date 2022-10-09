export interface NannyData {
  id?: number;
  name: string;
  experience: string;
  type: string;
  image: string;
  rating: number;
}
export const nannyData: NannyData[] = [
  {
    id: 1,
    name: "Sumana Perera",
    experience: "25 years service as nanny in japan",
    type: "Full Time",
    image: "images/imageNanny005.jpg",
    rating: 4,
  },
  {
    id: 2,
    name: "Mana Perera",
    experience: "25 years service as nanny in japan",
    type: "Full Time",
    image: "images/imageHome004.jpg",
    rating: 4,
  },
];
