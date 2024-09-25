class ObjectTest {
    constructor(autor, name, pictures, audios) {
        try {
            this.autor = autor;
            this.name = name;
            this.pictures = pictures;
            this.audios = audios;
        }
        catch {
            this.autor = this.name = this.picture = this.audios = "./pictures/music80/1.jpg";
        }
    }
}

class Test {
    constructor(data, firstLabel, secondLabel) {
        this.data = data;
        this.firstLabel = firstLabel;
        this.secondLabel = secondLabel;
    }
}

class Audio {
    constructor(name, src) {
        this.name = name;
        this.src = src;
    }
}

let link = "https://vladhaleta2023.github.io/History/";

picturesBarok = [
    new ObjectTest("Agnolo Bronzino", "Alegoria z Wenus i Kupidynem", ["https://vladhaleta2023.github.io/History/pictures/picturesBarok/1.jpg"]),
    new ObjectTest("Antoon van Dyck", "Autoportret ze słonecznikiem", ["https://vladhaleta2023.github.io/History/pictures/picturesBarok/2.jpg"]),
    new ObjectTest("Antoon van Dyck", "Samson i Dalila", ["https://vladhaleta2023.github.io/History/pictures/picturesBarok/3.jpg"]),
    new ObjectTest("Caravaggio", "Amor Zwycięski", ["https://vladhaleta2023.github.io/History/pictures/picturesBarok/4.jpg"]),
    new ObjectTest("Caravaggio", "Grający w karty", ["https://vladhaleta2023.github.io/History/pictures/picturesBarok/5.jpg"]),
    new ObjectTest("Caravaggio", "Judyta odcinająca głowę Holofernesowi", ["https://vladhaleta2023.github.io/History/pictures/picturesBarok/6.jpg"]),
    new ObjectTest("Caravaggio", "Muzykańci", ["https://vladhaleta2023.github.io/History/pictures/picturesBarok/7.jpg"]),
    new ObjectTest("David Teniers (młodszy)", "Arcyksiążę Leopold Wilhelm w galerii malarskiej", ["https://vladhaleta2023.github.io/History/pictures/picturesBarok/8.jpg"]),
    new ObjectTest("David Teniers (młodszy)", "Scena w tawernie", ["https://vladhaleta2023.github.io/History/pictures/picturesBarok/9.jpg"]),
    new ObjectTest("Diego Velázquez", "Chłopi przy posiłku", ["https://vladhaleta2023.github.io/History/pictures/picturesBarok/10.jpg"]),
    new ObjectTest("Diego Velázquez", "Kuźnia Wulkana", ["https://vladhaleta2023.github.io/History/pictures/picturesBarok/11.jpg"]),
    new ObjectTest("Diego Velázquez", "Panny dworskie", ["https://vladhaleta2023.github.io/History/pictures/picturesBarok/12.jpg"]),
    new ObjectTest("Diego Velázquez", "Wenus z lustrem", ["https://vladhaleta2023.github.io/History/pictures/picturesBarok/13.jpg"]),
    new ObjectTest("El Greco", "Wypędzenie przekupniów ze świątyni", ["https://vladhaleta2023.github.io/History/pictures/picturesBarok/14.jpg"]),
    new ObjectTest("Giuseppe Arcimboldo", "Bibliotekarz", ["https://vladhaleta2023.github.io/History/pictures/picturesBarok/15.jpg"]),
    new ObjectTest("Giuseppe Arcimboldo", "Vertumnus, portret Rudolfa II", ["https://vladhaleta2023.github.io/History/pictures/picturesBarok/16.jpg"]),
    new ObjectTest("Jacopo Tintoretto", "Lato", ["https://vladhaleta2023.github.io/History/pictures/picturesBarok/17.jpg"]),
    new ObjectTest("Jacopo Tintoretto", "Stworzenie zwierząt", ["https://vladhaleta2023.github.io/History/pictures/picturesBarok/18.jpg"]),
    new ObjectTest("Jan Vermeer", "Dziewczyna z perłą", ["https://vladhaleta2023.github.io/History/pictures/picturesBarok/19.jpg"]),
    new ObjectTest("Jan Vermeer", "Mleczarka", ["https://vladhaleta2023.github.io/History/pictures/picturesBarok/20.jpg"]),
    new ObjectTest("Jan Vermeer", "Przerwana lekcja muzyki", ["https://vladhaleta2023.github.io/History/pictures/picturesBarok/21.jpg"]),
    new ObjectTest("Nicolas Poussin", "Porwanie Sabinek", ["https://vladhaleta2023.github.io/History/pictures/picturesBarok/22.jpg"]),
    new ObjectTest("Peter Paul Rubens", "Córki Cekropsa znajdują Erichtoniosa", ["https://vladhaleta2023.github.io/History/pictures/picturesBarok/23.jpg"]),
    new ObjectTest("Peter Paul Rubens", "Pokłon Trzech Króli II", ["https://vladhaleta2023.github.io/History/pictures/picturesBarok/24.jpg"]),
    new ObjectTest("Peter Paul Rubens", "Pokój i wojna", ["https://vladhaleta2023.github.io/History/pictures/picturesBarok/25.jpg"]),
    new ObjectTest("Peter Paul Rubens", "Upadek Faetona", ["https://vladhaleta2023.github.io/History/pictures/picturesBarok/26.jpg"]),
    new ObjectTest("Rembrand", "Dziewczyna w ramie obrazu (Żydowska narzeczona)", ["https://vladhaleta2023.github.io/History/pictures/picturesBarok/27.jpg"]),
    new ObjectTest("Rembrand", "Lekcja anatomii doktora Tulpa", ["https://vladhaleta2023.github.io/History/pictures/picturesBarok/28.jpg"]),
    new ObjectTest("Rembrand", "Przypowieść o bogaczu", ["https://vladhaleta2023.github.io/History/pictures/picturesBarok/29.jpg"]),
    new ObjectTest("Rembrand", "Straż nocna", ["https://vladhaleta2023.github.io/History/pictures/picturesBarok/30.jpg"]),
    new ObjectTest("Willem Claesz Heda", "Deser", ["https://vladhaleta2023.github.io/History/pictures/picturesBarok/31.jpg"]),
    new ObjectTest("Willem Claesz Heda", "Martwa natura ze złotym pucharem", ["https://vladhaleta2023.github.io/History/pictures/picturesBarok/32.jpg"]),
];

