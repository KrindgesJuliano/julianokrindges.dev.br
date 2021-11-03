export interface postObj {
  key: string;
  lastUpdated: string;
  title?: string;
  content: postContent;
}

export type postContent = {
  1215597856592: postItem;
  1677912610571: postItem;
  3375452205117: postItem;
  517933991150: postArray;
  519049425995: postItem;
  7288023256715: postArray;
};

export interface postItem {
  id: number | null;
  title: string | null;
  type: string | null;
  value: string;
}

export interface postArray {
  id: number | null;
  title: string | null;
  type: string | null;
  value: Array<string>;
}
