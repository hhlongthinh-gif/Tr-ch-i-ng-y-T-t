
export interface BingoItem {
  id: string;
  keyword: string;
  explanation: string;
  icon?: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface GridCell {
  item: BingoItem;
  isSelected: boolean;
}
