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
        $mysql_fake_data = json_decode("[ { \"pro_no\": \"C0001\", \"pro_name\": \"卡涼多功能寵物墊 散熱墊 椅墊(小型寵用)\", \"pro_pic\": \"C0001.jpg\", \"pro_price\": \"500\", \"pro_score\": 4 }, { \"pro_no\": \"C0002\", \"pro_name\": \"日本IRIS《除貓砂踏墊》NO-550\", \"pro_pic\": \"C0002.jpg\", \"pro_price\": \"699\", \"pro_score\": 5 } ]",true);

//        die(var_dump($mysql_fake_data));
        $db = getDB();
        $this->response = $this->view->render($this->response, 'index.twig',['data'=>$mysql_fake_data]);
        return $this->response;
    }
}