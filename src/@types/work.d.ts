declare namespace WorkApi {
  interface Work {
    id: string;
    title: string;
    createdAt: number;
    updatedAt: number;
    tagList: string[];
    thumbnailUrl: string;
    fullDescription: string;
    shortDescription: string;
  }
}