music70 = [
    new ObjectTest("ABBA", "Arrival", ["https://vladhaleta2023.github.io/History/pictures/music70/1.jpg"]),
    new ObjectTest("AC DC", "Highway To Hell", ["https://vladhaleta2023.github.io/History/pictures/music70/2.jpg"]),
    new ObjectTest("Bee Gees", "Spirits Having Flown", ["https://vladhaleta2023.github.io/History/pictures/music70/3.jpg"]),
    new ObjectTest("Blondie", "Parallel Lines", ["https://vladhaleta2023.github.io/History/pictures/music70/4.jpg"]),
    new ObjectTest("Boney M", "Take the Heat off Me", ["https://vladhaleta2023.github.io/History/pictures/music70/5.jpg"]),
    new ObjectTest("Bruce Springsteen", "Born to Run", ["https://vladhaleta2023.github.io/History/pictures/music70/6.jpg"]),
    new ObjectTest("Creedence Clearwater Revival", "Cosmos Factory", ["https://vladhaleta2023.github.io/History/pictures/music70/7.jpg"]),
    new ObjectTest("David Bowie", "The Rise and Fall of Ziggy Stardust and the Spiders from Mars", ["https://vladhaleta2023.github.io/History/pictures/music70/8.jpg"]),
    new ObjectTest("Deep Purple", "Machine Head", ["https://vladhaleta2023.github.io/History/pictures/music70/9.jpg"]),
    new ObjectTest("Deep Purple", "Made In Japan", ["https://vladhaleta2023.github.io/History/pictures/music70/10.jpg"]),
    new ObjectTest("Derek the Dominos", "Layla and Other Assorted Love Songs", ["https://vladhaleta2023.github.io/History/pictures/music70/11.jpg"]),
    new ObjectTest("Dire Straits", "Communiqué", ["https://vladhaleta2023.github.io/History/pictures/music70/12.jpg"]),
    new ObjectTest("Electric Light Orchestra", "Discovery", ["https://vladhaleta2023.github.io/History/pictures/music70/13.jpg"]),
    new ObjectTest("Electric Light Orchestra", "Out of the Blue", ["https://vladhaleta2023.github.io/History/pictures/music70/14.jpg"]),
    new ObjectTest("Emerson Like Palmer", "Pictures at an Exhibition", ["https://vladhaleta2023.github.io/History/pictures/music70/15.jpg"]),
    new ObjectTest("Fleetwood Mac", "Rumours", ["https://vladhaleta2023.github.io/History/pictures/music70/16.jpg"]),
    new ObjectTest("Genesis ", "Duke", ["https://vladhaleta2023.github.io/History/pictures/music70/17.jpg"]),
    new ObjectTest("Genesis ", "The Lamb Lies Down on Broadway", ["https://vladhaleta2023.github.io/History/pictures/music70/18.jpg"]),
    new ObjectTest("Iggy Pop", "Lust For Life", ["https://vladhaleta2023.github.io/History/pictures/music70/19.jpg"]),
    new ObjectTest("Jean Michele Jarre", "Équinoxe", ["https://vladhaleta2023.github.io/History/pictures/music70/20.jpg"]),
    new ObjectTest("Jean Michele Jarre", "Oxygene", ["https://vladhaleta2023.github.io/History/pictures/music70/21.jpg"]),
    new ObjectTest("Jeff Wayne", "War Of The Worlds", ["https://vladhaleta2023.github.io/History/pictures/music70/22.jpg"]),
    new ObjectTest("Jethro Tull", "Aqualung", ["https://vladhaleta2023.github.io/History/pictures/music70/23.jpg"]),
    new ObjectTest("John Lennon", "Imagine", ["https://vladhaleta2023.github.io/History/pictures/music70/24.jpg"]),
    new ObjectTest("Joy Division", "Closer", ["https://vladhaleta2023.github.io/History/pictures/music70/25.jpg"]),
    new ObjectTest("Joy Division", "Unknown Pleasures", ["https://vladhaleta2023.github.io/History/pictures/music70/26.jpg"]),
    new ObjectTest("Kate Bush", "Never for Ever", ["https://vladhaleta2023.github.io/History/pictures/music70/27.jpg"]),
    new ObjectTest("Kiss", "Dynasty", ["https://vladhaleta2023.github.io/History/pictures/music70/28.jpg"]),
    new ObjectTest("Kraftwerk ", "Autobahn", ["https://vladhaleta2023.github.io/History/pictures/music70/29.jpg"]),
    new ObjectTest("Kraftwerk ", "The Man-Machine", ["https://vladhaleta2023.github.io/History/pictures/music70/30.jpg"]),
    new ObjectTest("Led Zeppelin", "IV", ["https://vladhaleta2023.github.io/History/pictures/music70/31.jpg"]),
    new ObjectTest("Led Zeppelin", "Physical Graffiti", ["https://vladhaleta2023.github.io/History/pictures/music70/32.jpg"]),
    new ObjectTest("Leonard Cohen", "Songs of Love and Hate", ["https://vladhaleta2023.github.io/History/pictures/music70/33.jpg"]),
    new ObjectTest("Lynyrd Skynyrd", "Pronounced Lĕh-nérd Skin-nérd", ["https://vladhaleta2023.github.io/History/pictures/music70/34.jpg"]),
    new ObjectTest("Mike Oldfield", "Tubular Bells", ["https://vladhaleta2023.github.io/History/pictures/music70/35.jpg"]),
    new ObjectTest("Patti Smith", "Horses", ["https://vladhaleta2023.github.io/History/pictures/music70/36.jpg"]),
    new ObjectTest("Pink Floyd", "The Dark Side of the Moon", ["https://vladhaleta2023.github.io/History/pictures/music70/37.jpg"]),
    new ObjectTest("Pink Floyd", "The Wall", ["https://vladhaleta2023.github.io/History/pictures/music70/38.jpg"]),
    new ObjectTest("Queen", "A Day at the Races", ["https://vladhaleta2023.github.io/History/pictures/music70/39.jpg"]),
    new ObjectTest("Queen", "A Night at the Opera", ["https://vladhaleta2023.github.io/History/pictures/music70/40.jpg"]),
    new ObjectTest("Santana", "Abraxas", ["https://vladhaleta2023.github.io/History/pictures/music70/41.jpg"]),
    new ObjectTest("Sex Pistols", "Never Mind the Bollocks", ["https://vladhaleta2023.github.io/History/pictures/music70/42.jpg"]),
    new ObjectTest("The Alan Parsons Project", "Tales of Mystery and Imagination", ["https://vladhaleta2023.github.io/History/pictures/music70/43.jpg"]),
    new ObjectTest("The Clash", "London Calling", ["https://vladhaleta2023.github.io/History/pictures/music70/44.jpg"]),
    new ObjectTest("The Rolling Stones", "Goats Head Soup", ["https://vladhaleta2023.github.io/History/pictures/music70/45.jpg"]),
    new ObjectTest("The Who", "Whos Next", ["https://vladhaleta2023.github.io/History/pictures/music70/46.jpg"]),
    new ObjectTest("The Wings", "Band On The Run", ["https://vladhaleta2023.github.io/History/pictures/music70/47.jpg"]),
    new ObjectTest("Vangelis", "Albedo 0.39", ["https://vladhaleta2023.github.io/History/pictures/music70/48.jpg"]),
];

