import { PlayIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  Separator,
  StartCountdownButton,
  TaskInput,
  MinutesAmountInput,
} from "./styles";

const newCycleFormValidationScheme = zod.object({
  task: zod.string().min(1, "Informe o nome da tarefa").max(30),
  minutesAmount: zod.number().min(5).max(60),
});

// interface NewCycleFormData {
//   task: string;
//   minutesAmount: number;
// }

type NewCycleFormData = zod.infer<typeof newCycleFormValidationScheme>;

export function Home() {
  const { register, handleSubmit, watch } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationScheme),
    defaultValues: {
      task: "",
      minutesAmount: 25,
    },
  });

  function handleCreateNewCycle(data: NewCycleFormData) {
    console.log(data);
  }

  const task = watch("task");
  const isSubmitButtonDisabled = !task;

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>

          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu estudo"
            {...register("task")}
          />
          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="Projeto 4" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register("minutesAmount", { valueAsNumber: true })}
          />
          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton disabled={isSubmitButtonDisabled} type="submit">
          <PlayIcon size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}
