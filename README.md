{\rtf1\ansi\ansicpg1252\cocoartf1561\cocoasubrtf600
{\fonttbl\f0\fswiss\fcharset0 Helvetica;\f1\fnil\fcharset0 HelveticaNeue;}
{\colortbl;\red255\green255\blue255;\red27\green31\blue34;\red255\green255\blue255;\red27\green31\blue34;
}
{\*\expandedcolortbl;;\cssrgb\c14118\c16078\c18039;\cssrgb\c100000\c100000\c100000;\cssrgb\c14118\c16078\c18039;
}
\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 <h1> BAMAZON </h1> \
<hr>\
\
<h3> What is Bamazon </h3> \
This application implements a simple command line based storefront that runs using <b>npm packages</b> and the <b>MySQL</b> database backend together. \
\pard\pardeftab720\sl360\partightenfactor0

\f1\fs32 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 \
<hr> \
\
<h3> Getting Started </h3>\
In order to run Bamazon, you will need to have MySQL database set up on your machine. If you do not have it set up yet, please visit mySQL\'92s website to get started. Once Installed, open bamazon.sql in your workbench. \
\
<h3> Customer Interface </h3> \
The customer interface allows the user to view the current inventory of the store - more specifically: \
<ul> \
<li> item_id </li> \
<li>product_name </li>\
<li> dept_name </li> \
<li> price </li> \
</ul> \
 \
To add/remove columns follow the following instructions: \
<ol> \
<li> Go to the store () function </li> \
<li> look for the queryString variable </li>\
<li> Add column name after \'91SELECT\'92  but before \'91FROM\'92 </li> \
\
<h3> Manager\'92s Interface </h3>\
Manager\'92s interface will be available in the next update \
The manager will be able to select one of four functions\
<ul> \
<li> View Products </li> \
<li> View low inventory products </li> \
<li> Add to inventory </li> \
<li> Add new product </li>\
</ul>\
\
<h3> NPM packages used </h3> \
You can use \cf4 \cb3 \outl0\strokewidth0 ````npm install````  to download all dependencies needed. \
\
<ul> \
<li> mySQL </li> \
<li> inquirer </li> \
<li> dotenv </li> \cf2 \cb3 \outl0\strokewidth0 \strokec2 \
\
<h3> DEMO </h3> \
![bamazonCustomer(1)](/bamazon/images/bamazonCustomer(1).PDF)\
![bamazonCustomer(2)](\cf4 \cb3 \outl0\strokewidth0 /bamazon/images/bamazonCustomer(2).PDF)\
\pard\pardeftab720\sl360\partightenfactor0
\cf4 \cb3 ![bamazonCustomer(3)](/bamazon/images/bamazonCustomer(3).PDF)\
![mySQLtable(1)](/bamazon/images/\cf4 \cb3 mySQLtable(1)\cf4 \cb3 .PDF)\
![mySQL(2)] (\cf4 \cb3 /bamazon/images/mySQL(2).PDF)}