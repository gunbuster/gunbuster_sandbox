var User = Backbone.Model.extend({
	initialize: function() {
		_.bindAll(this, "auth", "success");
	},
	defaults: { status: "Not logged in" },
	auth: function(login, password, context) {
		$.ajax({
			url: "login/login",
			cache: false,
			data: { login : login, password : password, context: context },
			success: this.success,
			error: this.error,
			dataType: "json",
			type: "POST"
		});
	},
	success: function(data) {
		this.view.login_successful();
	},
	error: function(xhr, status, msg) {
		alert(msg);
	}
});
