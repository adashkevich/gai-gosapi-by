Rails.application.routes.draw do

  resources :organizations
  scope '/api/v1' do
    # resources :photos
    # resources :cities
    resources :reports
    post '/photos/upload'
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
