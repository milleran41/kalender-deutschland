// Historical atlas data for the Germany calendar.
(function() {
  const img = function(file) {
    return 'assets/history/' + file
      .normalize('NFKD')
      .replace(/[^\w.\-()]+/g, '_')
      .replace(/_+/g, '_')
      .replace(/^_|_$/g, '');
  };

  const ui = {
    ru: { button: 'История Германии', title: 'История Германии', close: 'Закрыть', timeline: 'Эпохи', people: 'Выдающиеся люди', gallery: 'Карты и образы эпохи', years: 'Период', prev: 'Назад', next: 'Дальше', source: 'Изображения: Wikimedia Commons и открытые исторические материалы.' },
    de: { button: 'Geschichte Deutschlands', title: 'Geschichte Deutschlands', close: 'Schließen', timeline: 'Epochen', people: 'Persönlichkeiten', gallery: 'Karten und Bilder der Epoche', years: 'Zeitraum', prev: 'Zurück', next: 'Weiter', source: 'Bilder: Wikimedia Commons und offene historische Materialien.' },
    en: { button: 'History of Germany', title: 'History of Germany', close: 'Close', timeline: 'Periods', people: 'Notable people', gallery: 'Maps and images of the period', years: 'Period', prev: 'Back', next: 'Next', source: 'Images: Wikimedia Commons and open historical materials.' }
  };

  const periods = [
    {
      id: 'tribes-rome',
      years: 'до V века',
      title: { ru: 'Германские племена и Рим', de: 'Germanische Stämme und Rom', en: 'Germanic Tribes and Rome' },
      summary: {
        ru: 'Рим видел земли за Рейном как опасную, но важную пограничную зону. Племена не были единой Германией: это был мир союзов, войн, торговли и постепенного культурного обмена.',
        de: 'Rom sah die Gebiete jenseits des Rheins als gefährliche, aber wichtige Grenzzone. Die Stämme bildeten kein einheitliches Deutschland, sondern eine Welt aus Bündnissen, Konflikten, Handel und kulturellem Austausch.',
        en: 'Rome saw the lands beyond the Rhine as a dangerous but important frontier. The tribes were not a united Germany, but a shifting world of alliances, war, trade and cultural exchange.'
      },
      highlights: {
        ru: ['Рейн и Дунай стали ключевыми линиями контакта с Римом.', 'Битва в Тевтобургском лесу остановила римское продвижение на восток.', 'Память об Арминии позже стала частью немецкой национальной мифологии.'],
        de: ['Rhein und Donau wurden zentrale Kontaktlinien mit Rom.', 'Die Varusschlacht stoppte die römische Expansion nach Osten.', 'Die Erinnerung an Arminius wurde später Teil nationaler deutscher Mythen.'],
        en: ['The Rhine and Danube became key contact lines with Rome.', 'The Battle of the Teutoburg Forest stopped Roman expansion eastward.', 'The memory of Arminius later became part of German national mythology.']
      },
      people: [
        { name: 'Arminius', role: { ru: 'вождь херусков, победитель в Тевтобургском лесу', de: 'Cheruskerfürst, Sieger der Varusschlacht', en: 'Cheruscan leader, victor in the Teutoburg Forest' }, image: img('Hermannsdenkmal_2009.jpg') },
        { name: 'Tacitus', role: { ru: 'римский историк, автор «Германии»', de: 'römischer Historiker, Autor der Germania', en: 'Roman historian, author of Germania' }, image: img('Tacitus.jpg') }
      ],
      media: [
        { title: { ru: 'Германия за римской границей', de: 'Germanien jenseits der römischen Grenze', en: 'Germania beyond the Roman frontier' }, image: img('Germania_70.svg'), kind: 'map' },
        { title: { ru: 'Памятник Арминию', de: 'Hermannsdenkmal', en: 'Arminius monument' }, image: img('Hermannsdenkmal_2009.jpg'), kind: 'image' }
      ]
    },
    {
      id: 'franks-carolingians',
      years: 'V-IX века',
      title: { ru: 'Франки и Каролинги', de: 'Franken und Karolinger', en: 'Franks and Carolingians' },
      summary: {
        ru: 'После падения Западной Римской империи франки стали главной силой в западной Европе. При Карле Великом возникла империя, из наследия которой позже выросли Франция и Германия.',
        de: 'Nach dem Ende des Weströmischen Reiches wurden die Franken zur wichtigsten Macht Westeuropas. Unter Karl dem Großen entstand ein Reich, aus dessen Erbe später Frankreich und Deutschland hervorgingen.',
        en: 'After the fall of the Western Roman Empire, the Franks became the main power in western Europe. Under Charlemagne, an empire emerged whose legacy later shaped France and Germany.'
      },
      highlights: {
        ru: ['Крещение Хлодвига связало франков с латинским христианством.', 'Карл Великий расширил империю и провёл реформы управления и образования.', 'Раздел 843 года стал важным шагом к будущей восточно-франкской, немецкой традиции.'],
        de: ['Die Taufe Chlodwigs verband die Franken mit dem lateinischen Christentum.', 'Karl der Große erweiterte das Reich und reformierte Verwaltung und Bildung.', 'Die Teilung von 843 wurde ein wichtiger Schritt zur ostfränkisch-deutschen Tradition.'],
        en: ['Clovis’s baptism tied the Franks to Latin Christianity.', 'Charlemagne expanded the empire and reformed administration and education.', 'The division of 843 was a key step toward the East Frankish, later German tradition.']
      },
      people: [
        { name: 'Karl der Große', role: { ru: 'император, создатель Каролингской империи', de: 'Kaiser und Schöpfer des karolingischen Reiches', en: 'emperor and maker of the Carolingian Empire' }, image: img('Albrecht_Dürer_-_Emperor_Charlemagne.jpg') },
        { name: 'Einhard', role: { ru: 'биограф Карла Великого', de: 'Biograf Karls des Großen', en: 'biographer of Charlemagne' }, image: img('Einhard.jpg') }
      ],
      media: [
        { title: { ru: 'Каролингская империя', de: 'Karolingisches Reich', en: 'Carolingian Empire' }, image: img('Frankish_Empire_481_to_814-en.svg'), kind: 'map' },
        { title: { ru: 'Карл Великий в искусстве', de: 'Karl der Große in der Kunst', en: 'Charlemagne in art' }, image: img('Albrecht_Dürer_-_Emperor_Charlemagne.jpg'), kind: 'image' }
      ]
    },
    {
      id: 'holy-roman-empire',
      years: '962-1806',
      title: { ru: 'Священная Римская империя', de: 'Heiliges Römisches Reich', en: 'Holy Roman Empire' },
      summary: {
        ru: 'Средневековая Германия развивалась внутри сложной империи князей, епископов, городов и императоров. Это была не централизованная нация, а политическая сеть с сильными региональными центрами.',
        de: 'Das mittelalterliche Deutschland entwickelte sich in einem komplexen Reich aus Fürsten, Bischöfen, Städten und Kaisern. Es war kein zentralisierter Nationalstaat, sondern ein politisches Netzwerk starker Regionen.',
        en: 'Medieval Germany developed inside a complex empire of princes, bishops, cities and emperors. It was not a centralized nation, but a political network of strong regional powers.'
      },
      highlights: {
        ru: ['Оттон I связал королевскую власть с имперской идеей.', 'Князья и города получили большую самостоятельность.', 'Империя стала рамкой для немецкой истории почти на девять веков.'],
        de: ['Otto I verband Königsherrschaft mit der Kaiseridee.', 'Fürsten und Städte gewannen große Eigenständigkeit.', 'Das Reich blieb fast neun Jahrhunderte der Rahmen deutscher Geschichte.'],
        en: ['Otto I tied royal rule to the imperial idea.', 'Princes and cities gained great autonomy.', 'The empire framed German history for almost nine centuries.']
      },
      people: [
        { name: 'Otto I', role: { ru: 'король и император, укрепивший восточно-франкскую власть', de: 'König und Kaiser, der die ostfränkische Macht festigte', en: 'king and emperor who strengthened East Frankish power' }, image: img('Otto_I._und_Berengar.jpg') },
        { name: 'Friedrich Barbarossa', role: { ru: 'император и символ имперской власти', de: 'Kaiser und Symbol imperialer Macht', en: 'emperor and symbol of imperial power' }, image: img('Frederick_I_Barbarossa.jpg') }
      ],
      media: [
        { title: { ru: 'Священная Римская империя', de: 'Heiliges Römisches Reich', en: 'Holy Roman Empire' }, image: img('Holy_Roman_Empire_1000_map.svg'), kind: 'map' },
        { title: { ru: 'Золотая булла 1356 года', de: 'Goldene Bulle von 1356', en: 'Golden Bull of 1356' }, image: img('Goldene_Bulle.jpg'), kind: 'image' }
      ]
    },
    {
      id: 'medieval-cities',
      years: 'XII-XV века',
      title: { ru: 'Средневековые города, Ганза и княжества', de: 'Städte, Hanse und Fürstentümer', en: 'Medieval Cities, Hanse and Principalities' },
      summary: {
        ru: 'Города стали лабораториями торговли, права и ремёсел. Ганза связала Балтику и Северное море, а княжества усиливали региональную мозаику Германии.',
        de: 'Städte wurden Laboratorien für Handel, Recht und Handwerk. Die Hanse verband Ostsee und Nordsee, während Fürstentümer die regionale Vielfalt Deutschlands stärkten.',
        en: 'Cities became laboratories of trade, law and crafts. The Hanse connected the Baltic and North Sea, while principalities deepened Germany’s regional mosaic.'
      },
      highlights: {
        ru: ['Любек, Гамбург и Бремен стали важными ганзейскими центрами.', 'Городское право укрепило самоуправление.', 'Раздробленность Германии стала источником и слабости, и культурного разнообразия.'],
        de: ['Lübeck, Hamburg und Bremen wurden wichtige Hansestädte.', 'Stadtrecht stärkte die Selbstverwaltung.', 'Die Zersplitterung Deutschlands bedeutete Schwäche, aber auch kulturelle Vielfalt.'],
        en: ['Lübeck, Hamburg and Bremen became important Hanseatic centers.', 'Urban law strengthened self-government.', 'Germany’s fragmentation was both a weakness and a source of cultural diversity.']
      },
      people: [
        { name: 'Heinrich der Löwe', role: { ru: 'герцог, связанный с ростом городов северной Германии', de: 'Herzog, verbunden mit dem Aufstieg norddeutscher Städte', en: 'duke linked to the rise of north German cities' }, image: img('Heinrich_der_Löwe.jpg') },
        { name: 'Peter Parler', role: { ru: 'мастер готической архитектуры в Центральной Европе', de: 'Meister gotischer Architektur in Mitteleuropa', en: 'master of Gothic architecture in Central Europe' }, image: img('Peter_Parler.jpg') }
      ],
      media: [
        { title: { ru: 'Ганзейские торговые пути', de: 'Handelswege der Hanse', en: 'Hanseatic trade routes' }, image: img('Hanseatic_League.png'), kind: 'map' },
        { title: { ru: 'Средневековый Любек', de: 'Mittelalterliches Lübeck', en: 'Medieval Lübeck' }, image: img('Luebeck_Holstentor.jpg'), kind: 'image' }
      ]
    },
    {
      id: 'reformation',
      years: '1517-1648',
      title: { ru: 'Реформация', de: 'Reformation', en: 'Reformation' },
      summary: {
        ru: 'Реформация началась как богословский спор, но изменила политику, образование, печать и повседневность. Германия стала одним из главных пространств конфессионального раскола Европы.',
        de: 'Die Reformation begann als theologischer Streit, veränderte aber Politik, Bildung, Druckwesen und Alltag. Deutschland wurde zu einem Hauptschauplatz der konfessionellen Spaltung Europas.',
        en: 'The Reformation began as a theological dispute but changed politics, education, printing and everyday life. Germany became one of Europe’s main arenas of confessional division.'
      },
      highlights: {
        ru: ['Лютер выступил против индульгенций и авторитета Рима.', 'Печатный станок ускорил распространение идей.', 'Реформация изменила школы, богослужение и политические союзы.'],
        de: ['Luther wandte sich gegen Ablasshandel und römische Autorität.', 'Der Buchdruck beschleunigte die Verbreitung neuer Ideen.', 'Die Reformation veränderte Schulen, Gottesdienst und politische Bündnisse.'],
        en: ['Luther challenged indulgences and Roman authority.', 'Printing accelerated the spread of new ideas.', 'The Reformation changed schools, worship and political alliances.']
      },
      people: [
        { name: 'Martin Luther', role: { ru: 'реформатор, переводчик Библии', de: 'Reformator und Bibelübersetzer', en: 'reformer and Bible translator' }, image: img('Martin_Luther_by_Cranach-restoration.jpg') },
        { name: 'Philipp Melanchthon', role: { ru: 'гуманист и систематизатор лютеранского учения', de: 'Humanist und Systematiker der lutherischen Lehre', en: 'humanist and organizer of Lutheran teaching' }, image: img('Philipp_Melanchthon_1543.jpg') }
      ],
      media: [
        { title: { ru: 'Лютер в Вормсе', de: 'Luther in Worms', en: 'Luther at Worms' }, image: img('Luther_at_the_Diet_of_Worms.jpg'), kind: 'image' },
        { title: { ru: 'Распространение Реформации', de: 'Ausbreitung der Reformation', en: 'Spread of the Reformation' }, image: img('Reformation_in_Europe.svg'), kind: 'map' }
      ]
    },
    {
      id: 'thirty-years-war',
      years: '1618-1648',
      title: { ru: 'Тридцатилетняя война', de: 'Dreißigjähriger Krieg', en: 'Thirty Years’ War' },
      summary: {
        ru: 'Война началась как конфликт в Богемии, но превратилась в общеевропейскую катастрофу. Немецкие земли пережили разрушение, демографический спад и глубокую травму.',
        de: 'Der Krieg begann als Konflikt in Böhmen und wurde zur europäischen Katastrophe. Deutsche Länder erlebten Zerstörung, Bevölkerungsverluste und ein tiefes Trauma.',
        en: 'The war began as a conflict in Bohemia and became a European catastrophe. German lands suffered destruction, demographic decline and deep trauma.'
      },
      highlights: {
        ru: ['Конфессиональный конфликт переплёлся с борьбой великих держав.', 'Вестфальский мир закрепил новую европейскую систему.', 'Память о войне долго влияла на немецкую политическую культуру.'],
        de: ['Konfessioneller Konflikt verband sich mit Machtpolitik.', 'Der Westfälische Frieden begründete eine neue europäische Ordnung.', 'Die Erinnerung an den Krieg prägte die deutsche politische Kultur lange.'],
        en: ['Religious conflict merged with great-power politics.', 'The Peace of Westphalia created a new European order.', 'Memory of the war shaped German political culture for centuries.']
      },
      people: [
        { name: 'Albrecht von Wallenstein', role: { ru: 'полководец имперской армии', de: 'Feldherr der kaiserlichen Armee', en: 'commander of the imperial army' }, image: img('Albrecht_von_Wallenstein.jpeg') },
        { name: 'Gustav II Adolf', role: { ru: 'шведский король, изменивший ход войны', de: 'schwedischer König, der den Kriegsverlauf veränderte', en: 'Swedish king who changed the course of the war' }, image: img('Gustav_II_Adolf_of_Sweden.jpg') }
      ],
      media: [
        { title: { ru: 'Европа во время войны', de: 'Europa im Dreißigjährigen Krieg', en: 'Europe during the Thirty Years’ War' }, image: img('Europe_during_the_Thirty_Years_War.png'), kind: 'map' },
        { title: { ru: 'Битва при Лютцене', de: 'Schlacht bei Lützen', en: 'Battle of Lützen' }, image: img('Battle_of_Lutzen.jpg'), kind: 'image' }
      ]
    },
    {
      id: 'prussia-enlightenment',
      years: '1648-1789',
      title: { ru: 'Пруссия и Просвещение', de: 'Preußen und Aufklärung', en: 'Prussia and Enlightenment' },
      summary: {
        ru: 'После Вестфальского мира усилились территориальные государства. Бранденбург-Пруссия превратилась в военную и административную силу, а Просвещение принесло новые идеи права, образования и государства.',
        de: 'Nach Westfalen stärkten sich Territorialstaaten. Brandenburg-Preußen wurde zur Militär- und Verwaltungsmacht, während die Aufklärung neue Ideen von Recht, Bildung und Staat brachte.',
        en: 'After Westphalia, territorial states grew stronger. Brandenburg-Prussia became a military and administrative power, while the Enlightenment brought new ideas of law, education and the state.'
      },
      highlights: {
        ru: ['Пруссия выросла из региональной державы в европейскую силу.', 'Фридрих II сочетал военную политику с образом просвещённого монарха.', 'Кант сформулировал один из главных лозунгов Просвещения: думать самостоятельно.'],
        de: ['Preußen stieg von einer Regionalmacht zur europäischen Kraft auf.', 'Friedrich II verband Militärpolitik mit dem Bild des aufgeklärten Monarchen.', 'Kant formulierte den Kern der Aufklärung: selbst zu denken.'],
        en: ['Prussia rose from regional power to European force.', 'Frederick II combined military policy with the image of an enlightened ruler.', 'Kant articulated the Enlightenment ideal of thinking for oneself.']
      },
      people: [
        { name: 'Friedrich II', role: { ru: 'король Пруссии, реформатор и полководец', de: 'König von Preußen, Reformator und Feldherr', en: 'king of Prussia, reformer and commander' }, image: img('Frederick_the_Great_1781.jpg') },
        { name: 'Immanuel Kant', role: { ru: 'философ Просвещения из Кёнигсберга', de: 'Aufklärungsphilosoph aus Königsberg', en: 'Enlightenment philosopher from Königsberg' }, image: img('Kant_gemaelde_3.jpg') }
      ],
      media: [
        { title: { ru: 'Рост Пруссии', de: 'Aufstieg Preußens', en: 'Rise of Prussia' }, image: img('Prussia_in_the_German_Empire.svg'), kind: 'map' },
        { title: { ru: 'Сан-Суси', de: 'Sanssouci', en: 'Sanssouci' }, image: img('Sanssouci_Palace_2015.jpg'), kind: 'image' }
      ]
    },
    {
      id: 'napoleonic-era',
      years: '1789-1815',
      title: { ru: 'Наполеоновская эпоха', de: 'Napoleonische Epoche', en: 'Napoleonic Era' },
      summary: {
        ru: 'Французская революция и Наполеон разрушили старый порядок. Священная Римская империя исчезла, а немецкие земли пережили реформы, оккупацию и рост национального движения.',
        de: 'Französische Revolution und Napoleon zerstörten die alte Ordnung. Das Heilige Römische Reich endete, deutsche Länder erlebten Reformen, Besatzung und wachsende Nationalbewegung.',
        en: 'The French Revolution and Napoleon destroyed the old order. The Holy Roman Empire vanished, and German lands experienced reforms, occupation and rising national sentiment.'
      },
      highlights: {
        ru: ['В 1806 году Священная Римская империя прекратила существование.', 'Прусские реформы изменили армию, образование и управление.', 'После 1815 года возник Германский союз.'],
        de: ['1806 endete das Heilige Römische Reich.', 'Preußische Reformen veränderten Armee, Bildung und Verwaltung.', 'Nach 1815 entstand der Deutsche Bund.'],
        en: ['In 1806 the Holy Roman Empire came to an end.', 'Prussian reforms changed the army, education and administration.', 'After 1815 the German Confederation emerged.']
      },
      people: [
        { name: 'Napoleon Bonaparte', role: { ru: 'французский император, изменивший карту Германии', de: 'französischer Kaiser, der die Karte Deutschlands veränderte', en: 'French emperor who reshaped Germany’s map' }, image: img('Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries.jpg') },
        { name: 'Gebhard Leberecht von Blücher', role: { ru: 'прусский фельдмаршал, участник победы над Наполеоном', de: 'preußischer Feldmarschall, beteiligt am Sieg über Napoleon', en: 'Prussian field marshal involved in Napoleon’s defeat' }, image: img('Gebhard_Leberecht_von_Bluecher.jpg') }
      ],
      media: [
        { title: { ru: 'Рейнский союз', de: 'Rheinbund', en: 'Confederation of the Rhine' }, image: img('Confederation_of_the_Rhine_1812.svg'), kind: 'map' },
        { title: { ru: 'Битва народов под Лейпцигом', de: 'Völkerschlacht bei Leipzig', en: 'Battle of Leipzig' }, image: img('Battle_of_Leipzig.jpeg'), kind: 'image' }
      ]
    },
    {
      id: 'revolutions-1848',
      years: '1848-1849',
      title: { ru: 'Революции 1848 года', de: 'Revolutionen von 1848', en: 'Revolutions of 1848' },
      summary: {
        ru: 'Революции 1848 года требовали конституций, свобод и национального единства. Франкфуртское собрание попыталось создать немецкое государство, но монархии сохранили решающую силу.',
        de: 'Die Revolutionen von 1848 forderten Verfassungen, Freiheiten und nationale Einheit. Die Frankfurter Nationalversammlung versuchte einen deutschen Staat zu schaffen, scheiterte aber an der Macht der Monarchien.',
        en: 'The revolutions of 1848 demanded constitutions, freedoms and national unity. The Frankfurt Assembly tried to create a German state, but monarchies retained decisive power.'
      },
      highlights: {
        ru: ['Франкфуртский парламент стал символом либеральной Германии.', 'Вопрос “большой” или “малой” Германии остался нерешённым.', 'Поражение революции не уничтожило идею объединения.'],
        de: ['Das Frankfurter Parlament wurde zum Symbol des liberalen Deutschlands.', 'Die Frage großdeutsch oder kleindeutsch blieb ungelöst.', 'Die Niederlage der Revolution zerstörte die Einheitsidee nicht.'],
        en: ['The Frankfurt Parliament became a symbol of liberal Germany.', 'The question of Greater or Lesser Germany remained unresolved.', 'The revolution’s defeat did not destroy the idea of unity.']
      },
      people: [
        { name: 'Heinrich von Gagern', role: { ru: 'президент Франкфуртского национального собрания', de: 'Präsident der Frankfurter Nationalversammlung', en: 'president of the Frankfurt National Assembly' }, image: img('Heinrich_von_Gagern.jpg') },
        { name: 'Robert Blum', role: { ru: 'демократ и мученик революции 1848 года', de: 'Demokrat und Märtyrer der Revolution von 1848', en: 'democrat and martyr of the 1848 revolution' }, image: img('Robert_Blum.jpg') }
      ],
      media: [
        { title: { ru: 'Франкфуртское собрание', de: 'Frankfurter Nationalversammlung', en: 'Frankfurt Assembly' }, image: img('Germania_1848.jpg'), kind: 'image' },
        { title: { ru: 'Германский союз', de: 'Deutscher Bund', en: 'German Confederation' }, image: img('Deutscher_Bund.svg'), kind: 'map' }
      ]
    },
    {
      id: 'unification',
      years: '1864-1871',
      title: { ru: 'Объединение Германии', de: 'Deutsche Einigung', en: 'Unification of Germany' },
      summary: {
        ru: 'Объединение произошло не через парламент 1848 года, а через войны, дипломатию и силу Пруссии. В 1871 году в Версале была провозглашена Германская империя.',
        de: 'Die Einigung entstand nicht durch das Parlament von 1848, sondern durch Kriege, Diplomatie und die Macht Preußens. 1871 wurde in Versailles das Deutsche Kaiserreich ausgerufen.',
        en: 'Unification came not through the 1848 parliament, but through wars, diplomacy and Prussian power. In 1871 the German Empire was proclaimed at Versailles.'
      },
      highlights: {
        ru: ['Войны с Данией, Австрией и Францией изменили баланс сил.', 'Бисмарк создал единство под прусским руководством.', 'Объединение исключило Австрию из нового немецкого государства.'],
        de: ['Kriege gegen Dänemark, Österreich und Frankreich veränderten das Kräfteverhältnis.', 'Bismarck schuf Einheit unter preußischer Führung.', 'Österreich blieb außerhalb des neuen deutschen Staates.'],
        en: ['Wars against Denmark, Austria and France changed the balance of power.', 'Bismarck created unity under Prussian leadership.', 'Austria was excluded from the new German state.']
      },
      people: [
        { name: 'Otto von Bismarck', role: { ru: 'канцлер Пруссии и архитектор объединения', de: 'preußischer Kanzler und Architekt der Einigung', en: 'Prussian chancellor and architect of unification' }, image: img('Otto_von_Bismarck.JPG') },
        { name: 'Wilhelm I', role: { ru: 'прусский король и первый германский император', de: 'preußischer König und erster deutscher Kaiser', en: 'Prussian king and first German emperor' }, image: img('Kaiser_Wilhelm_I._.JPG') }
      ],
      media: [
        { title: { ru: 'Провозглашение империи в Версале', de: 'Kaiserproklamation in Versailles', en: 'Proclamation of the Empire at Versailles' }, image: img('Wernerprokla.jpg'), kind: 'image' },
        { title: { ru: 'Германская империя после 1871 года', de: 'Deutsches Reich nach 1871', en: 'German Empire after 1871' }, image: img('German_Empire_1871.svg'), kind: 'map' }
      ]
    },
    {
      id: 'german-empire',
      years: '1871-1918',
      title: { ru: 'Германская империя', de: 'Deutsches Kaiserreich', en: 'German Empire' },
      summary: {
        ru: 'Империя стала индустриальной, научной и военной державой. Быстрый рост соседствовал с социальными конфликтами, колониальной политикой и опасной европейской дипломатией.',
        de: 'Das Kaiserreich wurde eine industrielle, wissenschaftliche und militärische Großmacht. Rasches Wachstum ging mit sozialen Konflikten, Kolonialpolitik und riskanter europäischer Diplomatie einher.',
        en: 'The empire became an industrial, scientific and military great power. Rapid growth coexisted with social conflict, colonial policy and dangerous European diplomacy.'
      },
      highlights: {
        ru: ['Германия стала одной из ведущих индустриальных экономик мира.', 'Социал-демократия и рабочее движение быстро росли.', 'Мировая политика Вильгельма II усилила международное напряжение.'],
        de: ['Deutschland wurde eine führende Industriewirtschaft.', 'Sozialdemokratie und Arbeiterbewegung wuchsen rasch.', 'Wilhelms II Weltpolitik verstärkte internationale Spannungen.'],
        en: ['Germany became a leading industrial economy.', 'Social democracy and the labor movement grew rapidly.', 'Wilhelm II’s world policy increased international tensions.']
      },
      people: [
        { name: 'Wilhelm II', role: { ru: 'последний германский император', de: 'letzter deutscher Kaiser', en: 'last German emperor' }, image: img('Kaiser_Wilhelm_II_of_Germany_-_1902.jpg') },
        { name: 'Clara Zetkin', role: { ru: 'социалистка и борец за права женщин', de: 'Sozialistin und Frauenrechtlerin', en: 'socialist and women’s rights advocate' }, image: img('Clara_Zetkin_1920s.jpg') }
      ],
      media: [
        { title: { ru: 'Берлин имперской эпохи', de: 'Berlin im Kaiserreich', en: 'Berlin in the imperial era' }, image: img('Berlin_Reichstag_um_1900.jpg'), kind: 'image' },
        { title: { ru: 'Колониальная империя Германии', de: 'Deutsche Kolonien', en: 'German colonial empire' }, image: img('German_colonial.PNG'), kind: 'map' }
      ]
    },
    {
      id: 'weimar',
      years: '1918-1933',
      title: { ru: 'Веймарская республика', de: 'Weimarer Republik', en: 'Weimar Republic' },
      summary: {
        ru: 'Первая немецкая демократия родилась после поражения в войне. Она дала культурный взрыв и новые права, но была подорвана кризисами, насилием и недоверием к парламентской системе.',
        de: 'Die erste deutsche Demokratie entstand nach der Kriegsniederlage. Sie brachte kulturelle Blüte und neue Rechte, wurde aber durch Krisen, Gewalt und Misstrauen gegenüber dem Parlamentarismus geschwächt.',
        en: 'Germany’s first democracy was born after defeat in war. It brought cultural brilliance and new rights, but was undermined by crises, violence and distrust of parliamentary politics.'
      },
      highlights: {
        ru: ['Конституция закрепила демократические права.', 'Берлин стал центром модернизма, кино и кабаре.', 'Великая депрессия разрушила хрупкую стабильность.'],
        de: ['Die Verfassung garantierte demokratische Rechte.', 'Berlin wurde Zentrum von Moderne, Film und Kabarett.', 'Die Weltwirtschaftskrise zerstörte fragile Stabilität.'],
        en: ['The constitution guaranteed democratic rights.', 'Berlin became a center of modernism, film and cabaret.', 'The Great Depression destroyed fragile stability.']
      },
      people: [
        { name: 'Friedrich Ebert', role: { ru: 'первый президент Веймарской республики', de: 'erster Reichspräsident der Weimarer Republik', en: 'first president of the Weimar Republic' }, image: img('Friedrich_Ebert_1925.jpg') },
        { name: 'Marlene Dietrich', role: { ru: 'актриса и символ культуры Веймара', de: 'Schauspielerin und Symbol der Weimarer Kultur', en: 'actress and symbol of Weimar culture' }, image: img('Marlene_Dietrich_in_No_Highway_(1951).png') }
      ],
      media: [
        { title: { ru: 'Конституция Веймара', de: 'Weimarer Verfassung', en: 'Weimar Constitution' }, image: img('Weimar_constitution.jpg'), kind: 'image' },
        { title: { ru: 'Германия после Версаля', de: 'Deutschland nach Versailles', en: 'Germany after Versailles' }, image: img('Germany_after_Treaty_of_Versailles.svg'), kind: 'map' }
      ]
    },
    {
      id: 'nazi-ww2',
      years: '1933-1945',
      title: { ru: 'Диктатура нацистов и Вторая мировая война', de: 'NS-Diktatur und Zweiter Weltkrieg', en: 'Nazi Dictatorship and World War II' },
      summary: {
        ru: 'Нацистская диктатура уничтожила демократию, развязала войну и совершила Холокост. Это центральная катастрофа немецкой и европейской истории XX века.',
        de: 'Die NS-Diktatur zerstörte die Demokratie, entfesselte den Krieg und beging den Holocaust. Sie ist die zentrale Katastrophe der deutschen und europäischen Geschichte des 20. Jahrhunderts.',
        en: 'The Nazi dictatorship destroyed democracy, unleashed war and perpetrated the Holocaust. It is the central catastrophe of German and European twentieth-century history.'
      },
      highlights: {
        ru: ['1933 год стал началом диктатуры и преследований.', 'Война привела к разрушению Европы и гибели миллионов.', 'Холокост остаётся моральным центром памяти о нацизме.'],
        de: ['1933 begann Diktatur und Verfolgung.', 'Der Krieg zerstörte Europa und kostete Millionen Menschenleben.', 'Der Holocaust bleibt Zentrum der Erinnerung an den Nationalsozialismus.'],
        en: ['1933 marked the beginning of dictatorship and persecution.', 'The war devastated Europe and cost millions of lives.', 'The Holocaust remains central to the memory of Nazism.']
      },
      people: [
        { name: 'Sophie Scholl', role: { ru: 'участница сопротивления “Белая роза”', de: 'Widerstandskämpferin der Weißen Rose', en: 'White Rose resistance member' }, image: img('Sophie_Scholl.jpg') },
        { name: 'Claus von Stauffenberg', role: { ru: 'участник заговора 20 июля 1944 года', de: 'Beteiligter des Attentats vom 20. Juli 1944', en: 'participant in the July 20 plot' }, image: img('Claus_Schenk_Graf_von_Stauffenberg_(1907-1944).jpg') }
      ],
      media: [
        { title: { ru: 'Европа во Второй мировой войне', de: 'Europa im Zweiten Weltkrieg', en: 'Europe in World War II' }, image: img('Second_world_war_europe_1941-1942_map_en.png'), kind: 'map' },
        { title: { ru: 'Разрушенный Берлин', de: 'Zerstörtes Berlin', en: 'Destroyed Berlin' }, image: img('Bundesarchiv_Bild_183-J31347,_Berlin,_zerstörte_Straße.jpg'), kind: 'image' }
      ]
    },
    {
      id: 'divided-germany',
      years: '1945-1990',
      title: { ru: 'Разделённая Германия', de: 'Geteiltes Deutschland', en: 'Divided Germany' },
      summary: {
        ru: 'После 1945 года Германия стала фронтиром холодной войны. ФРГ и ГДР развивались в разных системах, а Берлинская стена стала самым видимым символом разделения.',
        de: 'Nach 1945 wurde Deutschland zur Frontlinie des Kalten Krieges. BRD und DDR entwickelten sich in unterschiedlichen Systemen, die Berliner Mauer wurde zum sichtbarsten Symbol der Teilung.',
        en: 'After 1945, Germany became a Cold War frontier. West and East Germany developed in different systems, and the Berlin Wall became the most visible symbol of division.'
      },
      highlights: {
        ru: ['ФРГ строила парламентскую демократию и социальную рыночную экономику.', 'ГДР была социалистическим государством под влиянием СССР.', 'Берлинская стена разделила семьи, город и Европу.'],
        de: ['Die BRD entwickelte parlamentarische Demokratie und soziale Marktwirtschaft.', 'Die DDR war ein sozialistischer Staat unter sowjetischem Einfluss.', 'Die Berliner Mauer trennte Familien, Stadt und Europa.'],
        en: ['West Germany built parliamentary democracy and a social market economy.', 'East Germany was a socialist state under Soviet influence.', 'The Berlin Wall divided families, a city and Europe.']
      },
      people: [
        { name: 'Konrad Adenauer', role: { ru: 'первый канцлер ФРГ', de: 'erster Bundeskanzler der BRD', en: 'first chancellor of West Germany' }, image: img('Konrad_Adenauer_1952.jpg') },
        { name: 'Willy Brandt', role: { ru: 'канцлер и автор восточной политики', de: 'Bundeskanzler und Architekt der Ostpolitik', en: 'chancellor and architect of Ostpolitik' }, image: img('Willy_Brandt_1980.jpg') }
      ],
      media: [
        { title: { ru: 'Оккупационные зоны Германии', de: 'Besatzungszonen Deutschlands', en: 'Occupation zones of Germany' }, image: img('Deutschland_Besatzungszonen_1945.svg'), kind: 'map' },
        { title: { ru: 'Берлинская стена', de: 'Berliner Mauer', en: 'Berlin Wall' }, image: img('Berlinermauer.jpg'), kind: 'image' }
      ]
    },
    {
      id: 'reunification',
      years: '1989-1990',
      title: { ru: 'Воссоединение', de: 'Wiedervereinigung', en: 'Reunification' },
      summary: {
        ru: 'Мирная революция в ГДР, падение Берлинской стены и дипломатия “два плюс четыре” открыли путь к единому государству. 3 октября 1990 года Германия была воссоединена.',
        de: 'Die Friedliche Revolution in der DDR, der Fall der Berliner Mauer und die Zwei-plus-Vier-Diplomatie öffneten den Weg zum gemeinsamen Staat. Am 3. Oktober 1990 wurde Deutschland wiedervereinigt.',
        en: 'The peaceful revolution in East Germany, the fall of the Berlin Wall and Two Plus Four diplomacy opened the way to a single state. Germany was reunified on October 3, 1990.'
      },
      highlights: {
        ru: ['Лейпцигские демонстрации показали силу гражданского движения.', '9 ноября 1989 года пала Берлинская стена.', 'Воссоединение стало концом послевоенного разделения Германии.'],
        de: ['Die Leipziger Demonstrationen zeigten die Kraft der Bürgerbewegung.', 'Am 9. November 1989 fiel die Berliner Mauer.', 'Die Wiedervereinigung beendete die Nachkriegsteilung Deutschlands.'],
        en: ['The Leipzig demonstrations showed the power of civic protest.', 'The Berlin Wall fell on November 9, 1989.', 'Reunification ended Germany’s postwar division.']
      },
      people: [
        { name: 'Helmut Kohl', role: { ru: 'канцлер во время воссоединения', de: 'Kanzler der Wiedervereinigung', en: 'chancellor during reunification' }, image: img('Helmut_Kohl_1987.jpg') },
        { name: 'Hans-Dietrich Genscher', role: { ru: 'министр иностранных дел и дипломат объединения', de: 'Außenminister und Diplomat der Einheit', en: 'foreign minister and diplomat of unity' }, image: img('Bundesarchiv_B_145_Bild-F073864-0015,_Hans-Dietrich_Genscher.jpg') }
      ],
      media: [
        { title: { ru: 'Падение Берлинской стены', de: 'Fall der Berliner Mauer', en: 'Fall of the Berlin Wall' }, image: img('West_and_East_Germans_at_the_Brandenburg_Gate_in_1989.jpg'), kind: 'image' },
        { title: { ru: 'Германия после 1990 года', de: 'Deutschland nach 1990', en: 'Germany after 1990' }, image: img('Germany_location_map.svg'), kind: 'map' }
      ]
    },
    {
      id: 'berlin-republic',
      years: '1990-сегодня',
      title: { ru: 'Современная Германия / Берлинская республика', de: 'Moderne Deutschland / Berliner Republik', en: 'Modern Germany / Berlin Republic' },
      summary: {
        ru: 'После воссоединения Германия стала крупнейшей экономикой ЕС и одним из центров европейской политики. Эта эпоха включает интеграцию восточных земель, расширение ЕС, миграционные споры, энергетический поворот и новую политику безопасности после 2022 года.',
        de: 'Nach der Wiedervereinigung wurde Deutschland zur größten Volkswirtschaft der EU und zu einem Zentrum europäischer Politik. Die Epoche umfasst Aufbau Ost, EU-Erweiterung, Migrationsdebatten, Energiewende und eine neue Sicherheitspolitik seit 2022.',
        en: 'After reunification, Germany became the EU’s largest economy and a center of European politics. The era includes eastern reconstruction, EU enlargement, migration debates, energy transition and a new security policy after 2022.'
      },
      highlights: {
        ru: ['Берлин снова стал столицей и политическим центром.', 'Европейская интеграция стала ключевой рамкой немецкой политики.', 'Современная Германия спорит о памяти, миграции, энергии, безопасности и роли в мире.'],
        de: ['Berlin wurde wieder Hauptstadt und politisches Zentrum.', 'Europäische Integration wurde zum zentralen Rahmen deutscher Politik.', 'Das moderne Deutschland diskutiert Erinnerung, Migration, Energie, Sicherheit und seine Rolle in der Welt.'],
        en: ['Berlin again became the capital and political center.', 'European integration became a key framework of German policy.', 'Modern Germany debates memory, migration, energy, security and its role in the world.']
      },
      people: [
        { name: 'Angela Merkel', role: { ru: 'канцлер Германии в 2005-2021 годах', de: 'Bundeskanzlerin von 2005 bis 2021', en: 'German chancellor from 2005 to 2021' }, image: img('Angela_Merkel_July_2010_-_3zu4.jpg') },
        { name: 'Olaf Scholz', role: { ru: 'канцлер в период “смены эпох” после 2022 года', de: 'Bundeskanzler in der Zeit der Zeitenwende nach 2022', en: 'chancellor during the post-2022 Zeitenwende' }, image: img('Olaf_Scholz_2021.jpg') }
      ],
      media: [
        { title: { ru: 'Рейхстаг и современный Берлин', de: 'Reichstag und modernes Berlin', en: 'Reichstag and modern Berlin' }, image: img('Reichstag_building_Berlin_view_from_west_before_sunset.jpg'), kind: 'image' },
        { title: { ru: 'Германия в Европе', de: 'Deutschland in Europa', en: 'Germany in Europe' }, image: img('EU-Germany.svg'), kind: 'map' }
      ]
    }
  ];

  window.HISTORY_ATLAS_UI = ui;
  window.HISTORY_ATLAS_PERIODS = periods;
})();
