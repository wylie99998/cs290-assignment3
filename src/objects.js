/**
* Create an object literal with the following key value pairs:
* type: {string} 'Goldfish'
* brand: {string} 'Pepperidge Farm'
* flavor: {string} 'Cheddar'
* count: {number} 2000
* It should be returned directly by the following function
* @return {object} - the object literal
*/

function returnObjectLiteral() {
  //your code here
  return {type: "Goldfish", brand: "Pepperidge Farm", flavor: "Cheddar", count: 2000}; //Modify ONLY this line
  //end your code
}

/**
* Create a constructor function for a `MessageLog` object.
* @constructor
* @param {string} user - The user associated to the message log
* The string indicating the user should be stored in the user property of the
* object instances.
*
* In addition, the following methods should be
* callable on a MessageLog object:
* logMessage( {string} messageText, {number} direction) - This should log a
* message
* as either being sent or received. A direction of 0 indicates it is a message
* the user sent. A direction of 1 indicates it is a message the user received.
* Behavior for other numbers is undefined.
* getSentMessage({number} n) - returns as a string, the content of the nth most
* recently sent message. To conserve memory, the object should only keep the
* last 5 message. n=0 retrieves the most recent n=4 retrieves the least recent
* of the 5.
* totalSent() - returns an integer indicating the total number of messages sent
* totalReceived() - returns an integer indicating the total number of messages
* received
*/

//your code here
function MessageLog(user_Input){
	this.user = user_Input;  //inprogress?
    this.messageText = [];
    this.direction = [];
     this.n = 0;
   /*
    function logMessage(messageText, direction){
        this.messageText[n] = messageText;
        this.direction[n] = direction; 
        n++;
    }
    function getSentMessage(n){
    	//return string of n message
        if(n > 4)
            consol.log("ERROR");
        else
            for(i=0;i < n.length; i++){
                var temp =0;
            if(direction[i] == 0)
                temp++;
            if(temp == n)
                return messageText[i];
        }
        return n + " sent message not found";
    }
    function totalSent(){
    	//return number sent
        var temp = 0;
        for(i=0; i < n.length; i++){
            if(direction[i] == 0)
                temp ++;
        }
        return temp;
    }
    function totalRecieved(){
    	//return recieved
        var temp = 0;
        for(i=0; i < n.length; i++){
            if(direction[i] == 1)
                temp ++;
        }
        return temp;
    }  */
}

MessageLog.prototype.logMessage = function(messageText, direction){
        this.messageText[this.n] = messageText;
        this.direction[this.n] = direction; 
        this.n = this.n + 1;
    }
     MessageLog.prototype.getSentMessage = function(num){
        //return string of n message
        var temp =0;
        if(num > 5)
            consol.log("ERROR");
        else
            for(i= this.n; i >= 0; i--){
                
            if(this.direction[i] == 0)
                temp++;
            if(temp == num +1)
                return this.messageText[i];
        }
        return num + " sent message not found";
    };
    MessageLog.prototype.totalSent = function(){
        //return number sent
        var temp = 0;
        for(i=0; i <= this.n; i++){
            if(this.direction[i] == 0)
                temp ++;
        }
        return temp;
    }
    MessageLog.prototype.totalReceived = function(){
        //return recieved
        var temp = 0;
        for(i=0; i <= this.n; i++){
            if(this.direction[i] == 1)
                temp ++;
        }
        return temp;
    }
//end your code

/**
* Add a method to the MessageLog prototype:
* lastReceivedMessage() - returns the message text of the last message the user
* received.
*/
//your code here
MessageLog.prototype.lastReceivedMessage = function(){
    var temp = this.totalReceived();
    return this.messageText[temp -1];
}
//end your code

/**
* Create an instance of a `MessageLog` for the user "BlackHatGuy". Have the
* instance receive 3 messages: "foo", "bar" and "baz", received in that order.
* Assign it to the variable myLog.
*/

//your code here
var myLog = new MessageLog("BlackHatGuy");
myLog.logMessage("foo", 1);
myLog.logMessage("bar", 1);
myLog.logMessage("baz",1);
//end your code
