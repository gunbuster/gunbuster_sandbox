class LoginController < ApplicationController
	def index
		render
	end

	def login
		respond_to do |format|
			format.js {
				render :json => { :awesome => "#{params[:login]} is awesum" }.to_json
			}
		end
	end
end
