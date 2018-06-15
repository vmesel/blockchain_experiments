pragma solidity ^0.4.18;

contract Saudacoes {
  string mensagem;

  function Saudacoes() public{
    mensagem = "Estou pronto";
  }

  function setSaudacoes(string _mensagem) public{
    mensagem = _mensagem;
  }

  function getSaudacoes() public view returns(string){
    return mensagem;

  }
}
