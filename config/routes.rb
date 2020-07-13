Rails.application.routes.draw do
  resources :companies, only: :index
  resources :experts, only: :index do
  	resources :contacts, only: :create
  end

  root "home#show"
end
