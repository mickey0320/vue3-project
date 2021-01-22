export enum Category {
  All,
  React,
  Vue,
  Node,
}

export interface ISlider {
  url: string;
}

export interface ILesson {
  title: string;
  video: string;
  poster: string;
  price: number;
  category?: string;
}

export interface ILessonos {
  hasMore: boolean;
  loading: boolean;
  offset: number;
  limit: number;
  list: ILesson[];
}

export interface IHomeState {
  category: Category;
  sliders: ISlider[];
  lessons: ILessonos;
}
