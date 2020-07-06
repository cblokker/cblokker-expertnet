Rails.application.routes.draw do
  resources :companies
  resources :experts

  root "home#show"
end
