export interface NannyData {
  id?: number;
  name: string;
  experience: string;
  age: string;
  image: string;
  rating: number;
}
export const nannyData: NannyData[] = [
  {
    id: 1,
    name: "Ramya Perera",
    experience: "5 years service as nanny in japan",
    age: "38 years",
    image: "images/imageNanny005.jpg",
    rating: 4,
  },
  {
    id: 2,
    name: "Raini Fernando",
    experience: "Certified Child Caregiver at VTA",
    age: "29 years",
    image: "images/imageNanny006.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Lekha Peiterz",
    experience: "Certified Child Caregiver at VTA",
    age: "32 years",
    image: "images/imageNanny009.jpg",
    rating: 4,
  },
  {
    id: 4,
    name: "Monali Alwis",
    experience: "3 years service as nanny in jUnited States",
    age: "30 years",
    image: "images/imageNanny010.jpg",
    rating: 4,
  },
  {
    id: 5,
    name: "Chanika Perera",
    experience: "Certified Child Caregiver at VTA",
    age: "37 years",
    image: "images/imageNanny011.jpg",
    rating: 5,
  },
];
