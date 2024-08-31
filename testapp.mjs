import ChatApp from "./appProject.mjs";
// Instantiate the ChatApp and test the methods
const chatApp = new ChatApp();
chatApp.registerUser('Alice');
chatApp.registerUser('Bob');
chatApp.registerUser('Charlie');

chatApp.sendMessage('Alice', 'Bob', 'Hello Bob!');
chatApp.sendMessage('Bob', 'Alice', 'Hi Alice!');
chatApp.sendMessage('Alice', 'Charlie', 'Hey Charlie!');

console.log('Chat History between Alice and Bob:', chatApp.displayChatHistory('Alice', 'Bob'));

chatApp.createGroupChat('Friends', ['Alice', 'Bob']);
chatApp.addUserToGroup('Friends', 'Charlie');
chatApp.removeUserFromGroup('Friends', 'Bob');

console.log('Group chats:', chatApp.groupChats)