var facts = [
	  "Bats can live more than 30 years and can fly at speeds of up to 60 mph.",
	  "Bats can find their food in total darkness. They locate insects by emitting inaudible high-pitched sounds, 10-20 beeps per second and listening to echoes.",
	  "Many bats eat insects. Bats can eat up to 1,200 mosquitoes in an hour and often consume their body weight in insects every night, helping keep bug populations in check.",
	  "Some bats migrate south for the winter, while others hibernate through the cold winter months. During hibernation, bats can survive in freezing temperatures, even after being encased in ice.",
	  "Most bats have only one pup a year, making them extremely vulnerable to extinction. Bat mothers can find their babies among thousands or millions of other bats by their unique voices and scents.",
	  "Bat droppings, called guano, are one of the richest fertilizers. Bat guano was once a big business. Guano was Texas's largest mineral export before oil!",
	  'The world’s largest bat is the "flying fox" that lives on islands in the South Pacific. It has a wingspan of up to 6 feet.'
	 ];

function newFact() {
  $('randomFact').hide();
  var randomNumber = Math.floor(Math.random() * (facts.length -1));
  document.getElementById('randomFact').innerHTML= facts[randomNumber];
  $('randomFact').fadeIn(500);
}
