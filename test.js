<script type="text/javascript">
  // Mon code Javascript
  
var flex = document.getElementById("flex");
var raw = document.getElementById("raw");
flex.addEventListener("click", function() {
	raw.style.display = raw.style.display == "none" ? "block" : "none";
});
#flex-container {
	width: 100%;
	font-family: Consolas, Arial, sans-serif;
}

#flex-container > div {
	border: 1px solid #f00;
	padding: 1rem;
}

#flex-container > .raw-item {
	border: 1px solid #000;
}
  ...

</script>
