class ListBinding {
	
	constructor( oldList, newList ) {
		this.listElement = oldList;
		this.textList = newList;
	}

	// Makes an <li>parameter</li> tag
	static createListItem( parameter ) {

		const li = document.createElement("li");
		li.textContent = parameter;
		return li;
	}

	update() {

		// Remove all exisitning <li> tags
		while (this.listElement.firstChild) {

			this.listElement.removeChild(
				this.listElement.firstChild
			);
		}
		
		// Fill <ul>/<ol> tag with <li>
		for ( const i of this.textList ) {

			this.listElement.appendChild(
				ListBinding.createListItem(i)
			);
		}

		return console.log("Las etiquetas <li> han sido sustituidas");
	}

	add(text) {
		this.textList.push(text);
		this.update();
		return console.log(
			`A <li> tag with "${text}" text has been added`
		);
	}

	remove(index) {
		this.textList.splice(index, 1);
		this.update();
		return console.log(
			`The <li> tag number ${index+1} has been removed`
		);
	}
}