musicOswiecenie = [
    new Audio("Do Elizy", "./audio/Oswiecenie/Beethoven/DLA ELIZY - Ludwig Van Beethoven.mp3"),
    new Audio("Sonata Księżycowa", "./audio/Oswiecenie/Beethoven/Ludwig van Beethoven - Sonata Księżycowa.mp3"),
    new Audio("Symfonia 5", "./audio/Oswiecenie/Beethoven/Ludwig Van Beethoven's 5th Symphony in C Minor (Full).mp3"),
    new Audio("Symfonia 9", "./audio/Oswiecenie/Beethoven/Symphony No. 9 ~ Beethoven.mp3"),
    new Audio("Mała nocna muzyka", "./audio/Oswiecenie/Mozart/A Little Night Music - Wolfgang Amadeus Mozart.mp3"),
    new Audio("Don Giovanni", "./audio/Oswiecenie/Mozart/K. 527 Mozart Don Giovanni, Overture.mp3"),
    new Audio("Requiem", "./audio/Oswiecenie/Mozart/Mozart - Requiem.mp3"),
    new Audio("Wesele Figara", "./audio/Oswiecenie/Mozart/Mozart - The Marriage of Figaro (Wesele Figara) - Overture.mp3"),
    // 8
    new Audio("Heandel", "./audio/Oswiecenie/Handel_ Zadok the Priest _ The English Concert & Händelfestspielorchester Halle.mp3"),
    new Audio("Haydn", "./audio/Oswiecenie/Haydn.mp3"),
    new Audio("Toccata and Fugue in D Minor", "./audio/Oswiecenie/Toccata and Fugue in D Minor (Best Version Ever).mp3"),
    new Audio("Cztery pory roku", "./audio/Oswiecenie/Vivaldi.mp3"), // 11
]

oswiecenie = [
    new ObjectTest("Bracia Montgolfier", "Balon"),
    new ObjectTest("Alessandro Volta", "Kondensator, bateria elektryczna"),
    new ObjectTest("Daniel Defoe", "Przypadki Robinsona Kruzoe"),
    new ObjectTest("Ludwig van Beethoven", "V Symfonia, IX Symfonia, Sonata księżycowa, Do Elizy", undefined, [musicOswiecenie[0], musicOswiecenie[1], musicOswiecenie[2], musicOswiecenie[3]]),
    new ObjectTest("James Cook", "Australia i Nowa Zelandia"),
    new ObjectTest("Isaac Newton", "Prawo powszechnego ciążenia"),
    new ObjectTest("Johann Sebastian Bach", "Pasja według św. Mateusza, Koncerty brandenburskie, Toccata i fuga d-moll", undefined, [musicOswiecenie[10]]),
    new ObjectTest("Antoni van Leeuwenhoek", "Mikroskop"),
    new ObjectTest("Denis Diderot", "Wielka Encyklopedia francuska, Kubuś Fatalista i jego pan"),
    new ObjectTest("Kartezjusz", "Rozprawa o metodzie (racjonalizm)"),
    new ObjectTest("Wolfgang Amadeus Mozart", "Symfonia Jowiszowa, Requiem, Mała nocna muzyka, Wesele Figara, Don Giovanni, Czarodziejski flet", undefined, [musicOswiecenie[4], musicOswiecenie[5], musicOswiecenie[6], musicOswiecenie[7]]),
    new ObjectTest("Immanuel Kant", "Krytyka czystego rozumu"),
    new ObjectTest("James Watt", "Maszyna parowa"),
    new ObjectTest("Georg Friedrich Heandel", "Pasja według Św. Jana, Mesjasz, Zadok the Priest", undefined, [musicOswiecenie[8]]),
    new ObjectTest("Karol Linneusz", "Klasyfikacja roślin i zwierząt według gatunków"),
    new ObjectTest("Anders Celsius", "Skala temperatur"),
    new ObjectTest("Jonathan Swift", "Podróże Guliwera"),
    new ObjectTest("Gottfried Wilhelm Leibniz", "Rachunek różniczkowy i całkowy"),
    new ObjectTest("Monteskiusz", "O duchu praw (koncepcja trójpodziału władzy)"),
    new ObjectTest("Antonio Vivaldi", "Cztery pory roku", undefined, [musicOswiecenie[11]]),
    new ObjectTest("Benjamin Franklin", "Piorunochron"),
    new ObjectTest("John Locke", "Koncepcja umowy społecznej"),
    new ObjectTest("Wolter", "Listy o Anglikach"),
    new ObjectTest("Daniel Gabriel Fahrenheit", "Termometr rtęciowy"),
    new ObjectTest("Joseph Haydn", "Symfonie, msze, oratoria", undefined, [musicOswiecenie[9]]),
    new ObjectTest("Michaił Łomonosow", "Chemia fizyczna, prawo zachowania masy w reakcjach chemicznych"),
];

