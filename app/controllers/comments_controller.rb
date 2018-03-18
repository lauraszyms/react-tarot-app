class CommentsController < ApplicationController

  def index
   @comments = Comment.all
   render json: @comments
  end

  def new
   @comment = Comment.new
  end

  def create
    binding.pry
   @comment = Comment.create(comment_params)
    if @comment.valid?
     @comment.save
    end
  end

  private

  def comment_params
   params.require(:comment).permit(:name, :email, :content)
  end



end
