class CardsController < ApplicationController
    skip_before_action :verify_authenticity_token

  def index
    @cards = Card.all
    render json: @cards
  end

  def show
    @card = Card.find_by(:id => params[:id])
   render json: @card
  end

  def new
   @card = Card.new
  end

  def create
   @card = Card.create(card_params)
  end

  def edit
   @card = Card.find_by(:id => params[:id])
  end

  def update
   @card = Card.find_by(:id => params[:id])
  #  binding.remote_pry
   @card.update(card_params)

    if @card.save
     render json: @card
   else puts "NO"
   end
  end

 private

 def set_card
   @card = Card.find_by(:id => params[:id])
 end

 def card_params
  params.require(:card).permit(:name, :key_words, :img, :likes)
 end

end
