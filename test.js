const students = [
  {
    student_id: 1,
    first_name: "Thomas",
    last_name: "Tidder",
    age: 18,
    email: "ttidder0@cbc.ca",
    gender: "Male",
    nationality: "Iran",
    address: "109 Fair Oaks Park",
    phone_number: "605-866-5139",
    grade: 85,
  },
  {
    student_id: 2,
    first_name: "Nealon",
    last_name: "Winslade",
    age: 18,
    email: "nwinslade1@yelp.com",
    gender: "Male",
    nationality: "Slovenia",
    address: "8149 Birchwood Parkway",
    phone_number: "970-548-0362",
    grade: 67,
  },
  {
    student_id: 3,
    first_name: "Angelina",
    last_name: "Vasilmanov",
    age: 19,
    email: "avasilmanov2@mapquest.com",
    gender: "Female",
    nationality: "Venezuela",
    address: "87779 Esch Point",
    phone_number: "581-991-0407",
    grade: 6,
  },
  {
    student_id: 4,
    first_name: "Yehudi",
    last_name: "Toppes",
    age: 19,
    email: "ytoppes3@virginia.edu",
    gender: "Male",
    nationality: "Russia",
    address: "6 Donald Road",
    phone_number: "937-359-0155",
    grade: 7,
  },
  {
    student_id: 5,
    first_name: "Avram",
    last_name: "Shrimpton",
    age: 25,
    email: "ashrimpton4@myspace.com",
    gender: "Male",
    nationality: "China",
    address: "05 Cody Alley",
    phone_number: "933-223-3718",
    grade: 10,
  },
  {
    student_id: 6,
    first_name: "Beryle",
    last_name: "Delamaine",
    age: 20,
    email: "bdelamaine5@thetimes.co.uk",
    gender: "Female",
    nationality: "Gabon",
    address: "12 Hanover Court",
    phone_number: "422-428-5323",
    grade: 59,
  },
  {
    student_id: 7,
    first_name: "Christyna",
    last_name: "Louden",
    age: 19,
    email: "clouden6@linkedin.com",
    gender: "Female",
    nationality: "Iceland",
    address: "09 Arizona Street",
    phone_number: "392-491-8071",
    grade: 22,
  },
  {
    student_id: 8,
    first_name: "Aprilette",
    last_name: "Do",
    age: 20,
    email: "ado7@blogspot.com",
    gender: "Female",
    nationality: "Papua New Guinea",
    address: "904 Clyde Gallagher Alley",
    phone_number: "458-964-3982",
    grade: 38,
  },
  {
    student_id: 9,
    first_name: "Kipp",
    last_name: "Syalvester",
    age: 20,
    email: "ksyalvester8@google.es",
    gender: "Female",
    nationality: "Sweden",
    address: "889 Valley Edge Plaza",
    phone_number: "375-174-0268",
    grade: 95,
  },
  {
    student_id: 10,
    first_name: "William",
    last_name: "Nairn",
    age: 21,
    email: "wnairn9@prlog.org",
    gender: "Male",
    nationality: "Philippines",
    address: "4380 Rusk Hill",
    phone_number: "892-187-2788",
    grade: 38,
  },
  {
    student_id: 11,
    first_name: "Ephraim",
    last_name: "Cudbertson",
    age: 25,
    email: "ecudbertsona@mayoclinic.com",
    gender: "Male",
    nationality: "China",
    address: "69 Badeau Way",
    phone_number: "403-536-8628",
    grade: 64,
  },
  {
    student_id: 12,
    first_name: "Van",
    last_name: "Brodie",
    age: 25,
    email: "vbrodieb@tinypic.com",
    gender: "Male",
    nationality: "Poland",
    address: "310 Ronald Regan Terrace",
    phone_number: "184-331-2993",
    grade: 74,
  },
  {
    student_id: 13,
    first_name: "Jordan",
    last_name: "Shapira",
    age: 22,
    email: "jshapirac@seattletimes.com",
    gender: "Male",
    nationality: "Djibouti",
    address: "6195 Cottonwood Place",
    phone_number: "599-832-6399",
    grade: 66,
  },
  {
    student_id: 14,
    first_name: "Rogers",
    last_name: "Manueli",
    age: 24,
    email: "rmanuelid@eventbrite.com",
    gender: "Male",
    nationality: "Thailand",
    address: "4129 Ronald Regan Place",
    phone_number: "474-711-5842",
    grade: 34,
  },
  {
    student_id: 15,
    first_name: "Asia",
    last_name: "Orable",
    age: 20,
    email: "aorablee@wunderground.com",
    gender: "Female",
    nationality: "Brazil",
    address: "4031 Buena Vista Center",
    phone_number: "720-372-5892",
    grade: 21,
  },
  {
    student_id: 16,
    first_name: "Rriocard",
    last_name: "Filipputti",
    age: 21,
    email: "rfilipputtif@4shared.com",
    gender: "Male",
    nationality: "Portugal",
    address: "1 David Point",
    phone_number: "520-388-1457",
    grade: 81,
  },
  {
    student_id: 17,
    first_name: "Letitia",
    last_name: "Serck",
    age: 22,
    email: "lserckg@sina.com.cn",
    gender: "Female",
    nationality: "France",
    address: "9939 Little Fleur Lane",
    phone_number: "250-139-2971",
    grade: 75,
  },
  {
    student_id: 18,
    first_name: "Stanford",
    last_name: "Sellek",
    age: 19,
    email: "ssellekh@scientificamerican.com",
    gender: "Male",
    nationality: "Iran",
    address: "8 Northport Circle",
    phone_number: "675-651-9196",
    grade: 34,
  },
  {
    student_id: 19,
    first_name: "Orazio",
    last_name: "Munroe",
    age: 25,
    email: "omunroei@shareasale.com",
    gender: "Male",
    nationality: "France",
    address: "4616 Lakeland Road",
    phone_number: "916-411-2317",
    grade: 25,
  },
  {
    student_id: 20,
    first_name: "Jolyn",
    last_name: "Brewerton",
    age: 19,
    email: "jbrewertonj@ihg.com",
    gender: "Female",
    nationality: "Israel",
    address: "367 Warner Crossing",
    phone_number: "218-372-7610",
    grade: 80,
  },
  {
    student_id: 21,
    first_name: "Constancia",
    last_name: "Busse",
    age: 19,
    email: "cbussek@slideshare.net",
    gender: "Female",
    nationality: "Nicaragua",
    address: "1456 Melvin Plaza",
    phone_number: "466-304-2391",
    grade: 78,
  },
  {
    student_id: 22,
    first_name: "Bil",
    last_name: "Dugue",
    age: 25,
    email: "bduguel@google.it",
    gender: "Male",
    nationality: "Argentina",
    address: "53 Lawn Terrace",
    phone_number: "440-774-8641",
    grade: 24,
  },
  {
    student_id: 23,
    first_name: "Renie",
    last_name: "Corradengo",
    age: 20,
    email: "rcorradengom@geocities.jp",
    gender: "Female",
    nationality: "Japan",
    address: "6400 Green Road",
    phone_number: "706-124-1302",
    grade: 15,
  },
  {
    student_id: 24,
    first_name: "Scotti",
    last_name: "Sherme",
    age: 18,
    email: "sshermen@phoca.cz",
    gender: "Male",
    nationality: "United States",
    address: "08681 Heath Way",
    phone_number: "419-787-2701",
    grade: 38,
  },
  {
    student_id: 25,
    first_name: "Burnaby",
    last_name: "Vigors",
    age: 18,
    email: "bvigorso@twitter.com",
    gender: "Male",
    nationality: "Peru",
    address: "56 Ridgeway Point",
    phone_number: "608-130-4508",
    grade: 59,
  },
  {
    student_id: 26,
    first_name: "Malvin",
    last_name: "Watts",
    age: 21,
    email: "mwattsp@state.gov",
    gender: "Male",
    nationality: "China",
    address: "0 Shelley Terrace",
    phone_number: "867-709-3312",
    grade: 89,
  },
  {
    student_id: 27,
    first_name: "Alecia",
    last_name: "Melwall",
    age: 21,
    email: "amelwallq@sphinn.com",
    gender: "Female",
    nationality: "Philippines",
    address: "348 Calypso Road",
    phone_number: "499-703-5016",
    grade: 29,
  },
  {
    student_id: 28,
    first_name: "Ruddy",
    last_name: "Camacho",
    age: 19,
    email: "rcamachor@blogspot.com",
    gender: "Male",
    nationality: "Central African Republic",
    address: "908 Golf View Pass",
    phone_number: "957-510-9248",
    grade: 68,
  },
  {
    student_id: 29,
    first_name: "Mycah",
    last_name: "Bilfoot",
    age: 24,
    email: "mbilfoots@google.es",
    gender: "Male",
    nationality: "Poland",
    address: "15414 Lawn Court",
    phone_number: "319-147-0028",
    grade: 65,
  },
  {
    student_id: 30,
    first_name: "Gigi",
    last_name: "Harner",
    age: 19,
    email: "gharnert@amazon.com",
    gender: "Female",
    nationality: "Indonesia",
    address: "4924 Katie Parkway",
    phone_number: "675-806-2987",
    grade: 15,
  },
  {
    student_id: 31,
    first_name: "Jareb",
    last_name: "Eickhoff",
    age: 18,
    email: "jeickhoffu@hexun.com",
    gender: "Male",
    nationality: "Russia",
    address: "1 Ilene Court",
    phone_number: "144-782-7692",
    grade: 6,
  },
  {
    student_id: 32,
    first_name: "Omero",
    last_name: "Yapp",
    age: 21,
    email: "oyappv@de.vu",
    gender: "Agender",
    nationality: "Russia",
    address: "9 Jackson Pass",
    phone_number: "188-866-7177",
    grade: 46,
  },
  {
    student_id: 33,
    first_name: "Noel",
    last_name: "Braz",
    age: 24,
    email: "nbrazw@drupal.org",
    gender: "Female",
    nationality: "Malaysia",
    address: "0737 Stang Street",
    phone_number: "870-738-9875",
    grade: 53,
  },
  {
    student_id: 34,
    first_name: "Jaquelin",
    last_name: "Harness",
    age: 18,
    email: "jharnessx@tinypic.com",
    gender: "Female",
    nationality: "Brazil",
    address: "8 American Trail",
    phone_number: "593-953-7554",
    grade: 35,
  },
  {
    student_id: 35,
    first_name: "Wileen",
    last_name: "Widdecombe",
    age: 19,
    email: "wwiddecombey@dailymotion.com",
    gender: "Female",
    nationality: "Russia",
    address: "25621 Lakeland Court",
    phone_number: "761-666-9515",
    grade: 91,
  },
  {
    student_id: 36,
    first_name: "Thedric",
    last_name: "Humberstone",
    age: 25,
    email: "thumberstonez@deviantart.com",
    gender: "Male",
    nationality: "Spain",
    address: "686 Bunker Hill Way",
    phone_number: "707-309-1592",
    grade: 23,
  },
  {
    student_id: 37,
    first_name: "Gradeigh",
    last_name: "Klimushev",
    age: 21,
    email: "gklimushev10@wikipedia.org",
    gender: "Male",
    nationality: "Argentina",
    address: "6 Hayes Way",
    phone_number: "903-464-6075",
    grade: 17,
  },
  {
    student_id: 38,
    first_name: "Christoper",
    last_name: "Snoad",
    age: 19,
    email: "csnoad11@europa.eu",
    gender: "Male",
    nationality: "Czech Republic",
    address: "25 Russell Avenue",
    phone_number: "817-845-6772",
    grade: 77,
  },
  {
    student_id: 39,
    first_name: "Cleavland",
    last_name: "Burehill",
    age: 22,
    email: "cburehill12@patch.com",
    gender: "Male",
    nationality: "Greece",
    address: "31315 Goodland Drive",
    phone_number: "501-673-9327",
    grade: 58,
  },
  {
    student_id: 40,
    first_name: "Doy",
    last_name: "Acland",
    age: 24,
    email: "dacland13@adobe.com",
    gender: "Male",
    nationality: "Indonesia",
    address: "8 Sutteridge Terrace",
    phone_number: "260-281-0281",
    grade: 31,
  },
  {
    student_id: 41,
    first_name: "Lynette",
    last_name: "Spore",
    age: 18,
    email: "lspore14@abc.net.au",
    gender: "Female",
    nationality: "China",
    address: "35 Roth Center",
    phone_number: "717-718-7089",
    grade: 21,
  },
  {
    student_id: 42,
    first_name: "Malachi",
    last_name: "Durant",
    age: 24,
    email: "mdurant15@google.com.br",
    gender: "Male",
    nationality: "Russia",
    address: "29 Hazelcrest Terrace",
    phone_number: "704-170-0757",
    grade: 59,
  },
  {
    student_id: 43,
    first_name: "Louisa",
    last_name: "Barwood",
    age: 21,
    email: "lbarwood16@example.com",
    gender: "Female",
    nationality: "Paraguay",
    address: "69 Buell Street",
    phone_number: "863-956-4759",
    grade: 9,
  },
  {
    student_id: 44,
    first_name: "Pavlov",
    last_name: "Antoniottii",
    age: 19,
    email: "pantoniottii17@about.com",
    gender: "Male",
    nationality: "Djibouti",
    address: "5468 Glacier Hill Crossing",
    phone_number: "758-978-2571",
    grade: 39,
  },
  {
    student_id: 45,
    first_name: "Lydia",
    last_name: "Behneke",
    age: 18,
    email: "lbehneke18@nasa.gov",
    gender: "Bigender",
    nationality: "Greece",
    address: "07953 Jackson Pass",
    phone_number: "783-542-4095",
    grade: 44,
  },
  {
    student_id: 46,
    first_name: "Erasmus",
    last_name: "Chasson",
    age: 24,
    email: "echasson19@ifeng.com",
    gender: "Male",
    nationality: "Finland",
    address: "42 Esch Alley",
    phone_number: "607-635-9003",
    grade: 25,
  },
  {
    student_id: 47,
    first_name: "Deina",
    last_name: "Sharvell",
    age: 18,
    email: "dsharvell1a@blogtalkradio.com",
    gender: "Non-binary",
    nationality: "Indonesia",
    address: "802 Aberg Crossing",
    phone_number: "771-499-0021",
    grade: 56,
  },
  {
    student_id: 48,
    first_name: "Pris",
    last_name: "Tye",
    age: 20,
    email: "ptye1b@house.gov",
    gender: "Female",
    nationality: "Philippines",
    address: "0 Dovetail Circle",
    phone_number: "270-721-3479",
    grade: 91,
  },
  {
    student_id: 49,
    first_name: "Rafael",
    last_name: "Domm",
    age: 22,
    email: "rdomm1c@goo.ne.jp",
    gender: "Male",
    nationality: "Philippines",
    address: "9 Westerfield Street",
    phone_number: "251-314-3089",
    grade: 14,
  },
  {
    student_id: 50,
    first_name: "Osgood",
    last_name: "Brasted",
    age: 19,
    email: "obrasted1d@omniture.com",
    gender: "Male",
    nationality: "Norway",
    address: "35 Hintze Park",
    phone_number: "488-585-7095",
    grade: 67,
  },
  {
    student_id: 51,
    first_name: "Idette",
    last_name: "Plascott",
    age: 23,
    email: "iplascott1e@google.ru",
    gender: "Female",
    nationality: "Philippines",
    address: "6 Lunder Park",
    phone_number: "480-645-8474",
    grade: 58,
  },
  {
    student_id: 52,
    first_name: "Guido",
    last_name: "Treneer",
    age: 19,
    email: "gtreneer1f@redcross.org",
    gender: "Male",
    nationality: "Venezuela",
    address: "23151 Manley Drive",
    phone_number: "186-335-8319",
    grade: 93,
  },
  {
    student_id: 53,
    first_name: "Ettore",
    last_name: "Ricciardi",
    age: 20,
    email: "ericciardi1g@tripod.com",
    gender: "Male",
    nationality: "China",
    address: "0842 Myrtle Drive",
    phone_number: "461-762-8272",
    grade: 49,
  },
  {
    student_id: 54,
    first_name: "Robin",
    last_name: "Hounihan",
    age: 22,
    email: "rhounihan1h@hugedomains.com",
    gender: "Genderqueer",
    nationality: "Czech Republic",
    address: "2 Ramsey Parkway",
    phone_number: "874-765-4857",
    grade: 36,
  },
  {
    student_id: 55,
    first_name: "Dannel",
    last_name: "Burle",
    age: 25,
    email: "dburle1i@usgs.gov",
    gender: "Male",
    nationality: "Thailand",
    address: "3 Armistice Avenue",
    phone_number: "741-635-3548",
    grade: 0,
  },
  {
    student_id: 56,
    first_name: "Nehemiah",
    last_name: "McBrier",
    age: 21,
    email: "nmcbrier1j@woothemes.com",
    gender: "Male",
    nationality: "Indonesia",
    address: "6547 Rutledge Road",
    phone_number: "637-334-3995",
    grade: 26,
  },
  {
    student_id: 57,
    first_name: "Joan",
    last_name: "Lorenz",
    age: 25,
    email: "jlorenz1k@youtube.com",
    gender: "Female",
    nationality: "Russia",
    address: "162 Stone Corner Road",
    phone_number: "954-851-8294",
    grade: 16,
  },
  {
    student_id: 58,
    first_name: "Danya",
    last_name: "Joynes",
    age: 22,
    email: "djoynes1l@nydailynews.com",
    gender: "Female",
    nationality: "Philippines",
    address: "07197 Menomonie Alley",
    phone_number: "272-699-6338",
    grade: 17,
  },
  {
    student_id: 59,
    first_name: "Durant",
    last_name: "Janodet",
    age: 25,
    email: "djanodet1m@slashdot.org",
    gender: "Male",
    nationality: "Peru",
    address: "59353 Dawn Trail",
    phone_number: "637-718-3070",
    grade: 86,
  },
  {
    student_id: 60,
    first_name: "Guillema",
    last_name: "Dewire",
    age: 25,
    email: "gdewire1n@howstuffworks.com",
    gender: "Female",
    nationality: "Egypt",
    address: "32918 Katie Crossing",
    phone_number: "510-154-3757",
    grade: 75,
  },
  {
    student_id: 61,
    first_name: "Fancy",
    last_name: "Conaghy",
    age: 23,
    email: "fconaghy1o@woothemes.com",
    gender: "Female",
    nationality: "Brazil",
    address: "4 Farragut Court",
    phone_number: "242-237-7691",
    grade: 67,
  },
  {
    student_id: 62,
    first_name: "Georgia",
    last_name: "Magwood",
    age: 20,
    email: "gmagwood1p@forbes.com",
    gender: "Female",
    nationality: "Philippines",
    address: "74528 Wayridge Junction",
    phone_number: "585-770-7333",
    grade: 98,
  },
  {
    student_id: 63,
    first_name: "Bond",
    last_name: "Shord",
    age: 18,
    email: "bshord1q@de.vu",
    gender: "Male",
    nationality: "Thailand",
    address: "00 Menomonie Pass",
    phone_number: "976-309-3194",
    grade: 38,
  },
  {
    student_id: 64,
    first_name: "Vikky",
    last_name: "Pomphrey",
    age: 18,
    email: "vpomphrey1r@yahoo.co.jp",
    gender: "Female",
    nationality: "Poland",
    address: "56728 Namekagon Hill",
    phone_number: "723-729-8682",
    grade: 61,
  },
  {
    student_id: 65,
    first_name: "Adelind",
    last_name: "Stagg",
    age: 21,
    email: "astagg1s@washingtonpost.com",
    gender: "Female",
    nationality: "France",
    address: "4184 Eliot Terrace",
    phone_number: "802-700-3857",
    grade: 17,
  },
  {
    student_id: 66,
    first_name: "Roger",
    last_name: "Bugge",
    age: 21,
    email: "rbugge1t@bandcamp.com",
    gender: "Male",
    nationality: "Indonesia",
    address: "7 Katie Terrace",
    phone_number: "539-595-6861",
    grade: 51,
  },
  {
    student_id: 67,
    first_name: "Adan",
    last_name: "Whittek",
    age: 22,
    email: "awhittek1u@unesco.org",
    gender: "Female",
    nationality: "France",
    address: "7 Talmadge Parkway",
    phone_number: "105-791-6007",
    grade: 78,
  },
  {
    student_id: 68,
    first_name: "Leonardo",
    last_name: "Slowgrave",
    age: 20,
    email: "lslowgrave1v@blog.com",
    gender: "Male",
    nationality: "Indonesia",
    address: "41 Cardinal Terrace",
    phone_number: "210-112-6701",
    grade: 88,
  },
  {
    student_id: 69,
    first_name: "Munmro",
    last_name: "Maylour",
    age: 20,
    email: "mmaylour1w@tumblr.com",
    gender: "Male",
    nationality: "Indonesia",
    address: "54 Crest Line Way",
    phone_number: "438-918-5269",
    grade: 27,
  },
  {
    student_id: 70,
    first_name: "Warner",
    last_name: "Commuzzo",
    age: 18,
    email: "wcommuzzo1x@1und1.de",
    gender: "Male",
    nationality: "Mongolia",
    address: "73 Beilfuss Junction",
    phone_number: "157-459-4090",
    grade: 81,
  },
  {
    student_id: 71,
    first_name: "Janet",
    last_name: "Kelloway",
    age: 22,
    email: "jkelloway1y@oracle.com",
    gender: "Female",
    nationality: "Portugal",
    address: "8 Springview Avenue",
    phone_number: "477-628-8599",
    grade: 2,
  },
  {
    student_id: 72,
    first_name: "Gunilla",
    last_name: "Phillipps",
    age: 24,
    email: "gphillipps1z@google.nl",
    gender: "Female",
    nationality: "Indonesia",
    address: "86 Blue Bill Park Park",
    phone_number: "894-693-0798",
    grade: 7,
  },
  {
    student_id: 73,
    first_name: "Calhoun",
    last_name: "Rowlands",
    age: 25,
    email: "crowlands20@domainmarket.com",
    gender: "Male",
    nationality: "Brazil",
    address: "2 Drewry Way",
    phone_number: "271-329-4693",
    grade: 82,
  },
  {
    student_id: 74,
    first_name: "Clair",
    last_name: "Ranscombe",
    age: 23,
    email: "cranscombe21@answers.com",
    gender: "Male",
    nationality: "Iran",
    address: "3307 Vahlen Pass",
    phone_number: "818-341-2540",
    grade: 41,
  },
  {
    student_id: 75,
    first_name: "Teresina",
    last_name: "Osbaldstone",
    age: 21,
    email: "tosbaldstone22@fotki.com",
    gender: "Female",
    nationality: "Greece",
    address: "8852 Blaine Lane",
    phone_number: "857-673-4347",
    grade: 7,
  },
  {
    student_id: 76,
    first_name: "Oates",
    last_name: "Cottage",
    age: 18,
    email: "ocottage23@senate.gov",
    gender: "Male",
    nationality: "China",
    address: "23012 5th Road",
    phone_number: "581-386-4623",
    grade: 56,
  },
  {
    student_id: 77,
    first_name: "Tod",
    last_name: "Aleswell",
    age: 18,
    email: "taleswell24@chron.com",
    gender: "Male",
    nationality: "Peru",
    address: "8423 School Pass",
    phone_number: "576-980-1969",
    grade: 84,
  },
  {
    student_id: 78,
    first_name: "Chelsy",
    last_name: "Mancktelow",
    age: 23,
    email: "cmancktelow25@instagram.com",
    gender: "Female",
    nationality: "Uzbekistan",
    address: "8660 Elka Alley",
    phone_number: "177-168-3901",
    grade: 2,
  },
  {
    student_id: 79,
    first_name: "Margie",
    last_name: "Secretan",
    age: 18,
    email: "msecretan26@oaic.gov.au",
    gender: "Female",
    nationality: "Philippines",
    address: "40780 Tennyson Pass",
    phone_number: "885-707-4694",
    grade: 86,
  },
  {
    student_id: 80,
    first_name: "Alfredo",
    last_name: "Annand",
    age: 19,
    email: "aannand27@goo.ne.jp",
    gender: "Male",
    nationality: "France",
    address: "02 Brown Hill",
    phone_number: "839-926-0133",
    grade: 71,
  },
  {
    student_id: 81,
    first_name: "Martha",
    last_name: "Vaughn",
    age: 23,
    email: "mvaughn28@soup.io",
    gender: "Female",
    nationality: "China",
    address: "3902 Carioca Parkway",
    phone_number: "640-316-4510",
    grade: 6,
  },
  {
    student_id: 82,
    first_name: "Rochester",
    last_name: "Lakenden",
    age: 19,
    email: "rlakenden29@shop-pro.jp",
    gender: "Male",
    nationality: "Moldova",
    address: "23392 Sunnyside Circle",
    phone_number: "151-461-2518",
    grade: 43,
  },
  {
    student_id: 83,
    first_name: "Maurine",
    last_name: "Tilt",
    age: 25,
    email: "mtilt2a@friendfeed.com",
    gender: "Genderfluid",
    nationality: "China",
    address: "4407 Tony Junction",
    phone_number: "657-183-0137",
    grade: 3,
  },
  {
    student_id: 84,
    first_name: "Ealasaid",
    last_name: "Buckhurst",
    age: 25,
    email: "ebuckhurst2b@bigcartel.com",
    gender: "Female",
    nationality: "Portugal",
    address: "5 Grasskamp Parkway",
    phone_number: "102-599-2133",
    grade: 19,
  },
  {
    student_id: 85,
    first_name: "Vassily",
    last_name: "Scrowson",
    age: 21,
    email: "vscrowson2c@123-reg.co.uk",
    gender: "Male",
    nationality: "Afghanistan",
    address: "9 Schurz Alley",
    phone_number: "744-653-0927",
    grade: 97,
  },
  {
    student_id: 86,
    first_name: "Thorpe",
    last_name: "Keinrat",
    age: 24,
    email: "tkeinrat2d@nature.com",
    gender: "Male",
    nationality: "Canada",
    address: "557 Schiller Parkway",
    phone_number: "796-278-1743",
    grade: 74,
  },
  {
    student_id: 87,
    first_name: "Costa",
    last_name: "Antonoyev",
    age: 20,
    email: "cantonoyev2e@amazon.de",
    gender: "Male",
    nationality: "Portugal",
    address: "57 Starling Circle",
    phone_number: "743-121-3390",
    grade: 64,
  },
  {
    student_id: 88,
    first_name: "Neale",
    last_name: "Venneur",
    age: 24,
    email: "nvenneur2f@google.it",
    gender: "Male",
    nationality: "Jordan",
    address: "7 Manufacturers Pass",
    phone_number: "164-802-2396",
    grade: 25,
  },
  {
    student_id: 89,
    first_name: "Che",
    last_name: "Luton",
    age: 23,
    email: "cluton2g@forbes.com",
    gender: "Polygender",
    nationality: "Micronesia",
    address: "041 Messerschmidt Terrace",
    phone_number: "785-663-3582",
    grade: 12,
  },
  {
    student_id: 90,
    first_name: "Olympe",
    last_name: "Duchesne",
    age: 23,
    email: "oduchesne2h@addtoany.com",
    gender: "Female",
    nationality: "Indonesia",
    address: "6221 Sutherland Avenue",
    phone_number: "133-776-5665",
    grade: 1,
  },
  {
    student_id: 91,
    first_name: "Maritsa",
    last_name: "Pratton",
    age: 18,
    email: "mpratton2i@example.com",
    gender: "Female",
    nationality: "Tanzania",
    address: "5472 Oak Crossing",
    phone_number: "343-761-3850",
    grade: 58,
  },
  {
    student_id: 92,
    first_name: "Phip",
    last_name: "Hesbrook",
    age: 18,
    email: "phesbrook2j@friendfeed.com",
    gender: "Male",
    nationality: "Azerbaijan",
    address: "4 Bluejay Parkway",
    phone_number: "994-426-5399",
    grade: 95,
  },
  {
    student_id: 93,
    first_name: "Arch",
    last_name: "Hagwood",
    age: 20,
    email: "ahagwood2k@china.com.cn",
    gender: "Male",
    nationality: "Russia",
    address: "7693 Milwaukee Avenue",
    phone_number: "294-769-9303",
    grade: 8,
  },
  {
    student_id: 94,
    first_name: "Mabelle",
    last_name: "Sigart",
    age: 22,
    email: "msigart2l@plala.or.jp",
    gender: "Female",
    nationality: "Iran",
    address: "7 Moland Crossing",
    phone_number: "845-941-4208",
    grade: 71,
  },
  {
    student_id: 95,
    first_name: "Karly",
    last_name: "McVity",
    age: 18,
    email: "kmcvity2m@ocn.ne.jp",
    gender: "Female",
    nationality: "Philippines",
    address: "67 Forster Alley",
    phone_number: "315-385-6541",
    grade: 82,
  },
  {
    student_id: 96,
    first_name: "Livvie",
    last_name: "Mitro",
    age: 19,
    email: "lmitro2n@psu.edu",
    gender: "Female",
    nationality: "United States",
    address: "76 Oriole Plaza",
    phone_number: "337-335-9709",
    grade: 53,
  },
  {
    student_id: 97,
    first_name: "Morgan",
    last_name: "Casford",
    age: 20,
    email: "mcasford2o@wikimedia.org",
    gender: "Male",
    nationality: "Philippines",
    address: "0100 Scofield Center",
    phone_number: "171-125-7429",
    grade: 88,
  },
  {
    student_id: 98,
    first_name: "Viviana",
    last_name: "Dominicacci",
    age: 22,
    email: "vdominicacci2p@bloglovin.com",
    gender: "Female",
    nationality: "Brazil",
    address: "20750 Morrow Plaza",
    phone_number: "822-523-0578",
    grade: 1,
  },
  {
    student_id: 99,
    first_name: "Shane",
    last_name: "Benns",
    age: 21,
    email: "sbenns2q@adobe.com",
    gender: "Male",
    nationality: "China",
    address: "813 1st Alley",
    phone_number: "225-444-3143",
    grade: 70,
  },
  {
    student_id: 100,
    first_name: "Pierson",
    last_name: "Danilovitch",
    age: 22,
    email: "pdanilovitch2r@bloglovin.com",
    gender: "Male",
    nationality: "Indonesia",
    address: "10122 Monica Court",
    phone_number: "852-849-4779",
    grade: 26,
  },
];
const testSync = async () => {
  console.log("this is the first line");
  //    setTimeout(() => {
  //     console.log("this is waiting for one seconds ");
  //   });
  students.map((e, index) => {
    console.log(`${index + 1}-${e.first_name}`);
  });
  console.log("this is the last line");
};

testSync();