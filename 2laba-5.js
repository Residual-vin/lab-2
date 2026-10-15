const contacts = [
	{ name: "Andriy", phone: "+380111111111" },
	{ name: "Olena", phone: "+380222222222" },
	{ name: "Oleksiy", phone: "+380333333333" }
]
const findPhoneByName = (name) => {
	for (const contact of contacts) {
		if (contact.name === name) {
			return contact.phone; } 
		}
	return "Номер не знайдено";
}
console.log(findPhoneByName("Andriy"));
const phoneBook = {};
for (const contact of contacts) {
    phoneBook[contact.name] = contact.phone;
}
const findPhoneByNameInHash = (name) => {
	return phoneBook[name] || "Номер не знайдено";
}
console.log(findPhoneByNameInHash("Olena"));
