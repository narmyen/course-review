export interface Course {
  id?: string;
  number: string;
  title: string;
}

export interface Review {
  id?: string;
  coment: string;
  score: number;
  courseID?: string;
}
