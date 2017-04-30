<?php

class homeController
{
    private $request, $response, $args, $view, $data;

    function __construct($data)
    {
        //initializing value
        $this->data = $data;
        $this->request = $data->request;
        $this->response = $data->response;
        $this->view = $data->view;
        $this->args = $this->args;
    }

    function run()
    {
        $json = "{ \"product_cat\": [ { \"pro_no\": \"cat10001\", \"pro_name\": \"貓砂盆\", \"pro_info\": \"給貓咪最好的禮物\", \"pro_score\": 1, \"pro_pic\": \"product1\" }, { \"pro_no\": \"cat10001\", \"pro_name\": \"貓砂盆\", \"pro_info\": \"給貓咪最好的禮物\", \"pro_score\": 1, \"pro_pic\": \"product1\" } ] }";

        $json = json_decode($json,true)['product_cat'];
        //$db = getDB();

        $this->response = $this->view->render($this->response, 'index.twig' ,['data'=>$json]);
        return $this->response;
    }
}