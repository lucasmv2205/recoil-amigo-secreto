import React from "react";
import { RecoilRoot } from "recoil";
import { act, fireEvent, render, screen } from "@testing-library/react";
import Formulario from "./Formulario";

describe("descrevendo comportamento do formulario", () => {
  it("quando o input está vazio, novos participantes não podem ser adicionados", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );
    // encontrar no DOM o input
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    // encontrar o botão
    const botao = screen.getByRole("button");
    // garantir que o input esteja no documento
    expect(input).toBeInTheDocument();
    // garantir que o botão esteja desabilitado
    expect(botao).toBeDisabled();
  });

  it("adicionar um participante caso existe um nom preenchido", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    const botao = screen.getByRole("button");

    //inserir valor no input
    fireEvent.change(input, {
      target: {
        value: "Lucas Martins",
      },
    });
    //clicar no botao
    fireEvent.click(botao);
    //cursor volta pro input
    expect(input).toHaveFocus();
    //limpar o forms
    expect(input).toHaveValue("");
  });

  it("Nomes duplicados nao podem ser adicionados na lista", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    const botao = screen.getByRole("button");

    fireEvent.change(input, {
      target: {
        value: "Lucas Martins",
      },
    });
    fireEvent.click(botao);
    fireEvent.change(input, {
      target: {
        value: "Lucas Martins",
      },
    });
    fireEvent.click(botao);

    const mensagemDeErro = screen.getByRole("alert");

    expect(mensagemDeErro.textContent).toBe(
      "Nomes duplicados nao sao permitidos"
    );
  });

  it("Mensagem de erro some depois do timer", () => {
    jest.useFakeTimers();
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    const botao = screen.getByRole("button");

    fireEvent.change(input, {
      target: {
        value: "Lucas Martins",
      },
    });
    fireEvent.click(botao);
    fireEvent.change(input, {
      target: {
        value: "Lucas Martins",
      },
    });
    fireEvent.click(botao);

    let mensagemDeErro = screen.queryByRole("alert");

    expect(mensagemDeErro).toBeInTheDocument();

    //esperar n segundos
    act(() => {
      jest.runAllTimers();
    });
    mensagemDeErro = screen.queryByRole("alert");
    expect(mensagemDeErro).toBeNull();
  });
});
