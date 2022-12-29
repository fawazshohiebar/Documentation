
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
 const listarray= [];
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
}else if(myArray[0]==='check'){
  check(myArray[1])
}
else if(myArray[0]==='uncheck'){
  uncheck(myArray[1])
}
else if(myArray[0]=='edit'){
  edit(myArray[1],myArray[2])

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
 
  listarray.forEach((task, i) => {
    console.log(`${i + 1}: [${task.done ? '✓' : ' '}] ${task.task}`);
});
}
function add(c){
  listarray.push({task:`${c.trim()}`,done:false});

}


function remove(){
  listarray.pop();
}
function removeby(c){
  if (c >listarray.length -1){
    console.log("you have enterd a number that is greater than the array list ")
  }else{
  listarray.splice(c,1);
}}

function check(taskNumber) {
  if (taskNumber < 1 || taskNumber > listarray.length) {
      console.error(`Error: Task number ${taskNumber} does not exist.`);
      return;
  }
  listarray[taskNumber - 1].done = true;
  console.log(`Task ${taskNumber} marked as done.`);
}

function uncheck(taskNumber){
  if (taskNumber < 1 || taskNumber > listarray.length) {
    console.error(`Error: Task number ${taskNumber} does not exist.`);
    return;
}
listarray[taskNumber - 1].done = false;
console.log(`Task ${taskNumber} marked as done.`);
}


function edit(taskNumber, newText) {
  if (!newText) {
      console.error("Error: No new text provided.");
      return;
  }

  if (!taskNumber) {
      taskNumber = listarray.length;  // Edit the last task by default.
  }

  if (taskNumber < 1 || taskNumber > listarray.length) {
      console.error(`Error: Task number ${taskNumber} does not exist.`);
      return;
  }

  listarray[taskNumber - 1].task = ` ${newText.trim()}`;
  console.log(`Task ${taskNumber} edited.`);
}


