var LoginView = Backbone.View.extend({
	template: JST["login"],

	initialize: function() {
		_.bindAll(this, "login", "render");
		this.model.bind("change", this.render);
		this.model.view = this;
	},

	render: function() {
		$(this.el).html(this.template({ user : this.model }));

		this.$("form").bind("submit", this.login);

		return this;
	},

	login_successful: function() {
		this.model.set({ status : "Logged In" });
		//$("form").slideUp();
	},

	login: function(event) {
		var $form = $(event.currentTarget);
		event.preventDefault();
		// try login
		this.model.auth("a", "b", "c");
	}
});
