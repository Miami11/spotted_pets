<?php

use Medoo\Medoo;

// Initialize
function getDB()
{
    return new Medoo([
        'database_type' => 'mysql',
        'database_name' => 'foodie',
        'server' => '127.0.0.1',
        'username' => 'root',
        'password' => 'root',
        'socket' => '/Applications/MAMP/tmp/mysql/mysql.sock',
        'charset' => 'utf8',
    ]);
}
