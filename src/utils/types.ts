export type Cell = 'x' | 'o' | null;
export type BoardState = [Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell];
export type Moves = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type BoardDirections = 'horizontal' | 'vertical' | 'diagonal';
export type DiagonalDirection = 'main' | 'counter';
export type BoardResult = {
  winner: Cell;
  direction?: BoardDirections;
  column?: 1 | 2 | 3;
  row?: 1 | 2 | 3;
  diagonal?: DiagonalDirection;
};
export interface WinningCondition {
  cells: Moves[];
  direction: BoardDirections;
  row?: 1 | 2 | 3;
  column?: 1 | 2 | 3;
  diagonal?: DiagonalDirection;
}

export interface GetBoardResultArgs {
  conditions: WinningCondition;
  player: Cell;
}
