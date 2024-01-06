function send() {
	$.get("/todo", (data) => {
		console.log(data);
		for (let item of data) {
			$("#list").append(`<li>${item}</li>`);
		}
	});
}

send();

$("#btn").on("click", () => {
	let value = $("#inp").val();
	$.post("/todo", { value }, () => {});
});