music80 = [
    new ObjectTest("AC DC", "Fly on the Wall", ["./pictures/music80/1.jpg"]),
    new ObjectTest("AC DC", "The Razors Edge", ["./pictures/music80/2.jpg"]),
    new ObjectTest("Accept", "Metal Heart", ["./pictures/music80/3.jpg"]),
    new ObjectTest("Aerosmith", "Pump", ["./pictures/music80/27.jpg"]),
    new ObjectTest("Bauhaus", "The Skys Gone Out", ["./pictures/music80/4.jpg"]),
    new ObjectTest("Bob Marley and the Wailers", "Legend", ["./pictures/music80/5.jpg"]),
    new ObjectTest("Bruce Springsteen", "Born In The U.S.A.", ["./pictures/music80/6_1.jpg", "./pictures/music80/6_2.jpg"]),
    new ObjectTest("Cocteau Twins", "Treasure", ["./pictures/music80/7.jpg"]),
    new ObjectTest("Dead Can Dance", "Aion", ["./pictures/music80/8.jpg"]),
    new ObjectTest("Dead Can Dance", "Within the Realm of a Dying Sun", ["./pictures/music80/9.jpg"]),
    new ObjectTest("Deep Purple", "Perfect Strangers", ["./pictures/music80/10_1.jpg", "./pictures/music80/10_3.jpg"]),
    new ObjectTest("Depeche Mode", "Black Celebration", ["./pictures/music80/11.jpg"]),
    new ObjectTest("Depeche Mode", "Some Great Reward", ["./pictures/music80/12.jpg"]),
    new ObjectTest("Dire Straits", "Brothers in Arms", ["./pictures/music80/13.jpg"]),
    new ObjectTest("Dire Straits", "Love Over Gold", ["./pictures/music80/14.jpg"]),
    new ObjectTest("Electric Light Orchestra", "Time", ["./pictures/music80/15.jpg"]),
    new ObjectTest("Frankie Goes To Hollywood", "Welcome to the Pleasuredome", ["./pictures/music80/16_1.jpg", "./pictures/music80/16_2.jpg", "./pictures/music80/16_3.jpg"]),
    new ObjectTest("Genesis", "Abacab", ["./pictures/music80/17.jpg"]),
    new ObjectTest("Genesis", "Genesis", ["./pictures/music80/18.jpg"]),
    new ObjectTest("Iron Maiden", "Powerslave", ["./pictures/music80/19.jpg"]),
    new ObjectTest("Jean-Michel Jarre", "Les Concerts en Chine", ["./pictures/music80/20.jpg"]),
    new ObjectTest("Kate Bush", "Hounds of Love", ["./pictures/music80/21_1.jpg", "./pictures/music80/21_2.jpg"]),
    new ObjectTest("Madonna", "Like a Virgin", ["./pictures/music80/22.jpg"]),
    new ObjectTest("Marillion", "Misplaced Childhood", ["./pictures/music80/38.jpg"]),
    new ObjectTest("Metallica", "...And Justice for All", ["./pictures/music80/23.jpg"]),
    new ObjectTest("Metallica", "Master of Puppets", ["./pictures/music80/24.jpg"]),
    new ObjectTest("Michael Jackson", "Thriller", ["./pictures/music80/25_1.jpg", "./pictures/music80/25_3.jpg"]),
    new ObjectTest("Mike Oldfield", "Crises", ["./pictures/music80/26.jpg"]),
    new ObjectTest("Peter Gabriel", "So", ["./pictures/music80/28.jpg"]),
    new ObjectTest("Peter Gabriel", "IV", ["./pictures/music80/29.jpg"]),
    new ObjectTest("Phil Collins", "Face Value", ["./pictures/music80/30.jpg"]),
    new ObjectTest("Pink Floyd", "A Momentary Lapse of Reason", ["./pictures/music80/31.jpg"]),
    new ObjectTest("Pink Floyd", "The Final Cut", ["./pictures/music80/32.jpg"]),
    new ObjectTest("Pixies", "Surfer Rosa", ["./pictures/music80/33.jpg"]),
    new ObjectTest("Pixies", "Doolittle", ["./pictures/music80/34.jpg"]),
    new ObjectTest("Prince The Revolution", "Purple Rain", ["./pictures/music80/35.jpg"]),
    new ObjectTest("Queen", "A Kind of Magic", ["./pictures/music80/36.jpg"]),
    new ObjectTest("Queen", "Miracle", ["./pictures/music80/37.jpg"]),
    new ObjectTest("Sting", "The Dream of the Blue Turtles", ["./pictures/music80/39.jpg"]),
    new ObjectTest("The Alan Parsons Project", "Eye in the Sky", ["./pictures/music80/40.jpg"]),
    new ObjectTest("The Cure", "Disintegration", ["./pictures/music80/41_1.jpg", "./pictures/music80/41_2.jpg"]),
    new ObjectTest("The Cure", "Kiss Me, Kiss Me, Kiss Me", ["./pictures/music80/42_1.jpg", "./pictures/music80/42_2.jpg"]),
    new ObjectTest("The Police", "Ghost in the Machine", ["./pictures/music80/43.jpg"]),
    new ObjectTest("The Police", "Synchronicity", ["./pictures/music80/44.jpg"]),
    new ObjectTest("The Sisters of Mercy", "Floodland", ["./pictures/music80/45.jpg"]),
    new ObjectTest("U2", "The Unforgettable Fire", ["./pictures/music80/46.jpg"]),
    new ObjectTest("U2", "The Joshua Tree", ["./pictures/music80/47.jpg"]),
    new ObjectTest("Yes", "90125", ["./pictures/music80/48_1.jpg", "./pictures/music80/48_2.jpg"]),
];

let eminem = [
    new Audio("Lose Yourself", "./audio/music90/Eminem/Lose Yourself.mp3"),
    new Audio("The Real Slim Shady", "./audio/music90/Eminem/The_real_slim_shady.mp3"),
    new Audio("The Way I Am", "./audio/music90/Eminem/The_Way_I_Am.mp3"),
    new Audio("Without Me", "./audio/music90/Eminem/Without Me.mp3")
]

let metallicaBlackAlbum = [
    new Audio("Nothing Else Matters", "./audio/music90/Metallica - Black Album/Nothing Else Matters.mp3"),
    new Audio("The Unforgiven", "./audio/music90/Metallica - Black Album/The Unforgiven.mp3"),
]

let nirvana = [
    new Audio("Smells Like Teen Spirit", './audio/music90/Nirvana/Smells_Like_Teen_Spirit.mp3'),
    new Audio("Something In The Way", './audio/music90/Nirvana/Something_In_The_Way.mp3'),
    new Audio("The Man Who Sold The World", './audio/music90/Nirvana/The_Man_Who_Sold_The_World.mp3'),
    new Audio("Where Did You Sleep Last Night", './audio/music90/Nirvana/Where_Did_You_Sleep_Last_Night.mp3'),
    new Audio("Lithium", './audio/music90/Nirvana/Lithium.mp3')
]

let rammstein = [
    new Audio("Ich Will", "./audio/music90/Rammstein/Ich will.mp3"),
    new Audio("Du Hast", "./audio/music90/Rammstein/Du Hast.mp3"),
    new Audio("Mutter", "./audio/music90/Rammstein/Mutter.mp3"),
]

let prodigy = [
    new Audio("Firestarter", "./audio/music90/Prodigy/Firestarter.mp3"),
    new Audio("Voodoo People", "./audio/music90/Prodigy/Voodoo People.mp3"),
    new Audio("Breathe", "./audio/music90/Prodigy/Breathe.mp3"),
    new Audio("Poison", "./audio/music90/Prodigy/Poison.mp3"),
    new Audio("Omen", "./audio/music90/Prodigy/Omen.mp3"),
    new Audio("Added: Robert Miles - Childhood", "./audio/music90/Prodigy/Added - Robert Miles - Childhood.mp3"),
    new Audio("Added: Drum and Base", "./audio/music90/Prodigy/Added - Drum and Base.mp3"),
]

