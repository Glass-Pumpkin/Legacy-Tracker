//modal stuff
const itemTitleModal = document.querySelector("#itemTitle");
const itemQuantityModal = document.querySelector("#num");
const itemIconModal = document.querySelector("#icon");
const modal = document.querySelector(".modal");
let modalOpen = false;



const itemArray =
	[
		{
			itemPerRow: 6,
			rows: 2,
			items: items.filter(item => item.category == 1)
		},
		{
			itemPerRow: 6,
			rows: 1,
			items: items.filter(item => item.category == 2)
		},
		{
			itemPerRow: 7,
			rows: 1,
			items: items.filter(item => item.category == 3)
		},
		{
			itemPerRow: 10,
			rows: 5,
			items: items.filter(item => item.category == 4)
		},
		{
			itemPerRow: 6,
			rows: 1,
			items: items.filter(item => item.category == 5)
		},
		{
			itemPerRow: 10,
			rows: 2,
			items: items.filter(item => item.category == 6)
		},
		{
			itemPerRow: 10,
			rows: 4,
			items: items.filter(item => item.category == 7)
		},
		{
			itemPerRow: 6,
			rows: 2,
			items: items.filter(item => item.category == 8)
		},
		{
			itemPerRow: 6,
			rows: 2,
			items: items.filter(item => item.category == 9)
		},
		{
			itemPerRow: 6,
			rows: 2,
			items: items.filter(item => item.category == 10)
		},
		{
			itemPerRow: 9,
			rows: 5,
			items: items.filter(item => item.category == 11)
		},
		{
			itemPerRow: 6,
			rows: 1,
			items: items.filter(item => item.category == 12)
		},
		{
			itemPerRow: 7,
			rows: 1,
			items: items.filter(item => item.category == 13)
		},
		{
			itemPerRow: 7,
			rows: 4,
			items: items.filter(item => item.category == 14)
		},
		{
			itemPerRow: 10,
			rows: 5,
			items: items.filter(item => item.category == 15)
		},
		{
			itemPerRow: 6,
			rows: 1,
			items: items.filter(item => item.category == 16)
		}
	]



function comparePriority(x, y) {
	if (x.priority < y.priority)
		return -1;
	if (x.priority > y.priority)
		return 1;
	else
		return 0;
}

function checkDiv(parent, child) {
	if (parent.contains(child))
		return true;
	else
		return false;
}

function grayscale(item, button) {
	if (item.isOwned() === false) {
		button.style["filter"] = "grayscale(100%) brightness(.55)";
	} else {
		button.style["filter"] = "none";
	}
}

function editItem(targetItem) {
	modalOpen = true;
	scrollDisable();
	itemTitleModal.innerHTML = targetItem.name;
	itemQuantityModal.innerHTML = targetItem.quantity;
	modal.style.display = "block";

	if (targetItem.secondSheet !== undefined) {
		itemIconModal.style["background-image"] = backgroundImageTwo;
	}
	else {
		itemIconModal.style["background-image"] = backgroundImage;
	}
	itemIconModal.style["background-position"] = targetItem.backgroundPosX + "px " + targetItem.backgroundPosY + "px";
}


function ignoreScroll(e) {
	e.preventDefault();
	e.stopPropagation();

	return false;
}


function scrollDisable() {
	window.addEventListener("wheel", ignoreScroll, { passive: false });
	console.log(document);
}

function scrollEnable() {
	window.removeEventListener("wheel", ignoreScroll);
	console.log(document);
}

const backgroundImage = "url(assets/images/spritesheetOne.png)";
const backgroundImageTwo = "url(assets/images/spritesheetTwo.png)";

itemArray.forEach((item) => {


	let divID = itemArray.indexOf(item) + 1;
	let innerDiv = document.querySelector("#inner-" + divID);

	item.items.sort(comparePriority);

	let rowCount = item.rows;
	let itemPerRow = item.itemPerRow;

	let btnCounter = 0;
	let rowCounter = 1;
	for (let x = 0; x < rowCount; x++) {
		let rowDiv = document.createElement("div");
		rowDiv.id = "row-" + divID + "-" + (x + 1);
		innerDiv.appendChild(rowDiv);
	}

	while (rowCount * itemPerRow > item.items.length) {
		item.items.push
			({
				"name": "blankItem",
				"priority": item.items.length + 1,
				"quantity": 0,
				isOwned: (function (a) { return this.quantity > 0 ? true : false })
			});
	}

	//generate buttons
	item.items.forEach((realItem) => {
		if (btnCounter == itemPerRow) {
			rowCounter++;
			btnCounter = 0;
		}

		let rowDivInner = document.querySelector("#row-" + divID + "-" + rowCounter);

		let wrapperDiv = document.createElement("div");
		wrapperDiv.classList.add("btn-wrapper");

		rowDivInner.appendChild(wrapperDiv);

		let itemBtn = document.createElement("button");
		itemBtn.id = "cat-" + realItem.category + "-id-" + realItem.priority;

		if (realItem.backgroundPosX) {
			if (realItem.secondSheet !== undefined) {
				itemBtn.style["background-image"] = backgroundImageTwo;
			}
			else {
				itemBtn.style["background-image"] = backgroundImage;
			}
			itemBtn.style["background-position"] = realItem.backgroundPosX + "px " + realItem.backgroundPosY + "px";
		}

		wrapperDiv.appendChild(itemBtn)

		let counter = document.createElement("span");
		counter.classList.add("counter");

		if (realItem.quantity === undefined || realItem.quantity <= 0 || realItem.category == 4) {
			counter.innerHTML = "";
		} else {
			counter.innerHTML = realItem.quantity;
		}

		wrapperDiv.appendChild(counter)

		grayscale(realItem, itemBtn);

		if (realItem.name === "blankItem") {
			itemBtn.style["filter"] = "none";
			itemBtn.style["pointerEvents"] = "none";
		}



		btnCounter++;
	});
});

window.onclick = e => {

	console.log(e.target);

	if (e.target.tagName == "BUTTON" && modalOpen == false) {
		let clickedElement = e.target;
		let itemID = e.target.id.split('-')[3];
		let itemCat = e.target.id.split('-')[1];
		let clickedItem = items.find(y => y.priority == itemID && y.category == itemCat);
		editItem(clickedItem);
	}
	else if (modalOpen == true && e.target.className == "modal" || !(checkDiv(modal, e.target))) {
		modalOpen = false;
		modal.style.display = "none";
		scrollEnable();
	}


	// if (e.target.tagName == "BUTTON") {
	// 	let num = prompt("Enter a number...", "1");
	// 	if (num === null) {
	// 		return;
	// 	}
	// 	clickedItem.quantity = num;
	// 	grayscale(clickedItem, elementTarget)
	// 	if (clickedItem.category === 4) {
	// 		counter.innerHTML = "";
	// 	} else {
	// 		e.target.nextSibling.innerHTML = clickedItem.quantity;
	// 	}
	// }

};