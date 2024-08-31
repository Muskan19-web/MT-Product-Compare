// chat.js

// ChatApp class
class ChatApp {
    constructor() {
        this.users = [];
        this.messages = [];
        this.groupChats = [];
    }

    // Register a new user
    registerUser(username) {
        if (!this.users.includes(username)) {
            this.users.push(username);
            console.log(`User ${username} registered.`);
        } else {
            console.log(`User ${username} already exists.`);
        }
    }

    // Send messages between users
    sendMessage(sender, recipient, message) {
        if (this.users.includes(sender) && this.users.includes(recipient)) {
            this.messages.push({ sender, recipient, message });
            console.log(`Message from ${sender} to ${recipient}: ${message}`);
        } else {
            console.log('Sender or recipient does not exist.');
        }
    }

    // Display chat history between two users
    displayChatHistory(user1, user2) {
        return this.messages.filter(msg => 
            (msg.sender === user1 && msg.recipient === user2) ||
            (msg.sender === user2 && msg.recipient === user1)
        );
    }

    // Create a group chat
    createGroupChat(groupName, members) {
        if (!this.groupChats.find(group => group.groupName === groupName)) {
            this.groupChats.push({ groupName, members });
            console.log(`Group chat ${groupName} created with members: ${members.join(', ')}`);
        } else {
            console.log(`Group chat ${groupName} already exists.`);
        }
    }

    // Add a user to a group chat
    addUserToGroup(groupName, user) {
        const group = this.groupChats.find(group => group.groupName === groupName);
        if (group && !group.members.includes(user)) {
            group.members.push(user);
            console.log(`User ${user} added to group ${groupName}.`);
        } else {
            console.log(`User ${user} already in group ${groupName} or group does not exist.`);
        }
    }

    // Remove a user from a group chat
    removeUserFromGroup(groupName, user) {
        const group = this.groupChats.find(group => group.groupName === groupName);
        if (group && group.members.includes(user)) {
            group.members = group.members.filter(member => member !== user);
            console.log(`User ${user} removed from group ${groupName}.`);
        } else {
            console.log(`User ${user} not found in group ${groupName} or group does not exist.`);
        }
    }
}
export default ChatApp
