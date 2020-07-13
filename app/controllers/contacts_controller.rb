class ContactsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_expert

  def create
    @contact = Contact.new(user: current_user, expert: @expert)

    respond_to do |format|
      if @contact.save
        format.js
      end
    end
  end

  private

  def set_expert
  	@expert = Expert.find(params[:expert_id])
  end
end
