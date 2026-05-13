// Shared atlas texts and state facts.
(function() {
  const i18n = {
    de: {
      button: 'Karte von Deutschland',
      title: 'Karte von Deutschland',
      close: 'Schließen',
      back: 'Zur Gesamtkarte',
      subtitle: 'Bundesland in Deutschland',
      overview: 'Überblick',
      facts: 'Wichtige Orte und Fakten',
      capital: 'Hauptstadt',
      area: 'Fläche',
      population: 'Einwohner',
      hint: 'Klicken Sie auf ein Bundesland, um es groß in einem neuen Fenster zu öffnen.',
      source: 'Kartendaten: Open-Source GeoJSON von GitHub.',
      unavailable: 'Keine Details verfügbar.'
    },
    en: {
      button: 'Map of Germany',
      title: 'Map of Germany',
      close: 'Close',
      back: 'Back to Germany',
      subtitle: 'Federal state in Germany',
      overview: 'Overview',
      facts: 'Key places and facts',
      capital: 'Capital',
      area: 'Area',
      population: 'Population',
      hint: 'Click a federal state to open it large in a new window.',
      source: 'Map data: open-source GeoJSON from GitHub.',
      unavailable: 'No details available.'
    },
    ru: {
      button: 'Карта Германии',
      title: 'Карта Германии',
      close: 'Закрыть',
      back: 'К общей карте',
      subtitle: 'Федеральная земля Германии',
      overview: 'Обзор',
      facts: 'Важные места и факты',
      capital: 'Столица',
      area: 'Площадь',
      population: 'Население',
      hint: 'Нажмите на землю, чтобы открыть её крупно в новом окне.',
      source: 'Данные карт: открытые GeoJSON-карты с GitHub.',
      unavailable: 'Подробности пока недоступны.'
    },
    fr: {
      button: 'Carte de l\'Allemagne',
      title: 'Carte de l\'Allemagne',
      close: 'Fermer',
      back: 'Retour a la carte',
      subtitle: 'Land allemand',
      overview: 'Apercu',
      facts: 'Lieux et faits importants',
      capital: 'Capitale',
      area: 'Superficie',
      population: 'Population',
      hint: 'Cliquez sur un Land pour l\'ouvrir en grand dans une nouvelle fenetre.',
      source: 'Donnees cartographiques : GeoJSON open source de GitHub.',
      unavailable: 'Aucun detail disponible.'
    },
    es: {
      button: 'Mapa de Alemania',
      title: 'Mapa de Alemania',
      close: 'Cerrar',
      back: 'Volver al mapa',
      subtitle: 'Estado federado de Alemania',
      overview: 'Resumen',
      facts: 'Lugares y datos importantes',
      capital: 'Capital',
      area: 'Superficie',
      population: 'Poblacion',
      hint: 'Haz clic en un estado para abrirlo grande en una ventana nueva.',
      source: 'Datos del mapa: GeoJSON abierto de GitHub.',
      unavailable: 'No hay detalles disponibles.'
    },
    it: {
      button: 'Mappa della Germania',
      title: 'Mappa della Germania',
      close: 'Chiudi',
      back: 'Torna alla mappa',
      subtitle: 'Stato federato tedesco',
      overview: 'Panoramica',
      facts: 'Luoghi e fatti importanti',
      capital: 'Capoluogo',
      area: 'Superficie',
      population: 'Popolazione',
      hint: 'Fai clic su uno Stato per aprirlo grande in una nuova finestra.',
      source: 'Dati mappa: GeoJSON open source da GitHub.',
      unavailable: 'Nessun dettaglio disponibile.'
    },
    pt: {
      button: 'Mapa da Alemanha',
      title: 'Mapa da Alemanha',
      close: 'Fechar',
      back: 'Voltar ao mapa',
      subtitle: 'Estado federado da Alemanha',
      overview: 'Visao geral',
      facts: 'Locais e fatos importantes',
      capital: 'Capital',
      area: 'Area',
      population: 'Populacao',
      hint: 'Clique em um estado para abri-lo grande em uma nova janela.',
      source: 'Dados do mapa: GeoJSON aberto do GitHub.',
      unavailable: 'Sem detalhes disponiveis.'
    },
    nl: {
      button: 'Kaart van Duitsland',
      title: 'Kaart van Duitsland',
      close: 'Sluiten',
      back: 'Terug naar kaart',
      subtitle: 'Duitse deelstaat',
      overview: 'Overzicht',
      facts: 'Belangrijke plaatsen en feiten',
      capital: 'Hoofdstad',
      area: 'Oppervlakte',
      population: 'Bevolking',
      hint: 'Klik op een deelstaat om die groot in een nieuw venster te openen.',
      source: 'Kaartgegevens: open-source GeoJSON van GitHub.',
      unavailable: 'Geen details beschikbaar.'
    },
    pl: {
      button: 'Mapa Niemiec',
      title: 'Mapa Niemiec',
      close: 'Zamknij',
      back: 'Do mapy ogolnej',
      subtitle: 'Kraj zwiazkowy Niemiec',
      overview: 'Przeglad',
      facts: 'Wazne miejsca i fakty',
      capital: 'Stolica',
      area: 'Powierzchnia',
      population: 'Ludnosc',
      hint: 'Kliknij kraj zwiazkowy, aby otworzyc go w duzym widoku w nowym oknie.',
      source: 'Dane map: otwarty GeoJSON z GitHuba.',
      unavailable: 'Brak szczegolow.'
    },
    tr: {
      button: 'Almanya Haritasi',
      title: 'Almanya Haritasi',
      close: 'Kapat',
      back: 'Genel haritaya don',
      subtitle: 'Almanya federal eyaleti',
      overview: 'Genel bakis',
      facts: 'Onemli yerler ve bilgiler',
      capital: 'Baskent',
      area: 'Alan',
      population: 'Nufus',
      hint: 'Bir eyalete tiklayarak onu yeni pencerede buyuk acin.',
      source: 'Harita verileri: GitHub uzerinden acik GeoJSON.',
      unavailable: 'Ayrinti yok.'
    },
    zh: {
      button: '德国地图',
      title: '德国地图',
      close: '关闭',
      back: '返回总地图',
      subtitle: '德国联邦州',
      overview: '概览',
      facts: '重要地点和事实',
      capital: '首府',
      area: '面积',
      population: '人口',
      hint: '点击一个联邦州，在新窗口中放大打开。',
      source: '地图数据：来自 GitHub 的开源 GeoJSON。',
      unavailable: '暂无详细信息。'
    },
    ja: {
      button: 'ドイツ地図',
      title: 'ドイツ地図',
      close: '閉じる',
      back: '全体地図へ',
      subtitle: 'ドイツの連邦州',
      overview: '概要',
      facts: '主な場所と情報',
      capital: '州都',
      area: '面積',
      population: '人口',
      hint: '州をクリックすると、新しいウィンドウで大きく表示します。',
      source: '地図データ: GitHub のオープン GeoJSON。',
      unavailable: '詳細はありません。'
    },
    ko: {
      button: '독일 지도',
      title: '독일 지도',
      close: '닫기',
      back: '전체 지도로',
      subtitle: '독일 연방주',
      overview: '개요',
      facts: '주요 장소와 정보',
      capital: '주도',
      area: '면적',
      population: '인구',
      hint: '연방주를 클릭하면 새 창에서 크게 열립니다.',
      source: '지도 데이터: GitHub의 오픈 GeoJSON.',
      unavailable: '상세 정보가 없습니다.'
    },
    hi: {
      button: 'जर्मनी का नक्शा',
      title: 'जर्मनी का नक्शा',
      close: 'बंद करें',
      back: 'मुख्य नक्शे पर लौटें',
      subtitle: 'जर्मनी का संघीय राज्य',
      overview: 'सारांश',
      facts: 'मुख्य स्थान और तथ्य',
      capital: 'राजधानी',
      area: 'क्षेत्रफल',
      population: 'जनसंख्या',
      hint: 'किसी राज्य पर क्लिक करें, वह नए विंडो में बड़ा खुलेगा।',
      source: 'मानचित्र डेटा: GitHub से ओपन GeoJSON.',
      unavailable: 'विवरण उपलब्ध नहीं है.'
    },
    ar: {
      button: 'خريطة ألمانيا',
      title: 'خريطة ألمانيا',
      close: 'إغلاق',
      back: 'العودة إلى الخريطة',
      subtitle: 'ولاية اتحادية في ألمانيا',
      overview: 'نظرة عامة',
      facts: 'أماكن وحقائق مهمة',
      capital: 'العاصمة',
      area: 'المساحة',
      population: 'السكان',
      hint: 'انقر على ولاية لفتحها بشكل كبير في نافذة جديدة.',
      source: 'بيانات الخريطة: GeoJSON مفتوح من GitHub.',
      unavailable: 'لا توجد تفاصيل متاحة.'
    }
  };

  const stateDetails = {
    schleswig_holstein: {
      population: '2,9 Mio.', capital: 'Kiel', area: '15.799 km²',
      desc: { de: 'Das nördlichste Bundesland liegt zwischen Nordsee und Ostsee und ist stark von Küsten, Handel und Landwirtschaft geprägt.', en: 'Germany\'s northernmost state lies between the North Sea and Baltic Sea, shaped by coasts, trade and agriculture.', ru: 'Самая северная земля Германии между Северным и Балтийским морями, известная побережьями, торговлей и сельским хозяйством.' },
      facts: ['Kiel', 'Lübeck', 'Flensburg', 'Nord-Ostsee-Kanal', 'Wattenmeer'],
      factsByLang: {
        de: ['⚓ Das Land ist für seine maritime Geschichte und den Zugang zu zwei Meeren bekannt.', '👤 Der Schriftsteller Thomas Mann wurde in Lübeck geboren.', '🏰 Wikinger lebten einst auf dem Gebiet dieses Landes.'],
        en: ['⚓ The state is known for its maritime history and access to two seas.', '👤 Writer Thomas Mann was born in Lübeck.', '🏰 Vikings once lived in this region.'],
        ru: ['⚓ Земля известна морской историей и выходом к двум морям.', '👤 Писатель Томас Манн родился в Любеке.', '🏰 Викинги когда-то жили на территории этой земли.']
      }
    },
    hamburg: {
      population: '1,9 Mio.', capital: 'Hamburg', area: '755 km²',
      desc: { de: 'Hamburg ist Stadtstaat, Hafenmetropole und eines der wichtigsten Logistik- und Medienzentren Deutschlands.', en: 'Hamburg is a city-state, port metropolis and one of Germany\'s key logistics and media centers.', ru: 'Гамбург - город-земля, портовая столица и один из важных центров логистики и медиа в Германии.' },
      facts: ['Hafen Hamburg', 'Speicherstadt', 'Elbphilharmonie', 'St. Pauli', 'Alster'],
      factsByLang: {
        de: ['👤 Die Beatles begannen ihren Weg zum Weltruhm in Hamburg.', '⚓ In Hamburg liegt einer der größten Häfen Europas.', '👤 Der Komponist Johannes Brahms wurde in Hamburg geboren.'],
        en: ['👤 The Beatles began their path to worldwide fame in Hamburg.', '⚓ Hamburg has one of Europe’s largest ports.', '👤 Composer Johannes Brahms was born in Hamburg.'],
        ru: ['👤 Группа The Beatles начала путь к мировой славе именно в Гамбурге.', '⚓ В Гамбурге находится один из крупнейших портов Европы.', '👤 Композитор Иоганнес Брамс родился в Гамбурге.']
      }
    },
    mecklenburg_vorpommern: {
      population: '1,6 Mio.', capital: 'Schwerin', area: '23.294 km²',
      desc: { de: 'Mecklenburg-Vorpommern ist bekannt für Ostseeküste, Seenplatten, Inseln und viel Naturraum.', en: 'Mecklenburg-Western Pomerania is known for its Baltic coast, lakes, islands and broad natural landscapes.', ru: 'Мекленбург-Передняя Померания известна побережьем Балтики, озёрами, островами и природными ландшафтами.' },
      facts: ['Schwerin', 'Rostock', 'Rügen', 'Usedom', 'Müritz'],
      factsByLang: {
        de: ['⚓ Das Land ist für Ostseebäder und Häfen bekannt.', '👤 Der Schriftsteller Hans Fallada lebte in diesem Land.', '🏰 Hier sind viele alte Hansestädte erhalten geblieben.'],
        en: ['⚓ The state is known for Baltic resorts and ports.', '👤 Writer Hans Fallada lived in this state.', '🏰 Many old Hanseatic towns have been preserved here.'],
        ru: ['⚓ Земля известна своими балтийскими курортами и портами.', '👤 Писатель Ханс Фаллада жил в этой земле.', '🏰 Здесь сохранилось множество старинных ганзейских городов.']
      }
    },
    bremen: {
      population: '0,7 Mio.', capital: 'Bremen', area: '419 km²',
      desc: { de: 'Bremen ist ein Stadtstaat an der Weser mit langer Hansegeschichte und dem Seehafen Bremerhaven.', en: 'Bremen is a city-state on the Weser with a long Hanseatic tradition and the seaport of Bremerhaven.', ru: 'Бремен - город-земля на Везере с ганзейской историей и морским портом Бремерхафен.' },
      facts: ['Bremen', 'Bremerhaven', 'Roland', 'Stadtmusikanten', 'Weser'],
      factsByLang: {
        de: ['👤 Die Brüder Grimm machten die Stadt mit dem Märchen „Die Bremer Stadtmusikanten“ berühmt.', '⚓ Bremen war eine wichtige Handelsstadt der Hanse.', '👤 Der Astronaut Ulf Merbold wurde in Bremen geboren.'],
        en: ['👤 The Brothers Grimm made the city famous with “The Bremen Town Musicians”.', '⚓ Bremen was an important trading city of the Hanseatic League.', '👤 Astronaut Ulf Merbold was born in Bremen.'],
        ru: ['👤 Братья Гримм прославили город сказкой «Бременские музыканты».', '⚓ Бремен был важным торговым городом Ганзейского союза.', '👤 Космонавт Ульф Мербольд родился в Бремене.']
      }
    },
    niedersachsen: {
      population: '8,1 Mio.', capital: 'Hannover', area: '47.710 km²',
      desc: { de: 'Niedersachsen reicht von der Nordseekueste bis zum Harz und verbindet Landwirtschaft, Industrie und Forschung.', en: 'Lower Saxony stretches from the North Sea coast to the Harz mountains, combining agriculture, industry and research.', ru: 'Нижняя Саксония тянется от Северного моря до Гарца и сочетает сельское хозяйство, промышленность и науку.' },
      facts: ['Hannover', 'Braunschweig', 'Wolfsburg', 'Lueneburger Heide', 'Harz'],
      factsByLang: {
        de: ['👤 Carl Friedrich Gauß lebte und arbeitete in Göttingen.', '⚙️ In Wolfsburg befindet sich der Hauptsitz von Volkswagen.', '🏰 Niedersachsen ist für alte sächsische Traditionen bekannt.'],
        en: ['👤 Carl Friedrich Gauss lived and worked in Göttingen.', '⚙️ Volkswagen’s headquarters are in Wolfsburg.', '🏰 Lower Saxony is known for ancient Saxon traditions.'],
        ru: ['👤 Карл Фридрих Гаусс жил и работал в Гёттингене.', '⚙️ В Вольфсбурге находится штаб-квартира Volkswagen.', '🏰 Нижняя Саксония известна древними саксонскими традициями.']
      }
    },
    sachsen_anhalt: {
      population: '2,2 Mio.', capital: 'Magdeburg', area: '20.452 km²',
      desc: { de: 'Sachsen-Anhalt verbindet Elbe, Harz, Lutherstädte und bedeutende Bauhaus- und Industriekultur.', en: 'Saxony-Anhalt combines the Elbe, Harz mountains, Luther towns and major Bauhaus and industrial heritage.', ru: 'Саксония-Анхальт объединяет Эльбу, Гарц, города Лютера, Баухаус и индустриальное наследие.' },
      facts: ['Magdeburg', 'Halle (Saale)', 'Wittenberg', 'Dessau', 'Harz'],
      factsByLang: {
        de: ['👤 Martin Luther lebte und predigte in Wittenberg.', '🏰 In diesem Land liegen zentrale Orte der Reformation.', '👤 Georg Friedrich Händel wurde in Halle geboren.'],
        en: ['👤 Martin Luther lived and preached in Wittenberg.', '🏰 This state contains key sites of the Reformation.', '👤 George Frideric Handel was born in Halle.'],
        ru: ['👤 Мартин Лютер жил и проповедовал в Виттенберге.', '🏰 В этой земле находятся важнейшие места Реформации.', '👤 Георг Фридрих Гендель родился в Галле.']
      }
    },
    brandenburg: {
      population: '2,6 Mio.', capital: 'Potsdam', area: '29.654 km²',
      desc: { de: 'Brandenburg umschließt Berlin und ist geprägt von Seen, Wäldern, Schlössern und wachsender Metropolregion.', en: 'Brandenburg surrounds Berlin and is shaped by lakes, forests, palaces and a growing metropolitan region.', ru: 'Бранденбург окружает Берлин и известен озёрами, лесами, дворцами и развивающейся столичной агломерацией.' },
      facts: ['Potsdam', 'Spreewald', 'Sanssouci', 'Cottbus', 'Oderbruch'],
      factsByLang: {
        de: ['🏰 Schloss Sanssouci in Potsdam war eine Residenz Friedrichs des Großen.', '👤 Der deutsche Schriftsteller Theodor Fontane wurde in Brandenburg geboren.', '⚔️ Brandenburg spielte eine wichtige Rolle in der Geschichte Preußens.'],
        en: ['🏰 Sanssouci Palace in Potsdam was a residence of Frederick the Great.', '👤 German writer Theodor Fontane was born in Brandenburg.', '⚔️ Brandenburg played an important role in Prussian history.'],
        ru: ['🏰 Дворец Сан-Суси в Потсдаме был резиденцией Фридриха Великого.', '👤 Немецкий писатель Теодор Фонтане родился в Бранденбурге.', '⚔️ Бранденбург сыграл важную роль в истории Пруссии.']
      }
    },
    berlin: {
      population: '3,8 Mio.', capital: 'Berlin', area: '892 km²',
      desc: { de: 'Berlin ist Hauptstadt, Stadtstaat und politisches, kulturelles sowie kreatives Zentrum Deutschlands.', en: 'Berlin is Germany\'s capital, a city-state and a political, cultural and creative center.', ru: 'Берлин - столица Германии, город-земля и политический, культурный и креативный центр страны.' },
      facts: ['Brandenburger Tor', 'Reichstag', 'Museumsinsel', 'Alexanderplatz', 'Potsdamer Platz'],
      factsByLang: {
        de: ['👤 Albert Einstein arbeitete in Berlin und lehrte an der Berliner Universität.', '👤 Marlene Dietrich, die berühmte Schauspielerin und Sängerin, wurde in Berlin geboren.', '🏰 Berlin war fast 30 Jahre durch die Mauer in Ost- und West-Berlin geteilt.'],
        en: ['👤 Albert Einstein worked in Berlin and taught at the University of Berlin.', '👤 Marlene Dietrich, the famous actress and singer, was born in Berlin.', '🏰 Berlin was divided by the Wall into East and West Berlin for almost 30 years.'],
        ru: ['👤 Альберт Эйнштейн работал в Берлине и преподавал в Берлинском университете.', '👤 Марлен Дитрих — знаменитая актриса и певица — родилась в Берлине.', '🏰 Берлин почти 30 лет был разделён стеной на Восточный и Западный Берлин.']
      }
    },
    nordrhein_westfalen: {
      population: '18,1 Mio.', capital: 'Düsseldorf', area: '34.112 km²',
      desc: { de: 'Nordrhein-Westfalen ist das bevoelkerungsreichste Bundesland und verbindet Rheinmetropolen, Ruhrgebiet und Mittelgebirge.', en: 'North Rhine-Westphalia is the most populous state, combining Rhine cities, the Ruhr region and uplands.', ru: 'Северный Рейн-Вестфалия - самая населённая земля, объединяющая города Рейна, Рур и среднегорья.' },
      facts: ['Düsseldorf', 'Köln', 'Dortmund', 'Essen', 'Aachen'],
      factsByLang: {
        de: ['👤 Ludwig van Beethoven wurde in Bonn geboren.', '⚙️ Die Region war ein Zentrum der deutschen Kohle- und Stahlindustrie.', '👤 Heinrich Heine wurde in Düsseldorf geboren.'],
        en: ['👤 Ludwig van Beethoven was born in Bonn.', '⚙️ The region was a center of Germany’s coal and steel industry.', '👤 Heinrich Heine was born in Düsseldorf.'],
        ru: ['👤 Людвиг ван Бетховен родился в Бонне.', '⚙️ Регион был центром угольной и металлургической промышленности Германии.', '👤 Генрих Гейне родился в Дюссельдорфе.']
      }
    },
    hessen: {
      population: '6,4 Mio.', capital: 'Wiesbaden', area: '21.115 km²',
      desc: { de: 'Hessen liegt zentral in Deutschland und ist mit Frankfurt ein wichtiger Finanz-, Verkehrs- und Messestandort.', en: 'Hesse lies in central Germany and, with Frankfurt, is a major finance, transport and trade fair hub.', ru: 'Гессен расположен в центре Германии, а Франкфурт делает его важным финансовым, транспортным и выставочным центром.' },
      facts: ['Wiesbaden', 'Frankfurt am Main', 'Kassel', 'Darmstadt', 'Rheingau'],
      factsByLang: {
        de: ['👤 Johann Wolfgang Goethe wurde in Frankfurt am Main geboren.', '💶 In Frankfurt befindet sich die Europäische Zentralbank.', '👤 Die Brüder Grimm lebten und arbeiteten lange Zeit in Hessen.'],
        en: ['👤 Johann Wolfgang Goethe was born in Frankfurt am Main.', '💶 The European Central Bank is located in Frankfurt.', '👤 The Brothers Grimm lived and worked in Hesse for a long time.'],
        ru: ['👤 Иоганн Вольфганг Гёте родился во Франкфурте-на-Майне.', '💶 Во Франкфурте находится Европейский центральный банк.', '👤 Братья Гримм долгое время жили и работали в Гессене.']
      }
    },
    thueringen: {
      population: '2,1 Mio.', capital: 'Erfurt', area: '16.202 km²',
      desc: { de: 'Thüringen gilt als grünes Herz Deutschlands und ist reich an Wald, Kulturstädten und Industriegeschichte.', en: 'Thuringia is known as Germany\'s green heart, rich in forests, cultural towns and industrial history.', ru: 'Тюрингия считается зелёным сердцем Германии, богатым лесами, культурными городами и промышленной историей.' },
      facts: ['Erfurt', 'Weimar', 'Jena', 'Wartburg', 'Thüringer Wald'],
      factsByLang: {
        de: ['👤 Johann Sebastian Bach wurde in Thüringen geboren.', '👤 Johann Wolfgang Goethe lebte lange Zeit in Weimar.', '🎨 Weimar wurde zu einem Zentrum deutscher Kultur und Kunst.'],
        en: ['👤 Johann Sebastian Bach was born in Thuringia.', '👤 Johann Wolfgang Goethe lived in Weimar for a long time.', '🎨 Weimar became a center of German culture and art.'],
        ru: ['👤 Иоганн Себастьян Бах родился в Тюрингии.', '👤 Иоганн Вольфганг Гёте долгое время жил в Веймаре.', '🎨 Веймар стал центром немецкой культуры и искусства.']
      }
    },
    sachsen: {
      population: '4,1 Mio.', capital: 'Dresden', area: '18.450 km²',
      desc: { de: 'Sachsen verbindet Barockstädte, Hochschulen, Industrie, Erzgebirge und die Kulturlandschaft an der Elbe.', en: 'Saxony combines baroque cities, universities, industry, the Ore Mountains and the Elbe cultural landscape.', ru: 'Саксония объединяет барочные города, университеты, промышленность, Рудные горы и культурный ландшафт Эльбы.' },
      facts: ['Dresden', 'Leipzig', 'Chemnitz', 'Meißen', 'Sächsische Schweiz'],
      factsByLang: {
        de: ['👤 Der Komponist Johann Sebastian Bach arbeitete in Leipzig.', '🎨 Sachsen ist für Meissener Porzellan berühmt.', '👤 Richard Wagner wurde in Leipzig geboren.'],
        en: ['👤 Composer Johann Sebastian Bach worked in Leipzig.', '🎨 Saxony is famous for Meissen porcelain.', '👤 Richard Wagner was born in Leipzig.'],
        ru: ['👤 Композитор Иоганн Себастьян Бах работал в Лейпциге.', '🎨 Саксония знаменита мейсенским фарфором.', '👤 Рихард Вагнер родился в Лейпциге.']
      }
    },
    rheinland_pfalz: {
      population: '4,2 Mio.', capital: 'Mainz', area: '19.858 km²',
      desc: { de: 'Rheinland-Pfalz ist stark von Rhein, Mosel, Weinbau, Burgen und römischer Geschichte geprägt.', en: 'Rhineland-Palatinate is shaped by the Rhine, Moselle, wine regions, castles and Roman history.', ru: 'Рейнланд-Пфальц известен Рейном, Мозелем, винодельческими регионами, замками и римской историей.' },
      facts: ['Mainz', 'Trier', 'Koblenz', 'Mosel', 'Pfalz'],
      factsByLang: {
        de: ['👤 Karl Marx wurde in Trier geboren.', '🍇 Das Land ist für die Weinbautraditionen des Rheintals bekannt.', '🏰 Entlang des Rheins stehen hier viele alte Burgen.'],
        en: ['👤 Karl Marx was born in Trier.', '🍇 The state is famous for the wine traditions of the Rhine valley.', '🏰 Many old castles stand along the Rhine here.'],
        ru: ['👤 Карл Маркс родился в Трире.', '🍇 Земля знаменита винодельческими традициями долины Рейна.', '🏰 Здесь находится множество старинных замков вдоль Рейна.']
      }
    },
    baden_wuerttemberg: {
      population: '11,3 Mio.', capital: 'Stuttgart', area: '35.751 km²',
      desc: { de: 'Baden-Württemberg ist ein wirtschaftsstarkes Land mit Schwarzwald, Bodensee, Universitäten und Automobilindustrie.', en: 'Baden-Wuerttemberg is an economically strong state with the Black Forest, Lake Constance, universities and automotive industry.', ru: 'Баден-Вюртемберг - экономически сильная земля с Шварцвальдом, Боденским озером, университетами и автопромом.' },
      facts: ['Stuttgart', 'Karlsruhe', 'Heidelberg', 'Schwarzwald', 'Bodensee'],
      factsByLang: {
        de: ['👤 Albert Einstein wurde in Ulm geboren.', '👤 Carl Benz baute in Mannheim das erste Automobil.', '⚙️ Das Land gilt als Zentrum deutscher Ingenieurskunst und Automobilindustrie.'],
        en: ['👤 Albert Einstein was born in Ulm.', '👤 Carl Benz created the first automobile in Mannheim.', '⚙️ The state is considered a center of German engineering and the automotive industry.'],
        ru: ['👤 Альберт Эйнштейн родился в Ульме.', '👤 Карл Бенц создал первый автомобиль в Мангейме.', '⚙️ Земля считается центром немецкой инженерии и автомобильной промышленности.']
      }
    },
    bayern: {
      population: '13,4 Mio.', capital: 'München', area: '70.542 km²',
      desc: { de: 'Bayern ist das größte Bundesland Deutschlands und reicht von Franken über Donau und Alpen bis zum Alpenvorland.', en: 'Bavaria is Germany\'s largest state, stretching from Franconia through the Danube region to the Alps.', ru: 'Бавария - крупнейшая земля Германии: от Франконии через Дунайский регион до Альп и предгорий.' },
      facts: ['München', 'Nürnberg', 'Augsburg', 'Regensburg', 'Neuschwanstein'],
      factsByLang: {
        de: ['👤 Der Komponist Richard Strauss lebte und arbeitete in München.', '👤 Karl Valentin, der bekannte bayerische Komiker, wurde zum Symbol des Münchner Humors.', '🏰 Bayern ist für mittelalterliche Schlösser und die Oktoberfest-Tradition bekannt.'],
        en: ['👤 Composer Richard Strauss lived and worked in Munich.', '👤 Karl Valentin, the famous Bavarian comedian, became a symbol of Munich humor.', '🏰 Bavaria is known for medieval castles and the Oktoberfest tradition.'],
        ru: ['👤 В Мюнхене жил и работал композитор Рихард Штраус.', '👤 Карл Валентин — известный баварский комик — стал символом мюнхенского юмора.', '🏰 Бавария известна своими средневековыми замками и традицией Октоберфеста.']
      }
    },
    saarland: {
      population: '1,0 Mio.', capital: 'Saarbrücken', area: '2.571 km²',
      desc: { de: 'Das Saarland grenzt an Frankreich und Luxemburg und hat eine besondere Industrie- und Grenzraumgeschichte.', en: 'Saarland borders France and Luxembourg and has a distinctive industrial and cross-border history.', ru: 'Саар граничит с Францией и Люксембургом и имеет особую индустриальную и приграничную историю.' },
      facts: ['Saarbrücken', 'Saarschleife', 'Völklinger Hütte', 'Homburg', 'Bliesgau'],
      factsByLang: {
        de: ['⚒️ Das Saarland war lange eine wichtige Kohleregion Europas.', '👤 Erich Honecker lebte zeitweise im Saarland.', '🇫🇷 Die Kultur der Region wurde stark von Frankreich beeinflusst.'],
        en: ['⚒️ Saarland was an important coal region of Europe for a long time.', '👤 Erich Honecker lived in Saarland for a time.', '🇫🇷 The region’s culture was strongly influenced by France.'],
        ru: ['⚒️ Саар долгое время был важным угольным регионом Европы.', '👤 Эрих Хонеккер некоторое время жил в Сааре.', '🇫🇷 Культура региона испытала сильное влияние Франции.']
      }
    }
  };

  const stateColors = {
    schleswig_holstein: '#f8c471',
    hamburg: '#f87171',
    mecklenburg_vorpommern: '#f7dc6f',
    bremen: '#fb7185',
    niedersachsen: '#82e0aa',
    sachsen_anhalt: '#a5b4fc',
    brandenburg: '#f0abfc',
    berlin: '#ef4444',
    nordrhein_westfalen: '#7dd3fc',
    hessen: '#fde68a',
    thueringen: '#86efac',
    sachsen: '#fdba74',
    rheinland_pfalz: '#f9a8d4',
    baden_wuerttemberg: '#c4b5fd',
    bayern: '#fcd34d',
    saarland: '#fef08a'
  };

  const stateNameByKey = {
    schleswig_holstein: 'Schleswig-Holstein',
    hamburg: 'Hamburg',
    mecklenburg_vorpommern: 'Mecklenburg-Vorpommern',
    bremen: 'Bremen',
    niedersachsen: 'Niedersachsen',
    sachsen_anhalt: 'Sachsen-Anhalt',
    brandenburg: 'Brandenburg',
    berlin: 'Berlin',
    nordrhein_westfalen: 'Nordrhein-Westfalen',
    hessen: 'Hessen',
    thueringen: 'Thüringen',
    sachsen: 'Sachsen',
    rheinland_pfalz: 'Rheinland-Pfalz',
    baden_wuerttemberg: 'Baden-Württemberg',
    bayern: 'Bayern',
    saarland: 'Saarland'
  };

  window.ATLAS_I18N = i18n;
  window.ATLAS_STATE_DETAILS = stateDetails;
  window.ATLAS_STATE_COLORS = stateColors;
  window.ATLAS_STATE_NAMES = stateNameByKey;
})();
