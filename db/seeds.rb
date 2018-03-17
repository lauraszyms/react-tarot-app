Suit.create([
  {:name => "Major Arcana", :key_words => "abc"},
  {:name => "Wands", :key_words => "Career, Creativity, Faith, Growth, Ideas, Innovation, Projects, Innovation, Risk, Energy, Action, Enthusiasm, Optimism, Desire, Passion, Perception, Determination, Will, Defiant, Defensive, Daring, Ecstatic, Pride, Ego, Restlessness."},
  {:name => "Swords", :key_words => "Strife. Tension. Conflict. Struggle. Communication. Travel. Powerful. Intelligence. Foresight. Boldness. Reason. Logic. Sarcasm. Threats. Legal Actions. Surgery. Cutting. Accidents. Justice. Truth. Detachments. Separations. Moving On. Mental Activity."},
  {:name => "Cups", :key_words => "Emotions. Moods. Affections. Artistic Abilities. Creativity. Nurturance. Love. Relationships. Empathy. Intuition. Sensitivity. Dreams. Fantasies. Comfort. Soothing. Flowing. Healing. Counseling. Psychic Abilities. Receptive. Yielding. Secretive. Merging. Fantasy."},
  {:name => "Pentacles", :key_words => "Money. Material World. Property. Inheritance. Wealth. Business. Possessions. Savings. Talents. Training. Education. Study. Time. Giving and Receiving. Profit and Loss. Tangible Reality. Work. Values. Mother Nature. Emotional Security. Sensual Pleasure. Rewards."}
])

Card.create([
  {:name => "Ace of Wands", :suit_id => 2, :key_words => "New Beginnings. Inspiration. Innovation. Virility.", :img => "https://i.imgur.com/xKyhlGm.png"},
  {:name => "Two of Wands", :suit_id => 2, :key_words => "Development. Achievement. Pride. Collaboration.", :img => "https://i.imgur.com/8ZMXFFb.png"},
  {:name => "Three of Wands", :suit_id => 2, :key_words => "Visionary. Creativity. Initial Success. Enterprising.", :img => "https://i.imgur.com/yObcQq6.png"},
  {:name => "Four of Wands", :suit_id => 2, :key_words => "Celebration. Blessings. Harmony. Bountiful Harvest.", :img => "https://i.imgur.com/VS5qI99.png"},
  {:name => "Five of Wands", :suit_id => 2, :key_words => "Competition. Brainstorming. Male Bonding. Sport.", :img => "https://i.imgur.com/QEMnUm4.png"},
  {:name => "Six of Wands", :suit_id => 2, :key_words => "Triumph. Acclaim. Appreciation. Good News.", :img => "https://i.imgur.com/ictubSx.png"},
  {:name => "Seven of Wands", :suit_id => 2, :key_words => "Taking a Stand. Courage. Bravado. Self-Confidence", :img => "https://i.imgur.com/xpzdGNX.png"},
  {:name => "Eight of Wands", :suit_id => 2, :key_words => "Excitement. Movement. Travel. Communication.", :img => "https://i.imgur.com/FGPcnRw.png"},
  {:name => "Nine of Wands", :suit_id => 2, :key_words => "Fortification. Self-Protection. Discipline. Determined.", :img => "https://i.imgur.com/kKHw3H2.png"},
  {:name => "Ten of Wands", :suit_id => 2, :key_words => "Perseverance. Patience. Home Stretch.", :img => "https://i.imgur.com/v21tAVR.png"},
  {:name => "Page of Wands", :suit_id => 2, :key_words => "Daring. Optimistic. Exciting. Resourceful. Cheerful.", :img => "https://i.imgur.com/sPjihet.png"},
  {:name => "Knight of Wands", :suit_id => 2, :key_words => "Confidence. Vision. Spontaneous. Dynamic. Enthusiastic.", :img => "https://i.imgur.com/Y3rTPq4.png"},
  {:name => "Queen of Wands", :suit_id => 2, :key_words => "Ambition. Popularity. Passion. Vivacity. Independence.", :img => "https://i.imgur.com/hQkyu3Y.png"},
  {:name => "King of Wands", :suit_id => 2, :key_words => "Warmth. Generosity. Nobility. Strength. Leadership.", :img => "https://i.imgur.com/3il1oLK.png"}
])
