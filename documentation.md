#1 install package.json >>// npm init -y
#2 install express >>// npm i express
#3 install nodemon // lets us easilz restart our server, making development easier anytime we make changes // npm i --save-dev nodemon // inside packahe.json >> script>> add "devStart"// call it with :"nodemon server.js" //
#4 create server.js file// this will be were all the server code will go
#5 now you can run // npm run devStart // in the terminal and work in server.js file. this will run all the code in the file server.js \*for example cosnole.log"H"

#6 to use the view we need to install a view-engine like Pug, in this case we use 'ejs'(most html a like lib) todo so // npm i ejs
// then tell application to use view engine in the server.js file
// need to modify the html file to have a ejs extention
//! for syntaxhighlighting install the ejs enxtention in vscode
// to render text variable use ejs tags and equalsign <%= %>

#7 create a folder 'routes' to keep everzthing nice and tidy. use this folder to make files for all your requests in this case Get req
