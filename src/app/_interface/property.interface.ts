export interface IProperty {
  id: string;
  title: string;
  cover: string;
  pictures: string[];
  description: string;
  host: {
    name: string;
    picture: string;
  };
  rating: string;
  location: {
    city: string;
    country: string;
  };
  equipments: string[];
  tags: string[];
}
