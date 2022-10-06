export interface IFavorite {
  name: string;
  neighborhood: string;
  photograph: number;
  address: string;
  latlng: ICoordinates
  cuisine_type: string;
  operating_hours: IWeekDays;
  createdAt: number;
  updatedAt: string;
  id: number;
  is_favorite: boolean;
}

export interface ICoordinates {
  lat: number;
  lng: number;
}

export interface IWeekDays {
  Monday: string;
  Tuesday: string;
  Wednesday: string;
  Thursday: string;
  Friday: string;
  Saturday: string;
  Sunday: string;
}
