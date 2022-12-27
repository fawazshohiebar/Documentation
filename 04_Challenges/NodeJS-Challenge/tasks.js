
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
 const listarray= ["Banana", "Orange", "Apple", "Mango"];
function onDataReceived(text) {

  const myArray=text.split(" ");
  if (myArray[0] === 'quit\n') {
    quit();
  }
  else if(myArray[0]==='exit\n'){
    quit();
  }
  else if(text ==='hello\n'){
    helloo()
  }
  else if(myArray[0] === 'hello'){
    hello(myArray[1]);
  }
  else if (myArray[0] ==='help\n'){
    help();
  }
else if(text==='list\n'){
 list();
}
else if (myArray[0]==='add'){
  add(myArray[1]);
}
else if (text ==='remove\n')
{
  remove();
}  else if(myArray[0] === 'remove'){
  removeby(myArray[1]);
}

  else{
    unknownCommand(myArray[0]);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(c){
  console.log(`hello ${c.trim()}!`)
}
function helloo(){
  console.log(`hello!`)
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

// The following line starts the application
startApp("fawaz Shohiebar")




/* the help command to list all the possible commands */
function help(){
  console.log(' The commands you can use are :\n quit \n exit \n hello \n help')
}     

/*
sending lists 
*/ 
function list(){
 
console.log(listarray);
}
function add(c){
  listarray.push(`${c.trim()}`);

}


function remove(){
  listarray.pop();
}
function removeby(c){
  listarray.splice(c,1);
}