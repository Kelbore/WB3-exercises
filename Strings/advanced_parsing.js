function parseAndDisplayName(name) {

    if(name.indexOf(" ") == null) {
        console.log(`Name: ${name}`);
        console.log(`Only name: ${name.substring(0, name.length)}`);
    }
    else if(name.indexOf(" ") != null) {
        console.log(`Name: ${name}`);
        console.log(`First name: ${name.substring(0, name.indexOf(" "))}`);
        console.log(`Last name: ${name.substring(name.indexOf(" ") + 1)}`);
    }
    else if (name.lastIndexOf(" ") != null) {
        console.log(`Name: ${name}`);
        console.log(`First name: ${name.substring(0, name.indexOf(" "))}`);
        let firstIndexOfMiddleName = name.substring(name.indexOf(" ")) + 1;
        console.log(`Middle name: ${name.substring(firstIndexOfMiddleName, name.lastIndexOf(" "))}`);
        let firstIndexOfLastName = name.substring(name.lastIndexOf(" ")) + 1;
        console.log(`Last name: ${name.substring(firstIndexOfLastName)}`);
    }
}

parseAndDisplayName("Cher");
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Dana Lynn Wyatt");