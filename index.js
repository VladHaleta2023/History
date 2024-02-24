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

oswiecenie = [
    new ObjectTest("Bracia Montgolfier", "Balon"),
    new ObjectTest("Alessandro Volta", "Kondensator, bateria elektryczna"),
    new ObjectTest("Daniel Defoe", "Przypadki Robinsona Kruzoe"),
    new ObjectTest("Ludwig van Beethoven", "V Symfonia, IX Symfonia, Sonata księżycowa, Do Elizy"),
    new ObjectTest("James Cook", "Australia i Nowa Zelandia"),
    new ObjectTest("Isaac Newton", "Prawo powszechnego ciążenia"),
    new ObjectTest("Johann Sebastian Bach", "Pasja według św. Mateusza, Koncerty brandenburskie, Toccata i fuga d-moll"),
    new ObjectTest("Antoni van Leeuwenhoek", "Mikroskop"),
    new ObjectTest("Denis Diderot", "Wielka Encyklopedia francuska, Kubuś Fatalista i jego pan"),
    new ObjectTest("Kartezjusz", "Rozprawa o metodzie (racjonalizm)"),
    new ObjectTest("Wolfgang Amadeus Mozart", "Symfonia Jowiszowa, Requiem, Mała nocna muzyka, Wesele Figara, Don Giovanni, Czarodziejski flet"),
    new ObjectTest("Immanuel Kant", "Krytyka czystego rozumu"),
    new ObjectTest("James Watt", "Maszyna parowa"),
    new ObjectTest("Georg Friedrich Heandel", "Pasja według Św. Jana, Mesjasz, Zadok the Priest"),
    new ObjectTest("Karol Linneusz", "Klasyfikacja roślin i zwierząt według gatunków"),
    new ObjectTest("Anders Celsius", "Skala temperatur"),
    new ObjectTest("Jonathan Swift", "Podróże Guliwera"),
    new ObjectTest("Gottfried Wilhelm Leibniz", "Rachunek różniczkowy i całkowy"),
    new ObjectTest("Monteskiusz", "O duchu praw (koncepcja trójpodziału władzy)"),
    new ObjectTest("Antonio Vivaldi", "Cztery pory roku"),
    new ObjectTest("Benjamin Franklin", "Piorunochron"),
    new ObjectTest("John Locke", "Koncepcja umowy społecznej"),
    new ObjectTest("Wolter", "Listy o Anglikach"),
    new ObjectTest("Daniel Gabriel Fahrenheit", "Termometr rtęciowy"),
    new ObjectTest("Joseph Haydn", "Symfonie, msze, oratoria"),
    new ObjectTest("Michaił Łomonosow", "Chemia fizyczna, prawo zachowania masy w reakcjach chemicznych"),
];

music80 = [
    new ObjectTest("AC DC", "Fly on the Wall", ["./pictures/music80/1.jpg"]),
    new ObjectTest("AC DC", "The Razors Edge", ["./pictures/music80/2.jpg"]),
    new ObjectTest("Accept", "Metal Heart", ["./pictures/music80/3.jpg"]),
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
    new ObjectTest("Metallica", "...And Justice for All", ["./pictures/music80/23.jpg"]),
    new ObjectTest("Metallica", "Master of Puppets", ["./pictures/music80/24.jpg"]),
    new ObjectTest("Michael Jackson", "Thriller", ["./pictures/music80/25_1.jpg", "./pictures/music80/25_3.jpg"]),
    new ObjectTest("Mike Oldfield", "Crises", ["./pictures/music80/26.jpg"]),
    new ObjectTest("Mike Oldfield", "Five Miles Out", ["./pictures/music80/27.jpg"]),
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
    new ObjectTest("Sinead OConnor", "The Lion and the Cobra", ["./pictures/music80/38_1.jpg", "./pictures/music80/38_2.jpg"]),
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

let testPicturesBarok = new Test(picturesBarok, "Autor", "Nazwa");
let testMusic70 = new Test(music70, "Autor Muzyki", "Nazwa Muzyki");
let testOswiecenie = new Test(oswiecenie, "Osoba", "Co zrobił(a)");
let testMusic80 = new Test(music80, "Autor Muzyki", "Nazwa Muzyki");

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