/* eslint-disable @typescript-eslint/no-explicit-any */
interface CyclesState {
    cycles: Cycle[];
    activeCycleId: string | null;
  }

export interface Cycle {
    id: string;
    task: string;
    minutesAmount: number;
    startDate: Date;
    interruptedDate?: Date;
    finishedDate?: Date;
  }

export enum ActionsTypes {
    ADD_NEW_CYCLE = "ADD_NEW_CYCLE",
    INTERRUPT_CURRENT_CYCLE = "INTERRUPT_CURRENT_CYCLE",
    MARK_CURRENT_CYCLE_AS_FINISHED = "MARK_CURRENT_CYCLE_AS_FINISHED",
}

export function cyclesReduces (state: CyclesState, action: any) {

    switch (action.type) {
      case ActionsTypes.ADD_NEW_CYCLE:
        return {
          ...state,
          cycles: [...state.cycles, action.payload.newCycle],
          activeCycleId: action.payload.newCycle.id,
        };
      case ActionsTypes.INTERRUPT_CURRENT_CYCLE:
        return {
          ...state,
          cycles: state.cycles.map((cycle) => {
            if (cycle.id === state.activeCycleId) {
              return { ...cycle, interruptedDate: new Date() };
            } else {
              return cycle;
            }
          }),
          activeCycleId: null,
        };
      case ActionsTypes.MARK_CURRENT_CYCLE_AS_FINISHED:
        return {
          ...state,
          cycles: state.cycles.map((cycle) => {
            if (cycle.id === state.activeCycleId) {
              return { ...cycle, finishedDate: new Date() };
            } else {
              return cycle;
            }
          }),
          activeCycleId: null,
        };
      default:
        return state;
    }
  }