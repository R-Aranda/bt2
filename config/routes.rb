Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  
  get '/countries', to: 'homes#index'

   namespace :api do
    namespace :v1 do 
      resources :countries, param: :slug
      resources :posts, only: [:create, :destroy]
    end
  end

  get "*path", to: "homes#index", via: :all
end
