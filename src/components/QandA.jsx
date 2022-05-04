import React from "react";

const QandA = () => {
  return (
    <div className="container text-center">
      <h4>Difference between javascript and node js</h4>
      <p>
        <b>Javascript</b>
        JavaScript is a simple programming language that runs in any browser
        JavaScript Engine like v8 Chakra SpiderMonkey and many more . JavaScript
        basically frontend development right now you can write backend also with
        javascript
      </p>
      <p>
        <b>NodeJs</b>
        Whereas Node JS is an interpreter or running environment for a
        JavaScript programming language that holds many excesses it requires
        libraries that can easily be accessed from JavaScript programming for
        better use. NodeJs basically use for backend development with javascript
        we can create easily anything with nodejs.
      </p>
      <h4>When should you use nodejs and when should you use mongodb</h4>
      <p>
        Mongodb is nosql database.There are many web servers built with nodejs
        that will then use MongoDB for storing data. MongoDB offers an API
        library that runs within a Nodejs application to give you programmatic
        access to MongoDB so you can create databases and then add, query,
        update or delete data from the MongoDB database. With MongoDB and nodejs
        crud oparation is too easy and super fast
      </p>
      <h4>Differences between sql and nosql databases.</h4>
      <p>
        SQL databases are vertically scalable, and NoSQL databases are
        horizontally scalable. SQL databases are table-based, and NoSQL
        databases are document based, key-value, graph, or wide-column stores.
        SQL databases are better for multi-row transactions, while NoSQL is
        better for unstructured data like documents or JSON. NoSQl is flexible
        and sql is not that much flexible. Nosql easy to read and also easy to
        work Or sql is not that much easy
      </p>
      <h4>What is the purpose of jwt and how does it work</h4>
      <p>
        JWT for secure our data for accesing user Somtimes we need to our data
        secure beacouse if client access it we will be in truble.{" "}
      </p>
      <p>
        How jwt work actually jwt help to send data client site to server site
        with encryption methord then server site said thet client data is true
        then client get access if data dosnt match with server data then client
        get a error messege
      </p>
    </div>
  );
};

export default QandA;