music90 = [
    new ObjectTest("2Pac", "All Eyez On Me", ["./pictures/music90/1.jpg"], [new Audio("All Eyez On Me", "./audio/music90/2Pac - All Eyez On Me.mp3")]), 
    new ObjectTest("Alice in Chains", "Dirt", ["./pictures/music90/2.jpg"], undefined),
    new ObjectTest("Alice in Chains", "Jar Of Flies", ["./pictures/music90/3.jpg"], undefined),
    new ObjectTest("Apollo 440", "Electro Glide In Blue", ["./pictures/music90/4.jpg"], undefined),
    new ObjectTest("Beastie Boys", "Ill Communication", ["./pictures/music90/5.jpg"], undefined),
    new ObjectTest("Björk", "Homogenic", ["./pictures/music90/6.jpg"], undefined),
    new ObjectTest("Björk", "Post", ["./pictures/music90/7.jpg"], undefined),
    new ObjectTest("Cypress Hil", "Black Sunday", ["./pictures/music90/8.jpg"], undefined),
    new ObjectTest("Depeche Mode", "Violator", ["./pictures/music90/9.jpg"], undefined),
    new ObjectTest("Eminem", "The Slim Shady", ["./pictures/music90/10.jpg"], eminem),
    new ObjectTest("Faith No More", "Angel Dust", ["./pictures/music90/11.jpg"], undefined),
    new ObjectTest("Fatboy Slim", "Youve Come a Long Way, Baby", ["./pictures/music90/12.jpg"], undefined),
    new ObjectTest("Fugees", "The Score", ["./pictures/music90/13.jpg"], undefined),
    new ObjectTest("Guns N Roses", "Use Your Illusion I", ["./pictures/music90/14.jpg"], undefined),
    new ObjectTest("Guns N Roses", "Use Your Illusion II", ["./pictures/music90/15.jpg"], undefined),
    new ObjectTest("Hole", "Live Through This", ["./pictures/music90/16.jpg"], undefined),
    new ObjectTest("House of Pain", "House of Pain", ["./pictures/music90/17.jpg"], undefined),
    new ObjectTest("Jamiroquai", "Emergency on Planet Earth", ["./pictures/music90/18.jpg"], undefined),
    new ObjectTest("Jane's Addiction", "Ritual de lo Habitual", ["./pictures/music90/19.jpg"], undefined),
    new ObjectTest("Korn", "Follow the Leader", ["./pictures/music90/20.jpg"], undefined),
    new ObjectTest("Korn", "Issues", ["./pictures/music90/21.jpg"], undefined),
    new ObjectTest("Live", "Throwing Copper", ["./pictures/music90/22.jpg"], undefined),
    new ObjectTest("Mad Season", "Above", ["./pictures/music90/23.jpg"], undefined),
    new ObjectTest("Madonna", "Ray of Light", ["./pictures/music90/24.jpg"], undefined),
    new ObjectTest("Marilyn Manson", "Antichrist Superstar", ["./pictures/music90/25.jpg"], undefined),
    new ObjectTest("Massive Attack", "Mezzanine", ["./pictures/music90/26.jpg"], undefined),
    new ObjectTest("Metallica", "Black Album", ["./pictures/music90/27.jpg"], metallicaBlackAlbum),
    new ObjectTest("Michael Jackson", "Dangerous", ["./pictures/music90/28.jpg"], undefined),
    new ObjectTest("Moby", "Play", ["./pictures/music90/29.jpg"], undefined),
    new ObjectTest("Nick Cave & The Bad Seeds", "Murder Ballads", ["./pictures/music90/30.jpg"], undefined),
    new ObjectTest("Nine inch nails", "The Downward Spiral", ["./pictures/music90/31.jpg"], undefined),
    new ObjectTest("Nirvana", "In Utero", ["./pictures/music90/32.jpg"], nirvana),
    new ObjectTest("Nirvana", "Nevermind", ["./pictures/music90/33.jpg"], nirvana),
    new ObjectTest("Oasis", "(What's the Story) Morning Glory", ["./pictures/music90/34.jpg"], undefined),
    new ObjectTest("Pearl Jam", "Ten", ["./pictures/music90/35.jpg"], undefined),
    new ObjectTest("Pearl Jam", "Vs", ["./pictures/music90/36.jpg"], undefined),
    new ObjectTest("Placebo", "Without You I'm Nothing", ["./pictures/music90/37.jpg"], undefined),
    new ObjectTest("Portishead", "Dummy", ["./pictures/music90/38.jpg"], undefined),
    new ObjectTest("Queen", "Innuendo", ["./pictures/music90/39.jpg"], undefined),
    new ObjectTest("R.E.M.", "Automatic for the People", ["./pictures/music90/40.jpg"], undefined),
    new ObjectTest("R.E.M.", "Out of Time", ["./pictures/music90/41.jpg"], undefined),
    new ObjectTest("Radiohead", "OK Computer", ["./pictures/music90/42.jpg"], [new Audio("Creep", "./audio/music90/Radiohead-Creep.mp3")]),
    new ObjectTest("Radiohead", "The Bends", ["./pictures/music90/43.jpg"], [new Audio("Creep", "./audio/music90/Radiohead-Creep.mp3")]),
    new ObjectTest("Rage Against the Machine", "Killing In The Name", ["./pictures/music90/44_1.jpg", "./pictures/music90/44_2.jpg"], undefined),
    new ObjectTest("Rage Against the Machine", "The Battle of Los Angeles", ["./pictures/music90/45.jpg"], undefined),
    new ObjectTest("Rammstein", "Sehnsucht", ["./pictures/music90/46.jpg"], rammstein),
    new ObjectTest("Red Hot Chili Peppers", "Californication", ["./pictures/music90/47.jpg"], undefined),
    new ObjectTest("Red Hot Chili Peppers", "Blood Sugar Sex Magik", ["./pictures/music90/48.jpg"], undefined),
    new ObjectTest("Santana", "Supernatural", ["./pictures/music90/49.jpg"], undefined),
    new ObjectTest("Silverchair", "Frogstomp", ["./pictures/music90/50.jpg"], undefined),
    new ObjectTest("Sinead O'Connor", "I Do Not Want What I Havent Got", ["./pictures/music90/51.jpg"], undefined),
    new ObjectTest("Soundgarden", "Superunknown", ["./pictures/music90/52_1.jpg", "./pictures/music90/52_2.jpg"], undefined),
    new ObjectTest("Stone temple Pilots", "Core", ["./pictures/music90/53.jpg"], undefined),
    new ObjectTest("The Black Crowes", "The Southern Harmony And Musical Companion", ["./pictures/music90/54.jpg"], undefined),
    new ObjectTest("The Chemical Brothers", "Surrender", ["./pictures/music90/55.jpg"], undefined),
    new ObjectTest("The Cranberries", "No Need to Argue", ["./pictures/music90/56.jpg"], undefined),
    new ObjectTest("The Cure", "Wish", ["./pictures/music90/57.jpg"], undefined),
    new ObjectTest("The Offspring", "Americana", ["./pictures/music90/58.jpg"], undefined),
    new ObjectTest("The Prodigy", "The Fat of the Land", ["./pictures/music90/59.jpg"], prodigy),
    new ObjectTest("The Rolling Stones", "Bridges To Babylon", ["./pictures/music90/60.jpg"], undefined),
    new ObjectTest("The Smashing Pumpkins", "Mellon Collie And The Infinite Sadness", ["./pictures/music90/61.jpg"], undefined),
    new ObjectTest("Tool", "Lateralus", ["./pictures/music90/62.jpg"], undefined),
    new ObjectTest("U2", "Achtung Baby", ["./pictures/music90/63.jpg"], undefined),
    new ObjectTest("U2", "Zooropa", ["./pictures/music90/64.jpg"], undefined),
];

