function parseAndDisplayName(name) {

    if(name.indexOf(" ") == -1) {
        console.log(`Name: ${name}`);
        console.log(`Only name: ${name.substring(0, name.length)}`);
    }
    else if(name.indexOf(" ") == name.lastIndexOf(" ")) {
        console.log(`Name: ${name}`);
        console.log(`First name: ${name.substring(0, name.indexOf(" "))}`);
        console.log(`Last name: ${name.substring(name.indexOf(" ") + 1)}`);
    }
    else {
        console.log(`Name: ${name}`);
        console.log(`First name: ${name.substring(0, name.indexOf(" "))}`);
        console.log(`Middle name: ${name.substring(name.indexOf(" ")+1, name.lastIndexOf(" "))}`);
        console.log(`Last name: ${name.substring(name.lastIndexOf(" ")+1, name.length)}`);
    }
}

parseAndDisplayName("Cher");
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Dana Lynn Wyatt");



