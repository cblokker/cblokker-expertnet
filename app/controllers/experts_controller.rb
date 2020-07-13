class ExpertsController < ApplicationController
  def index
    @experts = Expert
      .includes(:contacts)
      .paginate(page: params[:page], per_page: 20)
  end
end
