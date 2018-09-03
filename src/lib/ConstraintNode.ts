import { NodeInterface } from './Node';

export interface ConstraintSolutionNodeInterface {
  left: ConstraintSolutionNodeInterface;
  right: ConstraintSolutionNodeInterface;
  up: ConstraintSolutionNodeInterface;
  down: ConstraintSolutionNodeInterface;
}

export interface ConstraintRowInterface
  extends ConstraintSolutionNodeInterface {
  node: NodeInterface;
  solutionNumber: number;
}

export default class ConstraintNode implements ConstraintRowInterface {
  public left: ConstraintSolutionNodeInterface;
  public right: ConstraintSolutionNodeInterface;
  public up: ConstraintSolutionNodeInterface;
  public down: ConstraintSolutionNodeInterface;
  public node: NodeInterface;
  public solutionNumber: number;

  constructor(inputNode: NodeInterface, inputNumber: number) {
    this.node = inputNode;
    this.solutionNumber = inputNumber;
  }
}