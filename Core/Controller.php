<?php

Class Controller{
    public $dados;

    public function __contruct(){
        $this->dados = array();

    }

    public function CarregarTemplate($nomeView, $dadosModel){
        $this->dados =$dadosModel;
        require_once 'View/template.php';
    }

    public function CarregarViewNoTemplate(){
        extract($dadosModel);
        require_once 'View/'.$nomeView.'.php';
    }
}