let armiaAintiarmia = [
    new Audio("Bombadil w locie", "./audio/polishMusic80/Armia - Antiarmia/Bombadil w locie.mp4"),
    new Audio("Hej szara wiara", "./audio/polishMusic80/Armia - Antiarmia/Hej szara wiara.mp4"),
    new Audio("Intro 87", "./audio/polishMusic80/Armia - Antiarmia/Intro 87.mp4"),
    new Audio("Nic już nie przeszkodzi", "./audio/polishMusic80/Armia - Antiarmia/Nic już nie przeszkodzi.mp4"),
    new Audio("Niewidzialna armia", "./audio/polishMusic80/Armia - Antiarmia/Niewidzialna armia.mp4"),
    new Audio("Nigdzie, teraz, tutaj", "./audio/polishMusic80/Armia - Antiarmia/Nigdzie, teraz, tutaj.mp4"),
    new Audio("Obok historii", "./audio/polishMusic80/Armia - Antiarmia/Obok historii.mp4"),
    new Audio("Siódmy", "./audio/polishMusic80/Armia - Antiarmia/Siódmy.mp4"),
    new Audio("W niczyjej sprawie", "./audio/polishMusic80/Armia - Antiarmia/W niczyjej sprawie.mp4"),
    new Audio("Wiatr wieje tam gdzie chce", "./audio/polishMusic80/Armia - Antiarmia/Wiatr wieje tam gdzie chce.mp4"),
    new Audio("Wojny bez łez", "./audio/polishMusic80/Armia - Antiarmia/Wojny bez łez.mp4"),
    new Audio("Wołanie o pomoc", "./audio/polishMusic80/Armia - Antiarmia/Wołanie o pomoc.mp4"),
    new Audio("Sędziowie", "./audio/polishMusic80/Armia - Antiarmia/Sędziowie.mp4"),
    new Audio("Zostaw to 87", "./audio/polishMusic80/Armia - Antiarmia/Zostaw to.mp4"),
];

let kombi = [
    new Audio("Błękitny pejzaż", "./audio/polishMusic80/Kombi/Błękitny pejzaż.mp4"),
    new Audio("Cyfrowa gra", "./audio/polishMusic80/Kombi/Cyfrowa gra.mp4"),
    new Audio("Jej wspomnienie", "./audio/polishMusic80/Kombi/Jej wspomnienie.mp4"),
    new Audio("Karty śmierci", "./audio/polishMusic80/Kombi/Karty śmierci.mp4"),
    new Audio("Kochać Cię za późno", "./audio/polishMusic80/Kombi/Kochać Cię za późno.mp4"),
    new Audio("Nie ma zysku", "./audio/polishMusic80/Kombi/Nie ma zysku.mp4"),
    new Audio("Nie poddawaj się", "./audio/polishMusic80/Kombi/Nie poddawaj się.mp4"),
    new Audio("Srebrny talizman", "./audio/polishMusic80/Kombi/Srebrny talizman.mp4"),
    new Audio("Słodkiego miłego życia", "./audio/polishMusic80/Kombi/Słodkiego miłego życia.mp4"),
]

