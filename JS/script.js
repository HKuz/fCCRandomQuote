/**
 * @author Heather Kusmierz
 */
var quoteArray = [
  ["If I wanted a joke, I'd follow you into the John and watch you take a leak.", "Planes, Trains and Automobiles"],
  ["I'll explain and I'll use small words so that you'll be sure to understand, you warthog faced buffoon.", "The Princess Bride"],
  ["I don’t want to talk to you no more, you empty-headed animal food trough wiper. I fart in your general direction! Your mother was a hamster and your father smelt of elderberries!", "Monty Python and the Holy Grail"],
  ["You dirt-eating piece of slime, you scum-sucking pig, you son of a motherless goat!", "Three Amigos"],
  ["Thou art a base, proud, shallow, beggarly, three-suited, hundred-pound, filthy worsted-stocking knave; a lily-liver’d, action-taking, whoreson, glass-gazing, superserviceable, finical rogue; one-trunk-inheriting slave; one that wouldst be a bawd in way of good service, and art nothing but the composition of a knave, beggar, coward, pandar, and the son and heir of a mungril bitch.", "King Lear, William Shakespeare"],
  ["You blithering idiot! … You festering gumboil! You fleabitten fungus! … You bursting blister! You moth-eaten maggot!", "Matilda, Roald Dahl"],
  ["If your brains were dynamite there wouldn’t be enough to blow your hat off.", "Timequake, Kurt Vonnegut"],
  ["You are the last man in the world I could ever be prevailed upon to marry.", "Pride and Prejudice, Jane Austen"],
  ["I never saw anybody take so long to dress, and with such little result.", "The Importance of Being Earnest, Oscar Wilde"],
  ["It should take you about four seconds to walk from here to the door. I’ll give you two.", "Breakfast at Tiffany's, Truman Capote"],
  ["You would make a lovely corpse.", "The Life and Adventures of Martin Chuzzlewit, Charles Dickens"],
  ["Stop worrying about growing old. And think about growing up.", "The Dying Animal, Philip Roth"],
  ["What you just said is one of the most insanely idiotic things I have ever heard. Everyone in this room is now dumber for having listened to it. May God have mercy on your soul.", "Billy Madison"],
  ["You can think I'm wrong, but that's no reason to stop thinking.", "Gregory House, House"],
  ["Look, we all have something to bring to this discussion. But I think from now on the thing you should bring is silence.", "Arnold Rimmer, Red Dwarf"],
  ["I have nothing but respect for you -- and not much of that.", "Groucho Marx"],
  ["Once again, you show all the sensitivity of a blunt axe.", "J.K. Rowling, Harry Potter and the Half-Blood Prince"],
  ["Next time I see you, remind me not to talk to you.", "Groucho Marx"],
  ["Out of my sight! Thou dost infect mine eyes.", "Richard III, William Shakespeare"],
  ["If they can make penicillin out of moldy bread, then they can sure make something out of you.", "Muhammad Ali"],
  ["I've got a good mind to go out and join a club and beat you over the head with it.", "Groucho Marx"],
  ["Why don't you bore a hole in yourself and let the sap run out?", "Groucho Marx"],
  ["Why are we honoring this man? Have we run out of human beings?", "Milton Berle"],
  ["You're a parasite for sore eyes.", "Gregory Ratoff"],
  ["I'll bet your father spent the first year of your life throwing rocks at the stork.", "Irving Brecher"],
  ["You're a good example of why some animals eat their young.", "Jim Samuels"],
  ["If you ever become a mother, can I have one of the puppies?", "Charles Pierce"],
  ["I regard you with an indifference bordering on aversion.", "Robert Louis Stevenson"],
  ["Don't look now, but there's one too many in this room and I think it's you.", "Groucho Marx"],
  ["Gee, what a terrific party. Later on we'll get some fluid and embalm each other.", "Neil Simon"],
  ["You take the lies out of him, and he'll shrink to the size of your hat; you take the malice out of him, and he'll disappear.", "Mark Twain"],
  ["You're a mouse studying to be a rat.", "Wilson Mizner"],
  ["Where others have hearts, he carries a tumor of rotten principles.", "Jack London"],
  ["Some cause happiness wherever they go; others whenever they go.", "Oscar Wilde"],
  ["Some folks are wise and some are otherwise.", "Tobias George Smolett"],
  ["I'd call him a sadistic, hippophilic necrophile, but that would be beating a dead horse.", "Woody Allen"],
  ["He had delusions of adequacy.", "Walter Kerr"],
  ["He has all the virtues I dislike and none of the vices I admire.", "Winston Churchill"],
  ["He has no enemies, but is intensely disliked by his friends.", "Oscar Wilde"],
  ["I never forget a face, but in your case I'll make an exception.", "Groucho Marx"],
  ["Is that a beard, or are you eating a muskrat?", "Dr. Gonzo"],
  ["A brain of feathers, and a heart of lead.", "Alexander Pope"],
  ["A mental midget with the IQ of a fence post.", "Tom Waits"],
  ["A wit with dunces, and a dunce with wits.", "Alexander Pope"],
  ["He has the attention span of a lightning bolt.", "Robert Redford"],
  ["He is so stupid you can't trust him with an idea.", "John Steinbeck"],
  ["His ignorance covers the world like a blanket, and there's scarcely a hole in it anywhere.", "Mark Twain"]
];

var index;
var len = quoteArray.length;
var $blockquote;
var $author;

$(document).ready(function(){
  $(".random-btn").click(function(){
    index = Math.floor(Math.random()*len);
    $blockquote = quoteArray[index][0];
    $author = quoteArray[index][1];
    $("#quote-text").html($blockquote);
    $("#author").html($author);
    $("#tweet-quote").prop("href", "https://twitter.com/intent/tweet?text="+$blockquote+" -"+$author);
  });
  $("#tweet-quote").click(function(){
    window.open("https://twitter.com/intent/tweet?text="+$blockquote+" -"+$author);
  });
});