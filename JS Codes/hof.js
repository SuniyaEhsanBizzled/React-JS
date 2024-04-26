function greet(name) { 
	return `Hi!! ${name} `; 
} 

function greet_name(greeting, message, name) { 
	console.log(`${greeting(name)} ${message}`); 
} 

greet_name(greet, 'Welcome To GeeksForGeeks', 'Geeks');
