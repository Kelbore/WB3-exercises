
function parseAndDisplayName(name) {
    let spaceIndex = name.indexOf(" ");
    let firstName = name.substring(0, spaceIndex);
    let lastName = name.substring(spaceIndex);
    
    console.log(`Name: ${name}`);
    console.log(`First name: ${firstName}`);
    console.log(`Last name: ${lastName}`);
    console.log(" ");
}

parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddale Grace");