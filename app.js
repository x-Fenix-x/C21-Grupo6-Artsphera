const express = require("express");
const app = express();
const path = require("path");
const PORT = 3030;

/* configuraciones */
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

/* rutas */
app.get("/", (req, res) =>
	res.sendFile(path.join(__dirname, "views", "index.html"))
);
app.get("/carrito", (req, res) =>
	res.sendFile(path.join(__dirname, "views", "carrito.html"))
);
app.get("/productDetail", (req, res) =>
	res.sendFile(path.join(__dirname, "views", "productDetail.html"))
);
app.get("/login", (req, res) => {
	res.sendFile(path.join(__dirname, "views", "login.html"));
});

app.post("/login", (req, res) => {
	const username = req.body.usernameOrEmail;
	const password = req.body.password;

	// Agrega mensajes de depuración para verificar los valores
	console.log("Username:", username);
	console.log("Password:", password);

	// Verificar los datos de inicio de sesión
	if (
		(username === "admin" && password === "1234") ||
		(username === "lucaspausin" && password === "ASTROboy3")
	) {
		console.log("Autenticación exitosa");

		// Redirigir a la página de administradores con el nombre de usuario
		res.redirect(`/administrators/${username}`);
	} else {
		res.sendFile(path.join(__dirname, "views", "login.html"));
	}
});

app.get("/register", (req, res) =>
	res.sendFile(path.join(__dirname, "views", "register.html"))
);
app.get("/header", (req, res) =>
	res.sendFile(path.join(__dirname, "views", "partials", "header.html"))
);
app.get("/footer", (req, res) =>
	res.sendFile(path.join(__dirname, "views", "partials", "footer.html"))
);

app.get("/administrators/:username", (req, res) => {
	if (req.params.username) {
		return res.sendFile(path.join(__dirname, "views", "users.html"));
	}
	return res.sendFile(path.join(__dirname, "views", "404.html"));
});

app.get("/*", (req, res) =>
	res.sendFile(path.join(__dirname, "/views/404.html"))
);

app.listen(PORT, () =>
	console.log("Servidor corriendo en http://localhost:" + PORT)
);
