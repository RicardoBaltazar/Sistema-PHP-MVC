<?php

Class Controller{
    public $dados;

    public function __contruct(){
        $this->dados = array();

    }

    public function carregarTemplate($nomeView, $dadosModel = array()){
        $this->dados = $dadosModel;
        require_once 'View/template.php';
    }

    public function carregarViewNoTemplate($nomeView, $dadosModel = array()){
        extract($dadosModel);
        require_once 'View/'.$nomeView.'.php';
    }
}