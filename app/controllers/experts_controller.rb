class ExpertsController < ApplicationController
  def index
    @experts = Expert.paginate(page: params[:page], per_page: 20)
  end
end
