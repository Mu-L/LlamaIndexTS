import { spawnSync } from "node:child_process";
import { expect, test } from "vitest";

test("node register", async () => {
  const code = `import csvDocument from '../examples/data/movie_reviews.csv';console.log(csvDocument.getText())`;
  const cp = spawnSync(
    process.execPath,
    ["--input-type=module", "--import=@llamaindex/readers/node"],
    {
      input: code,
      stdio: "pipe",
    },
  );
  expect(cp.stdout.toString("utf-8")).toMatchInlineSnapshot(`
		"title, reviewid, creationdate, criticname, originalscore, reviewstate, reviewtext
		Beavers, 1145982, 2003-05-23, Ivan M. Lincoln, 3.5/4, fresh, Timed to be just long enough for most youngsters' brief attention spans -- and it's packed with plenty of interesting activity, both on land and under the water.
		Blood Mask, 1636744, 2007-06-02, The Foywonder, 1/5, rotten, It doesn't matter if a movie costs 300 million or only 300 dollars; good is good and bad is bad, and Bloodmask: The Possession of Nicole Lameroux is just plain bad.
		City Hunter: Shinjuku Private Eyes, 2590987, 2019-05-28, Reuben Baron, , fresh, The choreography is so precise and lifelike at points one might wonder whether the movie was rotoscoped, but no live-action reference footage was used. The quality is due to the skill of the animators and Kodama's love for professional wrestling.
		City Hunter: Shinjuku Private Eyes, 2558908, 2019-02-14, Matt Schley, 2.5/5, rotten, The film's out-of-touch attempts at humor may find them hunting for the reason the franchise was so popular in the first place.
		Dangerous Men, 2504681, 2018-08-29, Pat Padua, , fresh, Its clumsy determination is endearing and sometimes wildly entertaining
		Dangerous Men, 2299284, 2015-12-13, Eric Melin, 4/5, fresh, With every new minute, there's another head-scratching choice that's bound to elicit some amazing out-loud responses, so this feels like a true party flick.
		Dangerous Men, 2295858, 2015-11-22, Matt Donato, 7/10, fresh, Emotionless reaction shots, zero characterization, guns that have absolutely no special effects when blasted - Dangerous Men is rare winning dish from a one star restaurant.
		Dangerous Men, 2295338, 2015-11-19, Peter Keough, 0.5/4, rotten, Conceivably, it could serve as a primer for students on how not to make a movie, and perhaps as a deconstruction of filmic conventions for the more theoretical minded.
		Dangerous Men, 2294641, 2015-11-16, Jason Wilson, 3/10, rotten, If you're not a fan of garbage cinema, even for the fun of it, Dangerous Men is best to be avoided.
		Dangerous Men, 2294129, 2015-11-12, Soren Andersen, 0/4, rotten, "Dangerous Men," the picture's production notes inform, took 26 years to reach the big screen. After having seen it, I wonder: What was the rush?
		Dangerous Men, 2293902, 2015-11-12, Maitland McDonagh, , rotten, Will entertain some viewers and infuriate others with its clunky mix of feminist fury and awkward action sequences.
		Dangerous Men, 2293900, 2015-11-12, Marjorie Baumgarten, 1.5/5, rotten, This is a bad movie, but one that awakens your senses every so often with flashes of originality and abundant self-belief.
		Dangerous Men, 2293815, 2015-11-12, Katie Rife, B+, fresh, Ridiculous, artless, and wildly entertaining, Dangerous Men is more than the sum of its fascinatingly misguided parts, although it will take a special sort of moviegoer to truly appreciate (or endure, depending on your perspective) its charms.
		Dangerous Men, 2293605, 2015-11-11, Amy Nicholson, C, fresh, To sit through it feels like honoring the dreamers of the world who at least get shit done. Is it terrible? Of course. Is there belly-dancing? Duh.
		Small Town Wisconsin, 102711819, 2022-07-22, Peter Gray, , fresh, Small Town Wisconsin could hit some home truths for viewers&#44; and though being faced with the truth isn&#8217;t always pleasant&#44; it feels necessary in growing towards a happier fruition&#46;
		Small Town Wisconsin, 102711545, 2022-07-22, Tim Grierson, , fresh, This low-key drama has lovely interludes and some nicely understated performances, although director Niels Mueller doesn’t glean too many new insights from Jason Naczek’s familiar story...
		Small Town Wisconsin, 102700937, 2022-06-16, Sumner Forbes, 8.5/10, fresh, Small Town Wisconsin is a success in almost every regard, and if you can see over the legions of cheeseheads in the rows ahead of you, it shouldn’t be missed.
		Small Town Wisconsin, 102699897, 2022-06-14, Tara McNamara, 3/5, fresh, Just like Wayne&#44; Small Town Wisconsin has flaws&#44; but the poignancy of the story will stick with you for a long time&#46;
		Small Town Wisconsin, 102698744, 2022-06-10, Rob Thomas, 3/4, fresh, It&#8217;s a movie with its heart in the right place&#44; and does both small town and big city Wisconsin proud&#46;
		Small Town Wisconsin, 102698639, 2022-06-10, Todd Jorgenson, , rotten, Despite some intriguing character dynamics and performances that generate sympathy for this fractured family&#44; the film stumbles when it veers into melodrama without the narrative dexterity to tackle its weightier ambitions&#46;
		Small Town Wisconsin, 102698482, 2022-06-10, Jackie K. Cooper, 7/10, fresh, This is the kind of movie that draws you so deeply into its story you are reluctant to let it end&#46;
		Small Town Wisconsin, 102698164, 2022-06-09, Glenn Kenny, , fresh, Mueller’s direction is patient and sensitive, the cast is accomplished and committed, and the picture’s comedic aspects sometimes earn a chuckle.
		Small Town Wisconsin, 102697854, 2022-06-08, Brian Orndorf, B+, fresh, Naczek isn&apos;t interested in making a soap opera with this examination of fallibility&#44; going somewhere much more authentic when exploring character aches and pains&#46;
		Small Town Wisconsin, 102695788, 2022-06-02, Eddie Harrison, 4/5, fresh, &#8230;a warm-hearted story of everyday life that&#8217;s easy to recommend for those who like films about people rather than portals and vortexes&#8230;
		Small Town Wisconsin, 102695250, 2022-05-31, Laura Clifford, C, rotten, Debuting screenwriter Jason Naczek has concocted a manchild redemption story using metaphors as heavy as a hammer and a fairy godmother who makes everything alright with a seeming flip of the switch&#46;
		Small Town Wisconsin, 2733251, 2020-10-12, Jared Mobarak, B, fresh, Small Town Wisconsin is always proving itself to be more than its familiar premise thanks to Naczek's ability to infuse a lot more drama into the mix than one custody battle.
		Tejano, 2564925, 2019-03-07, Joe Friar, 3/4, fresh, The story of a South Texas ranch hand who gets mixed up with a Mexican cartel moves with pulse-pounding velocity and features top performances from a talented cast of actors with Texas roots.
		Tejano, 2557738, 2019-02-12, Cary Darling, 4/5, fresh, An entertaining blast of Texas noir that nods toward the work of the Coen brothers, Quentin Tarantino and fellow Austinite Greg Kwedar's 2016 low-budget thriller "Transpecos" as well as "Breaking Bad."
		Tejano, 2547231, 2019-01-10, Danielle White, 3/5, fresh, The story itself slithers with twists and turns and unexpected betrayals. It's almost ridiculous how many characters die in this film.
		Tejano, 2530119, 2018-11-08, Chris Salce, 9/10, fresh, Tejano is one of those films that can be described as a hidden gem as it sneaks under the radar and will have you talking, telling your friends about it, and wanting to watch it again.
		Death of a Salesman, 2770637, 2021-02-23, Michael Dougan, , fresh, Miller has taken a small, intimate tale and expanded it into a treatise on larger themes, primarily the abuse of the American Dream.
		Death of a Salesman, 1950734, 2011-01-02, Randy White, 5/5, fresh, A classic American tragedy.
		Death of a Salesman, 1422415, 2005-08-04, Jules Brenner, 4/5, fresh, 
		Death of a Salesman, 1409415, 2005-07-05, Emanuel Levy, 3/5, fresh, 
		Death of a Salesman, 839546, 2003-02-06, Frederic and Mary Ann Brussat, , fresh, Death of a Salesman, directed by Volker Schlondorff, draws out the multiple meanings of this Pulitzer Prize-winning play by Arthur Miller about change, family and fatherhood, work and love.
		Death of a Salesman, 788410, 2002-09-29, Dan Lybarger, 4/5, fresh, Schlndorff's artificial settings and some amazing performances help keep this from looking like a typical "filmed play."
		Death of a Salesman, 751951, 2002-08-08, Cory Cheney, 4/5, fresh, 
		Death of a Salesman, 743794, 2002-07-26, Bob Grimm, 5/5, fresh, 
		Death of a Salesman, 743291, 2002-07-26, Scott Weinberg, 5/5, fresh, They MAKE you watch it in English class for a good reason!
		Sahara, 1137710, 2003-05-13, Dragan Antulov, 5/10, fresh, 
		The Debt, 2628192, 2019-09-20, Diego Batlle, , fresh, A Bresson-esque movie that is always enigmatic. [Full Review in Spanish]
		The Debt, 2627988, 2019-09-20, Gaspar Zimerman, , fresh, The story [Director Gustavo Fontán] tells is an excuse to give way to the exploration of feelings and sensations that avoid verbality. [Full review in Spanish]
		Peppermint Candy, 2725008, 2020-09-16, A.S. Hamrah, , fresh, South Korean political history of the previous twenty years, Peppermint Candy is not tempered by its hysterical edge, which adds unpredictable violence to its vignettes of romantic, domestic, and business failure.
		Peppermint Candy, 2541271, 2018-12-16, Panos Kotzathanasis, , fresh, Lee Chang-dong presents a melodrama that stands apart from the plethora of similar productions due to its intense political element, because it doesn't lose its seriousness at any point and because it doesn't become hyperbolic in his effort to draw tears
		Peppermint Candy, 1883708, 2010-05-11, Anton Bitel, , fresh, This is Korea's millennial elegy, filtering its search for times past through a confection no less bittersweet than Proust's madeleine.
		Peppermint Candy, 1706014, 2008-01-29, Beth Accomando, 9/10, fresh, The film offers a heartbreaking drama told in reverse chronology and spanning twenty years in both the life of the main character and the political history of Korea.
		Peppermint Candy, 1231988, 2003-12-22, Greg Muskewitz, 2/5, rotten, 
		Peppermint Candy, 1187104, 2003-08-14, Joshua Tanzer, 4/4, fresh, It's a story about the original sin of a nation as well as one character. There has rarely been a better film made, ever
		Prison Girls, 2475348, 2018-05-03, Roger Ebert, , rotten, Prison Girls didn't have a lot of prison sets because it was a big-budget exploitation movie. Maybe.
		Gimme the Power, 2575688, 2019-04-09, Afroxander, , fresh, Rubio's film shows ambition where none is required, making Gimme the Power a lot like Molotov's music: politically engaged without having to take itself too seriously.
		Paa, 2673089, 2020-02-27, Nikhat Kazmi, 3.5/5, fresh, The film, which peters off into vague sub-plots about slum redevelopment and unwarranted media-bashing in the first half, suddenly picks up and scales new heights in the second half.
		Paa, 2578129, 2019-04-17, Shubhra Gupta, 2/5, rotten, Disappointingly, Paa is not as out-of-the-box as it could have been.
		Paa, 2429810, 2017-10-24, Anil Sinanan, 3/5, rotten, Will Auro survive to know his Pa and reunite his parents? Forget about the disease: this is a vanity vehicle designed to showcase the Big B's versatility.
		Paa, 1860476, 2009-12-14, Frank Lovece, , rotten, This would-be tearjerker without the musical numbers of typical Bollywood fare is for die-hard Amitabh Bachchan fans only.
		Paa, 1860473, 2009-12-14, David Chute, , fresh, The film owes much of its interest to the alertness and sincerity of the younger Bachchan and the luminous Vidya Balan as the anguished parents, and to the soft wash of the tasteful playback songs supplied by Ilaiyaraaja.
		Paa, 1858964, 2009-12-05, Avi Offer, 5.85/10, rotten, Well-acted, funny and occasionally witty with terrific make-up design. However, it's often convoluted, awkwardly paced and too uneven as a whole.
		Paa, 1858853, 2009-12-04, Frank Lovece, , fresh, A would-be tearjerker without the singing-dancing musical numbers of typical Bollywood fare seen in the U.S., the lackluster Paa is for die-hard Amitabh Bachchan fans only%u2014of which there is no small number.
		Paa, 1858816, 2009-12-04, Rachel Saltz, 3/5, fresh, Odd and sometimes oddly affecting.
		Alraune (A Daughter of Destiny) (Mandrake) (Unholy Love), 2835964, 2021-10-30, Erich Hellmund-Waldow, , fresh, The acting is not only artistic, it is also as realistic as can be possible in such a film.
		Alraune (A Daughter of Destiny) (Mandrake) (Unholy Love), 2357086, 2016-10-17, C. Hooper Trask, , fresh, Aimed straight for the gooseflesh, it strikes directly into the centre of the target.
		Toorbos, 2760593, 2021-01-29, Neil Young, , fresh, Built around a luminous and intriguing central performance by dancer-actor Elani Dekker.
		Toorbos, 2752827, 2020-12-21, Guy Lodge, , fresh, A satisfying marriage of folky period romance and environmental parable from the misty, mossy depths of South Africa's Knysna forest region...
		Connors' War, 1555113, 2006-11-09, David Nusair, 1.5/4, rotten, ...although Criss does show some potential as a performer, his efforts to step into the shoes of a blind character are laughable.
		Connors' War, 1539106, 2006-09-19, Scott Weinberg, 2/5, rotten, Standard cable fodder all the way, with only a few solid action scenes and maybe one colorful performance in the whole thing.
		Born to Kill, 2710947, 2020-08-05, Mike Massie, 10/10, fresh, One of the most acerbic of all films noir, boasting essentially no redeemable characters (or a wealth of deliciously evil villains) while also being utterly enthralling.
		Born to Kill, 2340106, 2016-07-15, David Nusair, 3/4, fresh, ...a fairly typical film-noir premise that's employed to watchable yet entirely unmemorable effect by Robert Wise...
		Born to Kill, 1507021, 2006-05-16, Nick Schager, B, fresh, Competent if slightly too tame for a supposedly sleazy story.
		Born to Kill, 1501617, 2006-05-01, Fernando F. Croce, , fresh, The usually meek Robert Wise trades his chameleonic tastefulness for full-on, jazzy misanthropy in this nasty melodrama.
		Born to Kill, 1433953, 2005-09-09, Jeffrey M. Anderson, 3/4, fresh, Hard to watch, but effective and alluring nonetheless.
		Born to Kill, 1123980, 2003-04-02, Dennis Schwartz, C, rotten, A revolting B film noir...
		The Soong Sisters, 1402087, 2005-06-15, Emanuel Levy, 3/5, fresh, 
		La Sapienza, 102772380, 2023-01-24, Vadim Rizov, , fresh, Sapienza is a pretty lovely film. Symmetricities are everywhere, starting with that opening architectural showreel, which deliberately avoids perfect symmetricity...
		La Sapienza, 2767839, 2021-02-14, Dustin Chang, , fresh, Their sincere expression of these thoughts rings true and melts away its artificiality in its presentation soon enough. This is the beauty of La Sapienza and Green films in general.
		La Sapienza, 2598336, 2019-06-18, C.J. Prince, , fresh, It's a nice entry point into a peculiar cinematic universe, and those willing to open themselves to it will find a lot to enjoy.
		La Sapienza, 2503963, 2018-08-28, Charles Mudede, , fresh, If architecture aspires to the condition of music, the acting in La Sapienza aspires to the condition of architecture. You will love the ending of this very original and elegant and arty work.
		La Sapienza, 2314368, 2016-03-12, Forrest Cardamenis, B, fresh, This startling architectural juxtaposition feels like a wake-up call.
		La Sapienza, 2275677, 2015-08-03, Nicole Armour, , fresh, While Green's film is dense with historical fact and theory, it's not averse to plumbing life's mysteries. Suffused with warmth, it expresses a potent admiration for human striving and accomplishment.
		La Sapienza, 2273804, 2015-07-23, Norman Wilner, 2/5, rotten, The uncomplicated narrative resists stylization; Green's presentation turns everyone into mannequins, rendering their emotions theoretical. That may well be his point, but it didn't work for me.
		La Sapienza, 2269287, 2015-06-26, Sam Lubell, , fresh, On the surface, writer-director Eugne Green's film "La Sapienza" is slow, strange and awkward - but stick with it and it may win you over.
		La Sapienza, 2265997, 2015-06-05, Rob Garratt, 4/5, fresh, Layered with reels of swirling shots of Rome's most beautiful buildings -- all crucially shot from the ground upwards, staring at the heavens-- La Sapienza is visually stunning.
		La Sapienza, 2265990, 2015-06-05, Boyd van Hoeij, , fresh, The Sapience juxtaposes insights on how people are emotionally connected with ruminations on the buildings and spaces through which they move, in which they live and, in Alexandre's case, which they also create.
		La Sapienza, 2265989, 2015-06-05, Robert Horton, 3/4, fresh, If you can groove into this non-realistic mode, the film casts a spell.
		La Sapienza, 2265790, 2015-06-04, Tom Keogh, 3.5/4, fresh, A beautiful space for people and light.
		La Sapienza, 2255621, 2015-04-09, Wesley Morris, , rotten, This kind of formalism needs to do more than walk through classical wonders. It should want to create cinema that can stand near or beside them. This movie defensively consecrates what's already there. You don't need a film to do that.
		La Sapienza, 2255195, 2015-04-08, Scott Foundas, , fresh, An exquisite rumination on life, love and art that tickles the heart and mind in equal measure.
		La Sapienza, 2252858, 2015-03-23, Richard Brody, , fresh, Green's richly textured, painterly images fuse with the story to evoke the essence of humane urbanity and the relationships that it fosters, whether educational, familial, or erotic.
		La Sapienza, 2252553, 2015-03-20, Ignatiy Vishnevetsky, B+, fresh, Green doesn't so much use his characters as mouthpieces as emotionally invest them in art, turning opinions into feelings.
		La Sapienza, 2252541, 2015-03-20, Godfrey Cheshire, 4/4, fresh, "La Sapienza" strikes this reviewer as easily the most astonishing and important movie to emerge from France in quite some time.
		La Sapienza, 2252452, 2015-03-19, A.O. Scott, , fresh, The movie is an unapologetically rarefied undertaking and at the same time a gracious and inviting film.
		La Sapienza, 2252301, 2015-03-19, David Noh, , rotten, Pretentious, stuffy and slow. There's some beautiful scenery here but oh, what you must put up with to earn it!
		La Sapienza, 2252028, 2015-03-18, Noel Murray, 3/5, fresh, While La Sapienza is unsatisfying as drama, it's frequently beautiful just as a tour through architecturally significant Italian buildings.
		La Sapienza, 2251985, 2015-03-17, David Ehrlich, 3/5, fresh, La Sapienza  alternately feels like a self-reflexive love story or a haunted history lesson -- its best scenes play like both.
		La Sapienza, 2251926, 2015-03-17, Zachary Wigon, , fresh, A picture that balances heart and mind with nuance.
		La Sapienza, 2251650, 2015-03-14, Harvey S. Karten, B+, fresh, As in "Who's Afraid of Virginia Woolf," both the younger couple and their older mentors are changed from a relationship.
		La Sapienza, 2250991, 2015-03-12, Ben Sachs, , fresh, This recalls Manoel de Oliveira and Eric Rohmer in its poker-faced style, deliberately archaic storytelling, and magisterial epiphanies.
		La Sapienza, 2225361, 2014-09-28, Donald J. Levit, , fresh, Although a love-fiction crossed with documentary lecture and superb Raphael O'Byrne cinematography, 'La Sapienza' is as close as celluloid can approach to architecture.
		La Sapienza, 2222032, 2014-09-10, Carson Lund, 3/4, fresh, Eugne Green's mannered direction doesn't work for every situation it's homogenously applied to, but at its most effective it inspires an enhanced sensitivity to the import of every gesture, visual or verbal.
		Uncle Tom, 2713732, 2020-08-14, Megan Basham, , fresh, Uncle Tom suffers from an overreliance on pundits. Its most compelling insights come from people who've never been quoted in a Twitter or Facebook battle.
		Uncle Tom, 2706229, 2020-07-19, Matthew Pejkovic, 4/5, fresh, An incredibly relevant and insightful documentary that delves into the past, present, and future of the black American conservative movement.
		Uncle Tom, 2698525, 2020-06-24, Dante James, 7/10, fresh, It's a little misleading in some areas, especially if you know the players involved in this doc, but there are a lot of interesting historical facts about the breakdown of the Black family and how the whole welfare system targeted the Black community.
		"
	`);
});