polishMusic80 = [
    new ObjectTest("1984", "Radio niebieskie oczy Heleny", ["./pictures/polishMusic80/1.jpg"], [new Audio("Radio Niebieskie Oczy Heleny", "./audio/polishMusic80/1984 - Radio Niebieskie Oczy Heleny.mp4")]),
    new ObjectTest("1984", "Specjalny rodzaj kontrastu", ["./pictures/polishMusic80/2.jpg"], [new Audio("Specjalny Rodzaj Kontrastu", "./audio/polishMusic80/1984 - Specjalny Rodzaj Kontrastu '86.mp4")]),
    new ObjectTest("Armia", "Antiarmia", ["./pictures/polishMusic80/3.jpg"], [
        armiaAintiarmia[0],
        armiaAintiarmia[1],
        armiaAintiarmia[2],
        armiaAintiarmia[3],
        armiaAintiarmia[4],
        armiaAintiarmia[5],
        armiaAintiarmia[6],
        armiaAintiarmia[7],
        armiaAintiarmia[8],
        armiaAintiarmia[9],
        armiaAintiarmia[10],
        armiaAintiarmia[11],
        armiaAintiarmia[12],
        armiaAintiarmia[13],
    ]),
    new ObjectTest("Brygada Kryzys", "Czarną Brygada", ["./pictures/polishMusic80/4.jpg"], [new Audio("Brygada Kryzys - Centrala", "./audio/polishMusic80/Brygada Kryzys - Centrala.mp3")]),
    new ObjectTest("Dezerter", "Kolaboracja", ["./pictures/polishMusic80/5_1.jpg", "./pictures/polishMusic80/5_2.jpg"], [new Audio("Dezerter - Kolaboracja (official audio)", "./audio/polishMusic80/Dezerter - Kolaboracja (official audio).mp4")]),
    new ObjectTest("Dzieci Kapitana Klossa", "Ballada", ["./pictures/polishMusic80/6_1.jpg"], [new Audio("Dzieci Kapitana Klossa - Pieśń (Ballada) o Bohaterze", "./audio/polishMusic80/Dzieci Kapitana Klossa - Pieśń (Ballada) o Bohaterze.mp3")]),
    new ObjectTest("Dżem", "Cegła", ["./pictures/polishMusic80/7.jpg"], [new Audio("Dżem - Czerwony jak Cegła", "./audio/polishMusic80/Dżem - Czerwony jak Cegła.mp4")]),
    new ObjectTest("Klaus Mitffoch", "Ogniowe strzelby", ["./pictures/polishMusic80/8_1.jpg", "./pictures/polishMusic80/8_2.jpg"], [new Audio("Klaus Mitffoch - Ogniowe strzelby", "./audio/polishMusic80/Ogniowe strzelby.mp4")]),
    new ObjectTest("Kobranocka", "Kwiaty na żywopłocie", ["./pictures/polishMusic80/9.jpg"], [new Audio("Kobranocka - Kwiaty na żywopłocie", "./audio/polishMusic80/Kobranocka - Kwiaty na żywopłocie.mp4")]),
    new ObjectTest("Kombi", "Nowy Rozdział", ["./pictures/polishMusic80/10.jpg"], [
        kombi[0],
        kombi[1],
        kombi[2],
        kombi[3],
        kombi[4],
        kombi[5],
        kombi[6],
        kombi[7],
        kombi[8],
    ]), 
    new ObjectTest("Kosmetyki Mrs Pinki", "KMP vol.1", ["./pictures/polishMusic80/11.jpg"], [new Audio("Kosmetyki Mrs. Pinki - Ciągle w ruchu", "./audio/polishMusic80/Kosmetyki Mrs. Pinki - Ciągle w ruchu.mp4")]),
    new ObjectTest("KSU", "Pod prąd", ["./pictures/polishMusic80/12.jpg"], [new Audio("KSU - Pod Prąd", "./audio/polishMusic80/KSU - Pod Prąd (Pod Prąd).mp4")]),
    new ObjectTest("Kult", "Posłuchaj to do ciebie", ["./pictures/polishMusic80/13.jpg"], [new Audio("KULT - Posłuchaj to do Ciebie", "./audio/polishMusic80/KULT - Posłuchaj to do Ciebie [OFFICIAL AUDIO].mp4")]),
    new ObjectTest("Kult", "Spokojnie", ["./pictures/polishMusic80/14.jpg"], [new Audio("KULT - Spokojnie", "./audio/polishMusic80/KULT - Spokojnie [OFFICIAL AUDIO].mp4")]),
    new ObjectTest("Lady Pank", "LP1", ["./pictures/polishMusic80/15.jpg"], [new Audio("Lady Pank - Lady Pank (Full Album)", "./audio/polishMusic80/Lady Pank - Lady Pank (Full Album).mp3")]),
    new ObjectTest("Lady Pank", "Ohyda", ["./pictures/polishMusic80/16.jpg"], [new Audio("Lady Pank- A to Ohyda", "./audio/polishMusic80/Lady Pank- A to Ohyda HQ Audio.wmv.mp4")]),
    new ObjectTest("Lech Janerka", "Historia podwodna", ["./pictures/polishMusic80/17.jpg"], [new Audio("Lech Janerka - Historia podwodna", "./audio/polishMusic80/Lech Janerka - Historia podwodna.mp4")]),
    new ObjectTest("Lombard", "Śmierć dyskotece", ["./pictures/polishMusic80/18.jpg"], [new Audio("Lombard - Śmierć Dyskotece", "./audio/polishMusic80/Lombard - Śmierć Dyskotece.mp4")]),
    new ObjectTest("Lombard", "Szara maść", ["./pictures/polishMusic80/19.jpg"], [new Audio("Lombard - Szara maść", "./audio/polishMusic80/Lombard - Szara maść.mp4")]),
    new ObjectTest("Maanam", "Mental Cut", ["./pictures/polishMusic80/20.jpg"], [new Audio("Maanam - Mental Cat", "./audio/polishMusic80/Maanam - Mental Cat (film muzyczny Mental Cut).mp4")]),
    new ObjectTest("Maanam", "Nocny patrol", ["./pictures/polishMusic80/21.jpg"], [new Audio("Maanam - Nocny Patrol", "./audio/polishMusic80/Maanam - 01. Nocny Patrol.mp4")]),
    new ObjectTest("Maanam", "O!", ["./pictures/polishMusic80/22.jpg"], [new Audio("Maanam - O! Nie Rób Tyle Hałasu", "./audio/polishMusic80/Maanam - O! Nie Rób Tyle Hałasu [Official Music Video].mp4")]),
    new ObjectTest("Madame", "Koncert", ["./pictures/polishMusic80/23.jpg"], [new Audio("Madame - Koncert", "./audio/polishMusic80/Madame-17_12_85 przeboje dwojki  Katowice-spodek.mp3")]),
    new ObjectTest("Made In Poland", "Martwy kabaret", ["./pictures/polishMusic80/24.jpg"], [new Audio("MADE IN POLAND Martwy kabaret (Full album)", "./audio/polishMusic80/MADE IN POLAND Martwy kabaret (Full album).mp3")]),
    new ObjectTest("Moskwa", "Nigdy!", ["./pictures/polishMusic80/25_1.jpg", "./pictures/polishMusic80/25_2.jpg"], [new Audio("Nigdy", "./audio/polishMusic80/Nigdy.mp4")]),
    new ObjectTest("Obywatel G.C.", "Tak Tak!", ["./pictures/polishMusic80/26.jpg"], [new Audio("Obywatel G.C. - Tak tak... To ja..", "./audio/polishMusic80/Obywatel G.C. - Tak tak... To ja..mp4")]),
    new ObjectTest("Obywatel G.C.", "Stan strachu", ["./pictures/polishMusic80/27.jpg"], [new Audio("Obywatel G.C. - Stan Strachu (1989) (Full Album)", "./audio/polishMusic80/Obywatel G.C. - Stan Strachu (1989) (Full Album).mp3")]),
    new ObjectTest("Oddzial zamkniety", "OZ", ["./pictures/polishMusic80/28_1.jpg", "./pictures/polishMusic80/28_2.jpg"], [new Audio("Jary Oddział Zamknięty - Ten Wasz Świat (LIVE 2022)", "./audio/polishMusic80/Jary Oddział Zamknięty - Ten Wasz Świat (LIVE 2022).mp3")]),
    new ObjectTest("One Million Bulgarians", "Pierwsza płyta", ["./pictures/polishMusic80/29.jpg"], [new Audio("One Million Bulgarians - Czerwone Krzaki", "./audio/polishMusic80/One Million Bulgarians - Czerwone Krzaki.mp4")]),
    new ObjectTest("Perfect", "UNU", ["./pictures/polishMusic80/30.jpg"], [new Audio("Perfect - Objazdowe nieme kino", "./audio/polishMusic80/Perfect - Objazdowe nieme kino.mp4")]),
    new ObjectTest("Perfect", "Live", ["./pictures/polishMusic80/31.jpg"], [new Audio("Perfekt - Niewiele Ci Mogę Dać", "./audio/polishMusic80/Niewiele Ci Mogę Dać.mp4")]),
    new ObjectTest("Proletaryat", "Revolt", ["./pictures/polishMusic80/32.jpg"], [new Audio("Proletaryat - Naprzód Rodacy", "./audio/polishMusic80/Proletaryat - Naprzód Rodacy.mp4")]),
    new ObjectTest("Republika", "Nowe sytuacje", ["./pictures/polishMusic80/33.jpg"], [new Audio("Nowe sytuacje", "./audio/polishMusic80/Nowe sytuacje.mp4")]),
    new ObjectTest("Republika", "Nieustanne tango", ["./pictures/polishMusic80/34.jpg"], [new Audio("Nieustanne tango", "./audio/polishMusic80/Republika _Nieustanne tango.mp4")]),
    new ObjectTest("Rezerwat", "Obserwator", ["./pictures/polishMusic80/35.jpg"], [new Audio("Rezerwat - Obserwator (1983)", "./audio/polishMusic80/Rezerwat - Obserwator - (1983).mp4")]),
    new ObjectTest("Róże Europy", "Stańskie przed Lustrami", ["./pictures/polishMusic80/36_1.jpg", "./pictures/polishMusic80/36_2.jpg"], [new Audio("Róże Europy - Stańcie Przed Lustrami", "./audio/polishMusic80/Róże Europy - Stańcie Przed Lustrami.mp4")]),
    new ObjectTest("Shakin' Dudi", "Złota płyty", ["./pictures/polishMusic80/37.jpg"], [new Audio("Shakin'Dudi -  Au sza la la la", "./audio/polishMusic80/Shakin'Dudi -  Au sza la la la.mp4")]),
    new ObjectTest("Siekiera", "Nowa Aleksandria", ["./pictures/polishMusic80/38.jpg"], [new Audio("Siekiera - Nowa Aleksandria", "./audio/polishMusic80/Siekiera - Nowa Aleksandria.mp4")]),
    new ObjectTest("Sztywny Pal Azji", "Europa i Azja", ["./pictures/polishMusic80/39.jpg"], [new Audio("Sztywny Pal Azji - Europa i Azja (LIVE)", "./audio/polishMusic80/Sztywny Pal Azji - Europa i Azja [LIVE].mp3")]),
    new ObjectTest("T Love", "Wychowanie", ["./pictures/polishMusic80/40.jpg"], [new Audio("T.Love - To Wychowanie", "./audio/polishMusic80/T.Love - To Wychowanie [Official Music Video].mp4")]),
    new ObjectTest("Tilt", "Czad Kommando", ["./pictures/polishMusic80/41.jpg"], [new Audio("Tilt - Czad czad czad", "./audio/polishMusic80/Czad czad czad.mp4")]),
    new ObjectTest("Tilt", "Mówię ci, że...", ["./pictures/polishMusic80/42.jpg"], [new Audio("Tilt - Mówię Ci, że", "./audio/polishMusic80/Tilt - Mówię Ci, że.mp4")]),
    new ObjectTest("TSA", "Heavy Metal Świat", ["./pictures/polishMusic80/43.jpg"], [new Audio("TSA - Heavy Metal Świat", "./audio/polishMusic80/Heavy Metal World.mp4")]),
    new ObjectTest("TSA", "Live", ["./pictures/polishMusic80/44.jpg"], [new Audio("TSA Dream Team - Bejbe", "./audio/polishMusic80/TSA Dream Team - Bejbe (Official Video).mp4")]),
    new ObjectTest("Turbo", "Dorosłe dzieci", ["./pictures/polishMusic80/45.jpg"], [new Audio("Dorosłe dzieci", "./audio/polishMusic80/Dorosłe dzieci.mp4")]),
    new ObjectTest("Turbo", "Kawaleria Szatana", ["./pictures/polishMusic80/46.jpg"], [new Audio("Kawaleria szatana", "./audio/polishMusic80/Kawaleria szatana.mp4")]),
    new ObjectTest("Variete", "Bydgoszcz", ["./pictures/polishMusic80/47.jpg"], [new Audio("Variété - Bydgoszcz", "./audio/polishMusic80/Variété - Bydgoszcz.mp4")]),
    new ObjectTest("Voo Voo", "Wizyta", ["./pictures/polishMusic80/48.jpg"], [new Audio("Voo Voo - Wizyta I", "./audio/polishMusic80/1. Voo Voo - Wizyta I.mp4")]),
];

