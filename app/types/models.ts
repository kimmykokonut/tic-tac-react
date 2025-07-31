export type Player = "X" | "O";
export type SquareValue = Player | null;
export type GameBoard = SquareValue[];

export interface SquareProps {
  value: SquareValue;
  onPress: () => void;
}

export interface GameState {
  squares: GameBoard;
  xIsNext: boolean;
  winner: Player | null;
  isDraw: boolean;
}
