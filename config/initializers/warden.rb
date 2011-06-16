Rails.configuration.middleware.use RailsWarden::Manager do |manager|
	manager.default_strategies :mine
	manager.failure_app = LoginController
end

Warden::Manager.serialize_into_session { |user| user.id }
Warden::Manager.serialize_from_session { |id| "User" }

Warden::Strategies.add(:mine) do 
	def valid?
		true
	end

	def authenticate!
		if params[:password] == "123"
			return success! "User"
		end
		fail!("You suck")
	end
end
