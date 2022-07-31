module Api
  module V1
    class PostsController < ApplicationController
      protect_from_forgery with: :null_session
      
      def create
        post = country.posts.new(post_params)
        
        if post.save
          render json: PostSerializer.new(post).serialized_json
        else
          render json: { error: post.errors.full_messages }, status: 422
        end
      end

      def destroy
        post = Post.find(params[:id])

        if post.destroy
          head :no_content
        else
          render json: { error: post.errors.messages }, status: 422
        end
      end

      private 

      def country
        @country ||= Country.find(params[:country_id])
      end

      def post_params
        params.permit(:title, :body, :country_id, :created_at)
      end
    end
  end
end