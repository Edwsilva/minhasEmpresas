import React, { ChangeEvent, useReducer, useState } from "react";
import styles from "./modal.module.css";
import Button from "../button/Button";
import Checkbox from "./Checkbox";
import Label from "./Label";
import InputDate from "./InputDate";


type Props = {
  atividades: string[];
}

type Periodo = {
  de: string | undefined;
  ate: string | undefined;
}

type FormContent = {
  cpf: string | undefined;
  periodo: Periodo;
  atividades: string[];
};

type Action = {
  type: "Remover Radio" | "Adicionar Radio" | "InputCPF" | "InputDateDe" | "InputDateAte";
  payload: string;
}

const initialFormState = {
  cpf: '',
  periodo: {
    de: '',
    ate: ''
  },
  atividades: []
}

const reducer = (state: FormContent, action: Action): FormContent => {
  switch (action.type) {
    case "Adicionar Radio":
      return {
        ...state,
        atividades: [...state.atividades, action.payload]
      };
    case "Remover Radio":
      return {
        ...state,
        atividades: state.atividades.filter(atividade => atividade !== action.payload)
      };
    case "InputCPF":
      return {
        ...state,
        cpf: action.payload
      }
    case "InputDateDe":
      return {
        ...state,
        periodo: {
          ...state.periodo,
          de: action.payload
        }
      }
    case "InputDateAte":
      return {
        ...state,
        periodo: {
          ...state.periodo,
          ate: action.payload
        }
      }
    default:
      return state;
  }
};

const ModalContent = ({ atividades }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialFormState);

  const handleRadioChanges = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: e.target.checked ? "Adicionar Radio" : "Remover Radio",
      payload: e.target.value
    })
  }

  const handleInputCPFChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'InputCPF',
      payload: e.target.value
    })
  }

  const handleInputPeriodoChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "De") {
      dispatch({
        type: `InputDateDe`,
        payload: e.target.value
      })
    } else if (e.target.id === "Ate") {
      dispatch({
        type: `InputDateAte`,
        payload: e.target.value
      })
    }
  }

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`Submit Cadastrar - ${state.cpf}`);
    console.log(`Submit Cadastrar - ${state.periodo.de}`);
    console.log(`Submit Cadastrar - ${state.periodo.ate}`);
    console.log(`Submit Cadastrar - ${state.atividades}`);
  }

  return (
    <form className={styles.content} onSubmit={handleSubmit}>
      <h1 className={styles.title}>Cadastro de Procurador</h1>
      <div className={styles.inputCPFContainer}>
        <div className={styles.inputCPF}>
          <Label>CPF</Label>
          <input placeholder="123.456.789-00" type="text" name="cpf" value={state.cpf} onChange={handleInputCPFChange} />
        </div>
        <Button p text={"OK"} props={{ style: { width: "60px" } }} />
      </div>
      <div className={styles.inputPeriodoContainer}>
        <Label>Período</Label>
        <div>
          <InputDate label="De:" name="de" id="De" handleChange={handleInputPeriodoChange} value={state.periodo.de} />
          <InputDate label="Até:" name="ate" id="Ate" handleChange={handleInputPeriodoChange} value={state.periodo.ate} />
        </div>
      </div>
      <div className={styles.inputAtividadesContainer}>
        <Label>Atividades</Label>
        <div className={styles.checkboxesContainer}>
          {atividades.map((atividade, i) => (
            <Checkbox key={`${i} - ${atividade}`} atividade={atividade} handleChange={handleRadioChanges} />
          ))}
        </div>
      </div >
      <Button text="Cadastrar" props={{ type: "submit" }} />
    </form>
  );
};

export default ModalContent;
