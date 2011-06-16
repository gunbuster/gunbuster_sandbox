var LoginController = Backbone.Controller.extend({
	routes: {
		"" : "login"
	},

	login: function() {
		globalUser = new User();
		var loginView = new LoginView({model : globalUser }); 
		loginView.render();
		$("body").html(loginView.el);
	}
});
