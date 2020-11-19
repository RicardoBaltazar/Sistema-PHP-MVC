<?php

spl_autoload_register(function($nome_arquivo){ 
    if(file_exists('Controller/'.$nome_arquivo.'.php')){
        require_once 'Controller/'.$nome_arquivo.'.php';
    }  elseif (file_exists('Core/'.$nome_arquivo.'.php')){
        require_once 'Core/'.$nome_arquivo.'.php';
    } elseif (file_exists('Model/'.$nome_arquivo.'.php')){
        require_once 'Model/'.$nome_arquivo.'.php';
    }
});