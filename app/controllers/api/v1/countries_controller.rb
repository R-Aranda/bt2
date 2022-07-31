module Api
  module V1
    class CountriesController < ApplicationController
      protect_from_forgery with: :null_session
      
      def index
        countries = Country.all

        render json: CountrySerializer.new(countries, options).serialized_json
      end
      
      def show
        country = Country.find_by(slug: params[:slug])
        
        render json: CountrySerializer.new(country, options).serialized_json
      end

      def create
        country = Country.new(country_params)
        
        if country.save
          render json: CountrySerializer.new(countries).serialized_json
        else
          render json: { error: country.errors.messages }, status: 422
        end
      end

      def update
        country = Country.find_by(params[:slug])
    

        if country.update(country_params)
          render json: CountrySerializer.new(country, options).serialized_json
        else
          render json: { error: country.errors.messages }, status: 422
        end
      end

      def destroy
        country = Country.find_by(params[:slug])

        if country.destroy
          head :no_content
        else
          render json: { error: country.errors.messages }, status: 422
        end
      end

      private

      def country_params
        params.require(:country).permit(:name, :slug)
      end

      def options
        @options ||= { include: %i[posts]}
      end
      
    end
  end
end