let testPicturesBarok = new Test(picturesBarok, "Autor", "Nazwa");
let testMusic70 = new Test(music70, "Autor Muzyki", "Nazwa Muzyki");
let testOswiecenie = new Test(oswiecenie, "Osoba", "Co zrobił(a)");
let testMusic80 = new Test(music80, "Autor Muzyki", "Nazwa Muzyki");
let testPolishMusic80 = new Test(polishMusic80, "Autor Płyty", "Nazwa Płyty");
let testMusic90 = new Test(music90, "Autor Muzyki", "Nazwa Muzyki");

function getVariantsAuthor(data) {
    result = [];
    for (let i = 0; i < data.length; i++)
        result.push(data[i].autor);
    result.sort();
    return result = [... new Set(result)];
}

function getVariantsName(data) {
    result = [];
    for (let i = 0; i < data.length; i++)
        result.push(data[i].name);
    result.sort();
    return result = [...new Set(result)];
}

function getHTMLVariants(variantsArray) {
    let innerHTML = "";
    for (let i = 0; i < variantsArray.length; i++)
        innerHTML += '<li onclick="selectAnswer(this)"><a href="#">' + String(variantsArray[i]) + '</a></li>';
    return innerHTML;
}

let buffer = [];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function checkBuffer(index) {
    for (let j = 0; j < buffer.length; j++) {
        if (buffer[j] == index)
            return false;
    }

    return true;
}

function getTest(dataSelected) {
    switch (dataSelected) {
        case "Malarstwo Baroku":
            return testPicturesBarok;
        case "Muzyka lat 70":
            return testMusic70;
        case "Oświecenie":
            return testOswiecenie;
        case "Muzyka lat 80":
            return testMusic80;
        case "Polska muzyka lat 80":
            return testPolishMusic80;
        case "Muzyka lat 90":
            return testMusic90;
        default:
            return testPicturesBarok;
    }
}

function getTable(dataSelected) {
    return getTest(dataSelected).data;
}

// Audio
function getHTMLAudios(variantsArray) {
    let innerHTML = "";
    console.log(variantsArray);
    for (let i = 0; i < variantsArray.length; i++)
        innerHTML += `<li class="audioElement" onclick="selectAudio(this)">${variantsArray[i].name}</li>`;
    return innerHTML;
}