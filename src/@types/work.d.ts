declare namespace WorkType {
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

  interface WorkFiltersPayload {
    search: string;
    tagList_search: string;
    selectedTagList?: string[]; //template value to store  autocomplete value,not send API
  }
}
